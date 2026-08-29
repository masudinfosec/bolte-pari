package com.masud.boltepari

import android.app.Activity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.widget.FrameLayout
import com.google.android.gms.ads.AdListener
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdSize
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import com.google.android.gms.ads.rewarded.RewardedAd
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback

class MainActivity : Activity() {

    // ---- TEST ad unit IDs (Google official). OWNER: swap all four (+ App ID in manifest) for real IDs before publishing. ----
    private val BANNER_ID = "ca-app-pub-3940256099942544/9214589741"
    private val INTERSTITIAL_ID = "ca-app-pub-3940256099942544/1033173712"
    private val REWARDED_ID = "ca-app-pub-3940256099942544/5224354917"

    private lateinit var webView: WebView
    private lateinit var bannerContainer: FrameLayout
    private var adView: AdView? = null
    private var interstitialAd: InterstitialAd? = null
    private var rewardedAd: RewardedAd? = null

    private val retry = Handler(Looper.getMainLooper())
    private var bannerTries = 0
    private var interTries = 0
    private var rewardTries = 0
    private val MAX_TRIES = 4
    private val RETRY_MS = 20000L

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        webView = findViewById(R.id.webView)
        bannerContainer = findViewById(R.id.bannerContainer)

        MobileAds.initialize(this) {
            loadInterstitial(); loadRewarded(); loadBanner()
        }

        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.mediaPlaybackRequiresUserGesture = false
        webView.addJavascriptInterface(WebAppBridge(), "AndroidBridge")
        webView.loadUrl("file:///android_asset/index.html")
    }

    private fun loadBanner() {
        val av = AdView(this)
        av.adUnitId = BANNER_ID
        val density = resources.displayMetrics.density
        val adWidth = (resources.displayMetrics.widthPixels / density).toInt()
        av.setAdSize(AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(this, adWidth))
        av.adListener = object : AdListener() {
            override fun onAdFailedToLoad(e: LoadAdError) {
                if (bannerTries++ < MAX_TRIES) retry.postDelayed({ loadBanner() }, RETRY_MS)
            }
            override fun onAdLoaded() { bannerTries = 0 }
        }
        bannerContainer.removeAllViews()
        bannerContainer.addView(av)
        av.loadAd(AdRequest.Builder().build())
        adView = av
    }

    private fun loadInterstitial() {
        InterstitialAd.load(this, INTERSTITIAL_ID, AdRequest.Builder().build(),
            object : InterstitialAdLoadCallback() {
                override fun onAdLoaded(ad: InterstitialAd) { interstitialAd = ad; interTries = 0 }
                override fun onAdFailedToLoad(e: LoadAdError) {
                    interstitialAd = null
                    if (interTries++ < MAX_TRIES) retry.postDelayed({ loadInterstitial() }, RETRY_MS)
                }
            })
    }

    private fun loadRewarded() {
        RewardedAd.load(this, REWARDED_ID, AdRequest.Builder().build(),
            object : RewardedAdLoadCallback() {
                override fun onAdLoaded(ad: RewardedAd) { rewardedAd = ad; rewardTries = 0 }
                override fun onAdFailedToLoad(e: LoadAdError) {
                    rewardedAd = null
                    if (rewardTries++ < MAX_TRIES) retry.postDelayed({ loadRewarded() }, RETRY_MS)
                }
            })
    }

    inner class WebAppBridge {
        @JavascriptInterface
        fun showInterstitial() {
            runOnUiThread {
                interstitialAd?.let {
                    it.show(this@MainActivity)
                    interstitialAd = null
                    loadInterstitial()
                }
            }
        }

        @JavascriptInterface
        fun showRewarded(callbackName: String) {
            runOnUiThread {
                val ad = rewardedAd
                if (ad == null) { loadRewarded(); return@runOnUiThread }
                ad.show(this@MainActivity) { _ ->
                    val safe = callbackName.replace(Regex("[^A-Za-z0-9_$]"), "")
                    webView.post {
                        webView.evaluateJavascript("if(window['$safe'])window['$safe']();", null)
                    }
                }
                rewardedAd = null
                loadRewarded()
            }
        }
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack() else super.onBackPressed()
    }

    override fun onDestroy() {
        adView?.destroy()
        super.onDestroy()
    }
}
