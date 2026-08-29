package com.masud.boltepari

import android.app.Activity
import android.content.ContentValues
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.os.Environment
import android.os.Handler
import android.os.Looper
import android.provider.MediaStore
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.widget.FrameLayout
import android.widget.Toast
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
import java.util.Locale

class MainActivity : Activity(), TextToSpeech.OnInitListener {

    // ---- TEST ad unit IDs (Google official). OWNER: swap all four (+ App ID in manifest) before publishing live. ----
    private val BANNER_ID = "ca-app-pub-3940256099942544/9214589741"
    private val INTERSTITIAL_ID = "ca-app-pub-3940256099942544/1033173712"
    private val REWARDED_ID = "ca-app-pub-3940256099942544/5224354917"

    private lateinit var webView: WebView
    private lateinit var bannerContainer: FrameLayout
    private var adView: AdView? = null
    private var interstitialAd: InterstitialAd? = null
    private var rewardedAd: RewardedAd? = null

    private var tts: TextToSpeech? = null
    @Volatile private var ttsReady = false

    private var fileCallback: ValueCallback<Array<Uri>>? = null
    private val FILE_REQ = 71

    private val retry = Handler(Looper.getMainLooper())
    private var bannerTries = 0
    private var interTries = 0
    private var rewardTries = 0
    private val MAX_TRIES = 5
    private val RETRY_MS = 20000L

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        webView = findViewById(R.id.webView)
        bannerContainer = findViewById(R.id.bannerContainer)

        tts = TextToSpeech(this, this)

        MobileAds.initialize(this) {
            loadInterstitial(); loadRewarded(); loadBanner()
        }

        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.mediaPlaybackRequiresUserGesture = false
        webView.addJavascriptInterface(WebAppBridge(), "AndroidBridge")
        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                view: WebView?, callback: ValueCallback<Array<Uri>>?,
                params: FileChooserParams?
            ): Boolean {
                fileCallback?.onReceiveValue(null)
                fileCallback = callback
                return try {
                    startActivityForResult(params!!.createIntent(), FILE_REQ)
                    true
                } catch (e: Exception) {
                    fileCallback = null; false
                }
            }
        }
        webView.loadUrl("file:///android_asset/index.html")
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            tts?.language = Locale.US
            tts?.setSpeechRate(0.9f)
            ttsReady = true
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == FILE_REQ) {
            fileCallback?.onReceiveValue(
                WebChromeClient.FileChooserParams.parseResult(resultCode, data)
            )
            fileCallback = null
        } else super.onActivityResult(requestCode, resultCode, data)
    }

    // ---------- ads ----------
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

    // ---------- JS bridge ----------
    inner class WebAppBridge {
        @JavascriptInterface
        fun canSpeak(): Boolean = ttsReady

        @JavascriptInterface
        fun speak(text: String) {
            if (!ttsReady) return
            tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "boltepari")
        }

        @JavascriptInterface
        fun stopSpeak() { tts?.stop() }

        @JavascriptInterface
        fun saveFile(fileName: String, content: String) {
            runOnUiThread {
                try {
                    val safe = fileName.replace(Regex("[^A-Za-z0-9._-]"), "_")
                    val values = ContentValues().apply {
                        put(MediaStore.Downloads.DISPLAY_NAME, safe)
                        put(MediaStore.Downloads.MIME_TYPE, "application/json")
                        put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS)
                    }
                    val uri = contentResolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values)
                    if (uri != null) {
                        contentResolver.openOutputStream(uri)?.use { it.write(content.toByteArray()) }
                        Toast.makeText(this@MainActivity, "Saved to Downloads/$safe", Toast.LENGTH_LONG).show()
                    } else {
                        Toast.makeText(this@MainActivity, "Save failed", Toast.LENGTH_LONG).show()
                    }
                } catch (e: Exception) {
                    Toast.makeText(this@MainActivity, "Save failed: ${e.message}", Toast.LENGTH_LONG).show()
                }
            }
        }

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
        tts?.shutdown()
        super.onDestroy()
    }
}
