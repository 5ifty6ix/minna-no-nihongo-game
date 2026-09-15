const vocabData = { "1": [ { "ja": "わたし", "en": "I, me", "bn": "আমি",
"category": "pronoun" }, { "ja": "あなた", "en": "you", "bn": "আপনি / তুমি",
"category": "pronoun" }, { "ja": "あの人", "kana": "あのひと", "en": "that person, he,
she", "bn": "ওই ব্যক্তি / সে / তিনি", "category": "pronoun" }, { "ja": "あの方",
"kana": "あのかた", "en": "that person (polite)", "bn": "ওই ব্যক্তি (বিনম্র)",
"category": "pronoun" }, { "ja": "〜さん", "en": "Mr., Ms. (polite suffix)", "bn":
"জনাব / বেগম (নামের শেষে)", "category": "phrase" }, { "ja": "〜ちゃん", "en":
"suffix for children", "bn": "স্নেহসূচক প্রত্যয় (শিশুদের জন্য)", "category":
"phrase" }, { "ja": "〜人", "kana": "〜じん", "en": "national of (suffix)", "bn":
"নাগরিকত্ব নির্দেশক প্রত্যয়", "category": "noun" }, { "ja": "先生", "kana":
"せんせい", "en": "teacher, instructor", "bn": "শিক্ষক", "category": "noun" }, {
"ja": "教師", "kana": "きょうし", "en": "teacher (own profession)", "bn": "শিক্ষক /
শিক্ষিকা (পেশা)", "category": "noun" }, { "ja": "学生", "kana": "がくせい", "en":
"student", "bn": "ছাত্র / শিক্ষার্থী", "category": "noun" }, { "ja": "会社員",
"kana": "かいしゃいん", "en": "company employee", "bn": "কোম্পানির চাকরিজীবী",
"category": "noun" }, { "ja": "社員", "kana": "しゃいん", "en": "employee of ~
company", "bn": "কর্মচারী (নির্দিষ্ট কোম্পানির)", "category": "noun" }, { "ja":
"銀行員", "kana": "ぎんこういん", "en": "bank employee", "bn": "ব্যাংক কর্মকর্তা /
কর্মচারী", "category": "noun" }, { "ja": "医者", "kana": "いしゃ", "en": "medical
doctor", "bn": "ডাক্তার / চিকিৎসক", "category": "noun" }, { "ja": "研究者", "kana":
"けんきゅうしゃ", "en": "researcher, scholar", "bn": "গবেষক", "category": "noun" }, {
"ja": "大学", "kana": "だいがく", "en": "university, college", "bn": "বিশ্ববিদ্যালয়",
"category": "noun" }, { "ja": "病院", "kana": "びょういん", "en": "hospital", "bn":
"হাসপাতাল", "category": "noun" }, { "ja": "誰", "kana": "だれ", "en": "who", "bn":
"কে", "category": "pronoun" }, { "ja": "どなた", "en": "who (polite)", "bn": "কে
(বিনম্র রূপ)", "category": "pronoun" }, { "ja": "〜歳", "kana": "〜さい", "en": "-
years old", "bn": "— বছর বয়স", "category": "counter" }, { "ja": "何歳", "kana":
"なんさい", "en": "how old", "bn": "কত বয়স", "category": "pronoun" }, { "ja":
"おいくつ", "en": "how old (polite)", "bn": "কত বয়স (বিনম্র রূপ)", "category":
"phrase" }, { "ja": "はい", "en": "yes", "bn": "হ্যাঁ / জি", "category": "phrase"
}, { "ja": "いいえ", "en": "no", "bn": "না", "category": "phrase" }, { "ja":
"初めまして", "kana": "はじめまして", "en": "how do you do", "bn": "পরিচিত হয়ে ভালো লাগল",
"category": "phrase" }, { "ja": "〜から 来ました", "kana": "〜から きました", "en": "I'm from
~", "bn": "আমি ~ থেকে এসেছি", "category": "phrase" }, { "ja":
"［どうぞ］よろしく［お願いします］", "kana": "［どうぞ］よろしく［おねがいします］", "en": "pleased to meet you",
"bn": "আপনার অনুগ্রহ কামনা করছি", "category": "phrase" }, { "ja": "失礼ですが",
"kana": "しつれいですが", "en": "excuse me, but", "bn": "কিছু মনে করবেন না, তবে",
"category": "phrase" }, { "ja": "お名前は？", "kana": "おなまえは？", "en": "may I have
your name?", "bn": "আপনার নাম কি?", "category": "phrase" }, { "ja": "こちらは
〜さんです", "en": "this is Mr./Ms. ~", "bn": "ইনি হলেন জনাব/জনাবা ", "category":
"phrase" }, { "ja": "アメリカ", "en": "U.S.A.", "bn": "আমেরিকা / যুক্তরাষ্ট্র",
"category": "noun" }, { "ja": "イギリス", "en": "U.K.", "bn": "যুক্তরাজ্য /
ব্রিটেন", "category": "noun" }, { "ja": "インド", "en": "India", "bn": "ভারত",
"category": "noun" }, { "ja": "インドネシア", "en": "Indonesia", "bn": "ইন্দোনেশিয়া",
"category": "noun" }, { "ja": "韓国", "kana": "かんこく", "en": "South Korea", "bn":
"দক্ষিণ কোরিয়া", "category": "noun" }, { "ja": "タイ", "en": "Thailand", "bn":
"থাইল্যান্ড", "category": "noun" }, { "ja": "中国", "kana": "ちゅうごく", "en":
"China", "bn": "চীন", "category": "noun" }, { "ja": "ドイツ", "en": "Germany",
"bn": "জার্মানি", "category": "noun" }, { "ja": "日本", "kana": "にほん", "en":
"Japan", "bn": "জাপান", "category": "noun" }, { "ja": "ブラジル", "en": "Brazil",
"bn": "ব্রাজিল", "category": "noun" } ], "2": [ { "ja": "これ", "en": "this (thing
here)", "bn": "এটি / এই জিনিসটি", "category": "pronoun" }, { "ja": "それ", "en":
"that (near listener)", "bn": "ওটি / ওই জিনিসটি", "category": "pronoun" }, {
"ja": "あれ", "en": "that (over there)", "bn": "সেইটি / দূরের জিনিসটি",
"category": "pronoun" }, { "ja": "この 〜", "en": "this ~", "bn": "এই ",
"category": "pronoun" }, { "ja": "その 〜", "en": "that ~", "bn": "ওই ",
"category": "pronoun" }, { "ja": "あの 〜", "en": "that ~ (over there)", "bn": "সেই
~ (দূরের)", "category": "pronoun" }, { "ja": "本", "kana": "ほん", "en": "book",
"bn": "বই", "category": "noun" }, { "ja": "辞書", "kana": "じしょ", "en":
"dictionary", "bn": "অভিধান", "category": "noun" }, { "ja": "雑誌", "kana": "ざっし",
"en": "magazine", "bn": "ম্যাগাজিন / সাময়িকী", "category": "noun" }, { "ja":
"新聞", "kana": "しんぶん", "en": "newspaper", "bn": "সংবাদপত্র / পত্রিকা",
"category": "noun" }, { "ja": "ノート", "en": "notebook", "bn": "নোটবুক / খাতা",
"category": "noun" }, { "ja": "手帳", "kana": "てちょう", "en": "personal organiser,
pocket notebook", "bn": "পকেট নোটবুক / ডায়েরি", "category": "noun" }, { "ja":
"名刺", "kana": "めいし", "en": "business card", "bn": "ভিজিটিং কার্ড", "category":
"noun" }, { "ja": "カード", "en": "card, credit card", "bn": "কার্ড / ক্রেডিট
কার্ড", "category": "noun" }, { "ja": "鉛筆", "kana": "えんぴつ", "en": "pencil",
"bn": "পেনসিল", "category": "noun" }, { "ja": "ボールペン", "en": "ballpoint pen",
"bn": "বলপেন", "category": "noun" }, { "ja": "シャープペンシル", "en": "mechanical
pencil", "bn": "মেকানিক্যাল পেনসিল", "category": "noun" }, { "ja": "鍵", "kana":
"かぎ", "en": "key", "bn": "চাবি", "category": "noun" }, { "ja": "時計", "kana":
"とけい", "en": "watch, clock", "bn": "ঘড়ি", "category": "noun" }, { "ja": "傘",
"kana": "かさ", "en": "umbrella", "bn": "ছাতা", "category": "noun" }, { "ja": "鞄",
"kana": "かばん", "en": "bag, briefcase", "bn": "ব্যাগ / থলে", "category": "noun"
}, { "ja": "CD", "en": "CD, compact disc", "bn": "সিডি", "category": "noun" }, {
"ja": "テレビ", "en": "television", "bn": "টেলিভিশন / টিভি", "category": "noun" },
{ "ja": "ラジオ", "en": "radio", "bn": "রেডিও", "category": "noun" }, { "ja":
"カメラ", "en": "camera", "bn": "ক্যামেরা", "category": "noun" }, { "ja":
"コンピューター", "en": "computer", "bn": "কম্পিউটার", "category": "noun" }, { "ja":
"車", "kana": "くるま", "en": "car, vehicle", "bn": "গাড়ি", "category": "noun" }, {
"ja": "机", "kana": "つくえ", "en": "desk", "bn": "টেবিল / ডেস্ক", "category":
"noun" }, { "ja": "椅子", "kana": "いす", "en": "chair", "bn": "চেয়ার / কেদারা",
"category": "noun" }, { "ja": "チョコレート", "en": "chocolate", "bn": "চকলেট",
"category": "noun" }, { "ja": "コーヒー", "en": "coffee", "bn": "কফি", "category":
"noun" }, { "ja": "［お］土産", "kana": "［お］みやげ", "en": "souvenir, present", "bn":
"উপহার / স্মারক", "category": "noun" }, { "ja": "英語", "kana": "えいご", "en":
"English language", "bn": "ইংরেজি ভাষা", "category": "noun" }, { "ja": "日本語",
"kana": "にほんご", "en": "Japanese language", "bn": "জাপানি ভাষা", "category":
"noun" }, { "ja": "〜語", "kana": "〜ご", "en": "language", "bn": " ভাষা",
"category": "noun" }, { "ja": "何", "kana": "なん", "en": "what", "bn": "কী",
"category": "pronoun" }, { "ja": "そう", "en": "so", "bn": "তাই / এমন",
"category": "adverb" }, { "ja": "あのう", "en": "er...", "bn": "ইয়ে... /
শুনুন...", "category": "phrase" }, { "ja": "えっ", "en": "oh? what!", "bn":
"অ্যাঁ! / তাই নাকি!", "category": "phrase" }, { "ja": "どうぞ", "en": "here you
are, please", "bn": "নিন / অনুগ্রহ করে", "category": "phrase" }, { "ja":
"［どうも］ありがとう［ございます］", "en": "thank you [very much]", "bn": "[অনেক] ধন্যবাদ",
"category": "phrase" }, { "ja": "そうですか", "en": "I see", "bn": "তাই নাকি / বুঝতে
পেরেছি", "category": "phrase" }, { "ja": "違います", "kana": "ちがいます", "en": "no, it
isn't, wrong", "bn": "ভুল / তা নয়", "category": "verb" }, { "ja": "あ", "en":
"oh!", "bn": "ওহ্! / আরে!", "category": "phrase" }, { "ja": "これから お世話に なります",
"kana": "これから おせわに なります", "en": "thank you in advance", "bn": "আপনার অনুগ্রহ
কামনা করছি", "category": "phrase" }, { "ja": "こちらこそ［どうぞ］よろしく［お願いします］", "kana":
"こちらこそ［どうぞ］よろしく［おねがいします］", "en": "pleased to meet you, too", "bn": "আমারও পরিচিত
হয়ে ভালো লাগল", "category": "phrase" } ], "3": [ { "ja": "ここ", "en": "here, this
place", "bn": "এখানে / এই জায়গা", "category": "pronoun" }, { "ja": "そこ", "en":
"there (near listener)", "bn": "সেখানে / ওই জায়গা", "category": "pronoun" }, {
"ja": "あそこ", "en": "that place over there", "bn": "ওইখানে / দূরের স্থান",
"category": "pronoun" }, { "ja": "どこ", "en": "where, what place", "bn": "কোথায়
/ কোন স্থান", "category": "pronoun" }, { "ja": "こちら", "en": "this way, here
(polite)", "bn": "এই দিকে / এখানে (বিনম্র)", "category": "pronoun" }, { "ja":
"そちら", "en": "that way, there (polite)", "bn": "ওই দিকে / সেখানে (বিনম্র)",
"category": "pronoun" }, { "ja": "あちら", "en": "that way, over there (polite)",
"bn": "সেই দিকে / ওইখানে (বিনম্র)", "category": "pronoun" }, { "ja": "どちら",
"en": "which way, where (polite)", "bn": "কোন দিকে / কোথায় (বিনম্র)",
"category": "pronoun" }, { "ja": "教室", "kana": "きょうしつ", "en": "classroom", "bn":
"শ্রেণিকক্ষ", "category": "noun" }, { "ja": "食堂", "kana": "しょくどう", "en": "dining
hall, canteen", "bn": "ক্যান্টিন / খাবার ঘর", "category": "noun" }, { "ja":
"事務所", "kana": "じむしょ", "en": "office", "bn": "কার্যালয় / অফিস", "category":
"noun" }, { "ja": "会議室", "kana": "かいぎしつ", "en": "meeting room", "bn": "সভাকক্ষ",
"category": "noun" }, { "ja": "受付", "kana": "うけつけ", "en": "reception desk",
"bn": "অভ্যর্থনা কেন্দ্র", "category": "noun" }, { "ja": "ロビー", "en": "lobby",
"bn": "লবি", "category": "noun" }, { "ja": "部屋", "kana": "へや", "en": "room",
"bn": "কক্ষ / ঘর", "category": "noun" }, { "ja": "トイレ", "en": "toilet, rest
room", "bn": "টয়লেট / শৌচাগার", "category": "noun" }, { "ja": "お手洗い", "kana":
"おてあらい", "en": "rest room, toilet (polite)", "bn": "শৌচাগার (বিনম্র)",
"category": "noun" }, { "ja": "階段", "kana": "かいだん", "en": "staircase, stairs",
"bn": "সিঁড়ি", "category": "noun" }, { "ja": "エレベーター", "en": "lift, elevator",
"bn": "লিফট", "category": "noun" }, { "ja": "エスカレーター", "en": "escalator", "bn":
"চলন্ত সিঁড়ি", "category": "noun" }, { "ja": "自動販売機", "kana": "じどうはんばいき", "en":
"vending machine", "bn": "ভেন্ডিং মেশিন", "category": "noun" }, { "ja": "電話",
"kana": "でんわ", "en": "telephone, phone call", "bn": "টেলিফোন", "category":
"noun" }, { "ja": "［お］国", "kana": "［お］くに", "en": "country", "bn": "দেশ",
"category": "noun" }, { "ja": "会社", "kana": "かいしゃ", "en": "company", "bn":
"কোম্পানি / প্রতিষ্ঠান", "category": "noun" }, { "ja": "うち", "en": "house,
home", "bn": "বাড়ি / ঘর", "category": "noun" }, { "ja": "靴", "kana": "くつ",
"en": "shoes", "bn": "জুতো", "category": "noun" }, { "ja": "ネクタイ", "en": "tie,
necktie", "bn": "টাই", "category": "noun" }, { "ja": "ワイン", "en": "wine", "bn":
"ওয়াইন", "category": "noun" }, { "ja": "売り場", "kana": "うりば", "en": "sales
counter, department", "bn": "বিক্রয় কাউন্টার", "category": "noun" }, { "ja":
"地下", "kana": "ちか", "en": "basement", "bn": "ভূগর্ভ / বেসমেন্ট", "category":
"noun" }, { "ja": "〜階", "kana": "〜かい", "en": "-th floor", "bn": "— তলা (ফ্লোর)",
"category": "counter" }, { "ja": "何階", "kana": "なんがい", "en": "what floor", "bn":
"কত তলা", "category": "pronoun" }, { "ja": "〜円", "kana": "〜えん", "en": "- yen",
"bn": "— ইয়েন", "category": "counter" }, { "ja": "いくら", "en": "how much", "bn":
"দাম কত", "category": "pronoun" }, { "ja": "百", "kana": "ひゃく", "en": "hundred",
"bn": "শত / একশত", "category": "counter" }, { "ja": "千", "kana": "せん", "en":
"thousand", "bn": "হাজার / এক হাজার", "category": "counter" }, { "ja": "万",
"kana": "まん", "en": "ten thousand", "bn": "দশ হাজার", "category": "counter" }, {
"ja": "すみません", "en": "excuse me", "bn": "মাফ করবেন", "category": "phrase" }, {
"ja": "どうも", "en": "thanks", "bn": "ধন্যবাদ", "category": "phrase" }, { "ja":
"いらっしゃいませ", "en": "welcome", "bn": "স্বাগতম", "category": "phrase" }, { "ja":
"［〜を］見せて ください", "kana": "［〜を］みせて ください", "en": "please show me []", "bn": "দয়া
করে [] দেখান", "category": "phrase" }, { "ja": "じゃ", "en": "well, then", "bn":
"তাহলে", "category": "phrase" }, { "ja": "［〜を］ください", "en": "give me [], please",
"bn": "দয়া করে [] দিন", "category": "phrase" }, { "ja": "イタリア", "en": "Italy",
"bn": "ইতালি", "category": "noun" }, { "ja": "スイス", "en": "Switzerland", "bn":
"সুইজারল্যান্ড", "category": "noun" }, { "ja": "フランス", "en": "France", "bn":
"ফ্রান্স", "category": "noun" }, { "ja": "ジャカルタ", "en": "Jakarta", "bn":
"জাকার্তা", "category": "noun" }, { "ja": "バンコク", "en": "Bangkok", "bn":
"ব্যাংকক", "category": "noun" }, { "ja": "ベルリン", "en": "Berlin", "bn":
"বার্লিন", "category": "noun" }, { "ja": "新大阪", "kana": "しんおおさか", "en":
"Shin-Osaka", "bn": "শিন-ওসাকা", "category": "noun" } ], "4": [ { "ja": "起きます",
"kana": "おきます", "en": "get up, wake up", "bn": "ঘুম থেকে ওঠা / জাগা",
"category": "verb" }, { "ja": "寝ます", "kana": "ねます", "en": "sleep, go to bed",
"bn": "ঘুমানো / শুতে যাওয়া", "category": "verb" }, { "ja": "働きます", "kana":
"はたらきます", "en": "work", "bn": "কাজ করা", "category": "verb" }, { "ja": "休みます",
"kana": "やすみます", "en": "take a rest, holiday", "bn": "বিশ্রাম নেওয়া / ছুটি
নেওয়া", "category": "verb" }, { "ja": "勉強します", "kana": "べんきょうします", "en":
"study", "bn": "পড়াশোনা করা", "category": "verb" }, { "ja": "終わります", "kana":
"おわります", "en": "finish, end", "bn": "শেষ হওয়া", "category": "verb" }, { "ja":
"デパート", "en": "department store", "bn": "ডিপার্টমেন্টাল স্টোর", "category":
"noun" }, { "ja": "銀行", "kana": "ぎんこう", "en": "bank", "bn": "ব্যাংক",
"category": "noun" }, { "ja": "郵便局", "kana": "ゆうびんきょく", "en": "post office",
"bn": "ডাকঘর", "category": "noun" }, { "ja": "図書館", "kana": "としょかん", "en":
"library", "bn": "লাইব্রেরি / গ্রন্থাগার", "category": "noun" }, { "ja": "美術館",
"kana": "びじゅつかん", "en": "art museum, art gallery", "bn": "শিল্পকলা জাদুঘর",
"category": "noun" }, { "ja": "今", "kana": "いま", "en": "now", "bn": "এখন",
"category": "noun" }, { "ja": "〜時", "kana": "〜じ", "en": "- o'clock", "bn": "— টা
(সময়)", "category": "counter" }, { "ja": "〜分", "kana": "〜ふん", "en": "- minute",
"bn": "— মিনিট", "category": "counter" }, { "ja": "半", "kana": "はん", "en": "half
past", "bn": "সাড়ে / অর্ধেক", "category": "noun" }, { "ja": "何時", "kana": "なんじ",
"en": "what time", "bn": "কয়টা / কোন সময়", "category": "pronoun" }, { "ja":
"何分", "kana": "なんぷん", "en": "what minute", "bn": "কত মিনিট", "category":
"pronoun" }, { "ja": "午前", "kana": "ごぜん", "en": "a.m., morning", "bn": "সকাল /
পূর্বাহ্ণ", "category": "noun" }, { "ja": "午後", "kana": "ごご", "en": "p.m.,
afternoon", "bn": "বিকাল / অপরাহ্ণ", "category": "noun" }, { "ja": "朝", "kana":
"あさ", "en": "morning", "bn": "সকাল", "category": "noun" }, { "ja": "昼", "kana":
"ひる", "en": "daytime, noon", "bn": "দুপুর", "category": "noun" }, { "ja": "晩",
"kana": "ばん", "en": "night, evening", "bn": "রাত / সন্ধ্যা", "category": "noun"
}, { "ja": "夜", "kana": "よる", "en": "night, evening", "bn": "রাত", "category":
"noun" }, { "ja": "一昨日", "kana": "おととい", "en": "day before yesterday", "bn": "গত
পরশু", "category": "noun" }, { "ja": "昨日", "kana": "きのう", "en": "yesterday",
"bn": "গতকাল", "category": "noun" }, { "ja": "今日", "kana": "きょう", "en": "today",
"bn": "আজ", "category": "noun" }, { "ja": "明日", "kana": "あした", "en": "tomorrow",
"bn": "আগামীকাল", "category": "noun" }, { "ja": "明後日", "kana": "あさって", "en":
"day after tomorrow", "bn": "আগামী পরশু", "category": "noun" }, { "ja": "今朝",
"kana": "けさ", "en": "this morning", "bn": "আজ সকাল", "category": "noun" }, {
"ja": "今晩", "kana": "こんばん", "en": "this evening, tonight", "bn": "আজ রাত / আজ
সন্ধ্যা", "category": "noun" }, { "ja": "休み", "kana": "やすみ", "en": "rest,
holiday, day off", "bn": "ছুটি / বিশ্রাম", "category": "noun" }, { "ja": "昼休み",
"kana": "ひるやすみ", "en": "lunchtime", "bn": "দুপুরের খাবারের বিরতি", "category":
"noun" }, { "ja": "試験", "kana": "しけん", "en": "examination, test", "bn":
"পরীক্ষা", "category": "noun" }, { "ja": "会議", "kana": "かいぎ", "en": "meeting,
conference", "bn": "মিটিং / সভা", "category": "noun" }, { "ja": "映画", "kana":
"えいが", "en": "film, movie", "bn": "সিনেমা / চলচ্চিত্র", "category": "noun" }, {
"ja": "毎朝", "kana": "まいあさ", "en": "every morning", "bn": "প্রতি সকাল",
"category": "noun" }, { "ja": "毎晩", "kana": "まいばん", "en": "every night", "bn":
"প্রতি রাত", "category": "noun" }, { "ja": "毎日", "kana": "まいにち", "en": "every
day", "bn": "প্রতিদিন", "category": "noun" }, { "ja": "月曜日", "kana": "げつようび",
"en": "Monday", "bn": "সোমবার", "category": "noun" }, { "ja": "火曜日", "kana":
"かようび", "en": "Tuesday", "bn": "মঙ্গলবার", "category": "noun" }, { "ja": "水曜日",
"kana": "すいようび", "en": "Wednesday", "bn": "বুধবার", "category": "noun" }, {
"ja": "木曜日", "kana": "もくようび", "en": "Thursday", "bn": "বৃহস্পতিবার", "category":
"noun" }, { "ja": "金曜日", "kana": "きんようび", "en": "Friday", "bn": "শুক্রবার",
"category": "noun" }, { "ja": "土曜日", "kana": "どようび", "en": "Saturday", "bn":
"শনিবার", "category": "noun" }, { "ja": "日曜日", "kana": "にちようび", "en": "Sunday",
"bn": "রবিবার", "category": "noun" }, { "ja": "何曜日", "kana": "なんようび", "en":
"what day of the week", "bn": "কী বার", "category": "pronoun" }, { "ja": "〜から",
"en": "from ~", "bn": " থেকে", "category": "phrase" }, { "ja": "〜まで", "en": "up
to ~, until ~", "bn": " পর্যন্ত", "category": "phrase" }, { "ja": "〜と〜", "en":
"and (connects nouns)", "bn": "এবং / ও", "category": "phrase" }, { "ja":
"大変ですね", "kana": "たいへんですね", "en": "that's tough, isn't it?", "bn": "খুব কষ্টকর,
তাই না?", "category": "phrase" }, { "ja": "番号", "kana": "ばんごう", "en": "number",
"bn": "নম্বর", "category": "noun" }, { "ja": "何番", "kana": "なんばん", "en": "what
number", "bn": "কত নম্বর", "category": "pronoun" }, { "ja": "そちら", "en": "your
place", "bn": "আপনার ওখানে", "category": "pronoun" }, { "ja": "ニューヨーク", "en":
"New York", "bn": "নিউ ইয়র্ক", "category": "noun" }, { "ja": "北京", "kana":
"ペキン", "en": "Beijing", "bn": "বেইজিং", "category": "noun" }, { "ja": "ロサンゼルス",
"en": "Los Angeles", "bn": "লস অ্যাঞ্জেলেস", "category": "noun" }, { "ja":
"ロンドン", "en": "London", "bn": "লন্ডন", "category": "noun" } ], "5": [ { "ja":
"［〜に］行きます", "kana": "いきます", "en": "go", "bn": "যাওয়া / যাই", "category": "verb"
}, { "ja": "［〜に］来ます", "kana": "きます", "en": "come", "bn": "আসা / আসি",
"category": "verb" }, { "ja": "［〜に］帰ります", "kana": "かえります", "en": "go home,
return", "bn": "ফিরে যাওয়া / বাড়ি ফেরা", "category": "verb" }, { "ja": "学校",
"kana": "がっこう", "en": "school", "bn": "বিদ্যালয় / স্কুল", "category": "noun" },
{ "ja": "スーパー", "en": "supermarket", "bn": "সুপারমার্কেট", "category": "noun" },
{ "ja": "駅", "kana": "えき", "en": "station", "bn": "স্টেশন", "category": "noun"
}, { "ja": "飛行機", "kana": "ひこうき", "en": "airplane", "bn": "উড়োজাহাজ / বিমান",
"category": "noun" }, { "ja": "船", "kana": "ふね", "en": "ship, boat", "bn":
"জাহাজ / নৌকা", "category": "noun" }, { "ja": "電車", "kana": "でんしゃ", "en":
"electric train", "bn": "বৈদ্যুতিক ট্রেন", "category": "noun" }, { "ja": "地下鉄",
"kana": "ちかてつ", "en": "subway, underground", "bn": "পাতাল রেল", "category":
"noun" }, { "ja": "新幹線", "kana": "しんかんせん", "en": "bullet train", "bn": "বুলেট
ট্রেন / শিনকানসেন", "category": "noun" }, { "ja": "バス", "en": "bus", "bn":
"বাস", "category": "noun" }, { "ja": "タクシー", "en": "taxi", "bn": "ট্যাক্সি",
"category": "noun" }, { "ja": "自転車", "kana": "じてんしゃ", "en": "bicycle", "bn":
"সাইকেল", "category": "noun" }, { "ja": "歩いて", "kana": "あるいて", "en": "on foot",
"bn": "হেঁটে", "category": "adverb" }, { "ja": "人", "kana": "ひと", "en": "person,
people", "bn": "মানুষ / ব্যক্তি", "category": "noun" }, { "ja": "友達", "kana":
"ともだち", "en": "friend", "bn": "বন্ধু", "category": "noun" }, { "ja": "彼",
"kana": "かれ", "en": "he, boyfriend", "bn": "সে / প্রেমিক", "category": "pronoun"
}, { "ja": "彼女", "kana": "かのじょ", "en": "she, girlfriend", "bn": "সে / প্রেমিকা",
"category": "pronoun" }, { "ja": "家族", "kana": "かぞく", "en": "family", "bn":
"পরিবার", "category": "noun" }, { "ja": "一人で", "kana": "ひとりで", "en": "alone, by
oneself", "bn": "একা একা", "category": "adverb" }, { "ja": "先週", "kana":
"せんしゅう", "en": "last week", "bn": "গত সপ্তাহ", "category": "noun" }, { "ja":
"今週", "kana": "こんしゅう", "en": "this week", "bn": "এই সপ্তাহ", "category": "noun"
}, { "ja": "来週", "kana": "らいしゅう", "en": "next week", "bn": "আগামী সপ্তাহ",
"category": "noun" }, { "ja": "先月", "kana": "せんげつ", "en": "last month", "bn":
"গত মাস", "category": "noun" }, { "ja": "今月", "kana": "こんげつ", "en": "this
month", "bn": "এই মাস", "category": "noun" }, { "ja": "来月", "kana": "らいげつ",
"en": "next month", "bn": "আগামী মাস", "category": "noun" }, { "ja": "去年",
"kana": "きょねん", "en": "last year", "bn": "গত বছর", "category": "noun" }, { "ja":
"今年", "kana": "ことし", "en": "this year", "bn": "এই বছর", "category": "noun" }, {
"ja": "来年", "kana": "らいねん", "en": "next year", "bn": "আগামী বছর", "category":
"noun" }, { "ja": "〜年", "kana": "〜ねん", "en": "-th year", "bn": "— বছর",
"category": "counter" }, { "ja": "何年", "kana": "なんねん", "en": "what year", "bn":
"কোন বছর", "category": "pronoun" }, { "ja": "〜月", "kana": "〜がつ", "en": "-th
month of year", "bn": "— মাস (মাসের নাম)", "category": "counter" }, { "ja":
"何月", "kana": "なんがつ", "en": "what month", "bn": "কোন মাস", "category": "pronoun"
}, { "ja": "1日", "kana": "ついたち", "en": "first day of month", "bn": "১ তারিখ
(মাসের)", "category": "noun" }, { "ja": "2日", "kana": "ふつか", "en": "second, two
days", "bn": "২ তারিখ / দুই দিন", "category": "noun" }, { "ja": "3日", "kana":
"みっか", "en": "third, three days", "bn": "৩ তারিখ / তিন দিন", "category": "noun"
}, { "ja": "4日", "kana": "よっか", "en": "fourth, four days", "bn": "৪ তারিখ / চার
দিন", "category": "noun" }, { "ja": "5日", "kana": "いつか", "en": "fifth, five
days", "bn": "৫ তারিখ / পাঁচ দিন", "category": "noun" }, { "ja": "6日", "kana":
"むいか", "en": "sixth, six days", "bn": "৬ তারিখ / ছয় দিন", "category": "noun" },
{ "ja": "7日", "kana": "なのか", "en": "seventh, seven days", "bn": "৭ তারিখ / সাত
দিন", "category": "noun" }, { "ja": "8日", "kana": "ようか", "en": "eighth, eight
days", "bn": "৮ তারিখ / আট দিন", "category": "noun" }, { "ja": "9日", "kana":
"ここのか", "en": "ninth, nine days", "bn": "৯ তারিখ / নয় দিন", "category": "noun"
}, { "ja": "10日", "kana": "とおか", "en": "tenth, ten days", "bn": "১০ তারিখ / দশ
দিন", "category": "noun" }, { "ja": "14日", "kana": "じゅうよっか", "en":
"fourteenth, 14 days", "bn": "১৪ তারিখ / চৌদ্দ দিন", "category": "noun" }, {
"ja": "20日", "kana": "はつか", "en": "twentieth, 20 days", "bn": "২০ তারিখ / বিশ
দিন", "category": "noun" }, { "ja": "24日", "kana": "にじゅうよっか", "en":
"twenty-fourth, 24 days", "bn": "২৪ তারিখ / চব্বিশ দিন", "category": "noun" }, {
"ja": "〜日", "kana": "〜にち", "en": "-th day, - days", "bn": "— তারিখ / — দিন",
"category": "counter" }, { "ja": "何日", "kana": "なんにち", "en": "which day, how
many days", "bn": "কত তারিখ / কত দিন", "category": "pronoun" }, { "ja": "いつ",
"en": "when", "bn": "কখন", "category": "pronoun" }, { "ja": "誕生日", "kana":
"たんじょうび", "en": "birthday", "bn": "জন্মদিন", "category": "noun" }, { "ja":
"そうですね", "en": "yes, it is", "bn": "হ্যাঁ, তা ঠিক", "category": "phrase" }, {
"ja": "［どうも］ありがとう ございました", "en": "thank you very much", "bn": "আপনাকে অনেক
ধন্যবাদ", "category": "phrase" }, { "ja": "どう いたしまして", "en": "you're welcome",
"bn": "ঠিক আছে / স্বাগতম", "category": "phrase" }, { "ja": "〜番線", "kana":
"〜ばんせん", "en": "platform -", "bn": "— নম্বর প্ল্যাটফর্ম", "category": "counter"
}, { "ja": "次の", "kana": "つぎの", "en": "next", "bn": "পরবর্তী / পরের",
"category": "noun" }, { "ja": "普通", "kana": "ふつう", "en": "local train", "bn":
"লোকাল ট্রেন", "category": "noun" }, { "ja": "急行", "kana": "きゅうこう", "en": "rapid
train", "bn": "র‍্যাপিড ট্রেন", "category": "noun" }, { "ja": "特急", "kana":
"とっきゅう", "en": "express train", "bn": "এক্সপ্রেস ট্রেন", "category": "noun" }, {
"ja": "甲子園", "kana": "こうしえん", "en": "Koshien", "bn": "কোশিয়েন", "category":
"noun" }, { "ja": "大阪城", "kana": "おおさかじょう", "en": "Osaka Castle", "bn": "ওসাকা
দুর্গ", "category": "noun" } ], "6": [ { "ja": "［〜を］食べます", "kana": "たべます", "en":
"eat", "bn": "খাওয়া / খাই", "category": "verb" }, { "ja": "［〜を］飲みます", "kana":
"のみます", "en": "drink", "bn": "পান করা / পান করি", "category": "verb" }, { "ja":
"［たばこを〜］吸います", "kana": "すいます", "en": "smoke [a cigarette]", "bn": "[সিগারেট]
টানা / খাওয়া", "category": "verb" }, { "ja": "［〜を］見ます", "kana": "みます", "en":
"see, look at, watch", "bn": "দেখা / দেখি", "category": "verb" }, { "ja":
"［〜を］聞きます", "kana": "ききます", "en": "hear, listen", "bn": "শোনা / শুনি",
"category": "verb" }, { "ja": "［〜を］読みます", "kana": "よみます", "en": "read", "bn":
"পড়া / পড়ি", "category": "verb" }, { "ja": "［〜を］書きます", "kana": "かきます", "en":
"write, draw", "bn": "লেখা / আঁকা", "category": "verb" }, { "ja": "［〜を］買います",
"kana": "かいます", "en": "buy", "bn": "কেনা / কিনি", "category": "verb" }, { "ja":
"［写真を〜］撮ります", "kana": "とります", "en": "take [a photograph]", "bn": "[ছবি] তোলা",
"category": "verb" }, { "ja": "［〜を］します", "kana": "します", "en": "do, play", "bn":
"করা / খেলি", "category": "verb" }, { "ja": "［友達に〜］会います", "kana": "あいます", "en":
"meet [a friend]", "bn": "[বন্ধুর সাথে] দেখা করা", "category": "verb" }, { "ja":
"ご飯", "kana": "ごはん", "en": "cooked rice, meal", "bn": "ভাত / খাবার", "category":
"noun" }, { "ja": "朝ご飯", "kana": "あさごはん", "en": "breakfast", "bn": "সকালের
নাস্তা", "category": "noun" }, { "ja": "昼ご飯", "kana": "ひるごはん", "en": "lunch",
"bn": "দুপুরের খাবার", "category": "noun" }, { "ja": "晩ご飯", "kana": "ばんごはん",
"en": "supper, dinner", "bn": "রাতের খাবার", "category": "noun" }, { "ja": "パン",
"en": "bread", "bn": "পাউরুটি", "category": "noun" }, { "ja": "卵", "kana":
"たまご", "en": "egg", "bn": "ডিম", "category": "noun" }, { "ja": "肉", "kana":
"にく", "en": "meat", "bn": "মাংস", "category": "noun" }, { "ja": "魚", "kana":
"さかな", "en": "fish", "bn": "মাছ", "category": "noun" }, { "ja": "野菜", "kana":
"やさい", "en": "vegetable", "bn": "শাকসবজি", "category": "noun" }, { "ja": "果物",
"kana": "くだもの", "en": "fruit", "bn": "ফলমূল", "category": "noun" }, { "ja": "水",
"kana": "みず", "en": "water", "bn": "পানি / জল", "category": "noun" }, { "ja":
"お茶", "kana": "おちゃ", "en": "tea, green tea", "bn": "চা / গ্রিন টি", "category":
"noun" }, { "ja": "紅茶", "kana": "こうちゃ", "en": "black tea", "bn": "লাল চা",
"category": "noun" }, { "ja": "牛乳", "kana": "ぎゅうにゅう", "en": "milk", "bn": "দুধ",
"category": "noun" }, { "ja": "ミルク", "en": "milk", "bn": "দুধ", "category":
"noun" }, { "ja": "ジュース", "en": "juice", "bn": "জুস / রস", "category": "noun" },
{ "ja": "ビール", "en": "beer", "bn": "বিয়ার", "category": "noun" }, { "ja":
"［お］酒", "kana": "［お］さけ", "en": "alcohol, Japanese sake", "bn": "মদ / জাপানি
সাকে", "category": "noun" }, { "ja": "たばこ", "en": "tobacco, cigarette", "bn":
"সিগারেট / তামাক", "category": "noun" }, { "ja": "手紙", "kana": "てがみ", "en":
"letter", "bn": "চিঠি", "category": "noun" }, { "ja": "レポート", "en": "report",
"bn": "প্রতিবেদন / রিপোর্ট", "category": "noun" }, { "ja": "写真", "kana": "しゃしん",
"en": "photograph", "bn": "ছবি / আলোকচিত্র", "category": "noun" }, { "ja":
"ビデオ", "en": "video", "bn": "ভিডিও", "category": "noun" }, { "ja": "店", "kana":
"みせ", "en": "shop, store", "bn": "দোকান", "category": "noun" }, { "ja": "庭",
"kana": "にわ", "en": "garden", "bn": "বাগান", "category": "noun" }, { "ja": "宿題",
"kana": "しゅくだい", "en": "homework", "bn": "বাড়ির কাজ / হোমওয়ার্ক", "category":
"noun" }, { "ja": "テニス", "en": "tennis", "bn": "টেনিস", "category": "noun" }, {
"ja": "サッカー", "en": "soccer, football", "bn": "ফুটবল", "category": "noun" }, {
"ja": "［お］花見", "kana": "［お］はなみ", "en": "cherry-blossom viewing", "bn": "চেরি ফুল
দেখা উৎসব", "category": "noun" }, { "ja": "何", "kana": "なに", "en": "what", "bn":
"কী", "category": "pronoun" }, { "ja": "一緒に", "kana": "いっしょに", "en": "together",
"bn": "একসাথে", "category": "adverb" }, { "ja": "ちょっと", "en": "a little while,
bit", "bn": "একটু / কিছুক্ষণ", "category": "adverb" }, { "ja": "いつも", "en":
"always, usually", "bn": "সবসময় / সাধারণত", "category": "adverb" }, { "ja":
"時々", "kana": "ときどき", "en": "sometimes", "bn": "মাঝে মাঝে", "category": "adverb"
}, { "ja": "それから", "en": "after that, and then", "bn": "তারপর / এরপর",
"category": "phrase" }, { "ja": "ええ", "en": "yes", "bn": "হ্যাঁ", "category":
"phrase" }, { "ja": "いいですね", "en": "that's good", "bn": "বেশ ভালো", "category":
"phrase" }, { "ja": "分かりました", "kana": "わかりました", "en": "I see, understood", "bn":
"বুঝতে পেরেছি", "category": "phrase" }, { "ja": "何ですか", "kana": "なんですか", "en":
"yes? (lit. what is it?)", "bn": "কী ব্যাপার? / বলুন", "category": "phrase" }, {
"ja": "じゃ、また［あした］", "en": "see you [tomorrow]", "bn": "তাহলে [কাল] দেখা হবে",
"category": "phrase" }, { "ja": "メキシコ", "en": "Mexico", "bn": "মেক্সিকো",
"category": "noun" }, { "ja": "大阪デパート", "kana": "おおさかデパート", "en": "Osaka
Department Store", "bn": "ওসাকা ডিপার্টমেন্ট স্টোর", "category": "noun" }, {
"ja": "つるや", "en": "Tsuruya (restaurant)", "bn": "তসুরুয়া (রেস্তোরাঁ)",
"category": "noun" }, { "ja": "フランス屋", "kana": "フランスや", "en": "France-ya
(supermarket)", "bn": "ফ্রান্স-ইয়া (সুপারমার্কেট)", "category": "noun" }, {
"ja": "毎日屋", "kana": "まいにちや", "en": "Mainichiya (supermarket)", "bn":
"মাইনিচিয়া (সুপারমার্কেট)", "category": "noun" } ], "7": [ { "ja": "［〜を］切ります",
"kana": "きります", "en": "cut, slice", "bn": "কাটা / কাটি", "category": "verb" }, {
"ja": "［〜を］送ります", "kana": "おくります", "en": "send", "bn": "পাঠানো / পাঠাই",
"category": "verb" }, { "ja": "［〜を］あげます", "en": "give", "bn": "দেওয়া / দিই",
"category": "verb" }, { "ja": "［〜を］もらいます", "en": "receive", "bn": "পাওয়া / গ্রহণ
করা", "category": "verb" }, { "ja": "［〜を］貸します", "kana": "かします", "en": "lend",
"bn": "ধার দেওয়া", "category": "verb" }, { "ja": "［〜を］借ります", "kana": "かります",
"en": "borrow", "bn": "ধার নেওয়া", "category": "verb" }, { "ja": "［〜を］教えます",
"kana": "おしえます", "en": "teach", "bn": "শেখানো / শিক্ষা দেওয়া", "category":
"verb" }, { "ja": "［〜を］習います", "kana": "ならいます", "en": "learn", "bn": "শেখা /
শিখি", "category": "verb" }, { "ja": "［電話を〜］かけます", "kana": "かけます", "en": "make
[a telephone call]", "bn": "[ফোন] করা", "category": "verb" }, { "ja": "手",
"kana": "て", "en": "hand, arm", "bn": "হাত", "category": "noun" }, { "ja": "箸",
"kana": "はし", "en": "chopsticks", "bn": "চপস্টিক", "category": "noun" }, { "ja":
"スプーン", "en": "spoon", "bn": "চামচ", "category": "noun" }, { "ja": "ナイフ", "en":
"knife", "bn": "ছুরি", "category": "noun" }, { "ja": "フォーク", "en": "fork", "bn":
"কাঁটাচামচ", "category": "noun" }, { "ja": "鋏", "kana": "はさみ", "en": "scissors",
"bn": "কাঁচি", "category": "noun" }, { "ja": "パソコン", "en": "personal computer",
"bn": "পিসি / ব্যক্তিগত কম্পিউটার", "category": "noun" }, { "ja": "ケータイ", "en":
"mobile phone", "bn": "মোবাইল ফোন", "category": "noun" }, { "ja": "メール", "en":
"e-mail", "bn": "ইমেইল", "category": "noun" }, { "ja": "年賀状", "kana": "ねんがじょう",
"en": "New Year's card", "bn": "নববর্ষের শুভেচ্ছা কার্ড", "category": "noun" },
{ "ja": "パンチ", "en": "hole punch", "bn": "কাগজ ছিদ্র করার যন্ত্র", "category":
"noun" }, { "ja": "ホッチキス", "en": "stapler", "bn": "স্ট্যাপলার", "category":
"noun" }, { "ja": "セロテープ", "en": "clear adhesive tape", "bn": "স্কচটেপ",
"category": "noun" }, { "ja": "消しゴム", "kana": "けしゴム", "en": "rubber, eraser",
"bn": "ইরেজার / রাবার", "category": "noun" }, { "ja": "紙", "kana": "かみ", "en":
"paper", "bn": "কাগজ", "category": "noun" }, { "ja": "花", "kana": "はな", "en":
"flower, blossom", "bn": "ফুল", "category": "noun" }, { "ja": "シャツ", "en":
"shirt", "bn": "শার্ট", "category": "noun" }, { "ja": "プレゼント", "en": "present,
gift", "bn": "উপহার", "category": "noun" }, { "ja": "荷物", "kana": "にもつ", "en":
"luggage, parcel", "bn": "মালপত্র / পার্সেল", "category": "noun" }, { "ja":
"お金", "kana": "おかね", "en": "money", "bn": "টাকা / অর্থ", "category": "noun" }, {
"ja": "切符", "kana": "きっぷ", "en": "ticket", "bn": "টিকিট", "category": "noun" },
{ "ja": "クリスマス", "en": "Christmas", "bn": "বড়দিন / ক্রিসমাস", "category":
"noun" }, { "ja": "父", "kana": "ちち", "en": "my father", "bn": "(আমার) বাবা",
"category": "noun" }, { "ja": "母", "kana": "はは", "en": "my mother", "bn":
"(আমার) মা", "category": "noun" }, { "ja": "お父さん", "kana": "おとうさん", "en":
"someone else's father", "bn": "(অন্যের) বাবা", "category": "noun" }, { "ja":
"お母さん", "kana": "おかあさん", "en": "someone else's mother", "bn": "(অন্যের) মা",
"category": "noun" }, { "ja": "もう", "en": "already", "bn": "ইতিমধ্যে /
ইতিমধ্যে", "category": "adverb" }, { "ja": "まだ", "en": "not yet", "bn": "এখনো
না", "category": "adverb" }, { "ja": "これから", "en": "from now on, soon", "bn":
"এখন থেকে / শীঘ্রই", "category": "adverb" }, { "ja": "［〜、］すてきですね", "en": "what a
nice []!", "bn": "কী চমৎকার []!", "category": "phrase" }, { "ja": "いらっしゃい",
"en": "welcome", "bn": "স্বাগতম / আসুন", "category": "phrase" }, { "ja": "どうぞ
お上がり ください", "kana": "どうぞ おあがり ください", "en": "do come in", "bn": "ভেতরে আসুন",
"category": "phrase" }, { "ja": "失礼します", "kana": "しつれいします", "en": "excuse me
(entering)", "bn": "অনুমতি নিয়ে প্রবেশ করছি", "category": "phrase" }, { "ja":
"［〜は］いかがですか", "en": "won't you have []?", "bn": "[] নেবেন কি?", "category":
"phrase" }, { "ja": "いただきます", "en": "thank you (before eating)", "bn": "খাবার
গ্রহণের পূর্বে কৃতজ্ঞতা", "category": "phrase" }, { "ja": "ごちそうさま［でした］", "en":
"that was delicious", "bn": "খাবারের পরের কৃতজ্ঞতা", "category": "phrase" }, {
"ja": "スペイン", "en": "Spain", "bn": "স্পেন", "category": "noun" } ], "8": [ {
"ja": "ハンサム［な］", "en": "handsome", "bn": "সুদর্শন", "category": "na-adjective"
}, { "ja": "きれい［な］", "en": "beautiful, clean", "bn": "সুন্দর / পরিষ্কার",
"category": "na-adjective" }, { "ja": "静か［な］", "kana": "しずか［な］", "en": "quiet",
"bn": "শান্ত / নীরব", "category": "na-adjective" }, { "ja": "にぎやか［な］", "en":
"lively, bustling", "bn": "কোলাহলপূর্ণ / প্রাণবন্ত", "category": "na-adjective"
}, { "ja": "有名［な］", "kana": "ゆうめい［な］", "en": "famous", "bn": "বিখ্যাত",
"category": "na-adjective" }, { "ja": "親切［な］", "kana": "しんせつ［な］", "en": "kind,
helpful", "bn": "দয়ালু / অমায়িক", "category": "na-adjective" }, { "ja":
"元気［な］", "kana": "げんき［な］", "en": "healthy, energetic", "bn": "সুস্থ / উদ্যমী",
"category": "na-adjective" }, { "ja": "暇［な］", "kana": "ひま［な］", "en": "free
(time)", "bn": "অবসর / কাজের চাপহীন", "category": "na-adjective" }, { "ja":
"便利［な］", "kana": "べんり［な］", "en": "convenient", "bn": "সুবিধাজনক", "category":
"na-adjective" }, { "ja": "すてき［な］", "en": "fine, nice, wonderful", "bn": "চমৎকার
/ দারুণ", "category": "na-adjective" }, { "ja": "大きい", "kana": "おおきい", "en":
"big, large", "bn": "বড়", "category": "i-adjective" }, { "ja": "小さい", "kana":
"ちいさい", "en": "small, little", "bn": "ছোট", "category": "i-adjective" }, { "ja":
"新しい", "kana": "あたらしい", "en": "new, fresh", "bn": "নতুন", "category":
"i-adjective" }, { "ja": "古い", "kana": "ふるい", "en": "old (not people)", "bn":
"পুরোনো", "category": "i-adjective" }, { "ja": "いい", "en": "good", "bn": "ভালো",
"category": "i-adjective" }, { "ja": "悪い", "kana": "わるい", "en": "bad", "bn":
"খারাপ", "category": "i-adjective" }, { "ja": "暑い", "kana": "あつい", "en": "hot
(weather)", "bn": "গরম (আবহাওয়া)", "category": "i-adjective" }, { "ja": "熱い",
"kana": "あつい", "en": "hot (to touch)", "bn": "গরম (স্পর্শে)", "category":
"i-adjective" }, { "ja": "寒い", "kana": "さむい", "en": "cold (weather)", "bn":
"ঠান্ডা (আবহাওয়া)", "category": "i-adjective" }, { "ja": "冷たい", "kana": "つめたい",
"en": "cold (to touch)", "bn": "ঠান্ডা (স্পর্শে)", "category": "i-adjective" },
{ "ja": "難しい", "kana": "むずかしい", "en": "difficult", "bn": "কঠিন", "category":
"i-adjective" }, { "ja": "易しい", "kana": "やさしい", "en": "easy", "bn": "সহজ",
"category": "i-adjective" }, { "ja": "高い", "kana": "たかい", "en": "expensive,
high, tall", "bn": "দামি / উঁচু", "category": "i-adjective" }, { "ja": "安い",
"kana": "やすい", "en": "inexpensive, cheap", "bn": "সস্তা", "category":
"i-adjective" }, { "ja": "低い", "kana": "ひくい", "en": "low", "bn": "নিচু",
"category": "i-adjective" }, { "ja": "面白い", "kana": "おもしろい", "en": "interesting,
amusing", "bn": "মজার / আকর্ষণীয়", "category": "i-adjective" }, { "ja": "美味しい",
"kana": "おいしい", "en": "delicious, tasty", "bn": "সুস্বাদু", "category":
"i-adjective" }, { "ja": "忙しい", "kana": "いそがしい", "en": "busy", "bn": "ব্যস্ত",
"category": "i-adjective" }, { "ja": "楽しい", "kana": "たのしい", "en": "enjoyable,
fun", "bn": "আনন্দদায়ক", "category": "i-adjective" }, { "ja": "白い", "kana":
"しろい", "en": "white", "bn": "সাদা", "category": "i-adjective" }, { "ja": "黒い",
"kana": "くろい", "en": "black", "bn": "কালো", "category": "i-adjective" }, { "ja":
"赤い", "kana": "あかい", "en": "red", "bn": "লাল", "category": "i-adjective" }, {
"ja": "青い", "kana": "あおい", "en": "blue", "bn": "নীল", "category": "i-adjective"
}, { "ja": "桜", "kana": "さくら", "en": "cherry blossom", "bn": "চেরি ফুল",
"category": "noun" }, { "ja": "山", "kana": "やま", "en": "mountain", "bn": "পাহাড়
/ পর্বত", "category": "noun" }, { "ja": "町", "kana": "まち", "en": "town, city",
"bn": "শহর", "category": "noun" }, { "ja": "食べ物", "kana": "たべもの", "en": "food",
"bn": "খাবার", "category": "noun" }, { "ja": "所", "kana": "ところ", "en": "place",
"bn": "জায়গা / স্থান", "category": "noun" }, { "ja": "寮", "kana": "りょう", "en":
"dormitory", "bn": "ছাত্রাবাস / ডরমিটরি", "category": "noun" }, { "ja": "レストラン",
"en": "restaurant", "bn": "রেস্তোরাঁ", "category": "noun" }, { "ja": "生活",
"kana": "せいかつ", "en": "life, living", "bn": "জীবন / জীবনযাপন", "category":
"noun" }, { "ja": "［お］仕事", "kana": "［お］しごと", "en": "work, business", "bn": "কাজ
/ চাকরি", "category": "noun" }, { "ja": "どう", "en": "how", "bn": "কেমন",
"category": "adverb" }, { "ja": "どんな 〜", "en": "what kind of ~", "bn": "কী ধরণের
", "category": "pronoun" }, { "ja": "とても", "en": "very", "bn": "খুব / অত্যন্ত",
"category": "adverb" }, { "ja": "あまり", "en": "not so (with neg.)", "bn": "তেমন
একটা না", "category": "adverb" }, { "ja": "そして", "en": "and (connecting
sentences)", "bn": "এবং / আর", "category": "phrase" }, { "ja": "〜が、〜", "en": ",
but ", "bn": ", কিন্তু ", "category": "phrase" }, { "ja": "お元気ですか", "kana":
"おげんきですか", "en": "how are you?", "bn": "আপনি কেমন আছেন?", "category": "phrase"
}, { "ja": "そうですね", "en": "well, let me see", "bn": "তাই তো / ভাবছি",
"category": "phrase" }, { "ja": "［〜、］もう 一杯 いかがですか", "kana": "［〜、］もう いっぱい
いかがですか", "en": "another cup of []?", "bn": "আরেক কাপ [] নেবেন কি?", "category":
"phrase" }, { "ja": "［いいえ、］けっこうです", "en": "no, thank you", "bn": "না, ধন্যবাদ
(লাগবে না)", "category": "phrase" }, { "ja": "もう 〜です［ね］", "en": "it's already [,
isn't it?]", "bn": "ইতিমধ্যে ~ বাজে [তাই না]", "category": "phrase" }, { "ja":
"そろそろ 失礼します", "kana": "そろそろ しつれいします", "en": "it's time to leave", "bn": "এখন
আমার উঠতে হবে", "category": "phrase" }, { "ja": "いいえ", "en": "not at all", "bn":
"আরে না / ঠিক আছে", "category": "phrase" }, { "ja": "また いらっしゃって ください", "en":
"please come again", "bn": "আবার আসবেন", "category": "phrase" }, { "ja":
"シャンハイ", "en": "Shanghai", "bn": "সাংহাই", "category": "noun" }, { "ja": "金閣寺",
"kana": "きんかくじ", "en": "Kinkakuji Temple", "bn": "কিনকাকুজি মন্দির", "category":
"noun" }, { "ja": "奈良公園", "kana": "ならこうえん", "en": "Nara Park", "bn": "নারা
পার্ক", "category": "noun" }, { "ja": "富士山", "kana": "ふじさん", "en": "Mt. Fuji",
"bn": "ফুজি পর্বত", "category": "noun" }, { "ja": "「七人の 侍」", "kana": "「しちにんの
さむらい」", "en": "'Seven Samurai'", "bn": "সেভেন সামুরাই", "category": "noun" } ],
"9": [ { "ja": "［〜が］分かります", "kana": "わかります", "en": "understand", "bn": "বোঝা /
বুঝতে পারা", "category": "verb" }, { "ja": "［〜が］あります", "en": "have, possess",
"bn": "থাকা / আছে", "category": "verb" }, { "ja": "好き［な］", "kana": "すき［な］",
"en": "like, fond of", "bn": "পছন্দ / প্রিয়", "category": "na-adjective" }, {
"ja": "嫌い［な］", "kana": "きらい［な］", "en": "dislike, hate", "bn": "অপছন্দ",
"category": "na-adjective" }, { "ja": "上手［な］", "kana": "じょうず［な］", "en": "good
at", "bn": "দক্ষ / পারদর্শী", "category": "na-adjective" }, { "ja": "下手［な］",
"kana": "へた［な］", "en": "poor at", "bn": "অদক্ষ / কাঁচা", "category":
"na-adjective" }, { "ja": "飲み物", "kana": "のみもの", "en": "drinks, beverages",
"bn": "পানীয়", "category": "noun" }, { "ja": "料理", "kana": "りょうり", "en": "dish,
cooking", "bn": "রান্না / খাবার", "category": "noun" }, { "ja": "スポーツ", "en":
"sports", "bn": "খেলাধুলা", "category": "noun" }, { "ja": "野球", "kana": "やきゅう",
"en": "baseball", "bn": "বেসবল", "category": "noun" }, { "ja": "ダンス", "en":
"dance", "bn": "নাচ / নৃত্য", "category": "noun" }, { "ja": "旅行", "kana":
"りょこう", "en": "trip, tour, travel", "bn": "ভ্রমণ", "category": "noun" }, { "ja":
"音楽", "kana": "おんがく", "en": "music", "bn": "গান / সংগীত", "category": "noun" },
{ "ja": "歌", "kana": "うた", "en": "song", "bn": "গান / গীতি", "category": "noun"
}, { "ja": "クラシック", "en": "classical music", "bn": "ক্লাসিক্যাল গান",
"category": "noun" }, { "ja": "ジャズ", "en": "jazz", "bn": "জ্যাজ সংগীত",
"category": "noun" }, { "ja": "コンサート", "en": "concert", "bn": "কনসার্ট",
"category": "noun" }, { "ja": "カラオケ", "en": "karaoke", "bn": "কারাওকে",
"category": "noun" }, { "ja": "歌舞伎", "kana": "かぶき", "en": "Kabuki (traditional
theater)", "bn": "কাবুকি (জাপানি নাটক)", "category": "noun" }, { "ja": "絵",
"kana": "え", "en": "picture, drawing", "bn": "ছবি / চিত্রকর্ম", "category":
"noun" }, { "ja": "字", "kana": "じ", "en": "letter, character", "bn": "বর্ণ /
অক্ষর", "category": "noun" }, { "ja": "漢字", "kana": "かんじ", "en": "Chinese
character, kanji", "bn": "কাঞ্জি", "category": "noun" }, { "ja": "ひらがな", "en":
"hiragana script", "bn": "হিরাগানা", "category": "noun" }, { "ja": "かたかな", "en":
"katakana script", "bn": "কাতাকানা", "category": "noun" }, { "ja": "ローマ字",
"kana": "ローマじ", "en": "Roman alphabet", "bn": "রোমান বর্ণমালা", "category":
"noun" }, { "ja": "細かい お金", "kana": "こまかい おかね", "en": "small change, coins",
"bn": "খুচরা পয়সা", "category": "noun" }, { "ja": "チケット", "en": "ticket", "bn":
"টিকিট", "category": "noun" }, { "ja": "時間", "kana": "じかん", "en": "time", "bn":
"সময়", "category": "noun" }, { "ja": "用事", "kana": "ようじ", "en": "errand,
business", "bn": "জরুরি কাজ", "category": "noun" }, { "ja": "約束", "kana":
"やくそく", "en": "appointment, promise", "bn": "ওয়াদা / অ্যাপয়েন্টমেন্ট",
"category": "noun" }, { "ja": "アルバイト", "en": "part-time job", "bn": "খণ্ডকালীন
কাজ / পার্ট-টাইম কাজ", "category": "noun" }, { "ja": "ご主人", "kana": "ごしゅじん",
"en": "someone else's husband", "bn": "(অন্যের) স্বামী", "category": "noun" }, {
"ja": "夫", "kana": "おっと", "en": "my husband", "bn": "(আমার) স্বামী", "category":
"noun" }, { "ja": "主人", "kana": "しゅじん", "en": "my husband", "bn": "(আমার)
স্বামী", "category": "noun" }, { "ja": "奥さん", "kana": "おくさん", "en": "someone
else's wife", "bn": "(অন্যের) স্ত্রী", "category": "noun" }, { "ja": "妻",
"kana": "つま", "en": "my wife", "bn": "(আমার) স্ত্রী", "category": "noun" }, {
"ja": "家内", "kana": "かない", "en": "my wife", "bn": "(আমার) স্ত্রী", "category":
"noun" }, { "ja": "子ども", "kana": "こども", "en": "child", "bn": "বাচ্চা / সন্তান",
"category": "noun" }, { "ja": "よく", "en": "well, much", "bn": "ভালোভাবে /
প্রায়ই", "category": "adverb" }, { "ja": "だいたい", "en": "mostly, roughly", "bn":
"মোটামুটি", "category": "adverb" }, { "ja": "たくさん", "en": "many, much", "bn":
"অনেক / প্রচুর", "category": "adverb" }, { "ja": "少し", "kana": "すこし", "en": "a
little, few", "bn": "অল্প / সামান্য", "category": "adverb" }, { "ja": "全然",
"kana": "ぜんぜん", "en": "not at all (with neg.)", "bn": "একদমই না", "category":
"adverb" }, { "ja": "早く", "kana": "はやく", "en": "early", "bn": "তাড়াতাড়ি /
জলদি", "category": "adverb" }, { "ja": "速く", "kana": "はやく", "en": "fast,
quickly", "bn": "দ্রুত", "category": "adverb" }, { "ja": "〜から", "en": "because
", "bn": " কারণ / জন্য", "category": "phrase" }, { "ja": "どうして", "en": "why",
"bn": "কেন", "category": "adverb" }, { "ja": "貸して ください", "kana": "かして ください",
"en": "please lend (it)", "bn": "দয়া করে ধার দিন", "category": "phrase" }, {
"ja": "いいですよ", "en": "sure, certainly", "bn": "হ্যাঁ, অবশ্যই", "category":
"phrase" }, { "ja": "残念です［が］", "kana": "ざんねんです［が］", "en": "I'm sorry [, but]",
"bn": "দুঃখজনক [, তবে]", "category": "phrase" }, { "ja": "ああ", "en": "oh", "bn":
"আহ্ / ওহ্", "category": "phrase" }, { "ja": "いっしょに いかがですか", "en": "won't you
join me?", "bn": "একসাথে হলে কেমন হয়?", "category": "phrase" }, { "ja":
"［〜は］ちょっと……", "en": "[] is a bit difficult", "bn": "[] একটু সমস্যা হবে...",
"category": "phrase" }, { "ja": "だめですか", "en": "so you can't come?", "bn": "হবে
না তাহলে?", "category": "phrase" }, { "ja": "また 今度 お願いします", "kana": "また こんど
おねがいします", "en": "ask me another time", "bn": "অন্য কোনো দিন দেখা যাবে",
"category": "phrase" } ], "10": [ { "ja": "［〜が］あります", "en": "exist, be
(inanimate)", "bn": "থাকা / আছে (জড়বস্তু)", "category": "verb" }, { "ja":
"［〜が］います", "en": "exist, be (animate)", "bn": "থাকা / আছে (প্রাণী)", "category":
"verb" }, { "ja": "いろいろ［な］", "en": "various", "bn": "বিভিন্ন / নানান",
"category": "na-adjective" }, { "ja": "男の人", "kana": "おとこのひと", "en": "man",
"bn": "পুরুষ / লোক", "category": "noun" }, { "ja": "女の人", "kana": "おんなのひと",
"en": "woman", "bn": "মহিলা / নারী", "category": "noun" }, { "ja": "男の子",
"kana": "おトこのこ", "kana": "おとこのこ", "en": "boy", "bn": "ছেলে", "category": "noun"
}, { "ja": "女の子", "kana": "おんなのこ", "en": "girl", "bn": "মেয়ে", "category":
"noun" }, { "ja": "犬", "kana": "いぬ", "en": "dog", "bn": "কুকুর", "category":
"noun" }, { "ja": "猫", "kana": "ねこ", "en": "cat", "bn": "বিড়াল", "category":
"noun" }, { "ja": "パンダ", "en": "panda", "bn": "পান্ডা", "category": "noun" }, {
"ja": "象", "kana": "ぞう", "en": "elephant", "bn": "হাতি", "category": "noun" }, {
"ja": "木", "kana": "き", "en": "tree, wood", "bn": "গাছ / কাঠ", "category":
"noun" }, { "ja": "物", "kana": "もの", "en": "thing", "bn": "জিনিস / বস্তু",
"category": "noun" }, { "ja": "電池", "kana": "でんち", "en": "battery", "bn":
"ব্যাটারি", "category": "noun" }, { "ja": "箱", "kana": "はこ", "en": "box", "bn":
"বাক্স", "category": "noun" }, { "ja": "スイッチ", "en": "switch", "bn": "সুইচ",
"category": "noun" }, { "ja": "冷蔵庫", "kana": "れいぞうこ", "en": "refrigerator",
"bn": "রেফ্রিজারেটর / ফ্রিজ", "category": "noun" }, { "ja": "テーブル", "en":
"table", "bn": "টেবিল", "category": "noun" }, { "ja": "ベッド", "en": "bed", "bn":
"বিছানা / খাট", "category": "noun" }, { "ja": "棚", "kana": "たな", "en": "shelf",
"bn": "তাক / শেলফ", "category": "noun" }, { "ja": "ドア", "en": "door", "bn":
"দরজা", "category": "noun" }, { "ja": "窓", "kana": "まど", "en": "window", "bn":
"জানালা", "category": "noun" }, { "ja": "ポスト", "en": "postbox, mailbox", "bn":
"লেটারবক্স / পোস্টবক্স", "category": "noun" }, { "ja": "ビル", "en": "building",
"bn": "দালান / ভবন", "category": "noun" }, { "ja": "ATM", "en": "cash machine,
ATM", "bn": "এটিএম বুথ", "category": "noun" }, { "ja": "コンビニ", "en":
"convenience store", "bn": "কনভেনিয়েন্স স্টোর", "category": "noun" }, { "ja":
"公園", "kana": "こうえん", "en": "park", "bn": "পার্ক / উদ্যান", "category": "noun"
}, { "ja": "喫茶店", "kana": "きっさてん", "en": "café, coffee shop", "bn": "ক্যাফে /
কফি শপ", "category": "noun" }, { "ja": "〜屋", "kana": "〜や", "en": "shop, ~
store", "bn": " দোকান", "category": "noun" }, { "ja": "乗り場", "kana": "のりば",
"en": "fixed place to catch taxi/train", "bn": "যানবাহনে ওঠার স্থান",
"category": "noun" }, { "ja": "県", "kana": "けん", "en": "prefecture", "bn":
"প্রিফেকচার / প্রদেশ", "category": "noun" }, { "ja": "上", "kana": "うえ", "en":
"on, above, over", "bn": "উপরে", "category": "noun" }, { "ja": "下", "kana":
"した", "en": "under, below, beneath", "bn": "নিচে", "category": "noun" }, { "ja":
"前", "kana": "まえ", "en": "front, before", "bn": "সামনে", "category": "noun" }, {
"ja": "後ろ", "kana": "うしろ", "en": "back, behind", "bn": "পেছনে", "category":
"noun" }, { "ja": "右", "kana": "みぎ", "en": "right [side]", "bn": "ডান [দিক]",
"category": "noun" }, { "ja": "左", "kana": "ひだり", "en": "left [side]", "bn":
"বাম [দিক]", "category": "noun" }, { "ja": "中", "kana": "なか", "en": "in,
inside", "bn": "ভেতরে / মধ্যে", "category": "noun" }, { "ja": "外", "kana": "そと",
"en": "outside", "bn": "বাইরে", "category": "noun" }, { "ja": "隣", "kana":
"となり", "en": "next, next door", "bn": "পাশে / পাশের ঘর", "category": "noun" }, {
"ja": "近く", "kana": "ちかく", "en": "near, vicinity", "bn": "কাছে / নিকটে",
"category": "noun" }, { "ja": "間", "kana": "あいだ", "en": "between, among", "bn":
"মাঝখানে", "category": "noun" }, { "ja": "〜や〜［など］", "en": ", , and so on", "bn":
", ~ ইত্যাদি", "category": "phrase" }, { "ja": "［どうも］すみません", "en": "thank you",
"bn": "ধন্যবাদ", "category": "phrase" }, { "ja": "ナンプラー", "en": "nam pla (fish
sauce)", "bn": "নাম প্লা (ফিশ সস)", "category": "noun" }, { "ja": "コーナー", "en":
"corner, section", "bn": "কোণা / বিভাগ", "category": "noun" }, { "ja": "いちばん 下",
"kana": "いちばん した", "en": "the bottom", "bn": "একদম নিচে", "category": "noun" },
{ "ja": "東京ディズニーランド", "kana": "とうきょうディズニーランド", "en": "Tokyo Disneyland", "bn":
"টোকিও ডিজনিলেণ্ড", "category": "noun" }, { "ja": "アジアストア", "en": "Asia Store",
"bn": "এশিয়া স্টোর", "category": "noun" } ], "11": [ { "ja": "［子どもが〜］います",
"kana": "［こどもが〜］います", "en": "have [a child]", "bn": "[সন্তান] থাকা / আছে",
"category": "verb" }, { "ja": "［日本に〜］います", "kana": "［にほんに〜］います", "en": "stay, be
[in Japan]", "bn": "[জাপানে] থাকা / অবস্থান করা", "category": "verb" }, { "ja":
"かかります", "en": "take, cost", "bn": "লাগা (সময় বা টাকা)", "category": "verb" }, {
"ja": "［会社を〜］休みます", "kana": "［かいしゃを〜］やすみます", "en": "take day off [work]", "bn":
"[অফিস] ছুটি নেওয়া", "category": "verb" }, { "ja": "1つ", "kana": "ひとつ", "en":
"one (counting things)", "bn": "১টি / একটি", "category": "counter" }, { "ja":
"2つ", "kana": "ふたつ", "en": "two (counting things)", "bn": "২টি / দুইটি",
"category": "counter" }, { "ja": "3つ", "kana": "みっつ", "en": "three (counting
things)", "bn": "৩টি / তিনটি", "category": "counter" }, { "ja": "4つ", "kana":
"よっつ", "en": "four (counting things)", "bn": "৪টি / চারটি", "category":
"counter" }, { "ja": "5つ", "kana": "いつつ", "en": "five (counting things)", "bn":
"৫টি / পাঁচটি", "category": "counter" }, { "ja": "6つ", "kana": "むっつ", "en": "six
(counting things)", "bn": "৬টি / ছয়টি", "category": "counter" }, { "ja": "7つ",
"kana": "ななつ", "en": "seven (counting things)", "bn": "৭টি / সাতটি", "category":
"counter" }, { "ja": "8つ", "kana": "やっつ", "en": "eight (counting things)", "bn":
"৮টি / আটটি", "category": "counter" }, { "ja": "9つ", "kana": "ここのつ", "en": "nine
(counting things)", "bn": "৯টি / নয়টি", "category": "counter" }, { "ja": "10",
"kana": "とお", "en": "ten (counting things)", "bn": "১০টি / দশটি", "category":
"counter" }, { "ja": "いくつ", "en": "how many", "bn": "কয়টি / কতগুলো", "category":
"pronoun" }, { "ja": "1人", "kana": "ひとり", "en": "one person", "bn": "১ জন /
একজন", "category": "noun" }, { "ja": "2人", "kana": "ふたり", "en": "two people",
"bn": "২ জন / দুইজন", "category": "noun" }, { "ja": "〜人", "kana": "〜にん", "en":
"- people", "bn": "— জন", "category": "counter" }, { "ja": "〜台", "kana": "〜だい",
"en": "counter for machines", "bn": "— টি (যন্ত্র বা গাড়ির কাউন্টার)",
"category": "counter" }, { "ja": "〜枚", "kana": "〜まい", "en": "counter for flat
things", "bn": "— টি (কাগজ বা পাতলা জিনিস)", "category": "counter" }, { "ja":
"〜回", "kana": "〜かい", "en": "- times", "bn": "— বার (সংখ্যা)", "category":
"counter" }, { "ja": "りんご", "en": "apple", "bn": "আপেল", "category": "noun" }, {
"ja": "みかん", "en": "mandarin orange", "bn": "কমলা", "category": "noun" }, {
"ja": "サンドイッチ", "en": "sandwich", "bn": "স্যান্ডউইচ", "category": "noun" }, {
"ja": "カレー［ライス］", "en": "curry [with rice]", "bn": "কারি [ভাতসহ]", "category":
"noun" }, { "ja": "アイスクリーム", "en": "ice cream", "bn": "আইসক্রিম", "category":
"noun" }, { "ja": "切手", "kana": "きって", "en": "postage stamp", "bn": "ডাকটিকিট",
"category": "noun" }, { "ja": "葉書", "kana": "はがき", "en": "postcard", "bn":
"পোস্টকার্ড", "category": "noun" }, { "ja": "封筒", "kana": "ふうとう", "en":
"envelope", "bn": "খাম", "category": "noun" }, { "ja": "両親", "kana": "りょうしん",
"en": "parents", "bn": "পিতামাতা / বাবা-মা", "category": "noun" }, { "ja": "兄弟",
"kana": "きょうだい", "en": "brothers and sisters", "bn": "ভাইবোন", "category":
"noun" }, { "ja": "兄", "kana": "あに", "en": "(my) elder brother", "bn": "(আমার)
বড় ভাই", "category": "noun" }, { "ja": "お兄さん", "kana": "おにいさん", "en": "someone
else's elder brother", "bn": "(অন্যের) বড় ভাই", "category": "noun" }, { "ja":
"姉", "kana": "あね", "en": "(my) elder sister", "bn": "(আমার) বড় বোন", "category":
"noun" }, { "ja": "お姉さん", "kana": "おねえさん", "en": "someone else's elder sister",
"bn": "(অন্যের) বড় বোন", "category": "noun" }, { "ja": "弟", "kana": "おとうと",
"en": "(my) younger brother", "bn": "(আমার) ছোট ভাই", "category": "noun" }, {
"ja": "弟さん", "kana": "おとうとさん", "en": "someone else's younger brother", "bn":
"(অন্যের) ছোট ভাই", "category": "noun" }, { "ja": "妹", "kana": "いもうと", "en":
"(my) younger sister", "bn": "(আমার) ছোট বোন", "category": "noun" }, { "ja":
"妹さん", "kana": "いもうとさん", "en": "someone else's younger sister", "bn": "(অন্যের)
ছোট বোন", "category": "noun" }, { "ja": "外国", "kana": "がいこく", "en": "foreign
country", "bn": "বিদেশ / অন্য দেশ", "category": "noun" }, { "ja": "留学生", "kana":
"りゅうがくせい", "en": "foreign student", "bn": "বিদেশি শিক্ষার্থী", "category":
"noun" }, { "ja": "クラス", "en": "class", "bn": "শ্রেণি / ক্লাস", "category":
"noun" }, { "ja": "〜時間", "kana": "〜じかん", "en": "- hour(s)", "bn": "— ঘণ্টা",
"category": "counter" }, { "ja": "〜週間", "kana": "〜しゅうかん", "en": "- week(s)",
"bn": "— সপ্তাহ", "category": "counter" }, { "ja": "〜か月", "kana": "〜かげつ", "en":
"- month(s)", "bn": "— মাস", "category": "counter" }, { "ja": "〜年", "kana":
"〜ねん", "en": "- year(s)", "bn": "— বছর", "category": "counter" }, { "ja":
"〜ぐらい", "en": "about ~", "bn": "প্রায় ~", "category": "phrase" }, { "ja":
"どのくらい", "en": "how long", "bn": "কতক্ষণ / কতদিন", "category": "adverb" }, {
"ja": "全部で", "kana": "ぜんぶで", "en": "in total", "bn": "সব মিলিয়ে / মোট",
"category": "phrase" }, { "ja": "みんな", "en": "all, everything, everyone", "bn":
"সবাই / সবকিছু", "category": "noun" }, { "ja": "〜だけ", "en": "only ~", "bn":
"শুধু ~ / কেবল ~", "category": "phrase" }, { "ja": "かしこまりました", "en":
"certainly", "bn": "অবশ্যই / বুঝতে পেরেছি", "category": "phrase" }, { "ja":
"いい［お］天気ですね", "kana": "いい［お］てんきですね", "en": "nice weather, isn't it?", "bn":
"সুন্দর আবহাওয়া, তাই না?", "category": "phrase" }, { "ja": "お出かけですか", "kana":
"おでかけですか", "en": "are you going out?", "bn": "কোথাও বের হচ্ছেন?", "category":
"phrase" }, { "ja": "ちょっと 〜まで", "en": "I'm just going to ~", "bn": "একটু ~
পর্যন্ত যাচ্ছি", "category": "phrase" }, { "ja": "行ってらっしゃい", "kana": "いってらっしゃい",
"en": "see you later", "bn": "সাবধানে যান", "category": "phrase" }, { "ja": "行って
きます", "kana": "いって きます", "en": "see you later", "bn": "আমি আসছি / বের হচ্ছি",
"category": "phrase" }, { "ja": "船便", "kana": "ふなびん", "en": "sea mail", "bn":
"জাহাজ ডাক / নৌডাক", "category": "noun" }, { "ja": "航空便", "kana": "こうくうびん",
"en": "airmail", "bn": "বিমান ডাক / এয়ারমেইল", "category": "noun" }, { "ja":
"エアメール", "en": "airmail", "bn": "এয়ারমেইল", "category": "noun" }, { "ja":
"お願いします", "kana": "おねがいします", "en": "please", "bn": "দয়া করে / অনুগ্রহ করে",
"category": "phrase" }, { "ja": "オーストラリア", "en": "Australia", "bn":
"অস্ট্রেলিয়া", "category": "noun" } ], "12": [ { "ja": "簡単［な］", "kana":
"かんたん［な］", "en": "easy, simple", "bn": "সহজ / সরল", "category": "na-adjective"
}, { "ja": "近い", "kana": "ちかい", "en": "near, close", "bn": "কাছে / নিকটবর্তী",
"category": "i-adjective" }, { "ja": "遠い", "kana": "とおい", "en": "far", "bn":
"দূরে", "category": "i-adjective" }, { "ja": "速い、早い", "kana": "はやい", "en":
"fast, early", "bn": "দ্রুত / সকাল সকাল", "category": "i-adjective" }, { "ja":
"遅い", "kana": "おそい", "en": "slow, late", "bn": "ধীর / দেরি", "category":
"i-adjective" }, { "ja": "［人が〜］多い", "kana": "［ひとが〜］おおい", "en": "many [people],
much", "bn": "[মানুষ] বেশি / অনেক", "category": "i-adjective" }, { "ja":
"［人が〜］少ない", "kana": "［ひとが〜］すくない", "en": "few [people], a little", "bn": "[মানুষ]
কম / অল্প", "category": "i-adjective" }, { "ja": "暖かい、温かい", "kana": "あたたかい",
"en": "warm", "bn": "উষ্ণ / আরামদায়ক গরম", "category": "i-adjective" }, { "ja":
"涼しい", "kana": "すずしい", "en": "cool", "bn": "মনোরম ঠান্ডা / শীতল", "category":
"i-adjective" }, { "ja": "甘い", "kana": "あまい", "en": "sweet", "bn": "মিষ্টি",
"category": "i-adjective" }, { "ja": "辛い", "kana": "からい", "en": "hot (taste),
spicy", "bn": "ঝাল / মসলাযুক্ত", "category": "i-adjective" }, { "ja": "重い",
"kana": "おもい", "en": "heavy", "bn": "ভারী", "category": "i-adjective" }, { "ja":
"軽い", "kana": "かるい", "en": "light (weight)", "bn": "হালকা", "category":
"i-adjective" }, { "ja": "［コーヒーが〜］いい", "en": "prefer [coffee]", "bn": "[কফি]
শ্রেয় / পছন্দ", "category": "i-adjective" }, { "ja": "季節", "kana": "きせつ", "en":
"season", "bn": "ঋতু", "category": "noun" }, { "ja": "春", "kana": "はる", "en":
"spring", "bn": "বসন্তকাল", "category": "noun" }, { "ja": "夏", "kana": "なつ",
"en": "summer", "bn": "গ্রীষ্মকাল", "category": "noun" }, { "ja": "秋", "kana":
"あき", "en": "autumn, fall", "bn": "শরৎকাল", "category": "noun" }, { "ja": "冬",
"kana": "ふゆ", "en": "winter", "bn": "শীতকাল", "category": "noun" }, { "ja":
"天気", "kana": "てんき", "en": "weather", "bn": "আবহাওয়া", "category": "noun" }, {
"ja": "雨", "kana": "あめ", "en": "rain, rainy", "bn": "বৃষ্টি", "category": "noun"
}, { "ja": "雪", "kana": "ゆき", "en": "snow, snowy", "bn": "বরফ", "category":
"noun" }, { "ja": "曇り", "kana": "くもり", "en": "cloudy", "bn": "মেঘলা",
"category": "noun" }, { "ja": "ホテル", "en": "hotel", "bn": "হোটেল", "category":
"noun" }, { "ja": "空港", "kana": "くうこう", "en": "airport", "bn": "বিমানবন্দর",
"category": "noun" }, { "ja": "海", "kana": "うみ", "en": "sea, ocean", "bn":
"সমুদ্র / সাগর", "category": "noun" }, { "ja": "世界", "kana": "せかい", "en":
"world", "bn": "বিশ্ব / পৃথিবী", "category": "noun" }, { "ja": "パーティー", "en":
"party", "bn": "পার্টি / অনুষ্ঠান", "category": "noun" }, { "ja": "［お］祭り",
"kana": "［お］まつり", "en": "festival", "bn": "উৎসব", "category": "noun" }, { "ja":
"すき焼き", "kana": "すきやき", "en": "sukiyaki", "bn": "সুকিয়াকি (জাপানি খাবার)",
"category": "noun" }, { "ja": "刺身", "kana": "さしみ", "en": "sashimi", "bn":
"সাশিমি (কাঁচা মাছের খাবার)", "category": "noun" }, { "ja": "［お］寿司", "kana":
"［お］すし", "en": "sushi", "bn": "সুশি", "category": "noun" }, { "ja": "天ぷら",
"kana": "てんぷら", "en": "tempura", "bn": "তেম্পুরা", "category": "noun" }, { "ja":
"豚肉", "kana": "ぶたにく", "en": "pork", "bn": "শুকরের মাংস", "category": "noun" }, {
"ja": "とり肉", "kana": "とりにく", "en": "chicken", "bn": "মুরগির মাংস", "category":
"noun" }, { "ja": "牛肉", "kana": "ぎゅうにく", "en": "beef", "bn": "গরুর মাংস",
"category": "noun" }, { "ja": "レモン", "en": "lemon", "bn": "লেবু", "category":
"noun" }, { "ja": "生け花", "kana": "いけばな", "en": "flower arrangement", "bn": "ফুল
সাজানো / ইকেবানা", "category": "noun" }, { "ja": "紅葉", "kana": "もみじ", "en":
"maple, autumn leaves", "bn": "ম্যাপল পাতা / লাল পাতা", "category": "noun" }, {
"ja": "どちら", "en": "which one (of two)", "bn": "কোনটি (দুটির মধ্যে)",
"category": "pronoun" }, { "ja": "どちらも", "en": "both", "bn": "উভয়টি / দুটোই",
"category": "pronoun" }, { "ja": "一番", "kana": "いちばん", "en": "the most, best",
"bn": "সবচেয়ে / সবচেয়ে বেশি", "category": "adverb" }, { "ja": "ずっと", "en": "by
far", "bn": "অনেক বেশি", "category": "adverb" }, { "ja": "初めて", "kana": "はじめて",
"en": "for the first time", "bn": "প্রথমবার", "category": "adverb" }, { "ja":
"ただいま", "en": "I'm home", "bn": "আমি বাড়ি ফিরেছি", "category": "phrase" }, {
"ja": "お帰りなさい", "kana": "おかえりなさい", "en": "welcome home", "bn": "ফিরে আসার জন্য
স্বাগতম", "category": "phrase" }, { "ja": "わあ、すごい 人ですね", "kana": "わあ、すごい ひとですね",
"en": "wow, look at all people", "bn": "বাহ্, কত মানুষ!", "category": "phrase"
}, { "ja": "疲れました", "kana": "つかれました", "en": "I'm tired", "bn": "ক্লান্ত হয়ে
পড়েছি", "category": "phrase" }, { "ja": "祇園祭", "kana": "ぎおんまつり", "en": "Gion
Festival", "bn": "গিয়ন উৎসব", "category": "noun" }, { "ja": "香港", "kana":
"ホンコン", "en": "Hong Kong", "bn": "হংকং", "category": "noun" }, { "ja": "シンガポール",
"en": "Singapore", "bn": "সিঙ্গাপুর", "category": "noun" }, { "ja": "ABC ストア",
"en": "ABC Store", "bn": "এবিসি স্টোর", "category": "noun" }, { "ja": "ジャパン",
"en": "Japan (store)", "bn": "জাপান (সুপারমার্কেট)", "category": "noun" } ] };
"13": [ { "ja": "遊びます", "kana": "あそびます", "en": "enjoy oneself, play", "bn":
"আনন্দ করা / খেলাধুলা করা", "category": "verb" }, { "ja": "泳ぎます", "kana":
"およぎます", "en": "swim", "bn": "সাঁতার কাটা", "category": "verb" }, { "ja":
"［〜を］迎えます", "kana": "むかえます", "en": "go to meet, welcome", "bn": "অভ্যর্থনা
জানানো / স্বাগত জানানো", "category": "verb" }, { "ja": "疲れます", "kana": "つかれます",
"en": "get tired", "bn": "ক্লান্ত হওয়া", "category": "verb" }, { "ja": "結婚します",
"kana": "けっこんします", "en": "marry, get married", "bn": "বিয়ে করা", "category":
"verb" }, { "ja": "買い物します", "kana": "かいものします", "en": "do shopping", "bn":
"কেনাকাটা করা", "category": "verb" }, { "ja": "食事します", "kana": "しょくじします", "en":
"have a meal, dine", "bn": "খাবার খাওয়া", "category": "verb" }, { "ja":
"［公園を〜］散歩します", "kana": "［こうえんを〜］さんぽします", "en": "take a walk [in a park]", "bn":
"[পার্কে] হাঁটাহাঁটি করা", "category": "verb" }, { "ja": "大変［な］", "kana":
"たいへん［な］", "en": "hard, tough, severe", "bn": "কঠিন / কষ্টকর", "category":
"na-adjective" }, { "ja": "欲しい", "kana": "ほしい", "en": "want (something)", "bn":
"চাওয়া / পাওয়ার ইচ্ছা", "category": "i-adjective" }, { "ja": "広い", "kana":
"ひろい", "en": "wide, spacious", "bn": "প্রশস্ত / খোলামেলা", "category":
"i-adjective" }, { "ja": "狭い", "kana": "せまい", "en": "narrow, small", "bn":
"সংকীর্ণ / ছোট", "category": "i-adjective" }, { "ja": "プール", "en": "swimming
pool", "bn": "সুইমিং পুল", "category": "noun" }, { "ja": "川", "kana": "かわ",
"en": "river", "bn": "নদী", "category": "noun" }, { "ja": "美術", "kana": "びじゅつ",
"en": "fine arts", "bn": "চারুকলা / শিল্পকলা", "category": "noun" }, { "ja":
"釣り", "kana": "つり", "en": "fishing", "bn": "মাছ ধরা", "category": "noun" }, {
"ja": "スキー", "en": "skiing", "bn": "স্কি খেলা", "category": "noun" }, { "ja":
"週末", "kana": "しゅうまつ", "en": "weekend", "bn": "সাপ্তাহিক ছুটি", "category":
"noun" }, { "ja": "［お］正月", "kana": "［お］しょうがつ", "en": "New Year's Day", "bn":
"নববর্ষের দিন", "category": "noun" }, { "ja": "〜ごろ", "en": "about ~ (time)",
"bn": "— নাগাদ (সময়)", "category": "phrase" }, { "ja": "何か", "kana": "なにか",
"en": "something", "bn": "কিছু / কোনো কিছু", "category": "pronoun" }, { "ja":
"どこか", "en": "somewhere", "bn": "কোথাও / কোনো স্থান", "category": "pronoun" }, {
"ja": "のどが かわきます", "en": "get thirsty", "bn": "পিপাসা পাওয়া", "category": "verb"
}, { "ja": "おなかが すきます", "en": "get hungry", "bn": "ক্ষুধা পাওয়া", "category":
"verb" }, { "ja": "そう しましょう", "en": "let's do that", "bn": "তাই করা যাক",
"category": "phrase" }, { "ja": "ご注⽂は？", "kana": "ごちゅうもんは？", "en": "may I take
your order?", "bn": "আপনার অর্ডার কি?", "category": "phrase" }, { "ja": "定食",
"kana": "ていしょく", "en": "set meal", "bn": "সেট মিল / থালি খাবার", "category":
"noun" }, { "ja": "牛どん", "kana": "ぎゅうどん", "en": "beef bowl", "bn": "গিউদোন (গরুর
মাংসের বাটি-ভাত)", "category": "noun" }, { "ja": "［少々］お待ち ください", "kana":
"［しょうしょう］おまち ください", "en": "please wait [a moment]", "bn": "দয়া করে [একটু]
অপেক্ষা করুন", "category": "phrase" }, { "ja": "〜で ございます", "en": "polite form of
です", "bn": "হয় / আছেন (অতি বিনম্র)", "category": "phrase" }, { "ja": "別々に",
"kana": "べつべつに", "en": "separately", "bn": "আলাদাভাবে", "category": "adverb" },
{ "ja": "アキックス", "en": "Akikkusu (company)", "bn": "আকিক্স", "category": "noun"
}, { "ja": "おはようテレビ", "en": "Ohayou TV", "bn": "ওহাইও টিভি", "category": "noun"
} ], "14": [ { "ja": "［〜を］つけます", "en": "turn on", "bn": "চালু করা / জ্বালানো",
"category": "verb" }, { "ja": "［〜を］消します", "kana": "けします", "en": "turn off",
"bn": "বন্ধ করা / নেভানো", "category": "verb" }, { "ja": "［〜を］開けます", "kana":
"あけます", "en": "open", "bn": "খোলা", "category": "verb" }, { "ja": "［〜を］閉めます",
"kana": "しめます", "en": "close, shut", "bn": "বন্ধ করা / আটকানো", "category":
"verb" }, { "ja": "急ぎます", "kana": "いそぎます", "en": "hurry", "bn": "তাড়াতাড়ি করা",
"category": "verb" }, { "ja": "［〜を］待ちます", "kana": "まちます", "en": "wait", "bn":
"অপেক্ষা করা", "category": "verb" }, { "ja": "［〜を］持ちます", "kana": "もちます", "en":
"hold, carry", "bn": "ধরা / বহন করা", "category": "verb" }, { "ja": "［〜を］取ります",
"kana": "とります", "en": "take, pass", "bn": "নেওয়া / এগিয়ে দেওয়া", "category":
"verb" }, { "ja": "［〜を］手伝います", "kana": "てつだいます", "en": "help (with a task)",
"bn": "কাজে সাহায্য করা", "category": "verb" }, { "ja": "［〜を］呼びます", "kana":
"よびます", "en": "call", "bn": "ডাকা", "category": "verb" }, { "ja": "［〜を］話します",
"kana": "はなします", "en": "speak, talk", "bn": "কথা বলা", "category": "verb" }, {
"ja": "［〜を］使います", "kana": "つかいます", "en": "use", "bn": "ব্যবহার করা", "category":
"verb" }, { "ja": "［〜を］止めます", "kana": "とめます", "en": "stop, park", "bn": "থামানো
/ পার্ক করা", "category": "verb" }, { "ja": "［〜を］見せます", "kana": "みせます", "en":
"show", "bn": "দেখানো", "category": "verb" }, { "ja": "［住所を〜］教えます", "kana":
"［じゅうしょを〜］おしえます", "en": "tell [an address]", "bn": "[ঠিকানা] বলা / জানানো",
"category": "verb" }, { "ja": "［〜に］座ります", "kana": "すわります", "en": "sit down",
"bn": "বসা", "category": "verb" }, { "ja": "立ちます", "kana": "たちます", "en": "stand
up", "bn": "দাঁড়ানো", "category": "verb" }, { "ja": "［喫茶店に〜］入ります", "kana":
"［きっさてんに〜］はいります", "en": "enter [a café]", "bn": "[ক্যাফেতে] ঢোকা / প্রবেশ করা",
"category": "verb" }, { "ja": "［喫茶店を〜］出ます", "kana": "［きっさてんを〜］でます", "en": "go
out [of café]", "bn": "[ক্যাফে থেকে] বের হওয়া", "category": "verb" }, { "ja":
"［雨が〜］降ります", "kana": "［あめが〜］ふります", "en": "rain", "bn": "[বৃষ্টি] পড়া",
"category": "verb" }, { "ja": "［〜を］コピーします", "en": "copy", "bn": "ফটোকপি করা",
"category": "verb" }, { "ja": "電気", "kana": "でんき", "en": "electricity, light",
"bn": "বিদ্যুৎ / বাতি", "category": "noun" }, { "ja": "エアコン", "en": "air
conditioner", "bn": "শীতাতপ নিয়ন্ত্রণ যন্ত্র / এসি", "category": "noun" }, {
"ja": "パスポート", "en": "passport", "bn": "পাসপোর্ট", "category": "noun" }, { "ja":
"名前", "kana": "なまえ", "en": "name", "bn": "নাম", "category": "noun" }, { "ja":
"住所", "kana": "じゅうしょ", "en": "address", "bn": "ঠিকানা", "category": "noun" }, {
"ja": "地図", "kana": "ちず", "en": "map", "bn": "মানচিত্র", "category": "noun" }, {
"ja": "塩", "kana": "しお", "en": "salt", "bn": "লবণ", "category": "noun" }, {
"ja": "砂糖", "kana": "さとう", "en": "sugar", "bn": "চিনি", "category": "noun" }, {
"ja": "問題", "kana": "もんだい", "en": "problem, question", "bn": "সমস্যা / প্রশ্ন",
"category": "noun" }, { "ja": "答え", "kana": "こたえ", "en": "answer", "bn":
"উত্তর", "category": "noun" }, { "ja": "読み方", "kana": "よみかた", "en": "way of
reading", "bn": "পড়ার নিয়ম / পদ্ধতি", "category": "noun" }, { "ja": "〜方",
"kana": "〜かた", "en": "how to ~, way of ~", "bn": "করার নিয়ম / পদ্ধতি",
"category": "noun" }, { "ja": "まっすぐ", "en": "straight", "bn": "সোজা",
"category": "adverb" }, { "ja": "ゆっくり", "en": "slowly, leisurely", "bn": "ধীরে
ধীরে / আস্তে", "category": "adverb" }, { "ja": "すぐ", "en": "immediately", "bn":
"অবিলম্বে / এখনই", "category": "adverb" }, { "ja": "また", "en": "again", "bn":
"আবার / পুনরায়", "category": "adverb" }, { "ja": "あとで", "en": "later", "bn":
"পরে", "category": "adverb" }, { "ja": "もう 少し", "kana": "もう すこし", "en": "a
little more", "bn": "আরেকটু", "category": "phrase" }, { "ja": "もう 〜", "en":
"more, another ~", "bn": "আরও ~", "category": "phrase" }, { "ja": "さあ", "en":
"right (encouraging)", "bn": "চলুন / বেশ", "category": "phrase" }, { "ja":
"あれ？", "en": "oh! eh?", "bn": "আরে! / তাই নাকি?", "category": "phrase" }, {
"ja": "信号を 右へ 曲がって ください", "kana": "しんごうを みぎへ まがって ください", "en": "turn right at
traffic lights", "bn": "সিগন্যাল থেকে ডানে মোড় নিন", "category": "phrase" }, {
"ja": "これで お願いします", "kana": "これで おねがいします", "en": "pay with this", "bn": "এটা
রাখুন (ভাড়া দেওয়ার সময়)", "category": "phrase" }, { "ja": "お釣り", "kana": "おつり",
"en": "change (money)", "bn": "ভাংতি / ফেরত টাকা", "category": "noun" }, { "ja":
"みどり町", "kana": "みどりちょう", "en": "Midoricho", "bn": "মিদোরি-চো (কাল্পনিক শহর)",
"category": "noun" } ], "15": [ { "ja": "［〜を］置きます", "kana": "おきます", "en": "put,
place", "bn": "রাখা", "category": "verb" }, { "ja": "作ります、造ります", "kana":
"つくります", "en": "make, produce", "bn": "তৈরি করা / উৎপাদন করা", "category":
"verb" }, { "ja": "［〜を］売ります", "kana": "うります", "en": "sell", "bn": "বিক্রি করা",
"category": "verb" }, { "ja": "［〜を］知ります", "kana": "しります", "en": "get to know",
"bn": "জানা / পরিচিত হওয়া", "category": "verb" }, { "ja": "［〜に］住みます", "kana":
"すみます", "en": "live, reside", "bn": "বসবাস করা", "category": "verb" }, { "ja":
"［〜を］研究します", "kana": "けんきゅうします", "en": "do research", "bn": "গবেষণা করা",
"category": "verb" }, { "ja": "資料", "kana": "しりょう", "en": "materials, data",
"bn": "তথ্য / নথি", "category": "noun" }, { "ja": "カタログ", "en": "catalogue",
"bn": "ক্যাটালগ", "category": "noun" }, { "ja": "時刻表", "kana": "じこくひょう", "en":
"timetable", "bn": "সময়সূচি", "category": "noun" }, { "ja": "服", "kana": "ふく",
"en": "clothes", "bn": "পোশাক / জামাকাপড়", "category": "noun" }, { "ja": "製品",
"kana": "せいひん", "en": "products, manufactured goods", "bn": "পণ্য / উৎপাদিত
দ্রব্য", "category": "noun" }, { "ja": "ソフト", "en": "software", "bn":
"সফটওয়্যার", "category": "noun" }, { "ja": "電子辞書", "kana": "でんしじしょ", "en":
"electronic dictionary", "bn": "ইলেকট্রনিক অভিধান", "category": "noun" }, {
"ja": "経済", "kana": "けいざい", "en": "economy", "bn": "অর্থনীতি", "category":
"noun" }, { "ja": "市役所", "kana": "しやくしょ", "en": "city hall", "bn": "পৌরসভা / নগর
ভবন", "category": "noun" }, { "ja": "高校", "kana": "こうこう", "en": "senior high
school", "bn": "উচ্চ মাধ্যমিক বিদ্যালয়", "category": "noun" }, { "ja": "歯医者",
"kana": "はいしゃ", "en": "dentist", "bn": "দন্তচিকিৎসক", "category": "noun" }, {
"ja": "独身", "kana": "どくしん", "en": "single, unmarried", "bn": "অবিবাহিত",
"category": "noun" }, { "ja": "すみません", "en": "I'm sorry", "bn": "মাফ করবেন /
দুঃখিত", "category": "phrase" }, { "ja": "皆さん", "kana": "みなさん", "en":
"everybody", "bn": "উপস্থিত সকলে / আপনারা সবাই", "category": "noun" }, { "ja":
"思い出します", "kana": "おもいだします", "en": "remember, recollect", "bn": "মনে পড়া / স্মরণ
করা", "category": "verb" }, { "ja": "いらっしゃいます", "en": "be (honorific of います)",
"bn": "আছেন (সম্মানসূচক)", "category": "verb" }, { "ja": "日本橋", "kana":
"にっぽんばし", "en": "Nipponbashi", "bn": "নিপ্পনবাশি (ওসাকার এলাকা)", "category":
"noun" }, { "ja": "みんなの インタビュー", "en": "Minna no Interview", "bn": "সবার
সাক্ষাৎকার (টিভি অনুষ্ঠান)", "category": "noun" } ], "16": [ { "ja":
"［電車に〜］乗ります", "kana": "のります", "en": "ride, get on [train]", "bn": "[ট্রেনে] ওঠা
/ চড়া", "category": "verb" }, { "ja": "［電車を〜］降ります", "kana": "おります", "en": "get
off [train]", "bn": "[ট্রেন থেকে] নামা", "category": "verb" }, { "ja": "乗り換えます",
"kana": "のりかえます", "en": "change [trains], transfer", "bn": "যানবাহন বদল করা",
"category": "verb" }, { "ja": "［シャワーを〜］浴びます", "kana": "あびます", "en": "take [a
shower]", "bn": "[শাওয়ারে] গোসল করা", "category": "verb" }, { "ja": "［〜を］入れます",
"kana": "いれます", "en": "put in, insert", "bn": "ভেতরে রাখা / ঢোকানো", "category":
"verb" }, { "ja": "［〜を］出します", "kana": "だします", "en": "take out, hand in", "bn":
"বের করা / জমা দেওয়া", "category": "verb" }, { "ja": "［お金を〜］下ろします", "kana":
"おろします", "en": "withdraw [money]", "bn": "[টাকা] তোলা / উত্তোলন করা",
"category": "verb" }, { "ja": "［大学に〜］入ります", "kana": "はいります", "en": "enter
[university]", "bn": "[বিশ্ববিদ্যালয়ে] ভর্তি হওয়া", "category": "verb" }, {
"ja": "［大学を〜］出ます", "kana": "でます", "en": "graduate from [university]", "bn":
"[বিশ্ববিদ্যালয়] পাস করা", "category": "verb" }, { "ja": "［〜を］押します", "kana":
"おします", "en": "push, press", "bn": "ধাক্কা দেওয়া / চাপা", "category": "verb" },
{ "ja": "［〜を］飲みます", "kana": "のみます", "en": "drink alcohol", "bn": "মদ পান করা",
"category": "verb" }, { "ja": "［〜を］始めます", "kana": "はじめます", "en": "start, begin",
"bn": "শুরু করা", "category": "verb" }, { "ja": "［〜を］見学します", "kana": "けんがくします",
"en": "tour, visit to study", "bn": "পরিদর্শন করে শেখা", "category": "verb" }, {
"ja": "電話します", "kana": "でんわします", "en": "phone, make a call", "bn": "ফোন করা",
"category": "verb" }, { "ja": "若い", "kana": "わかい", "en": "young", "bn": "তরুণ /
কমবয়সী", "category": "i-adjective" }, { "ja": "長い", "kana": "ながい", "en": "long",
"bn": "লম্বা / দীর্ঘ", "category": "i-adjective" }, { "ja": "短い", "kana":
"みじかい", "en": "short", "bn": "ছোট / খাটো", "category": "i-adjective" }, { "ja":
"明るい", "kana": "あかるい", "en": "bright, light", "bn": "উজ্জ্বল / আলোকময়",
"category": "i-adjective" }, { "ja": "暗い", "kana": "くらい", "en": "dark", "bn":
"অন্ধকার", "category": "i-adjective" }, { "ja": "体", "kana": "からだ", "en": "body,
health", "bn": "শরীর / স্বাস্থ্য", "category": "noun" }, { "ja": "頭", "kana":
"あたま", "en": "head, brain", "bn": "মাথা / বুদ্ধি", "category": "noun" }, { "ja":
"髪", "kana": "かみ", "en": "hair", "bn": "চুল", "category": "noun" }, { "ja": "顔",
"kana": "かお", "en": "face", "bn": "মুখমণ্ডল / চেহারা", "category": "noun" }, {
"ja": "目", "kana": "め", "en": "eye", "bn": "চোখ", "category": "noun" }, { "ja":
"耳", "kana": "みみ", "en": "ear", "bn": "কান", "category": "noun" }, { "ja": "鼻",
"kana": "はな", "en": "nose", "bn": "নাক", "category": "noun" }, { "ja": "口",
"kana": "くち", "en": "mouth", "bn": "মুখ", "category": "noun" }, { "ja": "歯",
"kana": "は", "en": "tooth", "bn": "দাঁত", "category": "noun" }, { "ja": "お腹",
"kana": "おなか", "en": "stomach", "bn": "পেট", "category": "noun" }, { "ja": "足",
"kana": "あし", "en": "leg, foot", "bn": "পা", "category": "noun" }, { "ja": "背",
"kana": "せ", "en": "height, stature", "bn": "উচ্চতা / দৈহিক গঠন", "category":
"noun" }, { "ja": "サービス", "en": "service", "bn": "সেবা / সার্ভিস", "category":
"noun" }, { "ja": "ジョギング", "en": "jogging", "bn": "জগিং", "category": "noun" },
{ "ja": "シャワー", "en": "shower", "bn": "শাওয়ার / ঝরনা", "category": "noun" }, {
"ja": "緑", "kana": "みどり", "en": "green, greenery", "bn": "সবুজ / গাছপালা",
"category": "noun" }, { "ja": "［お］寺", "kana": "［お］てら", "en": "Buddhist temple",
"bn": "বৌদ্ধ মন্দির", "category": "noun" }, { "ja": "神社", "kana": "じんじゃ", "en":
"Shinto shrine", "bn": "শিন্তো মন্দির", "category": "noun" }, { "ja": "〜番",
"kana": "〜ばん", "en": "number -", "bn": "— নম্বর", "category": "counter" }, {
"ja": "どうやって", "en": "how, in what way", "bn": "কীভাবে / কোন উপায়ে", "category":
"adverb" }, { "ja": "どの 〜", "en": "which ~ (of three+)", "bn": "কোন ~ (তিনটির
বেশিতে)", "category": "pronoun" }, { "ja": "どれ", "en": "which one (of three+)",
"bn": "কোনটি (তিনটির বেশিতে)", "category": "pronoun" }, { "ja": "すごいですね", "en":
"that's amazing!", "bn": "দারুণ তো! / অসাধারণ!", "category": "phrase" }, { "ja":
"［いいえ、］まだまだです", "en": "still long way to go", "bn": "[না,] এখনো অনেক বাকি",
"category": "phrase" }, { "ja": "お引き出しですか", "kana": "おひきだしですか", "en": "making a
withdrawal?", "bn": "টাকা তুলবেন কি?", "category": "phrase" }, { "ja": "まず",
"en": "first of all", "bn": "সবার আগে / প্রথমে", "category": "adverb" }, { "ja":
"次に", "kana": "つぎに", "en": "next, then", "bn": "এরপর / পরবর্তীতে", "category":
"adverb" }, { "ja": "キャッシュカード", "en": "ATM cash card", "bn": "ক্যাশ কার্ড /
এটিএম কার্ড", "category": "noun" }, { "ja": "暗証番号", "kana": "あんしょうばんごう", "en":
"PIN number", "bn": "পিন নম্বর / গোপন কোড", "category": "noun" }, { "ja": "金額",
"kana": "きんがく", "en": "amount of money", "bn": "টাকার পরিমাণ", "category":
"noun" }, { "ja": "確認", "kana": "かくにん", "en": "confirmation", "bn":
"নিশ্চিতকরণ", "category": "noun" }, { "ja": "ボタン", "en": "button", "bn": "বোতাম
/ বাটন", "category": "noun" }, { "ja": "JR", "en": "Japan Railways", "bn":
"জাপান রেলওয়ে", "category": "noun" }, { "ja": "雪祭り", "kana": "ゆきまつり", "en":
"Snow Festival", "bn": "তুষার উৎসব", "category": "noun" }, { "ja": "バンドン", "en":
"Bandung", "bn": "বান্দুং", "category": "noun" }, { "ja": "フランケン", "en":
"Franken", "bn": "ফ্রাঙ্কেন", "category": "noun" }, { "ja": "ベラクルス", "en":
"Veracruz", "bn": "ভেরাক্রুজ", "category": "noun" }, { "ja": "梅田", "kana":
"うめだ", "en": "Umeda", "bn": "উমেদা (ওসাকার এলাকা)", "category": "noun" }, {
"ja": "大学前", "kana": "だいがくまえ", "en": "Daigakumae (bus stop)", "bn":
"বিশ্ববিদ্যালয়ের সামনে (স্টপ)", "category": "noun" } ], "17": [ { "ja":
"［〜を］覚えます", "kana": "おぼえます", "en": "memorise, remember", "bn": "মুখস্থ করা / মনে
রাখা", "category": "verb" }, { "ja": "［〜を］忘れます", "kana": "わすれます", "en":
"forget", "bn": "ভুলে যাওয়া", "category": "verb" }, { "ja": "［〜を］なくします", "en":
"lose", "bn": "হারিয়ে ফেলা", "category": "verb" }, { "ja": "［〜を］払います", "kana":
"はらいます", "en": "pay", "bn": "মূল্য পরিশোধ করা", "category": "verb" }, { "ja":
"［〜を］返します", "kana": "かえします", "en": "give back, return", "bn": "ফেরত দেওয়া",
"category": "verb" }, { "ja": "出かけます", "kana": "でかけます", "en": "go out", "bn":
"বাইরে যাওয়া / বের হওয়া", "category": "verb" }, { "ja": "［〜を］脱ぎます", "kana":
"ぬぎます", "en": "take off (clothes, shoes)", "bn": "খোলা (পোশাক বা জুতো)",
"category": "verb" }, { "ja": "［〜を］持って 行きます", "kana": "もって いきます", "en": "take
(something)", "bn": "সাথে করে নিয়ে যাওয়া", "category": "verb" }, { "ja":
"［〜を］持って 来ます", "kana": "もって きます", "en": "bring (something)", "bn": "সাথে করে
নিয়ে আসা", "category": "verb" }, { "ja": "心配します", "kana": "しんぱいします", "en":
"worry", "bn": "চিন্তা করা / উদ্বিগ্ন হওয়া", "category": "verb" }, { "ja":
"残業します", "kana": "ざんぎょうします", "en": "work overtime", "bn": "অতিরিক্ত সময় কাজ
করা", "category": "verb" }, { "ja": "出張します", "kana": "しゅっちょうします", "en": "go on
business trip", "bn": "দাপ্তরিক সফরে যাওয়া", "category": "verb" }, { "ja":
"［薬を〜］飲みます", "kana": "［くすりを〜］のみます", "en": "take [medicine]", "bn": "[ওষুধ] খাওয়া
/ সেবন করা", "category": "verb" }, { "ja": "［お風呂に〜］入ります", "kana":
"［おふろに〜］はいります", "en": "take [a bath]", "bn": "গোসল করা", "category": "verb" }, {
"ja": "大切［な］", "kana": "たいせつ［な］", "en": "important, precious", "bn":
"গুরুত্বপূর্ণ / মূল্যবান", "category": "na-adjective" }, { "ja": "大丈夫［な］",
"kana": "だいじょうぶ［な］", "en": "all right, okay", "bn": "ঠিক আছে / সমস্যা নেই",
"category": "na-adjective" }, { "ja": "危ない", "kana": "あぶない", "en": "dangerous",
"bn": "বিপজ্জনক", "category": "i-adjective" }, { "ja": "禁煙", "kana": "きんえん",
"en": "no smoking", "bn": "ধূমপান নিষেধ", "category": "noun" }, { "ja":
"［健康］保険証", "kana": "［けんこう］ほけんしょう", "en": "[health] insurance card", "bn":
"[স্বাস্থ্য] বীমা কার্ড", "category": "noun" }, { "ja": "熱", "kana": "ねつ", "en":
"temperature, fever", "bn": "জ্বর / তাপমাত্রা", "category": "noun" }, { "ja":
"病気", "kana": "びょうき", "en": "illness, disease", "bn": "অসুখ / রোগ", "category":
"noun" }, { "ja": "薬", "kana": "くすり", "en": "medicine", "bn": "ওষুধ",
"category": "noun" }, { "ja": "［お］風呂", "kana": "［お］ふろ", "en": "bath", "bn":
"স্নান / বাথটাব", "category": "noun" }, { "ja": "上着", "kana": "うわぎ", "en":
"jacket, outerwear", "bn": "জ্যাকেট / ওপরের পোশাক", "category": "noun" }, {
"ja": "下着", "kana": "したぎ", "en": "underwear", "bn": "অন্তর্বাস", "category":
"noun" }, { "ja": "2、3日", "kana": "に、さんにち", "en": "two or three days", "bn":
"দুই-তিন দিন", "category": "noun" }, { "ja": "2、3〜", "en": "two or three ~",
"bn": "দুই-তিনটি ~", "category": "counter" }, { "ja": "〜までに", "en": "before ~,
by ~", "bn": "— এর মধ্যে (সময়সীমা)", "category": "phrase" }, { "ja": "ですから",
"en": "therefore, so", "bn": "তাই / অতএব", "category": "phrase" }, { "ja": "どう
しましたか", "en": "what's the matter?", "bn": "কী হয়েছে? / কী সমস্যা?", "category":
"phrase" }, { "ja": "喉", "kana": "のど", "en": "throat", "bn": "গলা", "category":
"noun" }, { "ja": "［〜が］痛いです", "kana": "［〜が］いたいです", "en": "have pain in ~", "bn":
"[] ব্যথা করছে", "category": "phrase" }, { "ja": "風邪", "kana": "かぜ", "en":
"cold, flu", "bn": "সর্দি / ঠান্ডা লাগা", "category": "noun" }, { "ja": "それから",
"en": "and, furthermore", "bn": "আর / তাছাড়াও", "category": "phrase" }, { "ja":
"お大事に", "kana": "おだいじに", "en": "take care of yourself", "bn": "নিজের যত্ন
নেবেন", "category": "phrase" } ], "18": [ { "ja": "［〜が］できます", "en": "be able to,
can", "bn": "পারা / সক্ষম হওয়া", "category": "verb" }, { "ja": "［〜を］洗います",
"kana": "あらいます", "en": "wash", "bn": "ধোয়া / পরিষ্কার করা", "category": "verb"
}, { "ja": "［〜を］弾きます", "kana": "ひきます", "en": "play (instrument)", "bn": "বাজানো
(বাদ্যযন্ত্র)", "category": "verb" }, { "ja": "［〜を］歌います", "kana": "うたいます", "en":
"sing", "bn": "গান গাওয়া", "category": "verb" }, { "ja": "［〜を］集めます", "kana":
"あつめます", "en": "collect, gather", "bn": "সংগ্রহ করা / জমানো", "category": "verb"
}, { "ja": "［〜を］捨てます", "kana": "すてます", "en": "throw away", "bn": "ফেলে দেওয়া",
"category": "verb" }, { "ja": "［〜を］換えます", "kana": "かえます", "en": "exchange,
change", "bn": "বিনিময় করা / বদলানো", "category": "verb" }, { "ja": "［〜を］運転します",
"kana": "うんてんします", "en": "drive", "bn": "গাড়ি চালানো", "category": "verb" }, {
"ja": "［〜を］予約します", "kana": "よやくします", "en": "reserve, book", "bn": "বুকিং করা /
অগ্রিম রাখা", "category": "verb" }, { "ja": "ピアノ", "en": "piano", "bn":
"পিয়ানো", "category": "noun" }, { "ja": "〜メートル", "en": "- meter", "bn": "—
মিটার", "category": "counter" }, { "ja": "現金", "kana": "げんきん", "en": "cash",
"bn": "নগদ অর্থ", "category": "noun" }, { "ja": "趣味", "kana": "しゅみ", "en":
"hobby", "bn": "শখ", "category": "noun" }, { "ja": "日記", "kana": "にっき", "en":
"diary", "bn": "দিনলিপি / ডায়েরি", "category": "noun" }, { "ja": "お祈り", "kana":
"おいのり", "en": "prayer", "bn": "প্রার্থনা / দোয়া", "category": "noun" }, { "ja":
"課長", "kana": "かちょう", "en": "section head", "bn": "শাখা প্রধান", "category":
"noun" }, { "ja": "部長", "kana": "ぶちょう", "en": "department head", "bn": "বিভাগীয়
প্রধান", "category": "noun" }, { "ja": "社長", "kana": "しゃちょう", "en": "company
president", "bn": "কোম্পানি প্রধান", "category": "noun" }, { "ja": "動物", "kana":
"どうぶつ", "en": "animal", "bn": "পশু / প্রাণী", "category": "noun" }, { "ja": "馬",
"kana": "うま", "en": "horse", "bn": "ঘোড়া", "category": "noun" }, { "ja":
"インターネット", "en": "the Internet", "bn": "ইন্টারনেট", "category": "noun" }, {
"ja": "特に", "kana": "とくに", "en": "especially", "bn": "বিশেষ করে", "category":
"adverb" }, { "ja": "へえ", "en": "really! (surprise)", "bn": "তাই নাকি!
(বিস্ময়)", "category": "phrase" }, { "ja": "それは おもしろいですね", "en": "that's
interesting!", "bn": "বিষয়টি তো বেশ মজার!", "category": "phrase" }, { "ja":
"なかなか", "en": "not easily (neg.)", "bn": "সহজে নয় / প্রায় হয় না", "category":
"adverb" }, { "ja": "本当ですか", "kana": "ほんとうですか", "en": "really?", "bn": "সত্যিই
কি তাই?", "category": "phrase" }, { "ja": "ぜひ", "en": "by all means, really",
"bn": "অবশ্যই / সানন্দে", "category": "adverb" }, { "ja": "故郷", "kana": "ふるさと",
"en": "Furusato (song title)", "bn": "ফুরুসাতো (জাপানি গান)", "category": "noun"
}, { "ja": "ビートルズ", "en": "the Beatles", "bn": "দ্য বিটল্‌স", "category": "noun"
}, { "ja": "秋葉原", "kana": "あきはばら", "en": "Akihabara", "bn": "আকিহাবারা (টোকিওর
এলাকা)", "category": "noun" } ], "19": [ { "ja": "［山に〜］登ります", "kana": "のぼります",
"en": "climb, go up", "bn": "[পাহাড়ে] ওঠা / চড়া", "category": "verb" }, { "ja":
"［ホテルに〜］泊まります", "kana": "とまります", "en": "stay [at a hotel]", "bn": "[হোটেলে] রাত
কাটানো", "category": "verb" }, { "ja": "［〜を］掃除します", "kana": "そうじします", "en":
"clean (a room)", "bn": "ঘর পরিষ্কার করা", "category": "verb" }, { "ja":
"［〜を］洗濯します", "kana": "せんたくします", "en": "wash (clothes)", "bn": "কাপড় ধোয়া",
"category": "verb" }, { "ja": "［〜に］なります", "en": "become", "bn": "হওয়া / পরিণত
হওয়া", "category": "verb" }, { "ja": "眠い", "kana": "ねむい", "en": "sleepy", "bn":
"ঘুম পাওয়া / ক্লান্ত", "category": "i-adjective" }, { "ja": "強い", "kana": "つよい",
"en": "strong", "bn": "শক্তিশালী / বলবান", "category": "i-adjective" }, { "ja":
"弱い", "kana": "よわい", "en": "weak", "bn": "দুর্বল", "category": "i-adjective" },
{ "ja": "練習", "kana": "れんしゅう", "en": "practice", "bn": "অনুশীলন / চর্চা",
"category": "noun" }, { "ja": "ゴルフ", "en": "golf", "bn": "গলফ খেলা", "category":
"noun" }, { "ja": "相撲", "kana": "すもう", "en": "sumo wrestling", "bn": "সুমো
কুস্তি", "category": "noun" }, { "ja": "お茶", "kana": "おちゃ", "en": "tea
ceremony", "bn": "চা পানের আনুষ্ঠানিকতা", "category": "noun" }, { "ja": "日",
"kana": "ひ", "en": "day, date", "bn": "দিন / তারিখ", "category": "noun" }, {
"ja": "調子", "kana": "ちょうし", "en": "condition, health state", "bn": "শারীরিক
অবস্থা / হালচাল", "category": "noun" }, { "ja": "一度", "kana": "いちど", "en":
"once", "bn": "একবার", "category": "adverb" }, { "ja": "一度も", "kana": "いちども",
"en": "not once, never", "bn": "একবারও না (না-বোধক)", "category": "adverb" }, {
"ja": "だんだん", "en": "gradually", "bn": "ধীরে ধীরে / ক্রমশ", "category": "adverb"
}, { "ja": "もうすぐ", "en": "soon", "bn": "শীঘ্রই / কিছুক্ষণের মধ্যে", "category":
"adverb" }, { "ja": "おかげさまで", "en": "thank you (for help)", "bn": "আপনাদের দোয়ায়
/ কৃপায়", "category": "phrase" }, { "ja": "でも", "en": "but", "bn": "কিন্তু",
"category": "phrase" }, { "ja": "乾杯", "kana": "かんぱい", "en": "cheers!", "bn":
"চিয়ার্স! / পাত্র পূর্ণ হোক", "category": "phrase" }, { "ja": "ダイエット", "en":
"diet", "bn": "ডায়েট / খাদ্য নিয়ন্ত্রণ", "category": "noun" }, { "ja": "無理［な］",
"kana": "むり［な］", "en": "excessive, impossible", "bn": "অসম্ভব / মাত্রাতিরিক্ত",
"category": "na-adjective" }, { "ja": "体に いい", "kana": "からだに いい", "en": "good
for health", "bn": "স্বাস্থ্যের জন্য ভালো", "category": "phrase" }, { "ja":
"東京スカイツリー", "kana": "とうきょうスカイツリー", "en": "Tokyo Sky Tree", "bn": "টোকিও
স্কাইট্রি", "category": "noun" }, { "ja": "葛飾北斎", "kana": "かつしかほくさい", "en":
"Katsushika Hokusai", "bn": "কাতসুশিকা হোকুসাই (চিত্রশিল্পী)", "category":
"noun" } ], "20": [ { "ja": "［ビザが〜］要ります", "kana": "いります", "en": "need, require
[a visa]", "bn": "[ভিসা] লাগা / প্রয়োজন হওয়া", "category": "verb" }, { "ja":
"［〜を］調べます", "kana": "しらべます", "en": "check, investigate", "bn": "খোঁজ নেওয়া /
যাচাই করা", "category": "verb" }, { "ja": "［〜を］修理します", "kana": "しゅうりします", "en":
"repair, fix", "bn": "মেরামত করা / ঠিক করা", "category": "verb" }, { "ja": "僕",
"kana": "ぼく", "en": "I (informal, male)", "bn": "আমি (অনানুষ্ঠানিক, পুরুষদের)",
"category": "pronoun" }, { "ja": "君", "kana": "きみ", "en": "you (informal)",
"bn": "তুমি (অনানুষ্ঠানিক)", "category": "pronoun" }, { "ja": "〜君", "kana":
"〜くん", "en": "Mr. (informal suffix)", "bn": "জনাব / ভাই (অনানুষ্ঠানিক)",
"category": "phrase" }, { "ja": "うん", "en": "yes (informal)", "bn": "হ্যাঁ / হুম
(অনানুষ্ঠানিক)", "category": "phrase" }, { "ja": "ううん", "en": "no (informal)",
"bn": "না / উঁহু (অনানুষ্ঠানিক)", "category": "phrase" }, { "ja": "言葉", "kana":
"ことば", "en": "word, language", "bn": "শব্দ / ভাষা", "category": "noun" }, {
"ja": "着物", "kana": "きもの", "en": "kimono", "bn": "কিমোনো (জাপানি পোশাক)",
"category": "noun" }, { "ja": "ビザ", "en": "visa", "bn": "ভিসা", "category":
"noun" }, { "ja": "初め", "kana": "はじめ", "en": "the beginning", "bn": "শুরু /
প্রথমাংশ", "category": "noun" }, { "ja": "終わり", "kana": "おわり", "en": "the end",
"bn": "শেষ / সমাপ্তি", "category": "noun" }, { "ja": "こっち", "en": "this way,
here (informal)", "bn": "এই দিকে / এখানে", "category": "pronoun" }, { "ja":
"そっち", "en": "that way, there (informal)", "bn": "ওই দিকে / সেখানে", "category":
"pronoun" }, { "ja": "あっち", "en": "that way (over there)", "bn": "সেই দিকে /
ওইখানে (দূরে)", "category": "pronoun" }, { "ja": "どっち", "en": "which one, which
way", "bn": "কোনটি / কোন দিক", "category": "pronoun" }, { "ja": "みんなで", "en":
"all together", "bn": "সবাই মিলে / একসাথে", "category": "adverb" }, { "ja":
"〜けど", "en": ", but (informal)", "bn": ", কিন্তু (অনানুষ্ঠানিক)", "category":
"phrase" }, { "ja": "お腹が いっぱいです", "kana": "おなかが いっぱいです", "en": "(I'm) full",
"bn": "পেট ভরে গেছে", "category": "phrase" }, { "ja": "よかったら", "en": "if you
like", "bn": "চাইলে / আপত্তি না থাকলে", "category": "phrase" }, { "ja": "いろいろ",
"en": "various", "bn": "নানা রকম / বিভিন্ন", "category": "adverb" } ], "21": [ {
"ja": "［〜と］思います", "kana": "おもいます", "en": "think", "bn": "মনে করা / ভাবা",
"category": "verb" }, { "ja": "［〜と］言います", "kana": "いいます", "en": "say", "bn":
"বলা", "category": "verb" }, { "ja": "［〜に］勝ちます", "kana": "かちます", "en": "win",
"bn": "জেতা / জয়লাভ করা", "category": "verb" }, { "ja": "［〜に］負けます", "kana":
"まけます", "en": "lose, be beaten", "bn": "হারা / পরাজিত হওয়া", "category": "verb"
}, { "ja": "［お祭りが〜］あります", "kana": "［おまつりが〜］あります", "en": "[festival] be held",
"bn": "[উৎসব] অনুষ্ঠিত হওয়া", "category": "verb" }, { "ja": "役に 立ちます", "kana":
"やくに たちます", "en": "be useful", "bn": "কাজে লাগা / উপকারী হওয়া", "category":
"verb" }, { "ja": "動きます", "kana": "うごきます", "en": "move, work", "bn": "চলা / কাজ
করা (যন্ত্র)", "category": "verb" }, { "ja": "［会社を〜］やめます", "kana":
"［かいしゃを〜］やめます", "en": "quit, retire from [company]", "bn": "[চাকরি] ছেড়ে দেওয়া /
অবসর নেওয়া", "category": "verb" }, { "ja": "気を つけます", "kana": "きを つけます", "en":
"pay attention, take care", "bn": "সতর্ক থাকা / খেয়াল রাখা", "category": "verb"
}, { "ja": "留学します", "kana": "りゅうがくします", "en": "study abroad", "bn": "বিদেশে পড়তে
যাওয়া", "category": "verb" }, { "ja": "無駄［な］", "kana": "むだ［な］", "en":
"wasteful", "bn": "অপচয়মূলক / অনর্থক", "category": "na-adjective" }, { "ja":
"不便［な］", "kana": "ふべん［な］", "en": "inconvenient", "bn": "অসুবিধাজনক", "category":
"na-adjective" }, { "ja": "凄い", "kana": "すごい", "en": "great, awful", "bn":
"দারুণ / ভয়ানক", "category": "i-adjective" }, { "ja": "本当", "kana": "ほんとう",
"en": "true, truth", "bn": "সত্যি / আসল", "category": "noun" }, { "ja": "嘘",
"kana": "うそ", "en": "lie", "bn": "মিথ্যা", "category": "noun" }, { "ja": "自動車",
"kana": "じどうしゃ", "en": "car, automobile", "bn": "মোটরগাড়ি", "category": "noun"
}, { "ja": "交通", "kana": "こうつう", "en": "traffic, transport", "bn": "যাতায়াত /
ট্রাফিক", "category": "noun" }, { "ja": "物価", "kana": "ぶっか", "en": "[commodity]
prices", "bn": "নিত্যপণ্যের দাম", "category": "noun" }, { "ja": "放送", "kana":
"ほうそう", "en": "announcement, broadcast", "bn": "সম্প্রচার / ঘোষণা", "category":
"noun" }, { "ja": "ニュース", "en": "news", "bn": "সংবাদ / খবর", "category": "noun"
}, { "ja": "アニメ", "en": "anime", "bn": "অ্যানিমে (জাপানি কার্টুন)", "category":
"noun" }, { "ja": "漫画", "kana": "まんが", "en": "comic book, manga", "bn": "কমিক বই
/ মাঙ্গা", "category": "noun" }, { "ja": "デザイン", "en": "design, artwork", "bn":
"নকশা / ডিজাইন", "category": "noun" }, { "ja": "夢", "kana": "ゆめ", "en": "dream",
"bn": "স্বপ্ন", "category": "noun" }, { "ja": "天才", "kana": "てんさい", "en":
"genius", "bn": "প্রতিভাবান / জিনিয়াস", "category": "noun" }, { "ja": "試合",
"kana": "しあい", "en": "game, match", "bn": "ম্যাচ / খেলা", "category": "noun" },
{ "ja": "意見", "kana": "いけん", "en": "opinion", "bn": "মতামত", "category": "noun"
}, { "ja": "話", "kana": "はなし", "en": "talk, speech, story", "bn": "কথা / গল্প",
"category": "noun" }, { "ja": "地球", "kana": "ちきゅう", "en": "earth", "bn": "পৃথিবী
(গ্রহ)", "category": "noun" }, { "ja": "月", "kana": "つき", "en": "moon", "bn":
"চাঁদ", "category": "noun" }, { "ja": "最近", "kana": "さいきん", "en": "recently,
these days", "bn": "সম্প্রতি / আজকাল", "category": "noun" }, { "ja": "多分",
"kana": "たぶん", "en": "probably, perhaps", "bn": "সম্ভবত / হয়তো", "category":
"adverb" }, { "ja": "きっと", "en": "surely, definitely", "bn": "অবশ্যই /
নিশ্চিতভাবে", "category": "adverb" }, { "ja": "本当に", "kana": "ほんとうに", "en":
"really, truly", "bn": "সত্যিই / প্রকৃতপক্ষে", "category": "adverb" }, { "ja":
"そんなに", "en": "not so (with neg.)", "bn": "তেমন একটা না", "category": "adverb"
}, { "ja": "〜について", "en": "about ~, concerning ", "bn": " সম্পর্কে / বিষয়ে",
"category": "phrase" }, { "ja": "久しぶりですね", "kana": "ひさしぶりですね", "en": "long time
no see", "bn": "অনেক দিন পর দেখা!", "category": "phrase" }, { "ja": "〜でも
飲みませんか", "kana": "〜でも のみませんか", "en": "drink ~ or something?", "bn": " কিছু পান
করবেন নাকি?", "category": "phrase" }, { "ja": "もちろん", "en": "of course", "bn":
"অবশ্যই", "category": "adverb" }, { "ja": "もう 帰らないと……", "kana": "もう かえらないと……",
"en": "must get home now...", "bn": "এবার বাড়ি ফিরতে হবে...", "category":
"phrase" }, { "ja": "アインシュタイン", "en": "Albert Einstein", "bn": "আলবার্ট
আইনস্টাইন", "category": "noun" }, { "ja": "ガガーリン", "en": "Yuri Gagarin", "bn":
"ইউরি গ্যাগারিন", "category": "noun" }, { "ja": "ガリレオ", "en": "Galileo Galilei",
"bn": "গ্যালিলিও গ্যালিলি", "category": "noun" }, { "ja": "キング牧師", "kana":
"キングぼくし", "en": "Martin Luther King, Jr.", "bn": "মার্টিন লুথার কিং জুনিয়র",
"category": "noun" }, { "ja": "フランクリン", "en": "Benjamin Franklin", "bn":
"বেঞ্জামিন ফ্র্যাঙ্কলিন", "category": "noun" }, { "ja": "かぐや姫", "kana": "かぐやひめ",
"en": "Princess Kaguya", "bn": "রাজকুমারী কাগুয়া", "category": "noun" }, { "ja":
"天神祭", "kana": "てんじんまつり", "en": "Tenjin Festival", "bn": "তেনজিন উৎসব",
"category": "noun" }, { "ja": "吉野山", "kana": "よしのやま", "en": "Mt. Yoshino", "bn":
"ইয়োশিনো পর্বত", "category": "noun" }, { "ja": "カンガルー", "en": "kangaroo", "bn":
"ক্যাঙ্গারু", "category": "noun" }, { "ja": "キャプテン・クック", "en": "Captain James
Cook", "bn": "ক্যাপ্টেন জেমস কুক", "category": "noun" } ], "22": [ { "ja":
"［シャツを〜］着ます", "kana": "きます", "en": "put on [shirt, etc.]", "bn": "[শার্ট] পরা",
"category": "verb" }, { "ja": "［靴を〜］履きます", "kana": "はきます", "en": "put on [shoes,
trousers]", "bn": "[জুতো / প্যান্ট] পরা", "category": "verb" }, { "ja":
"［帽子を〜］被ります", "kana": "かぶります", "en": "put on [a hat]", "bn": "[টুপি] পরা",
"category": "verb" }, { "ja": "［眼鏡を〜］かけます", "kana": "かけます", "en": "put on
[glasses]", "bn": "[চশমা] পরা", "category": "verb" }, { "ja": "［ネクタイを〜］します",
"en": "put on [tie]", "bn": "[টাই] বাঁধা / পরা", "category": "verb" }, { "ja":
"生まれます", "kana": "うまれます", "en": "be born", "bn": "জন্ম নেওয়া", "category":
"verb" }, { "ja": "私たち", "kana": "わたしたち", "en": "we", "bn": "আমরা", "category":
"pronoun" }, { "ja": "コート", "en": "coat", "bn": "কোট", "category": "noun" }, {
"ja": "セーター", "en": "sweater", "bn": "সোয়েটার", "category": "noun" }, { "ja":
"スーツ", "en": "suit", "bn": "স্যুট", "category": "noun" }, { "ja": "帽子", "kana":
"ぼうし", "en": "hat, cap", "bn": "টুপি", "category": "noun" }, { "ja": "眼鏡",
"kana": "めがね", "en": "glasses", "bn": "চশমা", "category": "noun" }, { "ja":
"ケーキ", "en": "cake", "bn": "কেক", "category": "noun" }, { "ja": "［お］弁当", "kana":
"［お］べんとう", "en": "box lunch", "bn": "লাঞ্চ বক্স / টিফিন", "category": "noun" },
{ "ja": "ロボット", "en": "robot", "bn": "রোবট", "category": "noun" }, { "ja":
"ユーモア", "en": "humor", "bn": "রসবোধ / কৌতুক", "category": "noun" }, { "ja":
"都合", "kana": "つごう", "en": "convenience, schedule", "bn": "সুবিধা / পরিস্থিতি",
"category": "noun" }, { "ja": "よく", "en": "often", "bn": "প্রায়ই / ঘন ঘন",
"category": "adverb" }, { "ja": "えーと", "en": "well, let me see", "bn": "মানে...
/ দেখছি...", "category": "phrase" }, { "ja": "おめでとう［ございます］", "en":
"congratulations", "bn": "অভিনন্দন", "category": "phrase" }, { "ja": "お探しですか",
"kana": "おさがしですか", "en": "are you looking for?", "bn": "খুঁজছেন কি?",
"category": "phrase" }, { "ja": "では", "en": "well then", "bn": "তাহলে / তবে",
"category": "phrase" }, { "ja": "こちら", "en": "this (polite)", "bn": "এটি
(বিনম্র)", "category": "pronoun" }, { "ja": "家賃", "kana": "やちん", "en": "rent",
"bn": "বাড়ি ভাড়া", "category": "noun" }, { "ja": "ダイニングキッチン", "en": "kitchen
with dining area", "bn": "ডাইনিং স্পেসসহ রান্নাঘর", "category": "noun" }, {
"ja": "和室", "kana": "わしつ", "en": "Japanese-style room", "bn": "জাপানি ঘর",
"category": "noun" }, { "ja": "押し入れ", "kana": "おしいれ", "en": "Japanese-style
closet", "bn": "জাপানি আলমারি", "category": "noun" }, { "ja": "布団", "kana":
"ふとん", "en": "Japanese mattress and quilt", "bn": "ফুতন (জাপানি তোশক-লেপ)",
"category": "noun" }, { "ja": "パリ", "en": "Paris", "bn": "প্যারিস", "category":
"noun" }, { "ja": "万里の 長城", "kana": "ばんりの ちょうじょう", "en": "Great Wall of China",
"bn": "চীনের মহাপ্রাচীর", "category": "noun" } ], "23": [ { "ja": "［先生に〜］聞きます",
"kana": "ききます", "en": "ask [the teacher]", "bn": "[শিক্ষককে] জিজ্ঞেস করা",
"category": "verb" }, { "ja": "［〜を］回します", "kana": "まわします", "en": "turn, rotate",
"bn": "ঘোরানো", "category": "verb" }, { "ja": "［〜を］引きます", "kana": "ひきます", "en":
"pull", "bn": "টানা", "category": "verb" }, { "ja": "［〜を］変えます", "kana": "かえます",
"en": "change", "bn": "বদলানো / পরিবর্তন করা", "category": "verb" }, { "ja":
"［ドアに〜］触ります", "kana": "さわります", "en": "touch [a door]", "bn": "[দরজা] স্পর্শ করা
/ ছোঁয়া", "category": "verb" }, { "ja": "［お釣りが〜］出ます", "kana": "деます", "kana":
"でます", "en": "[change] come out", "bn": "[ভাংতি টাকা] বের হওয়া", "category":
"verb" }, { "ja": "［〜を］歩きます", "kana": "あるきます", "en": "walk", "bn": "হাঁটা",
"category": "verb" }, { "ja": "［桥を〜］渡ります", "ja": "［橋を〜］渡ります", "kana": "わたります",
"en": "cross [a bridge]", "bn": "[সেতু] পার হওয়া", "category": "verb" }, { "ja":
"［右へ〜］曲がります", "kana": "まがります", "en": "turn [to the right]", "bn": "[ডানে] মোড়
নেওয়া", "category": "verb" }, { "ja": "寂しい", "kana": "さびしい", "en": "lonely",
"bn": "একাকী / নিঃসঙ্গ", "category": "i-adjective" }, { "ja": "［お］湯", "kana":
"［お］ゆ", "en": "hot water", "bn": "গরম পানি", "category": "noun" }, { "ja": "音",
"kana": "おと", "en": "sound", "bn": "শব্দ / আওয়াজ", "category": "noun" }, { "ja":
"サイズ", "en": "size", "bn": "আকার / সাইজ", "category": "noun" }, { "ja": "故障",
"kana": "こしょう", "en": "breakdown", "bn": "বিকল হওয়া / নষ্ট হওয়া", "category":
"noun" }, { "ja": "道", "kana": "みち", "en": "road, way", "bn": "রাস্তা / পথ",
"category": "noun" }, { "ja": "交差点", "kana": "こうさてん", "en": "crossroads,
intersection", "bn": "চৌরাস্তা / মোড়", "category": "noun" }, { "ja": "信号",
"kana": "しんごう", "en": "traffic lights", "bn": "ট্রাফিক বাতি / সিগন্যাল",
"category": "noun" }, { "ja": "角", "kana": "かど", "en": "corner", "bn": "কোণা /
বাঁক", "category": "noun" }, { "ja": "橋", "kana": "はし", "en": "bridge", "bn":
"সেতু / ব্রিজ", "category": "noun" }, { "ja": "駐車場", "kana": "ちゅうしゃじょう", "en":
"car park, parking lot", "bn": "পার্কিং লট", "category": "noun" }, { "ja": "建物",
"kana": "たてもの", "en": "building", "bn": "ভবন / দালান", "category": "noun" }, {
"ja": "何回も", "kana": "なんかいも", "en": "many times", "bn": "বহুবার / অনেকবার",
"category": "adverb" }, { "ja": "〜目", "kana": "〜め", "en": "the -th (order)",
"bn": "— তম (ক্রমিক)", "category": "counter" }, { "ja": "聖徳太子", "kana":
"しょうとくたいし", "en": "Prince Shotoku", "bn": "রাজপুত্র শোতোকু", "category": "noun"
}, { "ja": "法隆寺", "kana": "ほうりゅうじ", "en": "Horyuji Temple", "bn": "হোরিউজি
মন্দির", "category": "noun" } ], "24": [ { "ja": "くれます", "en": "give (me)",
"bn": "দেওয়া (আমাকে)", "category": "verb" }, { "ja": "［〜を］直します", "kana":
"なおします", "en": "repair, correct", "bn": "মেরামত করা / সংশোধন করা", "category":
"verb" }, { "ja": "［人を〜］連れて 行きます", "kana": "つれて いきます", "en": "take (someone)",
"bn": "(কাউকে) সঙ্গে নিয়ে যাওয়া", "category": "verb" }, { "ja": "［人を〜］連れて 来ます",
"kana": "つれて きます", "en": "bring (someone)", "bn": "(কাউকে) সঙ্গে নিয়ে আসা",
"category": "verb" }, { "ja": "［人を〜］送ります", "kana": "おくります", "en": "escort, see
off", "bn": "পৌঁছে দেওয়া / বিদায় জানানো", "category": "verb" }, { "ja":
"［〜を］紹介します", "kana": "しょうかいします", "en": "introduce", "bn": "পরিচয় করিয়ে দেওয়া",
"category": "verb" }, { "ja": "［〜を］案内します", "kana": "あんないします", "en": "show
around, guide", "bn": "ঘুরিয়ে দেখানো / পথ দেখানো", "category": "verb" }, { "ja":
"［〜を］説明します", "kana": "せつめいします", "en": "explain", "bn": "ব্যাখ্যা করা / বুঝিয়ে
বলা", "category": "verb" }, { "ja": "おじいさん", "en": "grandfather, old man", "bn":
"দাদা / নানা / বৃদ্ধ", "category": "noun" }, { "ja": "おばあさん", "en":
"grandmother, old woman", "bn": "দাদি / নানি / বৃদ্ধা", "category": "noun" }, {
"ja": "準備", "kana": "じゅんび", "en": "preparation", "bn": "প্রস্তুতি", "category":
"noun" }, { "ja": "引っ越し", "kana": "ひっこし", "en": "moving out", "bn": "বাসা বদল",
"category": "noun" }, { "ja": "［お］菓子", "kana": "［お］かし", "en": "sweets, snacks",
"bn": "মিষ্টান্ন / স্ন্যাক্স", "category": "noun" }, { "ja": "ホームステイ", "en":
"homestay", "bn": "হোমস্টে", "category": "noun" }, { "ja": "全部", "kana": "ぜんぶ",
"en": "all", "bn": "সব / সম্পূর্ণ", "category": "noun" }, { "ja": "自分で", "kana":
"じぶんで", "en": "by oneself", "bn": "নিজে নিজে / একা", "category": "adverb" }, {
"ja": "他に", "kana": "ほかに", "en": "besides, other", "bn": "তাছাড়া / অন্য",
"category": "adverb" }, { "ja": "母の日", "kana": "ははのひ", "en": "Mother's Day",
"bn": "মা দিবস", "category": "noun" } ], "25": [ { "ja": "考えます", "kana":
"かんがえます", "en": "think, consider", "bn": "চিন্তা করা / বিবেচনা করা", "category":
"verb" }, { "ja": "［駅に〜］着きます", "kana": "つきます", "en": "arrive", "bn": "পৌঁছানো",
"category": "verb" }, { "ja": "［年を〜］取ります", "kana": "とります", "en": "grow old",
"bn": "বয়স বাড়া / বুড়ো হওয়া", "category": "verb" }, { "ja": "足ります", "kana":
"たります", "en": "be enough, sufficient", "bn": "পর্যাপ্ত হওয়া / কুলাতে পারা",
"category": "verb" }, { "ja": "田舎", "kana": "いなか", "en": "countryside,
hometown", "bn": "গ্রাম / দেশের বাড়ি", "category": "noun" }, { "ja": "チャンス",
"en": "chance", "bn": "সুযোগ", "category": "noun" }, { "ja": "億", "kana": "おく",
"en": "hundred million", "bn": "দশ কোটি", "category": "counter" }, { "ja":
"もし［〜たら］", "en": "if", "bn": "যদি [ হয়]", "category": "phrase" }, { "ja": "意味",
"kana": "いみ", "en": "meaning", "bn": "অর্থ / মানে", "category": "noun" }, {
"ja": "もしもし", "en": "hello (on phone)", "bn": "হ্যালো (ফোনে কথা বলার সময়)",
"category": "phrase" }, { "ja": "転勤", "kana": "てんきん", "en": "job transfer",
"bn": "চাকরির বদলি", "category": "noun" }, { "ja": "事", "kana": "こと", "en":
"thing, matter", "bn": "বিষয় / ব্যাপার", "category": "noun" }, { "ja": "暇",
"kana": "ひま", "en": "free time", "bn": "অবসর সময়", "category": "noun" }, { "ja":
"［いろいろ］お世話に なりました", "kana": "［いろいろ］おせわに なりました", "en": "thank you for
everything", "bn": "সবকিছুর জন্য আন্তরিক ধন্যবাদ", "category": "phrase" }, {
"ja": "頑張ります", "kana": "がんばります", "en": "do one's best", "bn": "যথাসাধ্য চেষ্টা
করা", "category": "verb" }, { "ja": "どうぞ お元気で", "kana": "どうぞ おげんきで", "en":
"please take care", "bn": "ভালো থাকবেন (দীর্ঘ বিদায়কালে)", "category": "phrase"
}, { "ja": "ベトナム", "en": "Vietnam", "bn": "ভিয়েতনাম", "category": "noun" } ] };
