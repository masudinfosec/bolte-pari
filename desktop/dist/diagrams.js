/* Original inline SVG diagrams for hard concepts. Theme-safe (currentColor + medium accent colors). */
window.DIAGRAMS = {

"tense-grid":
`<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="320" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Tense = TIME × ASPECT (কখন × কীভাবে)</text>
<!-- headers -->
<g fill="#66bb6a" font-weight="bold" text-anchor="middle">
<text x="200" y="46">Simple</text><text x="320" y="46">Continuous</text><text x="440" y="46">Perfect (have+V3)</text><text x="560" y="46">Perf. Continuous</text></g>
<g fill="#4fc3f7" font-weight="bold"><text x="20" y="90">Present</text><text x="20" y="140">Past</text><text x="20" y="190">Future</text></g>
<g stroke="currentColor" stroke-opacity=".3"><line x1="90" y1="55" x2="620" y2="55"/><line x1="90" y1="105" x2="620" y2="105"/><line x1="90" y1="155" x2="620" y2="155"/><line x1="90" y1="205" x2="620" y2="205"/></g>
<g text-anchor="middle"><text x="200" y="82">I work</text><text x="320" y="82">I am working</text><text x="440" y="82">I have worked</text><text x="560" y="82">have been working</text>
<text x="200" y="132">I worked</text><text x="320" y="132">I was working</text><text x="440" y="132">I had worked</text><text x="560" y="132">had been working</text>
<text x="200" y="182">I will work</text><text x="320" y="182">will be working</text><text x="440" y="182">will have worked</text><text x="560" y="182">will have been ...</text></g>
<text x="320" y="235" text-anchor="middle" fill="currentColor" fill-opacity=".8">TIME → auxiliary (am/was/will/have/had) · ASPECT → verb-রূপ (V-ing না V3)</text>
</svg>`,

"pp-vs-past":
`<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">
<text x="310" y="20" text-anchor="middle" font-size="14" fill="#4fc3f7">Present Perfect vs Past Simple</text>
<line x1="40" y1="70" x2="580" y2="70" stroke="currentColor"/><text x="300" y="88" text-anchor="middle">NOW</text>
<circle cx="300" cy="70" r="5" fill="#4fc3f7"/>
<!-- past simple -->
<circle cx="130" cy="70" r="5" fill="#ef5350"/><text x="130" y="55" text-anchor="middle" fill="#ef5350">yesterday</text>
<text x="130" y="115" text-anchor="middle" fill="#ef5350">I lost my key.</text>
<text x="130" y="133" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".8">শেষ · সময় নির্দিষ্ট</text>
<!-- present perfect: arrow to now -->
<path d="M180 165 C 240 145, 300 145, 300 90" fill="none" stroke="#66bb6a" stroke-width="2" marker-end="url(#a)"/>
<defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#66bb6a"/></marker></defs>
<text x="170" y="185" text-anchor="middle" fill="#66bb6a">I have lost my key.</text>
<text x="170" y="203" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".8">সময় বলছি না · এখন চাবি নেই (ফল এখন)</text>
<text x="470" y="150" text-anchor="middle" font-size="12">নির্দিষ্ট past time (yesterday) → Past Simple</text>
<text x="470" y="170" text-anchor="middle" font-size="12">এখনকার ফল/অভিজ্ঞতা → Present Perfect</text>
</svg>`,

"conditionals":
`<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="320" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Conditionals — if-এর যন্ত্র</text>
<g><rect x="20" y="35" width="600" height="42" rx="6" fill="none" stroke="#66bb6a"/><text x="30" y="52" fill="#66bb6a" font-weight="bold">0 — সাধারণ সত্য</text><text x="30" y="70">If you heat ice, it melts.  (if + present, present)</text></g>
<g><rect x="20" y="83" width="600" height="42" rx="6" fill="none" stroke="#4fc3f7"/><text x="30" y="100" fill="#4fc3f7" font-weight="bold">1 — বাস্তব ভবিষ্যৎ</text><text x="30" y="118">If it rains, I will stay home.  (if + present, will + V1)</text></g>
<g><rect x="20" y="131" width="600" height="42" rx="6" fill="none" stroke="#ffb74d"/><text x="30" y="148" fill="#ffb74d" font-weight="bold">2 — অবাস্তব বর্তমান</text><text x="30" y="166">If I had money, I would travel.  (if + past, would + V1)</text></g>
<g><rect x="20" y="179" width="600" height="42" rx="6" fill="none" stroke="#ef5350"/><text x="30" y="196" fill="#ef5350" font-weight="bold">3 — অতীতের অবাস্তব</text><text x="30" y="214">If I had studied, I would have passed.  (if + had+V3, would have+V3)</text></g>
<text x="320" y="240" text-anchor="middle" fill="currentColor" fill-opacity=".8">if-clause-এ কখনো will বসে না।</text>
</svg>`,

"articles-tree":
`<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="320" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Article — a / an / the / কিছুই না</text>
<rect x="260" y="30" width="120" height="30" rx="6" fill="none" stroke="currentColor"/><text x="320" y="50" text-anchor="middle">Noun</text>
<line x1="320" y1="60" x2="320" y2="80" stroke="currentColor"/>
<text x="320" y="95" text-anchor="middle">শ্রোতা কি জানে কোনটা? (specific?)</text>
<!-- yes -->
<path d="M260 100 L120 130" stroke="#66bb6a"/><text x="180" y="112" fill="#66bb6a">হ্যাঁ</text>
<rect x="60" y="132" width="120" height="30" rx="6" fill="none" stroke="#66bb6a"/><text x="120" y="152" text-anchor="middle" fill="#66bb6a">the</text>
<text x="120" y="178" text-anchor="middle" font-size="11">the book I bought</text>
<!-- no -->
<path d="M380 100 L470 130" stroke="#4fc3f7"/><text x="440" y="112" fill="#4fc3f7">না (প্রথমবার)</text>
<text x="470" y="150" text-anchor="middle">countable একবচন?</text>
<path d="M420 160 L360 195" stroke="currentColor"/><text x="360" y="212" text-anchor="middle" fill="#4fc3f7">a / an</text><text x="360" y="230" text-anchor="middle" font-size="11">I saw a dog</text>
<path d="M520 160 L580 195" stroke="currentColor"/><text x="580" y="212" text-anchor="middle">কিছুই না</text><text x="580" y="230" text-anchor="middle" font-size="11">Dogs are loyal / Water is life</text>
</svg>`,

"prep-in-on-at":
`<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="320" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">in / on / at — আকার-logic (জায়গা ও সময়)</text>
<!-- in : 3D box -->
<rect x="40" y="45" width="80" height="60" rx="4" fill="none" stroke="#66bb6a"/><circle cx="80" cy="75" r="6" fill="#66bb6a"/>
<text x="80" y="125" text-anchor="middle" fill="#66bb6a" font-weight="bold">in</text><text x="80" y="143" text-anchor="middle" font-size="11">ভেতরে (3D)</text>
<text x="80" y="162" text-anchor="middle" font-size="11">in a room, in May,</text><text x="80" y="177" text-anchor="middle" font-size="11">in 2026</text>
<!-- on : surface -->
<line x1="260" y1="90" x2="360" y2="90" stroke="#4fc3f7" stroke-width="2"/><circle cx="310" cy="82" r="6" fill="#4fc3f7"/>
<text x="310" y="125" text-anchor="middle" fill="#4fc3f7" font-weight="bold">on</text><text x="310" y="143" text-anchor="middle" font-size="11">পৃষ্ঠে (2D)</text>
<text x="310" y="162" text-anchor="middle" font-size="11">on the table,</text><text x="310" y="177" text-anchor="middle" font-size="11">on Monday</text>
<!-- at : point -->
<circle cx="540" cy="82" r="7" fill="#ffb74d"/>
<text x="540" y="125" text-anchor="middle" fill="#ffb74d" font-weight="bold">at</text><text x="540" y="143" text-anchor="middle" font-size="11">বিন্দুতে (point)</text>
<text x="540" y="162" text-anchor="middle" font-size="11">at the door,</text><text x="540" y="177" text-anchor="middle" font-size="11">at 6 PM</text>
<text x="320" y="215" text-anchor="middle" fill="currentColor" fill-opacity=".8">বড় → in · পৃষ্ঠ/দিন → on · ছোট বিন্দু/ঘণ্টা → at</text>
</svg>`,

"modal-certainty":
`<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="280" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">নিশ্চয়তার সিঁড়ি — "সে বাসায় আছে?"</text>
<line x1="60" y1="200" x2="60" y2="40" stroke="currentColor" marker-end="url(#up)"/>
<defs><marker id="up" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="currentColor"/></marker></defs>
<g><rect x="80" y="40" width="440" height="34" rx="6" fill="none" stroke="#66bb6a"/><text x="90" y="62">নিশ্চয়ই আছে (~95%) → He <tspan font-weight="bold" fill="#66bb6a">must be</tspan> home.  (আলো জ্বলছে)</text></g>
<g><rect x="80" y="82" width="440" height="34" rx="6" fill="none" stroke="#4fc3f7"/><text x="90" y="104">হতে পারে (~50%) → He <tspan font-weight="bold" fill="#4fc3f7">might / may / could be</tspan> home.</text></g>
<g><rect x="80" y="124" width="440" height="34" rx="6" fill="none" stroke="#ef5350"/><text x="90" y="146">নিশ্চয়ই নেই (~5%) → He <tspan font-weight="bold" fill="#ef5350">can't be</tspan> home.  (গাড়ি নেই)</text></g>
<text x="280" y="185" text-anchor="middle" fill="currentColor" fill-opacity=".8">এখানে must = "যুক্তি বলছে নিশ্চয়ই", বাধ্যবাধকতা নয়।</text>
</svg>`,

"modal-obligation":
`<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="280" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">বাধ্যবাধকতার সিঁড়ি</text>
<g><rect x="30" y="34" width="500" height="30" rx="6" fill="none" stroke="#ef5350"/><text x="40" y="54"><tspan font-weight="bold" fill="#ef5350">must / have to</tspan> — জরুরি বাধ্যতা: You must wear a helmet.</text></g>
<g><rect x="30" y="70" width="500" height="30" rx="6" fill="none" stroke="#ffb74d"/><text x="40" y="90"><tspan font-weight="bold" fill="#ffb74d">should / ought to</tspan> — উপদেশ: You should rest.</text></g>
<g><rect x="30" y="106" width="500" height="30" rx="6" fill="none" stroke="#66bb6a"/><text x="40" y="126"><tspan font-weight="bold" fill="#66bb6a">don't have to / needn't</tspan> — দরকার নেই: You don't have to come.</text></g>
<g><rect x="30" y="142" width="500" height="30" rx="6" fill="none" stroke="#4fc3f7"/><text x="40" y="162"><tspan font-weight="bold" fill="#4fc3f7">mustn't</tspan> — নিষেধ (কোরো না): You mustn't smoke here.</text></g>
<text x="280" y="195" text-anchor="middle" fill="currentColor" fill-opacity=".8">⚠️ mustn't (নিষেধ) ≠ don't have to (ঐচ্ছিক)</text>
</svg>`,

"phrasal-particles":
`<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="320" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Phrasal verb — particle-ই অর্থ বদলায়</text>
<g font-size="11">
<rect x="20" y="35" width="145" height="46" rx="6" fill="none" stroke="#66bb6a"/><text x="28" y="52" fill="#66bb6a" font-weight="bold">up</text><text x="28" y="68">সম্পূর্ণ/বৃদ্ধি/শুরু</text><text x="28" y="79" font-size="10">eat up, grow up, give up</text>
<rect x="175" y="35" width="145" height="46" rx="6" fill="none" stroke="#4fc3f7"/><text x="183" y="52" fill="#4fc3f7" font-weight="bold">down</text><text x="183" y="68">কমা/লেখা/বন্ধ</text><text x="183" y="79" font-size="10">write down, break down</text>
<rect x="330" y="35" width="145" height="46" rx="6" fill="none" stroke="#ffb74d"/><text x="338" y="52" fill="#ffb74d" font-weight="bold">in / into</text><text x="338" y="68">ভেতরে/প্রবেশ</text><text x="338" y="79" font-size="10">check in, run into</text>
<rect x="485" y="35" width="140" height="46" rx="6" fill="none" stroke="#ef5350"/><text x="493" y="52" fill="#ef5350" font-weight="bold">out</text><text x="493" y="68">বের/শেষ/প্রকাশ</text><text x="493" y="79" font-size="10">find out, run out, work out</text>
<rect x="20" y="90" width="145" height="46" rx="6" fill="none" stroke="#66bb6a"/><text x="28" y="107" fill="#66bb6a" font-weight="bold">on</text><text x="28" y="123">চালু/চালিয়ে যাওয়া</text><text x="28" y="134" font-size="10">turn on, carry on, put on</text>
<rect x="175" y="90" width="145" height="46" rx="6" fill="none" stroke="#4fc3f7"/><text x="183" y="107" fill="#4fc3f7" font-weight="bold">off</text><text x="183" y="123">বন্ধ/বিচ্ছিন্ন/যাওয়া</text><text x="183" y="134" font-size="10">turn off, take off, call off</text>
<rect x="330" y="90" width="145" height="46" rx="6" fill="none" stroke="#ffb74d"/><text x="338" y="107" fill="#ffb74d" font-weight="bold">away / back</text><text x="338" y="123">দূরে / ফেরত</text><text x="338" y="134" font-size="10">throw away, give back</text>
<rect x="485" y="90" width="140" height="46" rx="6" fill="none" stroke="#ef5350"/><text x="493" y="107" fill="#ef5350" font-weight="bold">over</text><text x="493" y="123">উল্টে/পুরো</text><text x="493" y="134" font-size="10">fall over, take over</text>
</g>
<text x="320" y="165" text-anchor="middle" fill="currentColor" fill-opacity=".85">object যদি pronoun (it/them) → মাঝে বসে: turn <tspan fill="#66bb6a">it</tspan> off ✅ (turn off it ❌)</text>
<text x="320" y="188" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".7">get in (গাড়িতে ওঠা) · get out (বেরোনো) · put on (পরা) · put off (দেরি করা) · get on (বাসে ওঠা / সম্পর্ক)</text>
</svg>`,

"passive":
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">
<text x="300" y="20" text-anchor="middle" font-size="14" fill="#4fc3f7">Active → Passive</text>
<text x="300" y="60" text-anchor="middle">Active: <tspan fill="#66bb6a">Somebody</tspan> built <tspan fill="#ffb74d">this house</tspan> in 1980.</text>
<path d="M120 75 C 300 105, 300 105, 480 75" fill="none" stroke="#4fc3f7" stroke-width="1.5" marker-end="url(#p)"/>
<defs><marker id="p" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fc3f7"/></marker></defs>
<text x="300" y="125" text-anchor="middle">Passive: <tspan fill="#ffb74d">This house</tspan> <tspan fill="#4fc3f7" font-weight="bold">was built</tspan> (by somebody) in 1980.</text>
<text x="300" y="160" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".85">গঠন: be (is/was/been) + V3 · কে করেছে জরুরি না হলে passive।</text>
</svg>`,

"reported-speech":
`<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="300" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Reported Speech — এক ধাপ পিছিয়ে যায়</text>
<text x="150" y="45" text-anchor="middle" fill="#66bb6a">Direct</text><text x="450" y="45" text-anchor="middle" fill="#4fc3f7">Reported</text>
<g text-anchor="middle" font-size="12">
<text x="150" y="72">am/is/are</text><text x="300" y="72">→</text><text x="450" y="72">was/were</text>
<text x="150" y="98">do/does</text><text x="300" y="98">→</text><text x="450" y="98">did</text>
<text x="150" y="124">have/has</text><text x="300" y="124">→</text><text x="450" y="124">had</text>
<text x="150" y="150">will</text><text x="300" y="150">→</text><text x="450" y="150">would</text>
<text x="150" y="176">can</text><text x="300" y="176">→</text><text x="450" y="176">could</text>
</g>
<text x="300" y="200" text-anchor="middle" fill="currentColor" fill-opacity=".8">"I am tired" → He said (that) he <tspan fill="#4fc3f7">was</tspan> tired.</text>
</svg>`,

"relative-clauses":
`<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="310" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Relative pronouns — কোনটা কখন</text>
<g font-size="12">
<rect x="20" y="35" width="185" height="34" rx="6" fill="none" stroke="#66bb6a"/><text x="30" y="56"><tspan font-weight="bold" fill="#66bb6a">who / that</tspan> — মানুষ</text>
<rect x="217" y="35" width="185" height="34" rx="6" fill="none" stroke="#4fc3f7"/><text x="227" y="56"><tspan font-weight="bold" fill="#4fc3f7">which / that</tspan> — জিনিস</text>
<rect x="414" y="35" width="190" height="34" rx="6" fill="none" stroke="#ffb74d"/><text x="424" y="56"><tspan font-weight="bold" fill="#ffb74d">whose</tspan> — কার (দখল)</text>
<rect x="20" y="75" width="185" height="34" rx="6" fill="none" stroke="#ef5350"/><text x="30" y="96"><tspan font-weight="bold" fill="#ef5350">where</tspan> — জায়গা</text>
<rect x="217" y="75" width="387" height="34" rx="6" fill="none" stroke="currentColor"/><text x="227" y="96">object হলে বাদ দেওয়া যায়: the book (that) I read</text>
</g>
<text x="310" y="140" text-anchor="middle">The man <tspan fill="#66bb6a">who</tspan> lives here · the car <tspan fill="#4fc3f7">which</tspan> broke down · a girl <tspan fill="#ffb74d">whose</tspan> bag ...</text>
<text x="310" y="170" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".75">extra-information clause-এ কমা বসে ও that চলে না: My brother, who lives in Dhaka, ...</text>
</svg>`,

"ing-vs-to":
`<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">
<text x="300" y="18" text-anchor="middle" font-size="14" fill="#4fc3f7">Verb + -ing না verb + to</text>
<rect x="20" y="35" width="270" height="150" rx="8" fill="none" stroke="#66bb6a"/>
<text x="35" y="58" fill="#66bb6a" font-weight="bold">+ -ing</text>
<text x="35" y="80" font-size="11">পছন্দ/থামা/এড়ানো:</text>
<text x="35" y="100" font-size="11">enjoy, finish, stop, avoid,</text>
<text x="35" y="118" font-size="11">mind, suggest, keep, practice</text>
<text x="35" y="145" font-size="11">I enjoy reading.</text><text x="35" y="163" font-size="11">She finished working.</text>
<rect x="310" y="35" width="270" height="150" rx="8" fill="none" stroke="#4fc3f7"/>
<text x="325" y="58" fill="#4fc3f7" font-weight="bold">+ to</text>
<text x="325" y="80" font-size="11">ইচ্ছা/সিদ্ধান্ত/ভবিষ্যৎমুখী:</text>
<text x="325" y="100" font-size="11">want, decide, hope, plan,</text>
<text x="325" y="118" font-size="11">promise, offer, learn, agree</text>
<text x="325" y="145" font-size="11">I want to go.</text><text x="325" y="163" font-size="11">He decided to leave.</text>
</svg>`,

"word-order":
`<svg viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">
<text x="310" y="20" text-anchor="middle" font-size="14" fill="#4fc3f7">Word order — SVO + Place + Time</text>
<g text-anchor="middle" font-weight="bold">
<rect x="20" y="45" width="90" height="34" rx="6" fill="none" stroke="#66bb6a"/><text x="65" y="67" fill="#66bb6a">Subject</text>
<rect x="125" y="45" width="90" height="34" rx="6" fill="none" stroke="#4fc3f7"/><text x="170" y="67" fill="#4fc3f7">Verb</text>
<rect x="230" y="45" width="90" height="34" rx="6" fill="none" stroke="#ffb74d"/><text x="275" y="67" fill="#ffb74d">Object</text>
<rect x="335" y="45" width="120" height="34" rx="6" fill="none" stroke="currentColor"/><text x="395" y="67">Place (কোথায়)</text>
<rect x="470" y="45" width="130" height="34" rx="6" fill="none" stroke="currentColor"/><text x="535" y="67">Time (কখন)</text>
</g>
<text x="310" y="115" text-anchor="middle">I read a book at home every night.</text>
<text x="310" y="150" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".8">বাংলা SOV (আমি ভাত খাই), ইংরেজি SVO — order উল্টাবেন না।</text>
</svg>`

};
