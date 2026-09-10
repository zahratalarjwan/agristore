/**
 * Ghosn Al-Matak Store (متجر غصن المتك)
 * Complete Agricultural & Gardening Supplies, Ad Slider & Admin CRUD Suite Engine
 */

// --- Admin Security Key ---
const ADMIN_SECRET_KEY = 'Asdf#$1234';

// --- Default Initial Database for Ghosn Al-Matak ---
const DEFAULT_PRODUCTS = [
    // Migrated from زهرة الأرجوان (alarjwan.onrender.com) — 258 products
    {
        id: 1,
        name: "فرمون ذبابة الفاكهة بخاخ 750ملي",
        botanicalName: "",
        category: "pesticides",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/69e690dd-8d09-4d78-b486-6389bbf542b6_Picsart_25-02-05_16-34-21-136.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فرمون جاذب لذبابة الفاكهة يساعد على التخلص من ذبابة الفاكهة يستخدم برش في أي قنينة أو اي مكان لجذب الذبابه والتخلص منها.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 2,
        name: "نبتة الياس",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a62228f0-f3cd-4923-8583-9d5d3d3120c1_e345195e43d040f66e78c204d00d507e.webp",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يعرف نبات الاس بأنه أحد النباتات العطرية ذات الأوراق البيضاوية الخضراء، كما تتميز بنمو زهورها البيضاء أو الوردية. كذلك تستخدم ثمارها سوداء اللون كتوابل أو تحضير الزيوت العطرية.\n\nشرح بالفيديو: https://m.youtube.com/watch?v=MZa05H4fxns",
        petFriendly: true,
        inStock: true
    },
    {
        id: 3,
        name: "15-15-30 NPK",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c1626fca-edb5-4f93-9b17-13390cf497d7_Picsart_24-11-14_23-08-13-614.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "الحجم 1kg صورة متجانسة سهلة الإمتصاص سريع الذوبان في الماء وغني بالعناصر المغذية الكبرى والصغرى. يستخدم خصيصا في حالات تحجيم وتطور ونضج الثمار  يساعد على زيادة معدل مقاومة النبات ضد الأمراض الفطرية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 4,
        name: "روليا",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/715aa702-abc6-4b84-99ac-14fd587ade55_DGZCTaiXYAAr8Ut.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "روليا أو البتونيا البرية أو البتونيا المكسيكية وهي عبارة عن شجيرة تصل في نموها إلى 80 سم تقريبا ذات أزهار بنفسجية اللون تظهر طوال السنة .وهي من مغطيات التربة إذا زرعت بشكل كثيف حول بعضها البعض. وهي من النباتات الجاذبة للفراشات .تتكاثر الروليا بالتقسيم والعقل والبذور التي تخرج بعد اكتمال نمو الثمرة وتعرضها للبلل فتتفرقع ناثرة البذور في كل اتجاه",
        petFriendly: true,
        inStock: true
    },
    {
        id: 5,
        name: "2strokeمكينة رش تعمل خلط ايل مع  البترول",
        botanicalName: "",
        category: "tools",
        price: 50.0,
        originalPrice: 57.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/22a8e9e4-1988-4ebe-9688-d96b72f3eecb_Picsart_25-02-21_19-48-02-652.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مكينة رش تعمل خلط ايل مع  البترول 2stroke الموتر  السعر 50ريال",
        petFriendly: true,
        inStock: true
    },
    {
        id: 6,
        name: "ذرة سوبر جيم",
        botanicalName: "",
        category: "seeds",
        price: 19.0,
        originalPrice: 21.85,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/66e9033d-86fb-4e1e-ac22-e5e35d4bb6e2_IMG-20250830-WA0010.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ذرة سكرية ٥٠٠ جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 7,
        name: "مبيد فطري نحاسي ميتاكوب",
        botanicalName: "",
        category: "pesticides",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4af0fbda-05fa-4415-a0f1-4416f48f2561_IMG_20240107_114305_798.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*ميتاكوب* مبيد فطري جهازي نحاسي  واسع المدى له تاثير  وقائي و علاجي فعال ضد العديد من الأمراض الفطرية  *المادة الفعالة*  ميتالاكسل 5% اوكسي النحاس 40% نحاس معدني 23% مواد خاملة  55% *الآفات المستهدفة* البياض الزغبي  الندوة المتاخرة  تجعد وتبق الاوراق   *معدل الاستخدام* 250جرام لكل 200لتر ماء   *فترة ماقبل الحصاد*  3أيام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 8,
        name: "HUMI K سماد هيومك",
        botanicalName: "",
        category: "fertilizers",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c4fac863-45dd-4924-91e4-660a232b91f5_Picsart_25-02-04_11-08-43-460.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: ": Humi[K] wsp المواد العضوية : البوتاسيوم الكلي ١٢٪؜+ حامض الهيوميك ٧٢٪؜+ الفولفيك ١٣٪؜ وصف المحسن : يساعد في زيدة توفير المغذيات و زيادة كفاءة استفادة النبات منها. منتج مناسب للإستخدام في الزراعة العضوية  معدل الأستخدام: ١ غرام لكل لتر ماء الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 9,
        name: "بذور بونيكام مباسا",
        botanicalName: "",
        category: "seeds",
        price: 12.0,
        originalPrice: 13.8,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/61e70fe1-e659-4b8d-80e0-d18277ce5631_Picsart_25-02-20_11-13-16-269.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يعد البونيكام من أحد أفضل أنواع الأعلاف إذ يتميز هذا النوع من الحشائش بأنه من النباتات المعمرة والتي يستمر وجودها في الأراضي الزراعية فترة طويلة تصل في بعض الأحيان إلى عشر سنوات. علاوة على قدرته الكبيرة على تحمل ملوحة المياه ، و لدرجة تصل إلى (7000) جزء من المليون ، إضافة لتحمله لعوامل الطقس مثل درجات الحرارة العالية ، كما يتميز البونيكام بسرعة نموه وغزارة إنتاجيته وطوله",
        petFriendly: true,
        inStock: true
    },
    {
        id: 10,
        name: "تايمر ايطالي VALTICINO",
        botanicalName: "",
        category: "irrigation",
        price: 35.0,
        originalPrice: 40.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/558ce2b8-f865-4f04-aaeb-975275af24a7_Picsart_24-11-10_20-59-38-394.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "6محابس",
        petFriendly: true,
        inStock: true
    },
    {
        id: 11,
        name: "350هرمون كراتزتوب جرين 0.25٪جرام",
        botanicalName: "",
        category: "pesticides",
        price: 35.0,
        originalPrice: 40.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b24b7a21-a27d-4d07-8dc9-0f341925d1b6_Picsart_25-02-27_21-42-56-841.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "و وصف مبيد هرمون كراتزتوب جرين 0.25٪ 350جرام  هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية    طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء.   من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 12,
        name: "DOسماد عضوي ظفار العضويه 5لتر",
        botanicalName: "",
        category: "fertilizers",
        price: 11.0,
        originalPrice: 12.65,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/860e5cd5-7c4b-40dc-9f43-af84b00b823e_Picsart_25-02-05_15-13-41-090.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بدون أضافة مواد كيميائية. عضوي 100% من تحلل الأسماك. أقل رائحة مناسب لجميع الاستخدامات. يحتوي على العناصر الكبرى والصغرى والأحماض الأمينية.  *كمية الاستخدام*  3ملي لكل 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 13,
        name: "مبيد فطري نحاسي سوبر كوفول",
        botanicalName: "",
        category: "pesticides",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5d3c92be-6498-4fc6-94eb-3f8793a14bb2_IMG-20240103-WA0145.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*سوبر كوفول* مبيد فطري جهازي واسع المدى ذات تاثير علاجي فعال ضد العديد من الأمراض الفطرية  *المادة الفعالة*  سيموكسانيل 10% اوكسي كلوريد النحاس 30% نحاس معدني 18% مواد خاملة  60% *الآفات المستهدفة* البياض الزغبي  الندوة المتاخرة  تجعد وتبق الاوراق   *معدل الاستخدام* 500جرام لكل 200لتر ماء   *فترة ماقبل الحصاد*  7أيام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 14,
        name: "كف مريم",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ca28157c-7839-40f2-82e6-ee1453424a2c_Vitex-Agnus-Castus.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجيرة متساقطة الأوراق شتاءً وتنتمي للفصيلة الفربينية، يتراوح ارتفاعها من مترين ونصف إلى أربعة أمتار، أوراقها مركبة على شكل راحة اليد تأتي باللون البنفسجي او الارجواني",
        petFriendly: true,
        inStock: false
    },
    {
        id: 15,
        name: "شتلة بوملي",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/cde39467-17e9-42d3-bc1c-1a78ea24bf28_Picsart_24-11-13_12-29-32-409.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من الفواكهة الناجحة زراعتها بالسلطنة تتميز بحجم ثمارها الكبير",
        petFriendly: true,
        inStock: true
    },
    {
        id: 16,
        name: "مبيد حشري بيست كليم",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b66b6098-146c-4c54-9615-839cbf604218_Picsart_25-02-04_09-43-34-590.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بيست كليم المادة الفعالة : امامكتين بنزوات مبيد حشرات يؤثر بالملامسة وأيضا كسم معدي في صورة حبيبات قابلة للإنتشار. الافة المستهدفة : المن والديدان القارضة معدل الإستخدام : ٧٥مل /لكل ١٠٠ لتر ماء  فترة الأمان : ٣ ايام الحجم 100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 17,
        name: "سماد رش ورقي بولي بوستر",
        botanicalName: "",
        category: "fertilizers",
        price: 2.7,
        originalPrice: 3.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/189f4387-0e4d-4719-a74b-41bd5f0d8cb1_Picsart_25-02-04_14-56-46-453.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ماكس مور  12.12.12+TE سماد كيميائي يحتوي على النايتروجين والفسفور والبوتاسيوم والعناصر الصغرى .   سماد قابل الذوبان في الماء  يستخدم كرش ورقي خلال فترات نمو البذور  التي تتطلب مستويات متوازنة نسبيا من النيتروجين والفسفور والبوتاسيوم والعناصر الصغرى . يساعد على نمو النبات وتكوين الساق والأوراق  والجذور   *كمية الاستخدام*  2.5-3ملي في 1لتر ماء   الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 18,
        name: "مكينة رش تعمل بالبترول  4stroke صيني .",
        botanicalName: "",
        category: "tools",
        price: 65.0,
        originalPrice: 74.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/04cb79dd-4f71-466c-90c9-2cce00e27bdc_Picsart_25-02-21_19-43-07-898.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مكينة رش تعمل بالبترول 4stroke  السعر 65ريال موتور صيني .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 19,
        name: "خيار أمجاد",
        botanicalName: "",
        category: "seeds",
        price: 22.0,
        originalPrice: 25.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/dd1af8b0-e648-4e38-985a-bb516d697bbc_Picsart_25-08-30_17-58-27-130.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "خيار هجين غزير الإنتاج يحوي على 500بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 20,
        name: "بذور فيفاي رد لدي التايواني 10جرام",
        botanicalName: "",
        category: "seeds",
        price: 33.0,
        originalPrice: 37.95,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d44afa30-0d06-43cd-97e5-3d8a349dd657_Picsart_25-02-12_20-19-59-307.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من افضل بذور الفيفاي إنتاج غزير جدا.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 21,
        name: "مبيد حشري عناكبي باندميك 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2de4e713-34a9-41fc-abc9-57e83e577341_Picsart_25-02-04_13-46-38-763.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد: باندميك ٥ أي سي المادة الفعالة:ابامكتين(وزن/حجم) ٥% وصف المبيد: المبيد الحشري عناكبي يعمل بالملامسة و يعمل ع مكافحة صانعات الانفاق و العنكبوت الاحمر  ع جميع المراحل الأطوار , ذو تأثير طويل المدى . : الآفة: العنكبوت الاحمر وصانعات الانفاق  نسب لاستعمال : ٥٠ ملي لكل ٢٠٠لتر فترة الامان: ٣إيام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 22,
        name: "ليمون عماني صغير",
        botanicalName: "",
        category: "plants",
        price: 0.6,
        originalPrice: 0.69,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4c2caef0-7724-4de7-bc4a-2a17fe092690_omani-Lemon.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ليمون عماني الليمون العماني أو اللومي بالعامية العمانية يعتبر من المحاصيل المشهورة في سلطنة عمان، حيث يتميز عن غيره من أصناف الليمون بطعمه الحمضي بدرجة كبيرة، وكمية العصارة المستخرجة منه",
        petFriendly: true,
        inStock: true
    },
    {
        id: 23,
        name: "روتكس4 هرمون تجذير",
        botanicalName: "",
        category: "fertilizers",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c6d4df2c-0a40-4d38-9b16-4365a6468ae8_Picsart_24-11-08_21-36-53-909.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "روتكس4  الخواص: ١. يعمل على تنشيط تكوين الجذور. ٢.فعال في إسراع نمو الجذور. ٣. يستخدم لتنشيط جذور عقل نباتات الزينةوأشجار الفاكهة.  الاستعمال: 1. رطب منطقة القطع.  2. غطس 2 سم من اسفل العقلة في رونكس.  3. هز العقلة جيدا للتخلص من الكمية الزائدة. 4. زراعة العقلة حسب الطريقة الإعتيادية قابلية الخلط لا يخلط مع أي مركب آخر..  التحذيرات . اقرأ الملصقة جيدا قبل الاستعمال والتزم بتعليماتها بدقة. عدم ملامسة المنتج للجلد أو العينين.  الإسعافات الأولية: في حالة تلوث العينين بالمنتج: تغسل جيداً بالماء المدة 15 دقيقة ويراجع الطبيب فورا. في حالة تلوث الجلد تنزع الملابس وتفصل اجزاء جسم المصاب بالماء والصابون   *سعة العبوة:* ١٠٠ جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 24,
        name: "بيذام احمر",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/cb3c1cd1-7a99-4d90-a647-5e350d21238c_EA4k0ylXkAU5MvU.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "البيذام أو اللوز الإستوائي، تعتبر شجرة البيذام من أشجار الظل الجميلة، والمعروفة بامتداد ظلها العريض، ثمرة البيذام سكرية الطعم و تأتي باللون الأحمر والأصفر.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 25,
        name: "تايمر Green Glow",
        botanicalName: "",
        category: "irrigation",
        price: 9.5,
        originalPrice: 10.92,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d81934bd-4704-4a1c-ad6c-9efa7db10a88_تايمر green glow.png",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اكثر كفائة. وتوقيت دقيق\n\nشرح بالفيديو: https://m.youtube.com/watch?v=JQi_RDCgDZk",
        petFriendly: true,
        inStock: true
    },
    {
        id: 26,
        name: "SAMSONسماد اعشاب بحريه",
        botanicalName: "",
        category: "fertilizers",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3f37a049-35aa-4170-835b-04dc2db7b953_Picsart_25-02-11_06-38-18-933.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*الأعشاب البحرية* SAMSON  الأعشاب البحرية ليست مجرد سماد، بل هي **منشط طبيعي** يمنح النباتات قوةً إضافيةً ويُحسن جودة المحاصيل. سواء كنتَ مزارعًا محترفًا أو هاوي زراعة منزلية، جرب إضافتها إلى روتينك الزراعي وستلاحظ فرقًا كبيرًا في نمو نباتاتك!    *كمية الاستخدام* 1.5ملي/1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 27,
        name: "جلف آجرو 5لتر",
        botanicalName: "",
        category: "fertilizers",
        price: 8.0,
        originalPrice: 9.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d5fec87b-fd5e-40e3-90f5-f6cf32593225_image_1920.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد السمكي   *جلف اجروا*   سماد سمكي عضوي *المميزات* يتميز جولف أجرو في العديد من المزايا ويمكن تلخيصها على النحو التالي: المنتجات العضوية صديقة للبيئة ، مستخلصة من أسماك السردين الطازجة التي يتم معالجتها في الأساليب العلمية ، فهي غنية بالبروتين والزيوت والمغذيات التي تعتبر ضرورية لنمو النباتات. تعزيز نمو النباتات لأنها غنية بالعناصر الرئيسية مثل النيتروجين والفوسفور والبوتاسيوم. (NPK)تعزيز نظام المناعة في النبات ، الذي يحتوي على عناصر طفيفة ونادرة مثل المغنيسيوم…   *الاستخدام* -يستخدم لجميع محاصيل الخضروات والفواكه والحبوب والأعلاف والنخيل -سماد سائل حامضي.  -يعزز مناعة النبات.  -يحسن خواص التربة.  -يزيد كمية وجودة وحجم الثمار.  *كمية الأستخدام*  صيفاً 1 ملي لكل لتر ماء.  وشتاءً 2 ملي لكل لتر ماء.  ويستخدم ري أرضي أو رش ورقي  كل أسبوع مرة واحدة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 28,
        name: "بذور السبانخ pyramid",
        botanicalName: "",
        category: "seeds",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c358d639-f5e5-493b-80df-a394252a5ed5_Picsart_24-10-25_17-53-25-387.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور من شركة pyramid الهندية بذور عالية الجودة حجم العبوةو100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 29,
        name: "مبيد حشري عناكبي بليسيفا برو250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 25.0,
        originalPrice: 28.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d5418ed0-5939-4a5d-af8e-95e5fe950c66_Picsart_25-02-04_15-08-04-510.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "خواص واستخدامات المبيد  بليسيفا برو مبيد يستخدم لمكافحة طيف واسع من الحشرات / العناكب الضارة التي تسبب خسائر على المحاصيل الزراعية المختلفة.  المادة الفعالة سيانترانيليبرول من مجموعة كيميائية تسمى انثرائيليك دياميد ذات طريقة عمل جديدة حيث تؤثر على مستقبلات الريانودين في الحشرة مؤدية الى شلل وموت الحشرة.  ابا ميكتين من فئة أفيرميكتين يعمل بطريقة فريدة على الناقل العصبي حمض جاما امينوبيوتيريك (GABA والذي يؤدي الى منع نقل الإشارات العصبية في الآفة المستهدفة مما يؤدي الى شللها وموتها.  معدلات و طرق الاستخدام في الحدائق المنزلية 10-20ملي /20لتر ماء  الحجم 25ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 30,
        name: "سماد سلكات برو",
        botanicalName: "",
        category: "fertilizers",
        price: 6.5,
        originalPrice: 7.47,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9a20dd80-2cd0-44ea-b6eb-4a56db63337d_Picsart_25-02-05_15-13-03-640.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يستخدم لجميع انواع التربه وعلى نطاق واسع في الإخصاب بسبب انتقائية الأمونيوم العالية. وبالتالي يتم استخدام الأمونيوم بشكل أكثر فاعلية من قبل النبات ويتم تحقيق وفرة في الأسمدة نظرا لامتصاصه المزيد من الرطوبة، كما إنه يمنع من التخمر والتصلب الذي يحدث في تخزين السماد الطبيعي.  كما يمنع الأمراض الفطرية التي تحدث مع الري المفرط. يوفر البوتاسيم والأمونيوم وهما عنصران مغذيان للتربة بطريقة خاضعة للرقابة وبطيئة، يعمل على منع التسمم بالأمونيوم (NH4) و \"حرق\" النباتات الناجم عن الاستخدام المفرط الأسمدة الأمونيوم (NH4)، الذي يعطى للتربة كسماد ويمكن غسله بالماء وحفظه في التربة عن طريق منع نقله إلى أماكن أخرى   الميزات والفوائد :  المنغنيز  ]]-4) أمينوميثيل) فينيل) أمينو] (L01( 6.13% ) أمينو) (محلي  - محسن طبيعي للتربة بنسبة 100%.  - لا يحتوي على أي مادة لها تأثير سام.  - يزيد من قدرة عمل التربه على تبادل العناصر  - يحتفظ بالعناصر المفيدة والمياه في التربة.  - يسمح للعناصر الغذائية بالبقاء في التربة لفترة أطول ويجعلها متاحة للنبات عن طريق إطلاقها ببطء وبحسب حاجة النبات.  - يوفر زيادة في الإنتاجية في المنتج.  عندما يتم تغذية النبات بشكل متوازن تزداد جودة المنتج ويتم تحقيق النضج المبكر.  - يوفر كثيرا من العناصر عن طريق إطالة فترة الري وتقليل كمية مياه الري.  - يمنع تكون طبقة كريمية في التربة الثقيلة ويؤمن تهوية التربة.  ينظم توازن الأس الهيدروجيني للتربة ويحافظ على بنيتها نشطة باستمرار.  - يتم استخدامه لإعادة تأهيل التربة المملحة أو المالحة بشكل طبيعي بسبب التسميد المفرط.  - يزيد من قوة الإنبات ويمنع تعفن الجذور - يحافظ على الجذور سليمة.  يمنع انتقال المعادن الثقيلة والمواد المشعة إلى النبات وخاصة النترات والأمونيوم.  --يزيد من استخدام وإنتاجية مغذيات النبات.  يمنع تغلغل العناصر الضارة من التربة إلى المياه الجوفية. - يعمل في التربة لفترة طويلة.   يمنع نمو العفن وتكوين السموم الفطرية وفقدان العناصر الغذائية عن طريق العصارة نظرا لخلطه. مع السيلاج : وتكوين الرائحة الكريهة.  - جرعة الإستعمال: جرعة الإستعمال الموصى بها هي: 15-25 كجم /دونم",
        petFriendly: true,
        inStock: true
    },
    {
        id: 31,
        name: "اليرت 2.8اي اس",
        botanicalName: "",
        category: "pesticides",
        price: 13.0,
        originalPrice: 14.95,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/02e0ab98-b8ac-4ef3-b730-55ea40080f63_Picsart_25-02-04_09-55-14-569.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اليرت ٢،٨ اي سي المادة الفعالة : لمداسايهلوثرين مبيد حشري ذو مجال واسع من التأثير وفعال بواسطة الملامسة والهضم. الافة المستهدفة : الذبابة البيضاء والتربس وذبابة القرعيات . معدل الإستخدام : ٢٥٠ مل لكل ٢٠٠ لتر. فترة الأمان : ثلاث ايام  الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 32,
        name: "مبيد حشري ديلتاتكس 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2e8b35a8-6ce3-47e1-837d-a46f2e205f3c_Picsart_25-02-04_14-14-39-967.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : ديلتا  تكس ٢,٥ إي سي الماده الفعالة :دلتا مثرين  وصف المبيد:مبيد حشري ذو مجال واسع من التأثير و فعال بواسطة الملامسة و الهضم -فعال لمكافحة الذبابة البيضاء و التربس و ذبابة القريات. معدل الاستخدام :ل100ملي لكل ٢٠٠لتر  الافات المستهدفة :     ذبابة بيضاء.التربس. ذبابة القرعيات فترة الامان:٧أيام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 33,
        name: "بذور الزينيا الاحمر الزهور الموسمية",
        botanicalName: "",
        category: "seeds",
        price: 0.6,
        originalPrice: 0.69,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/74410a20-a389-439d-97ea-a50981d2c8b8_Picsart_24-12-02_21-00-02-107.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يفضل زراعة نبات زهرة الزينيا في مكان مشمس بحيث يتعرض فيه النبات لأشعة الشمس بصورة مباشرة، ويحتاج نبات الزينيا إلى الكثير من أشعة الشمس المباشرة لينمو على نحو جيد. يجب تجنب الإفراط في ري نبات الزينيا، مع المحافظة على الري عند قاعدة النبات بعيدًا عن الأوراق للحفاظ على صحة النبات ومنع الأمراض الفطرية. يُوصي بتقليم الزهور  المتيبسة.  يجب توفير تهوية جيدة حول نبات الزينيا، والمحافظة على أوراق النبات جافة لوقايته من الأمراض.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 34,
        name: "هيومكس باور",
        botanicalName: "",
        category: "fertilizers",
        price: 8.0,
        originalPrice: 9.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f996a4de-f7a1-46c1-ab3d-7824e34b9e46_Picsart_24-11-08_21-54-28-607.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "🤩 *هيومكس بور*💪   *فوائده ومزاياه*  1* محسن تربة عضوي محبب يحتوي على أحماض الهيومك والفولفيك.  2*منتج ذو ذائبيه غير فوريه  يستمر بالذوبان بكميات بسيطة ومستمره لضمان استمرار تاثيره لفترات تصل الى ٥٠ يوم من بعد المعامله   3* يستخدم لتحسين قوام التربة وبالأخص  التربة الطينية أو المتملحة وتهويتها وقدرتها على حفظ الرطوبة وتنظيم تصريف المياه.  4* يزيد من قدرة النبات على امتصاص العناصر من التربة وتحسين صحة النبات بعد تعرضه للملوحة أو الإصابات الطفيلية والحشرية   😃 *طريقة الاستخدام:* يقلب مع التربة ويمكن خلطه مع معظم  الأسمدة العضوية والاسمدة الأخرى.   مقدار الاستخدام من ربع كيلو إلى نص كيلو للأشجار الصغيرة.   وممكن زيادة الجرعة من ١كيلو إلى ٣كيلو للأشجار الكبيرة.   *",
        petFriendly: true,
        inStock: true
    },
    {
        id: 35,
        name: "كراش - CRASH",
        botanicalName: "",
        category: "pesticides",
        price: 10.0,
        originalPrice: 11.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f0d13351-6308-4dec-aeca-73315319517d_Picsart_25-08-08_20-53-38-262.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مبيد حشري جهازي فعّال لمكافحة الديدان واليرقات*  **المادة الفعالة:** 🔬 * 20%كلورانترانيليبيرول*  ✅ مبيد متخصص بتأثير جهازي ✅ يُستخدم على المحاصيل الحيّة والأشجار المثمرة ✅ فعّال ضد اليرقات والآفات الماصه والثاقبه التي تستهدف عصارة النبات  🔍 **الآفات المستهدفة:**  * الديدان القارضة * حفارات أنفاق الطماطم * صانعات الأنفاق * ⁠التوتا ابسلوتا  🧴 **معدل الاستخدام:** 1 مل لكل 1 لتر ماء  ⏳ **فترة الأمان:** 3 أيام قبل الحصاد",
        petFriendly: true,
        inStock: true
    },
    {
        id: 36,
        name: "F19933بطيخ",
        botanicalName: "",
        category: "seeds",
        price: 19.5,
        originalPrice: 22.42,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/16b51c81-74c6-44be-8f42-65a588ac66c0_Picsart_25-02-19_12-08-21-206.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 37,
        name: "زنزلخت",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/7a99a9c4-66ae-4b59-952d-d17544754174_unnamed-file-1 (1).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تُستعمل شجرة الزنزلخت للزينة والظل في الطرقات و الحدائق، كما تدخل أخشابها في الصناعات الخشبية، ولها استخدامات طبية عددية، لها أهمية في إبعاد البعوض والحشرات",
        petFriendly: true,
        inStock: true
    },
    {
        id: 38,
        name: "الميرجولد بذور الزهور الموسمية",
        botanicalName: "",
        category: "seeds",
        price: 0.6,
        originalPrice: 0.69,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/06163933-107f-49ce-89ac-8929d8e2091d_Picsart_24-12-02_21-00-55-478.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "القطيفة الأفريقية أو الميري جولد اسمه العلمي Tagete erecta. من النباتات الموسمية الشتوية إلا أنه يمتد وجوده حتى بدايات الصيف أي إلى شهر يونيو.  أزهاره ذات لون أصفر أو برتقالي وغالباً ما نجدها تزين شوارع المدن وتغطي الأرصفة بين الشوارع.   أزهارها قابلة للقطف وتعيش بعده لفترة طويلة نسبياً، وتستخدم لغرض الزينة والديكور الداخلي المنزلي ولرائحتها الجميلة، وهي من النباتات التي تقبل الزراعة في الأحواض.  *العناية به* تقتصر العناية بها على الري المنتظم المعتدل، وكذلك على قطف الأزهار الذابلة، ومن الجيد مراقبتها بين الفترة والأخرى لوقايتها من الآفات التي قد تصيبها فهي عرضة لكثير من الآفات منها حشرة المن والذبابة البيضاء وعفن الجذور، والعنكبوت الأحمر. والغرض من مراقبتها هو علاجها باكراً بالمبيد المناسب قبل أن تستفحل الإصابة،",
        petFriendly: true,
        inStock: true
    },
    {
        id: 39,
        name: "فرشاة الزجاج",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/fab077cc-37f9-4760-8bdc-535ad364a069_iL5iWo9qrp3UnnjM91mK0h8fj1GSgN5WLT2H0Pgp.png",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "هي شجرة جمالية سميت بهذا الاسم لتشابه زهرتها مع أداة تنظيف الزجاج، وهي سريعة النمو ويبلغ ارتفاعها من 2 الى 4 متر وتتحمل تقلبات الجو تتميز بلونها الأحمر الزاهي.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 40,
        name: "HUMIC سماد الهيومك العماني",
        botanicalName: "",
        category: "fertilizers",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/837c452a-f4a3-4c2f-997c-899743a78963_Picsart_25-04-23_09-02-18-242.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عبارة عن هيومات بوتاسيوم مع الفولفيك اسيد مع الاحماض الكربوسلية العضوية حيث يعمل وقائى ضد اعفان الجذور معدل الاستخدام  ٥ مللى لكل لتر ماء من خلال الرى.حجم العبوه 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 41,
        name: "جانيت مبيد حشري",
        botanicalName: "",
        category: "pesticides",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3aa090e9-3408-4cf1-8115-a0ef5720d83c_Picsart_23-10-24_12-19-58-440.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "جانيت.    اسيتامبرايد ٢٠٪؜       مبيد حشري جهازي على هيئة مسحوق قابل للذوبان لمكافحة الحشرات الماصة والذبابة البيضاء والمن والتربس.   *كمية الأستخدام* 1جرام /1لتر ماء",
        petFriendly: true,
        inStock: true
    },
    {
        id: 42,
        name: "تايمر دجتل اخضر",
        botanicalName: "",
        category: "irrigation",
        price: 14.0,
        originalPrice: 16.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/e41534ab-aaf2-4bce-87c6-4b0ca66193c6_Picsart_24-11-09_19-41-03-845.png",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر مخرج واحد\n\nشرح بالفيديو: https://m.youtube.com/watch?v=RmKLtyTfBdg",
        petFriendly: true,
        inStock: true
    },
    {
        id: 43,
        name: "سماد حديد كي فيدز ايرون",
        botanicalName: "",
        category: "fertilizers",
        price: 8.0,
        originalPrice: 9.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c962cf9b-852f-4c37-9153-7fa42684c122_Picsart_25-02-04_11-16-07-908.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "حديد *كي فيدز ايرون* سماد معدني يحتوي على الحديد والكبريت   *المكونات*  حديد 15٪ كبريت8٪   *معدل الاستخدام* 1-2غرام لكل 1لتر ماء  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 44,
        name: "ياسمين المورايا",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/fb5b293f-915d-4194-b429-b8860bc2f17d_maxresdefault (27).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجيرة دائمة الخضرة، تصل لارتفاع 3 متر تقريباً. يتميز بأزهاره البيضاء الفواحة ويزداد عبق رائحته في المساء",
        petFriendly: true,
        inStock: false
    },
    {
        id: 45,
        name: "فيكساكوفير™️ FIXA CU",
        botanicalName: "",
        category: "fertilizers",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/103c9901-1850-4f29-88bb-0b774031e166_Picsart_25-08-05_12-21-50-440.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فيكساكوفير™️ FIXA CU التركيبة العضوية الشاملة... قوة جهازية في كل قطرة!  ✨ سلاحك الذكي ضد كل التحديات 🌡️ يعزز مناعة النبات طبيعيًا – يواجه الإجهاد الحراري والظروف القاسية 🛡️ تركيبة جهازية فريدة تحتوي على: 🔹 نحاس عالي الفعالية داخل العصارة النباتية – لاصطياد البكتيريا والفطريات من الداخل 🔸 كبريت جهازي مركز – لمكافحة شاملة للبياض، الحشرات، والعناكب ⚙️ كالسيوم نشط – يعزز جدر الخلايا ويمنع التشققات 🌿 ليجنوسلفونات طبيعية – تعمل كمادة ناقلة، تحسن الامتصاص، وتدعم استقرار العناصر 🍅 يحسن لون وجودة الثمار – لموسم حصاد مميز من أول نظرة  💧 سهولة استخدام – امتصاص فوري وانتشار مثالي: ✅ رش ورقي بتغطية كاملة ✅ أو سقي جذري لفعالية مستدامة ✅ يقلل الحاجة للمبيدات الكيميائية ✅ معتمد للزراعة العضوية – بلا فترات أمان  📌 الاستخدامات المثالية: ✔️ خلال مرحلة الإزهار ✔️ عند درجات الحرارة المرتفعة أو الرطوبة العالية ✔️ للوقاية والعلاج من الأمراض الفطرية والبكتيرية والحشرية  🔍 معدل الاستخدام: 2-3 مل / لتر ماء 📋 طريقة التطبيق: رش ورقي أو عبر نظام الري  🌾 فيكساكوفير™️ FIXA CU الحل العضوي الأقوى... لحصاد وفير وصحة نبات مستدامة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 46,
        name: "مبيد فطري ردوميل جولد بلس 42.5",
        botanicalName: "",
        category: "pesticides",
        price: 18.0,
        originalPrice: 20.7,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d1b48aa3-6640-4d3a-9b06-c2d51fa845f2_Picsart_25-02-05_15-17-06-352.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "› بتركیبته الفریدة ونشاطه الجھازى المتمیز قادر على الحركة السریعة القویة إلى الأجزاء النباتیة التى لم یصل إلیھا المركب وینشر حتى فى النموات الجدیدة بعد المعاملة مما یقدم بذلك وقایة كاملة للنبات بما فیھا النموات الحدیثة. › یستخدم لمكافحة العدید من الأمراض الفطریة بكفاءة عالیة علي أمراض البیاض الزغبي والندوة المتأخرة وذلك في كثیر من محاصیل البطاطس والطماطم والعنب والبصل والعدید من محاصیل الخضر. › سریع الإمتصاص ولا یتأثر بسقوط الأمطار بعد الرش مما یوفر تكرار المعاملة فى الأجواء الممطرة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 47,
        name: "بلتفورم",
        botanicalName: "",
        category: "plants",
        price: 3.8,
        originalPrice: 4.37,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6b5b95bf-ac68-4e0f-80f8-2be5d9926a59_9tPkvIxYubil6X18QYIWMCAPICJ9csrz7K90k7zX.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة ذات زهور صفراء تستخدم للظل والزينة، كما تعتبر من الأشجار العاسلة التي تناسب تربية النحل نظرا للأزهار الغنية بالرحيق",
        petFriendly: true,
        inStock: true
    },
    {
        id: 48,
        name: "اقراص التسميد عالي النيتروجين",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/dfa7ab6f-610e-47a0-81b1-17f8c4e9b45a_Picsart_24-11-09_09-11-06-771.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عالم متجدد من الابتكار في تقنيات تغذية النبات ورفع الإنتاجية بأسمدة فوارة على شكل أقراص فوارة قابلة للذوبان في الماء بشكل سريع.   كفاءة عالية. جهد أقل  يتناسب مع معاملات الرش والسقي وتطبيقات أنظمة الزراعة المائية والنباتات الداخلية   تركيبات مختلفة تتناسب مع مراحل نمو النبات    . تركيبة من العناصر الكبرى مع عنصر النيتروجين لتحسين النمو الخضري للنبات وتعزيز كفاءة النمو والإنبات.\n\nشرح بالفيديو: https://m.youtube.com/watch?v=-e1tOhEUiwI",
        petFriendly: true,
        inStock: true
    },
    {
        id: 49,
        name: "سماد بي اس سوبر كيور 1لتر",
        botanicalName: "",
        category: "fertilizers",
        price: 11.5,
        originalPrice: 13.22,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/79389e5d-f489-4659-93a0-ee3584ba1a75_Picsart_25-02-05_15-14-08-003.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بي اس سوبر كيور  سماد سائل يحتوي على الفوسفور والبوتاسيوم والبورون والمولبيديوم   *طريقة الاستخدام* قبل أسبوع من الإزهار إذا وجدت ثمار صغيرة  لكل 1 هكتار  يخلط 2 لكل  1000لتر ماء  بمعدل 2ملي في 1لتر   *الزراعة المانية* أثناء ارتفاع درجة الحرارة في الصيف ، ينخفض معدل التأثير من 90% إلى أقل من 20% 1لتر  لكل 500 لترماء",
        petFriendly: true,
        inStock: true
    },
    {
        id: 50,
        name: "BS GRANULE سماد",
        botanicalName: "",
        category: "fertilizers",
        price: 25.0,
        originalPrice: 28.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/924c82b0-c055-4bb7-96e0-fe8b605fbbed_Picsart_25-02-04_07-40-19-552.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد BS GRANULE  ‏GRANULE : عبارة عن سماد حبيبي عالي الكفاءة لتحسين التربة يحتوي على الزيوليت والبوزولان NPK وبشكل خاص.   الحجم 10كيلوا   ‏BS GRANULE هو سماد معجزة مغلف بـ ٦٠ معدنا وأحماض أمينية نباتية خاصة. فهو يعمل على توفير العناصر الغذائية لفترة طويلة دون تسرب المكونات النشطة من التربة الرملية الى الطبقة السفلية.  فهو لا ينتج منتجات زراعية صحية وعالية الجودة بشكل موثوق فحسب، بل إنه يعيد التربة إلى حالتها الصحية أيضًا.  يعمل على تحسين التربة لاحتوائه على الجير والسيليكا.  سماد مثبط للنترجة مضاف إليه (DMPP)‏  سماد طويل التاثير ويستمر لمدة ۹۰ إلى ۱۲۰ يوما. يعمل على تنمية الجذور النشطة يعطي منتجات الزراعية ذات جودة عالية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 51,
        name: "بليسيفا برو 25ملي",
        botanicalName: "",
        category: "pesticides",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5cc36aba-ce58-479c-a6b1-ed40ea6e3e34_Picsart_25-02-04_15-05-13-946.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "خواص واستخدامات المبيد  بليسيفا برو مبيد يستخدم لمكافحة طيف واسع من الحشرات / العناكب الضارة التي تسبب خسائر على المحاصيل الزراعية المختلفة.  المادة الفعالة سيانترانيليبرول من مجموعة كيميائية تسمى انثرائيليك دياميد ذات طريقة عمل جديدة حيث تؤثر على مستقبلات الريانودين في الحشرة مؤدية الى شلل وموت الحشرة.  ابا ميكتين من فئة أفيرميكتين يعمل بطريقة فريدة على الناقل العصبي حمض جاما امينوبيوتيريك (GABA والذي يؤدي الى منع نقل الإشارات العصبية في الآفة المستهدفة مما يؤدي الى شللها وموتها.  معدلات و طرق الاستخدام في الحدائق المنزلية 10-20ملي /20لتر ماء  الحجم 25ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 52,
        name: "بيذام اصفر",
        botanicalName: "",
        category: "plants",
        price: 1.0,
        originalPrice: 1.15,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6d021132-a8cb-4475-ad50-96b809119409_image_1024.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "طول الشتلة  50سنتي. صنف جميل وسكري لون الثمر اصفر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 53,
        name: "F1بطيخ فرس",
        botanicalName: "",
        category: "seeds",
        price: 9.0,
        originalPrice: 10.35,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/dae010ec-8de5-4ba1-ab33-539635dd7618_Picsart_25-02-19_12-03-45-969.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور 100بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 54,
        name: "مبيد حشري ديسيس إكسبرت",
        botanicalName: "",
        category: "pesticides",
        price: 17.0,
        originalPrice: 19.55,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/cfb2747f-8459-4f15-9425-09a8fc9e68a9_Picsart_25-02-04_11-05-46-565.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : ديسيس إكسبرت المادة الفعالة : دلتا مثرين ١٠٪؜ (و/ح) وصف المبيد : مبيد حشري يعمل بالملامسة و كسم معدي من إنتاج شركة بابر كروب ساينس. و يرجع نجاح ديسيس لفعاليته المميزة على عديد من الحشرات بالإضافة لتأثيره الصرعى القوي و السريع  معدل الإستخدام : ١٢٫٥ / ١٧٫٥ملي لكل ١٠٠ لترماء الآفات المستهدفة : المن٫الجاسيد ٫الخنافس٫ الذبابة البيضاء٫ذبابة الفاكهة٫ديدان الاوراق و الثمار٫فراشة الدرنات٫و حشرة الدوباس فترة الأمان : ٣ أيام الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 55,
        name: "الألوفيرا (صغير)",
        botanicalName: "",
        category: "plants",
        price: 1.0,
        originalPrice: 1.15,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2e299e40-80d9-48e4-a254-547866207235_pisauikan-N29JXkNO1xI-unsplash-scaled.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يعد نبات الألوفيرا من النباتات العصارية المعمرة والتي يهتم هواة الزراعة المنزلية باقتنائها وزراعتها في المنزل وذلك بسبب فوائدها واستخداماتها العديدة. حيث دخلت حديثاً بشكل كبير في قطاع الصناعات الدوائية والتجميلية والغذائية وبالإضافة إلى أنها تزرع لأغراض الزينة. ويتميز النبات بجذور سطحية وجانبية والسيقان قصيرة تحمل أوراق سميكة رمحيه الشكل وذات حواف منشارية ومغطاة بطبقة شمعية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 56,
        name: "مبيد فطري تشجارين 30",
        botanicalName: "",
        category: "pesticides",
        price: 20.0,
        originalPrice: 23.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9230e259-13a4-429c-a6d2-b22a77177054_Picsart_25-02-04_10-11-12-901.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تشجارين٣٠٪ المادة الفعالة : هيميكسازول حر.   مبيد جهازي لمكافحة فطريات التربة، التي تسبب أمراض الذبول واعفان الجذور الآفات المسهدفة : أمراض سقوط البادرات وامراض الذبول المتسببة عن الفطريات الفيوزاريوم، البيثيوم معدل الإستخدام : ١٠٠ ل١٥٠ لكل ١٠٠ لتر ماء فترة الأمان : ٣٥ يوم.500ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 57,
        name: "فلفل حار pyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/63a1cfb0-d846-4ed9-8e7c-2865d7976412_Picsart_24-10-25_17-50-29-930.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "حجم100رجرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 58,
        name: "مبيد فطري فاكوميل 5",
        botanicalName: "",
        category: "pesticides",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f8775960-ee3b-4181-bc0e-9ce918425fb3_Picsart_25-02-04_10-15-58-084.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فاكوميل ٥٪ جي ار المادة الفعالة : ميتالاكسيل فاكوميل - %5% جي آر : مبيد وقائي وعلاجي طويل الأمد.  فاكوميل - %5% جي آر يتكون من مادة متالاكسيل الجهازية والتي تؤمن وقاية النبات خلال فترة نموه يقاوم عددا كبيرا من أمراض التربة الفطرية مثل تعفن الجذور والساق التي تصيب الفلفل الباذنجان و الفراولة المسطحات الخضراء.  معدل الاستخدام : ٢ل٤ جرام لكل لتر ماء  فترة الأمان : ٢١ يوم الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 59,
        name: "مبيد حشري بريف",
        botanicalName: "",
        category: "pesticides",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ded96a7a-6e60-4b29-8af7-7a7033042f59_بريف 250 ملي.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تفاصيل المنتج مبيد زراعي المادة الفعالة الدلتا مثرين يعمل على مكافحة العديد من الحشرات الطائرة والزاحفة.     معدل الاستخدام   3-5ملي/1لتر ماءالحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 60,
        name: "مبيد اعشاب هال مارك",
        botanicalName: "",
        category: "pesticides",
        price: 15.0,
        originalPrice: 17.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/29e45f0e-8bd2-43f3-bb1e-8df933f5fbcb_Picsart_25-02-04_09-01-42-391.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "هال مارك المادة الفعالة :جلوفسينيت امونيوم هال مارك اس مبيد عشبي جهازي غير إختياري  لمكافحة الأعشاب الحولية والمعمرة يرش على الأوراق في مرحلة النمو. الافة المستهدفة : الأعشاب الحولية المعمرة. (النجيل /السرغوم/ العليق/ العسد..)  معدل الإستخدام :  في المحصول يستخدم في الأماكن الغير مزروعة بالمحاصيل 1.5—2 لتر/200 لتر ماء   فترة الأمان : 15 يوم قبل زراعة المحصول  المرغوب به.  الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 61,
        name: "بونسيانا",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3bcb48f3-62d2-41a8-9f2c-c925a628f334_معلومات-عن-شجرة-البونسيانا.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة بونسيانا تعد من أكثر أشجار الزينة شعبية، وأوراقها ريشية مركبة متساقطة، وهي الآن تنتشر حول العالم لأزهارها الملونة الجذابة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 62,
        name: "الشاي الأزرق",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5943d3c8-8274-423d-817e-a56c38bc4329_9db4fd50d07344958d22c732e9991696.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يعتبر من المتسلقات الجميلة بزهورها الزرقاء ذات الشكل المختلف عن باقي الزهور، حيث تستخدم كشجرة زينة بالعديد من الحدائق والمنازل",
        petFriendly: true,
        inStock: true
    },
    {
        id: 63,
        name: "4mt x100mtبلاستيك ملش 60 مايكرون",
        botanicalName: "",
        category: "tools",
        price: 46.0,
        originalPrice: 52.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/111a9e08-a053-4951-8dfe-a5122efafc31_Picsart_25-08-04_13-45-00-096.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "📦 **بلاستيك ملش زراعيبلاستيك ملش 60 مايكرون   4mtx100mt – جودة عالية وأسعار منافسة** 💯  🛠️ **النوع:** بولي إيثيلين – 60 مايكرون ✅ يحافظ على رطوبة التربة ✅ يقلل نمو الأعشاب ✅ يزيد إنتاجية المحاصيل ✅ مثالي لأجواءنا الصحراوية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 64,
        name: "نارنج",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3338025b-ed80-4512-be6f-88b0b540b5ef_أهم-المعلومات-عن-شجرة-نارنج.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة يصل ارتفاعها إلى عشرة أمتار. أوراقها جلدية غامقة اللون والازهار بيضاء لها رائحة عطرية لطيفة والثمرة كروية كبيرة ذات لون برتقالي محمر تتميز بطعمها الحامض الممزوج بالمرورة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 65,
        name: "برتقال بو صرة",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/de90c2d4-1b26-4fb3-a7b9-96e2a47ad239_14075.png",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة برتقال ابو صرة، من الحمضيات الأكثر شيوعا الذي تتميز بلب عصيري حلو المذاق ذو نكهة طيبة وبخلوه من البذور, بالإضافة إلى العديد من الفوائد الصحية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 66,
        name: "سماد حديد ريدي حديد",
        botanicalName: "",
        category: "fertilizers",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b29b5789-26ee-43fd-b50b-57c5e2e4702d_Picsart_25-02-04_11-18-16-342.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم : ريدي حديد  المكونات : الحديد ١٢% سماد معدني يحتوي على عنصر الحديد مخلبي . *مميزات المركب* منع ومعالجة نقص عنصر الحديد  الحديد من العناصر الهامة حيث يدخل في تكوين الكلوروفيل.   *معدل الاستخدام* 1-2جرام /1لتر الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 67,
        name: "مبيد فطري عناكبي كبريتك",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/30e7fba7-52e6-433f-8e74-191cf948962a_Picsart_25-02-04_10-19-18-037.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "كبريتك المادة الفعالة : كبريت كبريتك مبيد فطري عناكبي على هيئة حبيبات قابلة للانتشار في الماء، يستخدم للمكافحة والورقية من الاصابات الفطرية واثبات العناكب باستخدام الرش الورقي. الافة المستهدفة : البياض الدقيقي العنكبوت الأحمر معدل الإستخدام : ٥٠٠ غرام لكل ٢٠٠ لتر ماء  فترة الأمان :٥ ايام الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 68,
        name: "مبيد عضوي تريتك",
        botanicalName: "",
        category: "pesticides",
        price: 9.0,
        originalPrice: 10.35,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6c962657-07d5-4f33-8db2-d95df5b420a5_Picsart_25-02-04_08-52-28-184.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تريتك80٪ إي دبليو المادة الفعالة : زيت نفطي ( بازافينك) مبيد مبيد حشري ومبيد للفطريات يعتبر TriTek الرائد المثبت في أداء مبيدات الآفات وموثوقيتها، وهو مركز فريد من الزيت عالي التكرير عالي النقاء وعالي البرافيني ومنخفض العطرية. يوفر TriTek مكافحة فعالة للآفات والأمراض في مجموعة واسعة من المحاصيل ونباتات الزينة دون التسبب في حروق أو إجهاد للنباتات TriTek مدرجة في OMRI وتفي بل وتتجاوز معظم المعايير العالمية لزيوت الرش الزراعية هو مبيد عضوي يستخدم في معظم الفواكه والخضروات كرذاذ خامل وكبخاخ زيت صيفي. الآفات :حشرة المن/ يرقات الخنفساء /عناكب /صانعات الانفاق/تربس/ الذبابة البيضاء. تحذير : يمنع إضافة هذا المبيد عن طريق شركات الري بالتقطير.  الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 69,
        name: "بوملي ابيض",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/44cb1c4e-f329-409a-bb71-2ee3c73be1e6_Picsart_24-11-13_12-29-32-409.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من الحميضات المعروفة بطعمها الحامض المميز نجحت زراعتها في السلطنة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 70,
        name: "ذرةMerit",
        botanicalName: "",
        category: "seeds",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c9b0857c-8f11-4aa6-96e9-607aacdfdedb_IMG-20250830-WA0012.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ذرة سكرية هجينة ٢٠٠ جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 71,
        name: "بذور جزر اصفرpyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/bee7d89c-33b6-4857-a98f-be330e1a7e9d_Picsart_24-10-25_17-49-38-244.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "حجم الكيس 50جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 72,
        name: "مبيد فطري ريدومي كوبر",
        botanicalName: "",
        category: "pesticides",
        price: 7.5,
        originalPrice: 8.62,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a819f069-f95e-47c4-8667-5afbc7354ec9_Picsart_25-02-04_08-27-07-068.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ريدومي كوبر دبل يو بي المادة الفعالة: ميتالاكسيل مبيد فطري جهازي لمكافحة مدى واسع من الأمراض الفطرية  مبيد فطري وقائي ذو تأثير طويل المدى لمكافحة مدى واسع من الأمراض الفطرية مثل  أمراض البياض الزغبي وتبقع الأوراق واللفحة المبكرة والمتأخرة على محاصيل عديدة . الافة المستهدفة : البياض الزغبي اللفحة المبكرة و المتأخرة تبقع الأوراق وامراض الذبول   معدل الإستخدام : ٤٠٠لـ٥٠٠ غم لكل ٢٠٠ لتر  فترة الأمان : ٣ ايام  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 73,
        name: "F1بطيخ فاروا",
        botanicalName: "",
        category: "seeds",
        price: 20.5,
        originalPrice: 23.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2c8d656b-ce75-41a8-9c3a-f381d90e4360_Picsart_25-02-19_12-04-54-181.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور  1000",
        petFriendly: true,
        inStock: true
    },
    {
        id: 74,
        name: "تايمر اوربت 4محابس",
        botanicalName: "",
        category: "irrigation",
        price: 35.0,
        originalPrice: 40.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/00f8d7f4-ae08-460d-a9f6-03c34a3a93a9_101004.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر عالي الجوده من شركة اوربت 4محابس",
        petFriendly: true,
        inStock: true
    },
    {
        id: 75,
        name: "F1بذور بطيخ بوتكان",
        botanicalName: "",
        category: "seeds",
        price: 21.5,
        originalPrice: 24.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2de5da54-d622-4f8c-8f4a-986c876cb0a6_Picsart_25-02-19_12-05-46-288.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 76,
        name: "مبيد حشري رافن 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4eed0314-2008-49a5-8114-a768ca0c29ce_Picsart_25-02-04_13-49-46-604.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : رافن بلس ٢,٨% إي سي الماده الفعالة :دلتا مثرين  وصف المبيد:مبيد حشري ذو مجال واسع من التأثير و فعال بواسطة الملامسة و الهضم -فعال لمكافحة الذبابة البيضاء و التربس و ذبابة القريات. معدل الاستخدام : ١٦٠مل /٢٠٠لترماء  الافات المستهدفة : ذبابة بيضاء. ديدان الأوراق و الثمار  ذبابة الفاكهة فترة الامان:٧أيام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 77,
        name: "بطيخ  الحصن F1",
        botanicalName: "",
        category: "seeds",
        price: 18.0,
        originalPrice: 20.7,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5738a023-4fcb-422d-86a5-e7a5fd06df0f_Picsart_25-02-19_12-07-04-387.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يحتوي على 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 78,
        name: "مبيد حشري ديسيرين 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/34d21023-2ebd-40f8-8cb5-efedbb062d01_Picsart_25-02-04_13-38-53-980.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : ديسيرين ٢,٥ إي سي الماده الفعالة :دلتا مثرين  وصف المبيد:مبيد حشري ذو مجال واسع من التأثير و فعال بواسطة الملامسة و الهضم -فعال لمكافحة الذبابة البيضاء و التربس و ذبابة القريات. معدل الاستخدام : ١٠-١٥ ملي/٢٠لترماء الافات المستهدفة : ذبابة بيضاء.التربس. ذبابة القريات فترة الامان:٧أيام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 79,
        name: "واشنطونيا",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/38083620-ff61-4d03-9d48-2e12ed79054f_تعرف-على-شجرة-واشنطن-أو-نخيل-واشنطونيا.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "نخلة واشنطونيا مفضلة وشهيرة في العالم العربي بسبب شكل سعفتها الغريب على هيئة مروحة، وهي من أكثر أنواع نخيل الزينة مبيعاً في المشاتل على عموم الوطن العربي على اعتبار ارتباط العرب بالنخلة وشكل نخلة واشنطونيا المميز يعطيها الأفضلية وهي ايضا من أشجار الزينه المعمره",
        petFriendly: true,
        inStock: true
    },
    {
        id: 80,
        name: "NPK 20-20-20",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9a5c8e69-0ee1-4609-b9a5-f7cffd0f6545_Picsart_24-11-14_23-07-06-939.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "20-20+T.E NPK20-20-20+T.E سماد مركب  متوازن مع عناصر صغرى لجميع مراحل النمو  مميزات السماد :  تركيبته المتوازنة تسمح باستخدامه لجميع مراحل عمر النبات من الإنبات وحتى مرحلة الإثمار والحصاد.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 81,
        name: "مقص الشفرة الذهبية",
        botanicalName: "",
        category: "tools",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5f4c1e13-c8de-4d5b-b802-5e0443649197_Picsart_24-10-25_17-45-01-426.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مقص عالي الجودة شفرة حادة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 82,
        name: "4محابس VALTICINO تايمر ايطالي",
        botanicalName: "",
        category: "irrigation",
        price: 30.0,
        originalPrice: 34.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b7bcc49a-8ee0-47c0-9cb7-fc4344aa413f_558ce2b8-f865-4f04-aaeb-975275af24a7_Picsart_24-11-10_20-59-38-394.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر 4محابس",
        petFriendly: true,
        inStock: true
    },
    {
        id: 83,
        name: "1.2mx200mبلاستيك ملش 60 مايكرون : .",
        botanicalName: "",
        category: "tools",
        price: 28.0,
        originalPrice: 32.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/8d079e1c-07d2-472f-9ad5-708bd3f973f1_Picsart_25-08-04_13-45-00-096.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "📦 **بلاستيك ملش زراعي – جودة عالية وأسعار منافسة** 💯  🛠️ **النوع:** بولي إيثيلين – 60 مايكرون ✅ يحافظ على رطوبة التربة ✅ يقلل نمو الأعشاب ✅ يزيد إنتاجية المحاصيل ✅ مثالي لأجواءنا الصحراوية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 84,
        name: "خيار كاسر هجين",
        botanicalName: "",
        category: "seeds",
        price: 18.0,
        originalPrice: 20.7,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/cf915710-49bf-41e1-827b-2f36c211fb05_Picsart_25-08-30_17-56-00-190.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين يحتوي على 500بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 85,
        name: "1.2mt x100mtبلاستيك ملش 60 مايكرون",
        botanicalName: "",
        category: "tools",
        price: 18.0,
        originalPrice: 20.7,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9b19726f-52a0-4460-a7d8-ae85a0a0eb36_Picsart_25-08-04_13-45-00-096.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "📦 **بلاستيك ملش زراعيبلاستيك ملش 60 مايكرون    – جودة عالية وأسعار منافسة** 💯  🛠️ **النوع:** بولي إيثيلين – 60 مايكرون ✅ يحافظ على رطوبة التربة ✅ يقلل نمو الأعشاب ✅ يزيد إنتاجية المحاصيل ✅ مثالي لأجواءنا الصحراوية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 86,
        name: "ليمون بن زهير مطعم",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/70de4494-2fc9-4942-8956-0db727b7159b_maxresdefault (25).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف مطعم على اصل قوي ومقاوم .غزير الانتاج الثمار مستديرة اللون اخضر .حموضة عالية . بزرعة في الأماكن المشمسة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 87,
        name: "بذور الطماط pyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d2cb142d-4252-4852-971a-98c8ca323e6d_Picsart_24-10-25_17-50-55-399.png",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "حجم الكيس 50 جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 88,
        name: "4strokeمكينة رش تعمل بالبترول",
        botanicalName: "",
        category: "tools",
        price: 75.0,
        originalPrice: 86.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/22f293f9-e0de-4010-9dd0-7787f7d8dcb0_Picsart_25-02-21_19-46-35-103.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مكينة رش تعمل بالبترول 4stroke الموتر هوندا السعر 75ريال",
        petFriendly: true,
        inStock: true
    },
    {
        id: 89,
        name: "تمر حنا",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5f086c0f-a3d4-46ca-80e3-ef368a3c99bf_a2cd0799-0174-46d9-9be1-2e52bda2ec0d.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجيرة مستديمة الخضرة غزيرة التفريع, أزهارها الصيفية المذهلة تسحر العين و تجذب النحل و الطيور المختلفة التي تتغدي من رحيقها",
        petFriendly: true,
        inStock: true
    },
    {
        id: 90,
        name: "مبيد حشري جهازي سيڤانتو",
        botanicalName: "",
        category: "pesticides",
        price: 16.5,
        originalPrice: 18.97,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/484a9886-c36f-4667-9780-64c5d95e3512_Picsart_25-02-04_09-15-22-044.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سيڨانتو برايم المادة الفعالة : فلوبيراديفيورون مبيد حشري جهازي يستعمل بالرش للاوراق حيث يمتص عن طريق المجموع الخضري والجذور وينتقل في النبات داخل أوعية الخشب كما أنه يتحرك حركة نفاذية خلال الأوراق. الافة المستهدفة : المن- نطاط الأوراق- الذبابة البيضاء معدل الإستخدام : ٦٠مل لكل ١٠٠ لتر ماء فترة الأمان : يوم واحد الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 91,
        name: "سماد رش ورقي ماكس مور",
        botanicalName: "",
        category: "fertilizers",
        price: 2.7,
        originalPrice: 3.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/fc79cbfc-7d64-4284-acd7-09de2681f065_Picsart_25-02-04_14-48-14-300.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ماكس مور  10.5.40+TE سماد كيميائي يحتوي على النايتروجين والفسفور والبوتاسيوم والعناصر الصغرى . لتعزيز نمو الفاكهة والزهور والمحاصيل الضعيفة والمحاصيل الأخرى .  سماد قابل الذوبان في الماء  يستخدم كرش ورقي خلال فترات نمو النبات التي تتطلب مستويات عالية من البوتاسيوم. يساعد على مكافحة الإجهاد ومقاومة النبات   *كمية الاستخدام*  2.5-3ملي في 1لتر ماء    الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 92,
        name: "EVER  SIZE  PLUSعالي البوتاسيوم",
        botanicalName: "",
        category: "fertilizers",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/975b97c0-7ff0-428c-9a89-a460067cbc99_Picsart_25-04-23_08-52-45-885.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "٢٦% بوتاسيوم مع احماض كربوكسلية عضوية معقد بالكامل على سكريات كحولية لضمان سهولة الامتصاص قوة النتائج  *يستخدم فى مراحل التحجيم فى محاصيل الخضر والفاكهة  *يساعد فى حماية المحاصيل المعاملة فى الوقاية من الأمراض الفطرية والبكترية نظرا لوجودة الاحماض الكربوسلية المتخصصة فى ذلك  *يرفع من مقاومة النبات ضد ظروف الإجهاد المختلفة.  *معدل الاستخدام*  ٥ مللى / 1 لتر ماء بمعنى اخر لتر على ٢٠٠لتر ماء يرش أسبوعيا فى فترة التحجيم لمحاصيل الفاكهة والخضروات.\n\nشرح بالفيديو: https://youtube.com/shorts/bKb861IsWks?feature=share",
        petFriendly: true,
        inStock: true
    },
    {
        id: 93,
        name: "TECH DURASOP 10-10-17سماد عالي البوتاسيوم مركب",
        botanicalName: "",
        category: "fertilizers",
        price: 15.0,
        originalPrice: 17.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c2c9ec77-3864-4cad-9602-e51a8b14ae4f_Picsart_25-02-05_15-07-48-261.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "نسبة بوتاسيوم مرتفعة (17%) تساهم في تحسين إنتاج الأزهار والثمار وزيادة جودتها. يساعد على تحسين مقاومة النباتات للجفاف والظروف البيئية القاسية. يحتوي على نسبة متوازنة من النيتروجين والفوسفور التي تحفز النمو الخضري. مثالي للزراعة في الحدائق المنزلية والمزارع التي تهدف إلى تحسين إنتاجية المحاصيل.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 94,
        name: "مبيد حشري فوليام فليكسي",
        botanicalName: "",
        category: "pesticides",
        price: 24.0,
        originalPrice: 27.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5aad9185-2e4f-43b2-a2ea-ba404e66e7f7_Picsart_25-02-04_10-06-12-778.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فوليام فليكسي المادة الفعالة : كلورانترالبرول فوليام فليكسي يمتاز بكفائته على مكافحة الحشرات التي اكتسبت مناعة ضد المبيدات الأخرى.  ونظرا لاختراقيته العالية يكافح الحشرات و يأمن الحماية الطويلة للنبات و للنوات الجديدة. الافة المستهدفة : الحشرات الماصة و القارضة  الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 95,
        name: "بكس بنل تشغيل مضختين",
        botanicalName: "",
        category: "irrigation",
        price: 100.0,
        originalPrice: 115.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/023c506a-8a80-4a9e-bd3b-15afc7f8dd2e_Picsart_25-02-20_08-21-38-950.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بكس بنل سنجل فيس يشغل مضختين القطع من شركة هنل",
        petFriendly: true,
        inStock: true
    },
    {
        id: 96,
        name: "هايبسكس",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a360f9f7-e0e7-4e46-9478-a39a2ebe6a08_41zW0AP+rEL._AC_UF1000,1000_QL80_.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "نبات هيبسكس (Hibiscus) وهو نبات مستديم الخضرة وتتميز بنموها السريع ويمكن أن يصل ارتفاع بعض أنواعها إلى 5 أمتار، قابلة للتقليم والتشكيل وتزهر طوال العام، وتتعدد ألوان الأزهار من الأحمر إلى الأبيض والأصفر والوردي وغيرها ، ومما يميز أزهارها عن غيرها بروز الأعضاء المذكرة والمؤنثة  بشكل طويل إلى الخارج، والزهرة كبيرة الحجم. تزرع في مكان مشمس  وتربة جيدة الصرف. ممكن اكثارها بالعقل.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 97,
        name: "مؤقت رقمي ذكي   - موديل SET09A-UK",
        botanicalName: "",
        category: "irrigation",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9478c53f-87da-4d90-ab6b-589a0480c93b_Picsart_25-08-08_09-04-49-436.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: ":  الجهد الكهربائي: 240V~ التردد: 50Hz القدرة القصوى: 13A / 3100W 💡 مثالي لتشغيل الأجهزة تلقائيًا وتوفير الطاقة!  🔹 شاشة LCD كبيرة لسهولة الإعداد والرؤية 🔹 10 برامج مرنة يومية أو أسبوعية (بدقة دقيقة!) 🔹 تحكم تلقائي بـ إضاءة الحديقة، ماكينة القهوة، نظام الري، إنارة  وغيرها  🔹 تركيب مباشر بالمقبس وسهل الاستخدام 🔹 موفر للطاقة ويحافظ على عمر الأجهزة. 🔹 مناسب للمنازل والمكاتب",
        petFriendly: true,
        inStock: true
    },
    {
        id: 98,
        name: "ترن أون - TURN ON",
        botanicalName: "",
        category: "fertilizers",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b416a847-0943-41ed-ae4a-b748eecdacf5_Picsart_25-08-06_17-16-41-979.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "🌿 **تكنولوجيا النشط... للتمثيل الضوئي لنباتاتك**  ---   🧪 **تركيبة عضوية مبتكرة** لتعزيز قوة النبات ومناعته الطبيعية ضد التحديات البيئية:  *🎯 الفعالية الأساسية:*  * يعزز امتصاص العناصر الغذائية ويقوّي عمليات البناء الضوئي. * يرفع مقاومة النبات للإجهاد الحراري، الفطري، والحشري. * يقلل من الاعتماد على المبيدات الفطرية بفضل خاصية الانتشار والالتصاق العالية. * يُكوّن طبقة حماية عاكسة تقلل من حرارة الورقة وتحافظ على توازن الرطوبة.  ---   🍋 **فوائد \"ترن أون\" لنباتاتك:**  * يحسّن **تناسق العقد** و**حجم الثمار** و**لونها** الطبيعي. * يزيد من **سُمك قشرة الثمار** ويجعلها أكثر مقاومة للإصابات الحشرية. * يعمل كمادة **ناشرة ولاصقة** للمبيدات والأسمدة الورقية. * **يقلل النتح الكيوتيني** ويحافظ على فتح الثغور بشكل منظم لدعم التمثيل الضوئي.  ---  🌱 **معتمد للزراعة العضوية**  آمن 100%، ولا يحتاج لفترات أمان قبل الحصاد.  ---  🧪 **التركيبة**:  * نيتروجين كلي (N): 5.5% * أكسيد الكالسيوم (CaO): 27% * منجنيز (Mn): 0.5% * زنك (Zn): 1.5% * سيليكون (SiO₂): 3.4%  ---   💧 **طريقة الاستخدام: رش ورقي* **📌 للخضروات والحبوب:** 200 – 300 مل لكل 200 لتر ماء، يُكرر كل 15 يومًا.  **📌 للفواكه:** 200 – 300 مل لكل 200 لتر ماء، 3 مرات في الموسم.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 99,
        name: "الخيار الروسي(٥٠٠)بذرة",
        botanicalName: "",
        category: "seeds",
        price: 22.0,
        originalPrice: 25.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6258c90b-2f7e-472b-90e3-d02f9ce1042a_IMG-20241124-WA0088.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: ". بذور خيار روسي من افضل الاصناف بذور الخيار المتوفرة بالسلطنة إنتاج غزيز واحجام متناسقة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 100,
        name: "بذور طماط لوجين F1",
        botanicalName: "",
        category: "seeds",
        price: 17.5,
        originalPrice: 20.12,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c2410c73-19d9-4ebb-a8ae-1cb7cd722d83_Picsart_25-02-12_22-09-55-627.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "طماط غزير الإنتاج عدد البذور 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 101,
        name: "بذور الزينيا الابيض الزهور الموسمية",
        botanicalName: "",
        category: "seeds",
        price: 0.6,
        originalPrice: 0.69,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/577545f3-17dc-4970-808c-13a941231071_Picsart_24-12-02_20-59-44-227.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يفضل زراعة نبات زهرة الزينيا في مكان مشمس بحيث يتعرض فيه النبات لأشعة الشمس بصورة مباشرة، ويحتاج نبات الزينيا إلى الكثير من أشعة الشمس المباشرة لينمو على نحو جيد. يجب تجنب الإفراط في ري نبات الزينيا، مع المحافظة على الري عند قاعدة النبات بعيدًا عن الأوراق للحفاظ على صحة النبات ومنع الأمراض الفطرية. يُوصي بتقليم الزهور  المتيبسة.  يجب توفير تهوية جيدة حول نبات الزينيا، والمحافظة على أوراق النبات جافة لوقايته من الأمراض.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 102,
        name: "اقراص التسميد عالي البوتاسيوم",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/168b9984-829a-439b-bada-2606874e1b73_Picsart_24-11-09_09-22-57-687.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تركيبة من العناصر الكبرى مع عنصر البوتاسيوم بتركيز عالي لتحسين العقد وجودة الثمار وتعزيز الإنتاج\n\nشرح بالفيديو: https://m.youtube.com/watch?v=-e1tOhEUiwI",
        petFriendly: true,
        inStock: true
    },
    {
        id: 103,
        name: "مبيد فطري ردوميل جولد 2.5",
        botanicalName: "",
        category: "pesticides",
        price: 15.0,
        originalPrice: 17.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d4c04fb3-9970-44ae-8504-b6c63ddec8cd_Picsart_25-02-05_15-18-30-052.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يوفر سيطرة ممتازة وطويلة الأمد على الأمراض المتبقية.  يوفر التحكم المنهجي في الأمراض التي تنتقل عن طريق التربة مثل فيتوفثورا وبيثيوم.  يتناسب مع برامج مكافحة الآفات المتكاملة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 104,
        name: "بذور فيفاي رد لدي التايواني 10جرام",
        botanicalName: "",
        category: "seeds",
        price: 33.0,
        originalPrice: 37.95,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4d91605e-6f30-4fee-a44d-37ebb1bb6be5_Picsart_25-02-12_20-19-59-307.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من افضل بذور الفيفاي إنتاج غزير جدا.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 105,
        name: "ذرة AGROEAST",
        botanicalName: "",
        category: "seeds",
        price: 26.5,
        originalPrice: 30.47,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5cdfb440-04bd-43c6-b914-970e1a6f5334_IMG-20250830-WA0015.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ذرة سكرية مجان هجين يحتوي على ٥٠٠٠ بذرةرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 106,
        name: "التين الشوكي",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3c6487d9-3d96-4236-b728-5360c397e89b_4216505.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "التين الشوكي أو الإجاص الشائك هو نفس الاسم للفاكهة الصيفية اللذيذة التي تنمو على حافة ألواح نوع معين من نبات الصبار.  ويمكن أن يتراوح لون ثمار التين الشوكي البيضاوية بين اللون الأصفر والأخضر الفاتح إلى البرتقالي والوردي والأحمر، حسب تنوعها ونضجها",
        petFriendly: true,
        inStock: true
    },
    {
        id: 107,
        name: "AVAN GEL 20-20-20 سماد",
        botanicalName: "",
        category: "fertilizers",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/84037134-888d-43fa-89b5-a8692efa1348_Picsart_25-02-11_06-42-41-124.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يحتوى على عناصر متوازنة من النيتروجين والفوسفور والبوتاسيو ممصمم لتوفير أفضل مزيج من العناصر الغذائية التي تحتاجها للنبات معامل بدرجة حموضة منخفضة يساعد على تحسين امتصاص العناصر.كمية الاستخدام.  1.5في /1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 108,
        name: "مبيد حشري عضوي ويويل اكس",
        botanicalName: "",
        category: "pesticides",
        price: 16.5,
        originalPrice: 18.97,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c8606141-b219-46c5-92ff-1d0ddcf0ac44_Picsart_25-02-04_10-29-46-245.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ويّويل اكس المكونات : بوفيريا باسيانا٥٠٪ ميتار هيزيوم أنيسوبليا ٥٠٪ مبيد حيوي وعضوي قوي للقضاء على سوسة النخيل الحمراء.  صديق للبيئة ولا يسبب أي تلوث ثانوي أو آثار جانبية لا يوجد أي ضرر للإنسان والحيوان والحشرات المفيدة والنباتات والبيئة.  الافة المستهدفة :سوسة النخيل كيفية الاستخدام:  1- خفف 500 لتر من الماء 500 جرام (1) كيس) من ويويل - أكس 1 مع 500 مل (1) عبوه) من ويويل - أكس 2 وحركة جيدا.  2 رش كمية كافية بواسطة ماكنة رش ذات ضغط عالي حتى يتم نقع جسم الشجرة بالكامل ، من الأوراق العلوية إلى الساق. (حوالي 50 لترا للأشجار البالغة ترش مرتين في الأسبوع في البداية . بعد ذلك ، استخدم مرتين كل 15 يوما ، ثم مرة واحدة شهريا بعد ذلك ، من الأفضل اتخاذ التدابير للسماحللعقار أو الدواء بدخول الفجوة عن طريق عمل فتحة خلال السيقان قدر الإمكان .  3 في نفس الوقت ، استخدم حاقن التربة لحقن 1 لتر على عمق 20 إلى 30 سم بالقرب من الجذور.  4- قم بعمل 3 إلى 5 ثقوب في جذع النخلة بعمق حوالي 20 سم بواسطة ثاقب كهربائي على مسافة 1.5 متر من سطح الأرض، واستخدم ماكنة الرش ذات الضغط العالي لحقن حوالي 300 مل من الدواء في كل ثقب. استمر بحقن الدواء مرة واحدة في الأسبوع لمدة شهر.  -5- يجب تنفيذ مكافحة الآفات في وقت واحد على الأشجار المجاورة للأشجار التي تضررت من سوسة النخيل الحمراء من المحتمل أن تكون الدودة البالغة قد هاجرت بالفعل إلى شجرة قريبة   الحجم 500جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 109,
        name: "مبيد اعشاب دوال جولد",
        botanicalName: "",
        category: "pesticides",
        price: 23.0,
        originalPrice: 26.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/7ea1ea38-3a3c-4f7a-981d-04ec8c1a39b9_Picsart_25-02-04_10-24-58-729.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "دوال جولد ٩٦٠ اي سي المادة الفعالة : اس ميتولاكلور٩٦٪ دوال جولد ٩٦٠ إي سي مبيد أعشاب اختياري يستخدم بعد الزراعة وقبل الإنبات في المحاصيل لمكافحة الأعشاب الرفيعة وبعض الاعشاب العريضة، يتم امتصاصه بشكل رئيسي من المجموع الخضري لبذور الاعشاب عند بداية الإنبات الافة المستهدفة : الأعشاب العريضة والأعشاب الرفيعه  معدل الإستخدام:  لتر لكل ٢٠٠ل٤٠٠ لتر ماء  الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 110,
        name: "الدفلة",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/85951c42-9858-407e-a1c1-66d6b318511b_Nerium-Oleander.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "الدفلة- من نباتات الزينة التي تنتشر زراعتها في الشوارع العامة والحدائق والمنتزهات وفي كثير من مدن العالم؛ لجمال أزهارها وتنوع ألوانها",
        petFriendly: true,
        inStock: true
    },
    {
        id: 111,
        name: "سماد بي فورج",
        botanicalName: "",
        category: "fertilizers",
        price: 26.0,
        originalPrice: 29.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/584a125a-81ab-4bff-a23d-b4521baa6491_IMG-20250204-WA0024.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بي فورج سماد سائل يحتوي على الكوبالت طريقة الاستخدام: الرش الورقي ( جميع خضار البيوت المحمية والحقول وجميع اشجار الفاكهة ونباتات الزينة بأنواعها) معدل الإستخدام : ١٠٠لـ١٥٠ مل لكل ١٠٠ لتر ماء",
        petFriendly: true,
        inStock: true
    },
    {
        id: 112,
        name: "بذور خيار عز",
        botanicalName: "",
        category: "plants",
        price: 30.0,
        originalPrice: 34.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/49d3edfc-79d2-4afa-bb2f-560b739123ea_Picsart_25-08-30_17-53-56-833.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين غزير الإنتاج يحوي على 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 113,
        name: "اقراص التسميد عالي الفسفور",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/e4bbe69d-e42d-4f0b-96cb-975989fff55a_Picsart_24-11-09_09-22-28-483.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تركيبة من العناصر الكبرى مع عنصر الفسفور بتركيز عالي لتحسين النمو الجذري وتحفيز الازهار وتقوية امتصاص الجذور.\n\nشرح بالفيديو: https://m.youtube.com/watch?v=-e1tOhEUiwI",
        petFriendly: true,
        inStock: true
    },
    {
        id: 114,
        name: "سماد اجرو جرين ٢٠-٥-٥",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/373331e4-5d11-4287-91f0-81042e0e737e_IMG-20250204-WA0029.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اجرو جرين ٢٠-٥-٥ يعزز النمو الورقي والمجموع الخضري غني بالعناصر الأساسية ويقوم بـ تنشيط العمليات الحيوية للنبات تعويض نقص العناصر الغذائية للنبات تحسين عمليه التمثيل الضوئي وزيادة نسبه الكلورفيل للأوراق وإنقسام الخلايا النباتيه. معدل الإستخدام :  الرش الورقي/ ٣لـ٤ مل لكل لتر ماء المحاصيل الحقلية/ ٣لـ٤ لتر لكل فدان تكرر على ثلاث دفعات خلال الموسم الخضروات المكشوفة/ ٥لـ٥ لتر للفدان تعطى بعد الحصاد ب١٠ ايام حسب الحاجة اشجار الفاكهة /٥٠ل١٠٠ مل لكل شجرة حسب عمر الشجرة عن طريق الري تو الحقن",
        petFriendly: true,
        inStock: true
    },
    {
        id: 115,
        name: "سماد كالسيوم بورون كالبورون",
        botanicalName: "",
        category: "fertilizers",
        price: 8.0,
        originalPrice: 9.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c77fc560-c85a-4e34-b88a-9b4ddef79a12_Picsart_25-02-04_08-36-50-837.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "أسم المبيد : كالبورون  المواد العضوية : أكسيد الكالسيوم ذائب في الماء ٣٠ (وزن/وزن)؜ + بورون ١(وزن/وزن ) وصف المحسن : عبارة عن سماد ذائب على شكل بودرة ، يحتوي على مركب الكالسيوم المحمل حمض الكاربوكسيليك و البورون بدون نترات ، كلوريدات او كبريتات يضاف إلى النبات   معدل الأستخدام: ٢-٥ غرام لكل ١ لتر ماء  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 116,
        name: "Seminis DELTAبذر بطيخ",
        botanicalName: "",
        category: "seeds",
        price: 46.0,
        originalPrice: 52.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d5c75e5b-e807-4156-a58c-8c95cb1a936d_Picsart_25-02-12_22-12-20-450.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور بطيخ هجين غزير الإنتاج حجم كبير يحتوي الكيس على 2000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 117,
        name: "خلطة تهيئة التربة قبل الزراعة",
        botanicalName: "",
        category: "fertilizers",
        price: 1.0,
        originalPrice: 1.15,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/13bec3b5-5cc9-45ac-b2c4-72e181fc3c73_Picsart_24-11-14_23-27-38-506.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من افضل الخلطات الغنية بعنصر  الفسور والهيومك والكبريت  تستخدم لتهيئة التربة قبل الزراعة الاشجار.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 118,
        name: "تايمر للري يدوي اخضر",
        botanicalName: "",
        category: "irrigation",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6a76f778-be16-4437-8e3f-8fb13dde9cab_Picsart_25-02-20_08-53-03-169.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر يدوي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 119,
        name: "مبيد حشري مجان ايفاسكت",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d1787970-2ada-48c1-9528-4f771dfd0a22_Picsart_25-02-04_07-38-24-057.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مجان ايفاسكت المادة الفعالة : ثيوسيكلام هيدروجين اوكسلات.   مبيد حشري يقضي على العديد من الحشرات بالملامسة والتسمم المعدي يمتصة النبات سريعاً وينتقل خلال العصارة من الأوراق الى الجذور.  الافة المستهدفة : الثربس / الذبابة البيضاء معدل الإستخدام : ١٥٠ل٢٠٠ جرام لكل ٢٠٠ لتر ماء فترة الأمان :٧ ايام الحجم 100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 120,
        name: "المخلط العماني",
        botanicalName: "",
        category: "fertilizers",
        price: 8.5,
        originalPrice: 9.77,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9b8dae0a-6819-4ae4-82c8-66cb1a2c182f_Picsart_24-11-09_00-57-32-567.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "الحجم 25كيلوا  *المُخلط العُماني/* عبارة عن سماد محسن ومخصب للتربة،  يحتوي على العناصر الصغرى، كما يحتوي على نسبة عالية من الكبريت يساعد على خفظ ملوحة  التربة وتخصيبها ومكافحة فطريات التربة. ويمكن إضافته قبل أو أثناء أو بعد الزراعة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 121,
        name: "مبيد حشري بوتيجون",
        botanicalName: "",
        category: "pesticides",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c4ed5e43-6676-4a38-9cfd-ec74d38ae730_Picsart_25-02-04_11-35-01-369.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بوتيجون المادة الفعالة : اسيتاميبريد بوتيجون 20 POTEGON مبيد حشري جهازي ينتقل من المجموع الخضري الى الجذور، كما تمتصه الجذور وينتقل الى الأوراق. يعمل بالملامسة وعن طريق المعدة و يستخدم كمبيد متخصص لمكافحة الحشرات الماصه، الذبابة البيضاء، المن التربس بالاضافة الى الحشرات القارضة. معدل الإستخدام : ٥٠ ل٦٠ جرام لكل ٢٠٠ لتر ماء  فترة الأمان : ٧ ايام الحجم 125جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 122,
        name: "سيفانتو برايم",
        botanicalName: "",
        category: "pesticides",
        price: 16.5,
        originalPrice: 18.97,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/1764f0c7-a099-4f21-abe4-20d51e67926d_Picsart_25-02-04_09-15-22-044.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سيڨانتو برايم المادة الفعالة : فلوبيراديفيورون مبيد حشري جهازي يستعمل بالرش للاوراق حيث يمتص عن طريق المجموع الخضري والجذور وينتقل في النبات داخل أوعية الخشب كما أنه يتحرك حركة نفاذية خلال الأوراق. الافة المستهدفة : المن- نطاط الأوراق- الذبابة البيضاء معدل الإستخدام : ٦٠مل لكل ١٠٠ لتر ماء فترة الأمان : يوم واحد",
        petFriendly: true,
        inStock: true
    },
    {
        id: 123,
        name: "HUMI CHARGEسماد هيومك",
        botanicalName: "",
        category: "fertilizers",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/84f0fa6c-0dbe-482d-abd3-cb5c51912842_Picsart_25-02-04_10-52-34-785.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "هيومي تشارج المادة العضويه : حمض الهيوميك + الفوليك  65٪؜.البوتاسيوم 10% وصف المحسن : محسن تربه عضوي يحتوي على احماض الهيوميك و الفولفيك و البوتاسيوم  معدل إلاستخدام : 1 غرام لكل لتر ماء  طريقة الاستخدام  قبل الزراعة-خلال الزراعة-أثناء زراعة الشتول في التربة الدائمة - خلال موسم النمو.  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 124,
        name: "بذور برسيم الفا الفا اسباني",
        botanicalName: "",
        category: "seeds",
        price: 11.0,
        originalPrice: 12.65,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/fb1ab826-5811-46d7-831a-3692358c7c9f_Picsart_25-02-20_11-16-50-595.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "وصف المنتج  يقدم \"أجري بلك\" بذور عالية الجودة للبرسيم ، وهو محصول العلف المفضل المعروف بطبيعته الدائمة ، والقيمة الغذائية العالية ، وسهولة الزراعة وقدرات الرعي المتكررة يتم اختيار اختيارنا من بذور البرسيم لخصائص مفيدة لكل من الحيوانات والتربة. تقدم أصناف البرسيم لدينا جذور صحية عميقة يمكنها الاستفادة من المياه الجوفية وإظهار مقاومة جفاف استثنائية. كما أن البنية الجذرية مفيدة لخصوبة نيتروجين التربة ، بينما تعمل كحاجز ضد تآكل التربة. تقدم بذور البرسيم السائبة الزراعية محصولًا يتميز بالثبات والمرونة وطول العمر. و1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 125,
        name: "سماد بست كيل ١",
        botanicalName: "",
        category: "plants",
        price: 9.0,
        originalPrice: 10.35,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3b4b2428-9d3d-43e5-b30d-045543ab1219_IMG-20250204-WA0028.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بيست كيل1 المكونات : مستخلص ديريس٢٠٪ مستخلص الصفيراء فلافيسنس٣٠٪ عامل لاصق ٢٠٪ مياه نقية ٣٠٪  مبيد عضوي للسيطرة على آفات اوراق أشجار الفاكهة والخضروات والحبوب مثل المن ، والعث ، وذباب الفاكهة.  - مبيد عضوي \"صديق للبيئة\" لا يسبب تأثيرات متبقية.  بیست كيل 1 يعمل على الاضرار بيرقات الآفات من خلال تلامس القسم ونشاط التغذية المضادة. الافة المستهدفة : الآفات الورقية (المن و العناكب) معدل الإستخدام : 1 لتر لكل 250 لتر ماء",
        petFriendly: true,
        inStock: true
    },
    {
        id: 126,
        name: "تايمر كهربائي 12امبير",
        botanicalName: "",
        category: "irrigation",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/40a8f874-bb9e-439c-bd20-03fba4d0e30d_IMG-20230723-WA0036.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر كهربائي 12امبير يمكن تشغيل أجهزة لا تزيد عن. 12امبير مثل المضخات التلفاز الإضاءة . والأجهزة الكهربائية والإلكترونية الأخرى",
        petFriendly: true,
        inStock: true
    },
    {
        id: 127,
        name: "بذور طماط أروى 1000بذرة",
        botanicalName: "",
        category: "seeds",
        price: 9.0,
        originalPrice: 10.35,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/8512bdcf-7835-4043-a943-4c3ad5563bf8_Picsart_25-02-12_22-09-14-706.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين غزير الإنتاج حجم كبير ومتناسق يحوي على 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 128,
        name: "مبيد عناكبي بايفن",
        botanicalName: "",
        category: "pesticides",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ffa28b26-552f-47dc-9195-834d3f787f3f_بايفن.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*إعلان* *يتوفر لدينا مبيد عناكبي غير جهازي* *بايفن Bifen* *المادة الفعالة:* بايفنزيت مبيد غير جهازي يعمل بالملامسة ذو تأثير فعال على جميع الاطوار المتحركة للعناكب لكافة المحاصيل الحقلية والبيوت المحمية آمن على المفترسات والأعداء الحيوية والنحل ويمكن استخدامه في برامج المكافحة المتكاملة IPM. *طريقة الإستخدام:—* رش ورقي 1مل/ 1لتر *سعة العبوة:* 200مل.\n\nشرح بالفيديو: https://m.youtube.com/watch?v=1eFYAgQ4kYw",
        petFriendly: true,
        inStock: true
    },
    {
        id: 129,
        name: "الغاف",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b365f9c5-7d26-4587-9eff-3f8397f7bb31_Prosopis_caldenia.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "وتعتبر شجرة الغاف من النباتات المعمرة التي تتبع الفصيلة البقولية من رتبة الفوليات. تنبت شجره الغاف في الصحراء العربية وتشتهر بتحملها أقصى ظروف الجفاف والحرارة والملوحة، كما أنها لا تتأثر بأشعة الشمس.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 130,
        name: "مبيد فطري نحاسي سوبر كوفول",
        botanicalName: "",
        category: "pesticides",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/992cd37d-78ac-4269-962f-fd78c38be2f4_IMG-20240103-WA0145.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*سوبر كوفول* مبيد فطري جهازي واسع المدى ذات تاثير علاجي فعال ضد العديد من الأمراض الفطرية  *المادة الفعالة*  سيموكسانيل 10% اوكسي كلوريد النحاس 30% نحاس معدني 18% مواد خاملة  60% *الآفات المستهدفة* البياض الزغبي  الندوة المتاخرة  تجعد وتبق الاوراق   *معدل الاستخدام* 500جرام لكل 200لتر ماء   *فترة ماقبل الحصاد*  7أيام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 131,
        name: "AVAN Ca-Bسماد كالسيوم بورون",
        botanicalName: "",
        category: "fertilizers",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/525daea5-28a1-4e4d-9aa4-aa85b6056b2f_Picsart_25-02-04_11-01-34-762.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: ": AVAN Ca-B  المواد العضوية : أكسيد الكالسيوم ١٠٫٥(وزن/حجم)؜ + بورون ٢٬٥(وزن/حجم )+ المواد العضوية ١٥٫٠٣(وزن/حجم) وصف المحسن : سماد سائل يحتوي على عنصري الكالسيوم و البورون لرفع كفائة الامتصاص . و يستخدم لتعزيز تطور المحصول في جميع مراحلة وفي حالات النقص كما يستخدم ايضا لتعزيز عملية الازهار و عقد الثمار  معدل الأستخدام: ١ غرام لكل 1لتر الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 132,
        name: "مبيد حشري عناكبي باندميك 1لتر",
        botanicalName: "",
        category: "pesticides",
        price: 15.5,
        originalPrice: 17.82,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2436d831-5d9b-4235-8adf-4b415a2c5566_Picsart_25-02-04_13-44-18-381.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد: باندميك ٥ أي سي المادة الفعالة:ابامكتين(وزن/حجم) ٥% وصف المبيد: المبيد الحشري عناكبي يعمل بالملامسة و يعمل ع مكافحة صانعات الانفاق و العنكبوت الاحمر  ع جميع المراحل الأطوار , ذو تأثير طويل المدى . : الآفة: العنكبوت الاحمر وصانعات الانفاق  نسب لاستعمال : ٥٠ ملي لكل ٢٠٠لتر فترة الامان: ٣إيام الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 133,
        name: "فرصاد باكستاني",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/628909d4-ca56-4de5-947d-363a0bf29c2b_ExLzPbUVEAoga2H.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من الأشجار كثيرة الزراعة في المجتمع العماني يتميز بثمرته الطويلة وغزارة الانتاج ذات طعم عسلي سكري.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 134,
        name: "اقراص التسميد العناصر الصغرى",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/593ba855-1261-49b1-8c51-ad3c035dbad2_Picsart_24-11-09_09-21-46-096.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تركيبة من العناصر الصغرى بكميات تتناسب مع احتياج النبات في مختلف مراحل النمو والانبات   معدل الاستخدام:  قرص واحد يخفف في 5 إلى 8 لتر من الماء. سقي أو رش ورقي .\n\nشرح بالفيديو: https://m.youtube.com/watch?v=-e1tOhEUiwI",
        petFriendly: true,
        inStock: true
    },
    {
        id: 135,
        name: "مبيد حشري مجان لمبادا 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d437323b-7841-42de-9dd4-f9612a881ef6_Picsart_25-02-04_13-57-17-125.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*مجان لمبادا* المادة الفعالة  لمباداسايهلوثرين2.5٪   *وصف المبيد* مبيد حشري ذو مجال واسع من التأثير وفعال بواسطة الملامسة و الهضم -فعال لمكافحة الذبابة البيضاء و الذبابة الفاكهة و ذبابة القرعيات.  معدل الاستخدام  1-2جرام لكل 1لتر ماء.  *فترة الامان* 3ايام  الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 136,
        name: "السدر المقضماني الباكستاني",
        botanicalName: "",
        category: "plants",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c8d46c92-2636-4dcb-aacd-6b8ee642d1aa_ErOyzu_XUAAdBDq.jpg_large.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "غزيرة الإنتاج بدون بذر صنف سكري وهش وحجم تفاحي يستمر حصاده على مراحل وتستمتع في قطفه لوقت اطول",
        petFriendly: true,
        inStock: true
    },
    {
        id: 137,
        name: "منشار مطوي",
        botanicalName: "",
        category: "tools",
        price: 2.2,
        originalPrice: 2.53,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6c2bd274-8ba2-483e-be06-48c7f04f8422_Picsart_24-10-25_17-38-55-484.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "منشار مطوي SAWORAI",
        petFriendly: true,
        inStock: true
    },
    {
        id: 138,
        name: "*مؤقت الري الرقمي GreenGlow",
        botanicalName: "",
        category: "irrigation",
        price: 10.0,
        originalPrice: 11.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6fe28ccf-e535-47ee-8132-f3fd32c12248_Picsart_25-08-06_11-55-36-532.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "📦💧 الحل المثالي لري النباتات أو الحديقة بشكل تلقائي ودقيق!  🔹 **المميزات**: ✅ مؤشر البطارية: يومض عند انخفاض الطاقة. ✅ مؤشر الري: رمز قطرة الماء يومض أثناء تشغيل الري. ✅ ضبط الوقت الحالي بصيغة 24 ساعة. ✅ تحديد وقت بدء الري. ✅ تحديد مدة الري: من 1 ثانية حتى 300 دقيقة. ✅ تحديد فترات التكرار: من كل ساعة إلى مرة كل 15 يوم. ✅ ري يدوي بأي وقت ترغب فيه. ✅ تأخير الري أثناء المطر. ✅ إشعار بوقت الري القادم تلقائيًا.  🔸 **تعليمات مهمة**: ⚠️ يُحفظ بعيدًا عن الأجواء المالحة أو المحتوية على الكبريت. ❄️ يُفصل ويُخزن بالداخل عند توقع الصقيع. 🧼 نظّف الفلتر بانتظام لإطالة عمر الجهاز. 🔋 استبدل البطارية عند انخفاض الطاقة لتفادي الانقطاع. 🚫 لا تفكك الجهاز أو تعبث بتركيبه الداخلي. 👶 يُمنع الأطفال من اللعب به أثناء التشغيل.  💡 **نصيحة**: استخدم بطاريات أصلية لسلامة الجهاز وسهولة الاستخدام.\n\nشرح بالفيديو: https://youtu.be/JQi_RDCgDZk?si=NNdnKKgtRjn2N4v_",
        petFriendly: true,
        inStock: true
    },
    {
        id: 139,
        name: "تايمر اوربت 12محبس",
        botanicalName: "",
        category: "irrigation",
        price: 55.0,
        originalPrice: 63.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d20b9f30-0aa0-4feb-9757-794b21748772_101004.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر من شركة اوربت 12محبس",
        petFriendly: true,
        inStock: true
    },
    {
        id: 140,
        name: "مبيد فطري تشجازول",
        botanicalName: "",
        category: "pesticides",
        price: 9.0,
        originalPrice: 10.35,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/aed1c327-c71b-4fd8-bb40-e2f30f018032_Picsart_25-02-04_09-33-39-209.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تشجازول٣٠٪ اس ال المادة الفعالة :هيميكسازول  وصف المنتج : يقضي على فطريات التربة ويؤمن حماية للنبات  مبيد فعال ضد أمراض الذبول  مبيد ذو تأثير مزدوج علاجي ووقائي لا يتجمع في التربة.  يستعمل بعد الزراعة مباشرة أو بعد التشتيل.  الافة المستهدفة : الفيوزاريوم والبيثيوم معدل الإستخدام :٦٠ لـ١٢٠ مل لكل ٢٠ لتر ماء  الحجم 500ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 141,
        name: "مبيد حشري عناكبي أبامايت 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/cc8db87c-0c75-4b32-90a0-5cbd8f101e68_Picsart_25-02-04_14-09-16-146.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : أبامايت ١,٨% إي سي المادة الفعالة : أبامكتين ١,٨ (وزن/وزن) وصف المبيد : مبيد حشري عناكبي جهازي بالملامس ، يستخدم للسيطرة على مجال واسع من الحشرات التي تصيب أشجار الفاكهة و الخضروات و الحمضيات و الفراولة و المحاصيل الزراعية الأخرى و نباتات الزينة  معدل الاستخدام : ١٠٠-١٢٥ملي/٢٠٠لتر ماء  الافات المستهدفة : صانعات الانفاق ، عناكب الأحمر  فترة الامان: ٣ أيام. الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 142,
        name: "مبيد حشري عناكبي مجان مكتين 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/e1633da0-3dc6-4434-b59c-9b60bb2479d8_Picsart_25-02-04_13-52-44-750.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم  المبيد : مجان مكتين المادة الفعالة: ابامكتين وصف المبيد: مبيد حشري عناكبي واسع الطيف فعال يستعمل على الخضروات و الأشجار  المثمرة و متخصص للقضاء على أنواع الحلم و العناكب و صانعات الانفاق  معدل الاستخدام : ٨٠-١٠٠ملي/٢٠٠لترماء الافات المستهدفة : العناكب -صانعات الانفاق فترة الامان : ٣-٧ أيام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 143,
        name: "باشن فروت",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/1a357327-688c-4082-9699-4091ad030a35_كيفية-زراعة-مس-فلورا-أو-باشن-فروت.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة متسلقة قوية تنمو بسرعة تتميز بثمارها البيضاوية ذات لون اصفر وطعم حامض لذيذ",
        petFriendly: true,
        inStock: true
    },
    {
        id: 144,
        name: "بذور الباذنجان pyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c1d93400-445c-47a7-9040-90f6ff58d88e_Picsart_24-10-25_17-52-28-382.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "pyramid. حجم الكيس 50جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 145,
        name: "الياسمين",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f48fba42-526b-4b8c-920a-7f1dd144c88a_word-image-84537-1.jpeg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من الأشجار المزهرة ذات الرائحة العطرية تشتهر بزراعتها حول العالم لجمالها و.تأتي باللون الأبيض والاصفر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 146,
        name: "موز هندي g9",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/610264dd-498e-404d-82c3-4d65d0e2185d_A14e97b06a5d047d680c833ceef0b2955d.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "هو احد أصناف الموز الهجينة. يتميز بغزارة الإنتاج وبجودة ثماره مما يجعله مفضلا للمزارعين التجار. لدية قدره عاليه على التكيف مع الظروف المناخية المختلفة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 147,
        name: "اكليل ملكة",
        botanicalName: "",
        category: "plants",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/da71ee5d-7a03-43cf-a5b5-40567372ddc0_IMG_20220428_220135.webp",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة متسلقة معمرة ذات زهور عنقودية بنفسجية او ارجوانية جميلة للمنازل والحدائق",
        petFriendly: true,
        inStock: true
    },
    {
        id: 148,
        name: "مانجو برماسي",
        botanicalName: "",
        category: "plants",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/da24f03e-961f-478f-a843-af760427929e_كيفية-زراعة-المانجو-البيئة-والظروف-وأكثر.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "المانجو البرماسي من الأصناف المميزة والمنتجة طوال العام مذاق طيب جدا وحجم الثمار ممتاز انتاجية غزيرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 149,
        name: "بذور فيفاي BABU F1",
        botanicalName: "",
        category: "seeds",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/14cc76e5-8c19-4976-a440-291080e1061f_Picsart_25-08-30_14-10-07-157.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين يحتوي على 1جرام بذور",
        petFriendly: true,
        inStock: true
    },
    {
        id: 150,
        name: "Aqualin Tap Timer two outlet  تايمر  ماء ذو مخرجي",
        botanicalName: "",
        category: "irrigation",
        price: 15.0,
        originalPrice: 17.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/986d50ae-b400-4438-8c97-c6c7c204d88e_Picsart_25-02-20_08-46-34-080.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر مخرجين",
        petFriendly: true,
        inStock: true
    },
    {
        id: 151,
        name: "تايمر الري الرقمية  مخرجين",
        botanicalName: "",
        category: "irrigation",
        price: 12.0,
        originalPrice: 13.8,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9ab6f88b-f8c0-4b83-aebb-e4b381d26eaf_Picsart_25-02-20_08-41-57-299.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر مخرجين رقمي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 152,
        name: "تفاح جاوا",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/26a63495-0fc4-45f9-9d2b-31162a0e8d0e_E0LC77uXMAAnLmU.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تفاح الجاوا او الجافا، او تفاح الجرس، أحد الفواكه الاستوائية، وهي ثمار تنتجها أشجار سريعة النمو ويصل ارتفاعها الى 12 متر. واوراقها دائمة الخضرة وثمرتها تشبه طعم التفاح ورائحة الورد",
        petFriendly: true,
        inStock: true
    },
    {
        id: 153,
        name: "F1بطيخ هيلة",
        botanicalName: "",
        category: "seeds",
        price: 20.0,
        originalPrice: 23.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b08fa3e9-20a2-426e-80ee-3c74dbfa4b10_Picsart_25-02-19_12-02-54-379.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 154,
        name: "هيومكي",
        botanicalName: "",
        category: "fertilizers",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ff931515-8930-460d-b6de-16b42d0cf424_Picsart_24-11-05_07-49-51-641.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "هيومكي منتج غني بالهيومك والفولفيك والبوتاسيوم يساعد النبات للتغلب على الإجهاد الناتج عن تقلبات الجو والحشرية والفطرية.  يسهل اطلاق العناصر وييسرها للنبات.     *شرح المنتج*     *طريقة الأستخدام* 2-1 جرام /1لترماء *حجم العبوة* 1كيلوا\n\nشرح بالفيديو: https://m.youtube.com/watch?v=joeW9tiBoQI",
        petFriendly: true,
        inStock: true
    },
    {
        id: 155,
        name: "بذور خيار نسيم",
        botanicalName: "",
        category: "seeds",
        price: 20.0,
        originalPrice: 23.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/88d97d61-b094-4de0-a532-cacfe9041948_Picsart_25-08-30_17-45-37-270.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين  غزير الإنتاج يحوي على 500بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 156,
        name: "سماد الوسام 20-20-20",
        botanicalName: "",
        category: "fertilizers",
        price: 20.0,
        originalPrice: 23.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ba6821ae-189b-49c4-ae67-5585f54c6085_Picsart_25-02-05_15-01-15-350.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد الوسام  20-20-20 المتوازن NPK يوفر تركيبة متوازنة من النيتروجين، الفوسفور، والبوتاسيوم، مما يجعله مثاليًا لدعم جميع مراحل النمو النباتي. يساهم في تقوية النمو الخضري، تعزيز تكوين الجذور، وتحسين الإزهار والإثمار، مما يعزز من إنتاجية المحاصيل وجودتها. الحجم 25كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 157,
        name: "C-330منشار ساموراي",
        botanicalName: "",
        category: "tools",
        price: 5.0,
        originalPrice: 5.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/53394af8-86e0-40f5-b5bb-6f7f1bfc08f8_Picsart_25-02-04_19-11-38-921.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "C-300-   منشار ساموراي اصلي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 158,
        name: "ورد كشميري أحمر",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6a1097e8-d179-4b25-b674-059e9178e89b_kashmir-_2_.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تتميز برائحتها الفواحة العطرة وذات شكل انيق جذاب. متحمله للحرارة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 159,
        name: "هرمون الرايزوبون ٪2الاصفر/500جرام",
        botanicalName: "",
        category: "pesticides",
        price: 155.0,
        originalPrice: 178.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6a49b7c5-b963-4926-b675-fb368f5c0bd8_Picsart_25-02-27_21-45-36-130.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "و وصف مبيد هرمون الرايزوبون  2٪ الاصفر  350جرام هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء. من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 160,
        name: "أورجانيكا",
        botanicalName: "",
        category: "fertilizers",
        price: 6.5,
        originalPrice: 7.47,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/178decbd-8fb5-4642-81e2-8d21c181da8e_Picsart_24-11-12_23-10-06-275.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*ORGANICA*  * اورجانيكا*   *سماد عضوي معدني من مصدر سمكي 🦈*  Liquid fish fertilizer   NPK  13   8   5  *عبوات اقتصادية سعة ٤ لتر*   *الـخـواص والـفـوائـد*   غني بكل العناصر و المعادن الغذائية الأساسية طبيعيا والعناصر الصغرى والكبرى والنادرة والاحماص الامينية وأوميجا 3 والفيتامينات والحديد والبروتين.   •يساعد في زيادة النمو الخضري  •يزيد من كثرة المحاصيل وجودتها  •يزيد من نشاط الكائنات الحية الدقيقة النافعة  •يحسن صحة النبات وخصوبة التربة  •يقوي مناعة النباتات ويحميها من الامراض  •صديق للبيئه ولا يحرق النبات  •فعال وامن لجميع النباتات *رائحة خفيفة وفعالية قوية •يخفض من استهلاكك للاسمدة. •ينصح استخدامه في أي موسم   *الإستعمال: 5 مل لكل لتر ماء مره كل ٥ الى ٧ ايام*",
        petFriendly: true,
        inStock: true
    },
    {
        id: 161,
        name: "مبيد حشري فابكومور",
        botanicalName: "",
        category: "pesticides",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/dafd589e-1759-4737-9b97-280c74372435_Picsart_25-02-04_11-40-31-266.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فابكومور٢٠٪ اس بي فايكومور : مبيد حشري جهازي ذو تأثير عن طريق المعدة وبالملامسة ويمكن إضافته إلى التربة أو رشه على الأوراق. ذو تأثير أولي سريع وبأثر متبقي فعال لمكافحة حشرات عديدة مثل المن الذبابة البيضاء، التربس) معدل الإستخدام : ٥٠ ل١٠٠جرام لكل ٢٠٠ لتر ماء  فترة الأمان :٣ ايام الحجم 100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 162,
        name: "ليمون ماير",
        botanicalName: "",
        category: "plants",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f2aeaf84-b32a-4fb3-828d-e67a692cdc3e_XgyO8EtW5oO55uOJy4ELNmH1OZYFW3qwUtjtkAEe.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ليمون ماير Meyer هو صنف هجين من الترنج واليوسفي والبوملي يصل طول الشجرة الى ٣ متر ثمارها شبه دائرية ذات لون أصفر مائل الى البرتقالي عند النضج و حموضتها أقل من الليمون العماني  تم تجربة زراعتها و أثبتت تحملها للأجواء الحارة مثل باقي انواع الليمون",
        petFriendly: true,
        inStock: true
    },
    {
        id: 163,
        name: "W-330-LHمنشار ساموراي",
        botanicalName: "",
        category: "tools",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a9fb99cd-57c6-463b-942b-9df5b9882265_Picsart_25-02-04_19-17-29-940.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "W-330-LHمنشار ساموراي اصلي خشب",
        petFriendly: true,
        inStock: true
    },
    {
        id: 164,
        name: "البرتقال الصيفي",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d584db4f-8c6d-4c8d-b7fb-59ecc68c37a7_پرتقال-1-1.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يتميز هذا الصنف بكبر حجم الشجرة وقوة نموها، وأكثر من أبو سرة، ذات شكل كروي، ثماره متوسطة الى كبيرة الحجم ، برتقالية اللون ، ليست سهلة التقشير.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 165,
        name: "ذرة Bright jean. 2",
        botanicalName: "",
        category: "seeds",
        price: 14.0,
        originalPrice: 16.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/274fa8f4-b9ae-4947-b285-5613bc7084be_IMG-20250830-WA0011.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ذرة سكرية هجينة ٥٠٠ جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 166,
        name: "مبيد عضوي بيست كيل 2",
        botanicalName: "",
        category: "pesticides",
        price: 9.5,
        originalPrice: 10.92,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/0f9e0e57-20c5-4185-90d8-3abbea4ec500_Picsart_25-02-04_08-47-20-007.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بيست كيل2 مبيد عضوي للسيطرة على آفات التربة.  مبيد عضوي \"صديق للبيئة\" لا يسبب تأثيرات متبقية.  بيست كيل 2 يكون له تأثير فوري ويستمر التأثير لفترة طويلة من خلال تلامس السم. معدل الإستخدام :500 مل لكل1000 لتر الافة المستهدفة : الحلوزون/ نيماتود طريقة الاستخدام : عند حرث التربة (خلط 4 لتر لكل1000 لتر) بعد 10 ايام من الزراعة (4 لتر لكل 1000 لتر.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 167,
        name: "اكاسيا جيلوكا",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d5ad9476-93bc-458e-8637-2c5d30aa6c45_81fbbbed-4fe5-452a-b926-7e45116b12a2-1000x1000-yc8m4IjN6lzNHOYQSup8zvtRAuf2Y6Gkjh1Z3gjF.png",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من الاشجار المزهره الصغيره نسبيا، الازهار ذات لون اصفر لامع جدا الاوراق مركبه خضراء اللون، تنجذب الفراشات بشكل قوي جدا لهذه الشجره",
        petFriendly: true,
        inStock: true
    },
    {
        id: 168,
        name: "بتونيا بذور زهور موسمية",
        botanicalName: "",
        category: "seeds",
        price: 0.6,
        originalPrice: 0.69,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/88252571-0baf-44c9-9afc-996b1386400b_Picsart_24-12-02_21-01-40-784.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "البتونيا هي واحدة من أشهر  نباتات الزينة  الحولية المزهرة التي تتميز بغزارة وكثافة انتاجها للإزهار بألوان متعددة. تتنوع أصناف البتونيا ما بين أزهار مفردة ومزدوجة؛ وبألوان مختلفة سواء بلون واحد أو لونين على الزهرة نفسها. من السهل العناية بنبات البتونيا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 169,
        name: "بذور جزر احمر pyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/97c65497-a9d7-46e4-848c-0f648fb8429b_Picsart_24-10-25_17-48-29-261.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "حجم الكيس 50جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 170,
        name: "نارجيل (كبير)",
        botanicalName: "",
        category: "plants",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6f71ed38-39ee-48ef-923c-2ec7079cd85f_1859-Martinique.web.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "النارجيل أو جوز الهند، هي الشجرة الرمز للمناطق الإستوائية، كثيراً ما تستخدم كشجرة منزلية. شجرة سريعة النمو عالية القامة، يعرف عنها قدرتها المثبتة على تنقية الهواء الداخلي للمنازل من الدخان والمواد الكيميائية الضارة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 171,
        name: "سماد اكسلنت 7",
        botanicalName: "",
        category: "fertilizers",
        price: 11.5,
        originalPrice: 13.22,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/8966beda-2e93-453e-b0a9-7dc1dd5cbb39_Picsart_25-02-05_15-14-51-671.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد بودرة يحتوي على العناصر الكبرى والصغرى سماد من الجيل الخامس نتائج عجيبة وتغذية متكاملة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 172,
        name: "سدر تايلدني",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/7cee4982-28a8-4e69-9c7a-d551b9317b72_sddefault.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "السدر التفاحي، أو كما يُعرف بالسدر التايلندي، هو نوع من أشجار السدر يتميز بثماره اللذيذة الشبيهة بالتفاح في المذاق والقوام. يعتبر هذا النوع من السدر من الأشجار المثمرة التي تزداد شعبيتها في العديد من المناطق بسبب جودة ثماره وفوائده",
        petFriendly: true,
        inStock: true
    },
    {
        id: 173,
        name: "AVAN GEL NPK 12-12-46سماد",
        botanicalName: "",
        category: "fertilizers",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/0c05fb36-fb34-41f7-9613-a14741d5fb1f_Picsart_25-02-11_06-43-37-055.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد سائل غني بعنصر البوتاسيوم وله الكثير من المزايا بحيث  يلعب دوراً مهماً في تكوين الثمار وتكبيرها. تعزيز وتحفيز عملية البناء الضوئي  تنظيم عملية التوازن الأيوني داخل النبات.  زيادة مكافحة النبات للظروف الجوية القاسية  مثل البرد والصقيع ودرجات الحرارة المتدنية.  وكذلك الجفاف بسبب درجات الحرارة العالية.  يعمل كمصدر مهم لإنتاج الطاقة اللازمة  للنمو داخل النبات من خلال عملية تكسير الكربوهيدرات كمية الاستخدام 1.5ملي/1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 174,
        name: "سماد كالسيوم بورون كال بورون",
        botanicalName: "",
        category: "fertilizers",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6adff63d-837f-4b4c-b70d-17ce950d01f7_IMG-20250204-WA0025.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "كال بورن١٣ المكونات : كالسيوم ١٣٪ بورن٣٪ سماد كيمائي يحتوي على الكالسيوم و البورن يعمل على تكوين جدر الخلايا بشكل قوي تيسير امتصاص النبات للعناصر الأساسية. تنظيم نشاط الانزيمات الأساسية في نمو وتطور النبات معدل الإستخدام : ٢ لـ6 مل لكل ١ لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 175,
        name: "هرمون الكرايزوتيك ٪0.4",
        botanicalName: "",
        category: "plants",
        price: 40.0,
        originalPrice: 46.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/effcbf38-4d7f-4967-bcdf-2d84454c08d6_Picsart_25-02-27_21-42-27-856.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مبيد هرمون الكرايزوتيك0.4٪     350جرام هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء. من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 176,
        name: "يوسف افندي",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b2fdbe9b-0a2c-47de-ba6c-3c7d70baa317_vertical-shot-orange-fruit-tree-scaled.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة يوسف افندي، من اشهر الحمضيات والذها طعماً، الأوراق والأزهار والثمار عطرية الرائحة، عندما تزهر في الربيع تعبق رائحتها المكان، تنضج الثمار شتاءً.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 177,
        name: "كوكولي",
        botanicalName: "",
        category: "fertilizers",
        price: 14.5,
        originalPrice: 16.67,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a75c6da3-0275-435a-bb35-13078a4d1157_Picsart_25-01-16_11-56-14-341.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد الكوكولي منتج عالمي عالي الجودة يعتبر مخصب ممتاز للتربة يحتوي على العديد من المواد الغذائية العضوية مكونة من قشور الحلزون و الدبس.  كما يحتوي على الكثير من العناصر المغذية الكبرى والصغرى.   ويمتز هذا السماد  ١. يقوى النمو وينشط الجذور والإزهار ويعادل درجة الحموضة في التربة.     يمكن استخدامه كحبيبات جافة في التربة أو تذويبه بالماء ويمكن استخدامه كرش ورقي   وكذلك يمكن أن يستخدم هذا المنتج قبل الزراعة وبعد الزراعة.  وقابل للخلط مع بعض الأسمدة  بالنسبة لطريقة الاستخدام: للأشجار الصغيرة من فنجان وفجانين قهوة.  وأما الأشجار المثمرة من ربع كيلو إلى ٢ كيلو  وبالنسبة للرش الورقي نصف كيلو لكل ٢٠٠ لتر ماء\n\nشرح بالفيديو: https://youtu.be/5kuoF0afQ2A?si=6SNg77eKjaS0g1Hg",
        petFriendly: true,
        inStock: true
    },
    {
        id: 178,
        name: "كف مريم",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ac1ea7e3-430a-4562-9c1b-74782371b4b6_تعرف-على-مميزات-شجرة-كف-مريم.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "كف مريم أو أصبع العذراء يتراوح ارتفاعها من مترين ونصف إلى أربعة أمتار  أوراقها مركبة على شكل راحة اليد تتكون من خمس إلى سبع وريقات، أزهارها صغيرة تظهر على شكل عناقيد زكية الرائحة لونها أبيض أو أزرق  مما يميز هذا النبات أنه يتحمل ظروف المناخ المتقلبة، ويقاوم الجفاف والعطش، يمكن أن يزرع منفرداً أو على شكل سور نباتي . يتكاثر من البذور ، وبالتعقيل على أن تكون العقل الساقية خشبية متصلبة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 179,
        name: "F1  500بذرةخيار داتس",
        botanicalName: "",
        category: "seeds",
        price: 19.5,
        originalPrice: 22.42,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9ee85cc1-3c4c-4083-bcec-efa7b688fe69_Picsart_25-02-13_13-21-46-037.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين غزير الإنتاج حجم متناسق ومقاوم لبعض الأمراض  يحتوي الكيس على 500بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 180,
        name: "WT05  تايمر",
        botanicalName: "",
        category: "irrigation",
        price: 10.0,
        originalPrice: 11.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d3f36ffa-a9c8-4fef-9b74-3f3d5fc5ce9e_Picsart_25-02-20_08-33-45-479.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر مخرج واحد",
        petFriendly: true,
        inStock: true
    },
    {
        id: 181,
        name: "500gبذور كتمبورارديوس",
        botanicalName: "",
        category: "seeds",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/e7dc55ba-f48a-4fae-b0bb-786f544473d0_Picsart_25-02-20_11-05-07-705.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ثنائي الصبغيات ذات اوراق وسيقان رقيقة . تصمد في معدلات خصوبة التربة المنخفضة . تتحمل درجات الحرارة المنخفضة . تبقى مورقة ومزهرة في فصل الخريف",
        petFriendly: true,
        inStock: true
    },
    {
        id: 182,
        name: "DO سماد عضوي ظفار العضويه 1لتر",
        botanicalName: "",
        category: "fertilizers",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/1e0c94b9-66bb-415f-874e-31f78d079a37_Picsart_25-02-05_15-15-57-202.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بدون أضافة مواد كيميائية. عضوي 100% من تحلل الأسماك. أقل رائحة مناسب لجميع الاستخدامات. يحتوي على العناصر الكبرى والصغرى والأحماض الأمينية.  *كمية الاستخدام*  3ملي لكل 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 183,
        name: "H-85سماد هيومك",
        botanicalName: "",
        category: "fertilizers",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/1f31d537-e856-4dbc-b690-7d2f3430c187_Picsart_25-02-04_10-49-32-029.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اتش - 85  المواد العضوية : حامض الهيوميك ٤٨٪؜؜+ الفولفيك ٣٧٪؜؜ وصف المحسن : محسن تربه عضوي يحتوي على احماض هيوميك و فولفيك يستخدم لتحسين خواص التربة  معدل الأستخدام: ١ - ٢ غرام لكل لتر ماء  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 184,
        name: "بذور خيار سي جرين هجين",
        botanicalName: "",
        category: "seeds",
        price: 26.0,
        originalPrice: 29.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ebe1f72c-1c3b-4587-87bb-04fecdedd0c9_Picsart_25-08-30_17-48-28-183.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور خيار سي جرين هجين يحوي على 500بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 185,
        name: "الجهنمية",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/7e15ec45-a8e7-424e-b00a-2feee020bcf4_3-scaled.webp",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "الجهنمية شجيرة دائمة الخضرة تزهر باستمرار طيلة السنة. وهي تتسامح قليلاً مع الظل الجزئي خلال النهار، إلا أنها تفضل ضوء الشمس الكامل. يمكن تشكيل الجهنمية بمختلف الأحجام. فهي يمكن أن تستخدم كشجيرة متسلقة، أو شجرة صغيرة قائمة، أو أستخدامها لتغطية الجدران، أو كنبتة مفترشة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 186,
        name: "فيكس مبرقش",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/cea50c53-6da7-40be-ab3a-11f47c0f0d51_75e8580f-5596-4a8f-99ea-7eba216c36e1.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من نباتات الزينة الجميلة المعروف في الشوارع والمنازل الذي يتميز بأورقه المبرقشة و يصلح كنبات داخلي وخارجي  وهو من النباتات دائمة الخضرة.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 187,
        name: "هرمون الرايزوبون  1٪ الازرق500جرام",
        botanicalName: "",
        category: "pesticides",
        price: 105.0,
        originalPrice: 120.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c0787868-7b05-4e70-adab-85788cc43747_Picsart_25-02-27_21-51-45-130.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "و وصف مبيد هرمون الرايزوبون  1٪ الازرق   500جرام هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء. من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 188,
        name: "بذور طماط Dolendo",
        botanicalName: "",
        category: "seeds",
        price: 17.0,
        originalPrice: 19.55,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d42194f3-38a3-4a91-88a6-98e5f6f3eee3_Picsart_25-08-30_14-12-46-723.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور هجينة غزيرة الإنتاج 1000بذره في المغلف",
        petFriendly: true,
        inStock: true
    },
    {
        id: 189,
        name: "بيوكي-١٥",
        botanicalName: "",
        category: "fertilizers",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f6a00968-9cd8-4953-a5fe-fb841afb76df_IMG-20250204-WA0023.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بيوكي-١٥ سماد عضوي معدني يحتوي على النيتروجين والبوتاسيوم ومواد عضوية نباتية  طريقة الاستخدام : عن طريق السمادة  ٤لـ٦ لتر لكل فدان",
        petFriendly: true,
        inStock: true
    },
    {
        id: 190,
        name: "مبيد فطري ردوميل جولد  ار",
        botanicalName: "",
        category: "pesticides",
        price: 13.0,
        originalPrice: 14.95,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/718f2b95-ecae-4a46-9c90-52f21fd6c03d_Picsart_25-02-05_15-12-34-160.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "التركيبة الذهبية للحماية من الامراض الفطرية ريدوميل جولدر  منتج ريدومیل جولد ر Ridomil Gold :  - مبيد فطري وقائي يعمل بشكل جهازي وعن طريق الملامسة يحتوي على مادتين فعالتين كمل هما ( الميتالاكسيل ) و (أوكسيد كلوريد النحاس).  - يكافح هذا المنتج الأمراض الناتجة عن الفطريات البيضية مثل أمراض  البياض الزغبي واللفحة المتأخره.  - يستخدم هذا المبيد على مختلف المحاصيل الزراعية.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 191,
        name: "ABMسماد ورقي",
        botanicalName: "",
        category: "fertilizers",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/89cf1b49-ca98-4c3b-bcbb-91ac148e3b5c_Picsart_25-02-04_14-27-50-979.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد ABM 12.06+(5MgO)+TE سماد كيماوي بودرة يحتوي على العناصر الكبرى والصغرى.  طريقة الاستخدام  يستخدم عن طريق الرش  من 1-3ملي /في 1لتر   الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 192,
        name: "تايمر Green Glow",
        botanicalName: "",
        category: "irrigation",
        price: 9.5,
        originalPrice: 10.92,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5dbc0e91-47c0-4163-ab75-3ca6ff3404db_تايمر green glow.png",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اكثر كفائة. وتوقيت دقيق\n\nشرح بالفيديو: https://m.youtube.com/watch?v=JQi_RDCgDZk",
        petFriendly: true,
        inStock: true
    },
    {
        id: 193,
        name: "اللبان",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f1cc5a37-86eb-44c7-8c5b-d8adc0e89ca3_تنزيل (3).jpeg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من فصيلة البخوريات كثيرة الأغصان أوراقها خضراء داكنة، ويتراوح ارتفاعها ما بين ثلاثة إلى خمسة أمتار وهي ذات جذع واحد أو متفرع عند القاعدة، وتحتوي على غدد لبنية تفرز مادة (الراتنج) الصمغية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 194,
        name: "مكينة رش محمولة",
        botanicalName: "",
        category: "tools",
        price: 13.5,
        originalPrice: 15.52,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/8189b292-c0b4-4a7a-b27a-6ad5a21c370b_Picsart_25-08-03_08-53-45-749.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "💧 مرشة GREEN AGRI ظهرية — سعة 16 لتر  **مرشة GREEN AGRI متعددة الاستخدامات** بسعة **16 ، مصممة خصيصًا لرش المبيدات الزراعية، مبيدات الصحة العامة، الأسمدة، والماء، وهي الخيار المثالي للمزارعين والمهتمين بالعناية بالنباتات.   ✅ **المميزات:**  * 💡 **استخدام مزدوج**: تعمل بالبطارية مع خيار التشغيل اليدوي عند نفاد الشحن. * 🔋 **بطارية قوية**:  * 🎯 **ضغط قابل للتعديل** ليتناسب مع مختلف أنواع الرش. * 🧰 **هيكل قوي ومتين** مصنوع لتحمّل ظروف الاستخدام اليومي. * 🪶 **تصميم مريح** وخفيف الوزن، يُحمل على الظهر بسهولة.  ⚙️ **المواصفات الفنية:**  * 🔋 بطارية 12 فولت × 12 أمبير/ساعة. * 💨 ضغط رش قابل للتعديل حسب الحاجة.   🌿 **الاستخدامات الشائعة:**  * مكافحة الآفات والحشرات الزراعية. * رش النباتات والأسمدة السائلة. * مبيدات الصحة العامة في البيئات الزراعية والمنازل الريفية.      *............................................* *موقعنا: ولاية منح غرب جامع منح الأثري .*           *",
        petFriendly: true,
        inStock: true
    },
    {
        id: 195,
        name: "مبيد نمتودي فيلوم",
        botanicalName: "",
        category: "pesticides",
        price: 65.0,
        originalPrice: 74.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/47988cd2-8cdc-4336-aa18-b5c8af4cb2b8_Picsart_25-02-04_09-49-41-314.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ڨيلوم٤٠٠ اس س المادة الفعالة : فلوبيرام الافة المستهدفة : نيماتودا تعقد الجذور في الطماطم والبطاطس.  معدل الإستخدام :٢.٥ ل٥ مل لكل ١ لتر ماء  فترة الأمان : ٧ ايام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 196,
        name: "زينيا بذور الزهور الموسمية",
        botanicalName: "",
        category: "seeds",
        price: 0.6,
        originalPrice: 0.69,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4adb8d8b-d7fe-495b-bdbc-6b1cc027ae55_Picsart_24-12-02_21-00-20-892.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يفضل زراعة نبات زهرة الزينيا في مكان مشمس بحيث يتعرض فيه النبات لأشعة الشمس بصورة مباشرة، ويحتاج نبات الزينيا إلى الكثير من أشعة الشمس المباشرة لينمو على نحو جيد. يجب تجنب الإفراط في ري نبات الزينيا، مع المحافظة على الري عند قاعدة النبات بعيدًا عن الأوراق للحفاظ على صحة النبات ومنع الأمراض الفطرية. يُوصي بتقليم الزهور  المتيبسة.  يجب توفير تهوية جيدة حول نبات الزينيا، والمحافظة على أوراق النبات جافة لوقايته من الأمراض.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 197,
        name: "F1بذر بطيخ صحاري",
        botanicalName: "",
        category: "seeds",
        price: 18.5,
        originalPrice: 21.27,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/e87987ba-80e9-4ae2-b13d-85ee95712195_Picsart_25-02-12_22-10-59-486.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بطيخ سكري دائري يحوي على 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 198,
        name: "بذور باميا pyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a6222032-7455-4670-9de5-f66765ffbd54_Picsart_24-10-25_17-50-04-501.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "حجم الكيس 100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 199,
        name: "تيفيتيا",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/067c3bc8-3cbd-41e5-9ffb-81a975298145_703dc88d-7291-41b8-8f21-8c1ec73e0fb1-1000x1000-DSVsb1LXKEuXF5X5wma4N9p9UrHMalaNP7J5Y3Is.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "نبات تيفيتيا أو الدفلة الصفراء هي شجيرة صغيرة معمرة دائمة الخضرة تنتمي للفصيلة الدفلية تتميز بأوراقها الصفراء الجميلة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 200,
        name: "جاكرندا",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9f96a06c-a6f7-46b7-a076-ff27c5afa560_كل-ما-يهمك-حول-شجرة-الجاكرندا (1).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تحظى بشهرة واسعة لأزهارها الجميلة و لونها الأرجواني الزاهي، وتعتبر إضافة رائعة لأي حديقة أو فناء",
        petFriendly: true,
        inStock: true
    },
    {
        id: 201,
        name: "سيسلبينيا",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b945506e-a381-4c09-9b6c-1f42de5109c6_EW-3rtyXkAEZnAJ.jpeg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة سيسلبينيا المعروفة أيضًا بزهرة الطاووس الحمراء تُعدّ من أجمل الأشجار الزينة بفضل جمال زهورها البراقة والمتعددة الألوان. يتميز هذا النبات بأفرعه المتفرعة وأوراقه المناسبة للزينة الحدائق والمناطق الخارجية.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 202,
        name: "جوافة تايلندي",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/249538d8-7fdc-40ac-bb37-b47ff44555e0_1.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فاكهة استوائية منعشة ذات طعم سكري لذيذ ورائحة فواحة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 203,
        name: "بذور السبانخ pyramid",
        botanicalName: "",
        category: "seeds",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/d04b7f03-f87c-4b94-95a8-4097bb4fafbd_Picsart_24-10-25_17-53-25-387.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور من شركة pyramid الهندية بذور عالية الجودة حجم العبوةو100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 204,
        name: "النرجس",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3af5e3ea-d1ee-4af2-b7bf-c7f9fee5cdd3_DHgdieVXkAAJHuY.jpeg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة النرجس البري هي نبات منتفخ يزرع لزهوره العطرة الرائعة. هذا النبات له أوراق رقيقة ومسطحة ويمكن أن يصل طوله إلى 40 سم وعرضه 15 ملم",
        petFriendly: true,
        inStock: true
    },
    {
        id: 205,
        name: "أبوفسيلة",
        botanicalName: "",
        category: "fertilizers",
        price: 8.0,
        originalPrice: 9.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/513c7715-5e51-4bea-94ca-daf6be562653_IMG-20241214-WA0023.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد يحتوى على الاحماض الكربوسلية العضوية مع عنصر البورون > مميزاته: * يزيد من قدرة الفسائل على تحمل ظروف الاجهاد المختلفة من الملوحة و الحرارة والجفاف. * يزيد من انتشار الجذور ويعزز من كفاءتها فى امتصاص العناصر الغذائية. * يزيد من قدرة الفسائل على امتصاص الماء والعناصر الغذائية وتسريع نموها. * له دور في انقسام الخلايا ونمو النبات خاصة في القمة النامية. * ......... * *كمية الاستخدام* الفسائل الكبيره بنضيف ۱۰۰ مللى على لتر ماء حيث اللتر الواحد يكفى لتغطية خمسة فسائل  في حين الفسائل الصغيرة نضيف ٥٠ مللى على لتر ماء فقط وهذا اهم معاملة في بداية الزراعة  يلى ذلك ۲۰ مللى كل أسبوعين لزيادة الدفع حول الفسيلة مباشرة  من خلال من ٢ إلى 3 لتر ماء حول الفسيلة مباشرة لا نسقى كامل الحوض\n\nشرح بالفيديو: https://youtu.be/5kuoF0afQ2A?si=6SNg77eKjaS0g1Hg",
        petFriendly: true,
        inStock: true
    },
    {
        id: 206,
        name: "مانجو تايلندي",
        botanicalName: "",
        category: "plants",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2b08ba4b-d1ac-498d-960a-281bc432fa33_81j+pFSloDL._AC_SL1500_.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مانجو تايلاندي - Mango Thai شجرة مثمرة مقاومة و دائمة الخضرة فهي قوية الهيكل ، ثمرتها صفراء ذات رائحة فواحة جميلة وتسمى بمانجو العسل",
        petFriendly: true,
        inStock: true
    },
    {
        id: 207,
        name: "بوملي أحمر",
        botanicalName: "",
        category: "plants",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9077e6c8-7f0b-4e82-b4c7-4db6bdce0315_e3a45b18-6832-43e4-8f28-ceb275152b64.png",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فاكهة تتميز بطعمها المميز والكثير من فيتامينC",
        petFriendly: true,
        inStock: true
    },
    {
        id: 208,
        name: "مبيد حشري ألبرت 250جرام",
        botanicalName: "",
        category: "pesticides",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/58d1e1c1-cb7f-4a86-becd-ad5fa8d4b330_Picsart_25-02-04_09-57-18-716.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اليرت ٢،٨ اي سي المادة الفعالة : لمداسايهلوثرين مبيد حشري ذو مجال واسع من التأثير وفعال بواسطة الملامسة والهضم. الافة المستهدفة : الذبابة البيضاء والتربس وذبابة القرعيات . معدل الإستخدام : ٢٥٠ مل لكل ٢٠٠ لتر. فترة الأمان : ثلاث ايام  الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 209,
        name: "HUMIC سماد الهيومك العماني",
        botanicalName: "",
        category: "fertilizers",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ce4e78fd-e2a1-421e-8089-27c66e9ea04e_Picsart_25-04-23_09-02-18-242.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عبارة عن هيومات بوتاسيوم مع الفولفيك اسيد مع الاحماض الكربوسلية العضوية حيث يعمل وقائى ضد اعفان الجذور معدل الاستخدام  ٥ مللى لكل لتر ماء من خلال الرى.حجم العبوه 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 210,
        name: "جرب فروت",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/8f9b40d8-ad1f-4345-bbce-228215bcfa75_69108e33d9cff71cd057f75b09283c28.webp",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "الجريب فروت، والمعروف أيضًا باسم فاكهة التينتوب، هو فاكهة حمضية علاجية تحارب البكتيريا والفيروسات  المحاربة للجسم",
        petFriendly: true,
        inStock: true
    },
    {
        id: 211,
        name: "(صحن) بتونيا",
        botanicalName: "",
        category: "plants",
        price: 2.5,
        originalPrice: 2.88,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/113327df-3829-48fd-8879-95bc6ce73ae2_بعض-المعلومات-الهامة-عن-نبات-البيتونيا-Petunia (1).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "البيتونيا من النباتات العشبية المزهرة الموسمية ، تستخدم بشكل كبير في المنازل والحدائق وحتى في الشوارع والممرات العامة لتنوع ألوان زهورها الجميلة ومظهرها الجذاب.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 212,
        name: "مبيد حشري عناكبي فيرتميك250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 17.0,
        originalPrice: 19.55,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b7e557d3-d27e-4b43-a0ab-ff4776d2dc89_Picsart_25-02-05_15-08-42-997.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فيرتيميك 1.8 % مبيد حشري عناكبي علي هيئة مركز مستحلب يحتوي علي المادة الفعالة أبامكتين يقضي على جميع أنواع العناكب وصانعات الأنفاق، ويستخدم ضد العناكب التي تمتلك مناعة ضد المبيدات الأخرى. يمتلك فيرتيميك طريقة تأثير فريدة تميزه عن العقاقير الأخرى حيث يؤثر عن طريق اللمس والابتلاع، ويتطلب حوالي 3-4 أيام للوصول إلى أقصى فاعلية لهذا التأثير. يقوم فيرتيميك بتخترق الأوراق وتخزينها داخلها ليبقى فعالا لفترة طويلة، ولتحقيق أفضل النتائج يجب تغطية النبات بالكامل بالرش بمحلول الغسيل. يستخدم على نطاق واسع في مجالات الزراعة والنباتات الزينية، حيث لا يسبب أي أضرار أو تشوهات في النباتات التي يتم معالجتها. يتغلغل سطح الأوراق بسرعة في الأنسجة، مما يوفر حماية فورية للنباتات المعرضة لفترات طويلة من دون تأثير من الأمطار. يخترق الورق بسرعة مما يتيح للحشرات المفيدة الفرصة للتغذية على العناكب الضارة. يخترق المواد الكيميائية الأنسجة الورقية وتبقى فيها لتظل فعالة لفترة زمنية طويلة. يعتبر صديقًا للبيئة لأنه مصنوع من مركب طبيعي وبالتالي يتحلل بسرعة في التربة.  المادة الفعالة أبامكتين 1.8% حجم المنتج: 250 ملل",
        petFriendly: true,
        inStock: true
    },
    {
        id: 213,
        name: "Aggisسماد حديد",
        botanicalName: "",
        category: "fertilizers",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/74435eb9-1094-4836-ae36-97c2d6e336ad_Picsart_25-02-04_11-11-20-602.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "أجيس Aggis حبيبات دقيقة متماسكة تحتوي على حديد 6٪في صورة شيلات إيثلين داي أمين داي هيدروكسي استيت   *معدل الاستخدام* رش ورقي 1-2جرام /1لتر ماء  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 214,
        name: "خيار الظاهر F1",
        botanicalName: "",
        category: "seeds",
        price: 14.0,
        originalPrice: 16.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5f6faa1c-5388-405d-8a87-c1a17d9b6095_Picsart_25-08-30_17-51-51-514.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين يحتوي على 500 بذور",
        petFriendly: true,
        inStock: true
    },
    {
        id: 215,
        name: "AugustaF1 بطيخ",
        botanicalName: "",
        category: "seeds",
        price: 16.5,
        originalPrice: 18.97,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9e67443d-5aed-460d-8c25-097a800d9c84_Picsart_25-02-19_12-06-27-358.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 216,
        name: "مبيد حشري ديسيرين 1لتر",
        botanicalName: "",
        category: "pesticides",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ce1cf1ac-449d-46e9-a14a-a6b4b9aec6b3_Picsart_25-02-04_13-34-24-894.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : ديسيرين ٢,٥ إي سي الماده الفعالة :دلتا مثرين  وصف المبيد:مبيد حشري ذو مجال واسع من التأثير و فعال بواسطة الملامسة و الهضم -فعال لمكافحة الذبابة البيضاء و التربس و ذبابة القريات. معدل الاستخدام : ١٠-١٥ ملي/٢٠لترماء الافات المستهدفة : ذبابة بيضاء.التربس. ذبابة القريات فترة الامان:٧أيام الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 217,
        name: "بذور فيفاي RED QUEEN",
        botanicalName: "",
        category: "seeds",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/c78d2268-5c48-430f-82da-229989fc4419_Picsart_25-08-30_14-10-55-721.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "صنف هجين يحتوي على 1جرام بذور",
        petFriendly: true,
        inStock: true
    },
    {
        id: 218,
        name: "JS-300-LH  منشار ساموراي",
        botanicalName: "",
        category: "tools",
        price: 7.0,
        originalPrice: 8.05,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/85c1a543-08e3-4166-b1ba-a216b1a5880a_Picsart_25-02-04_19-09-03-884.jpg",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ساموراي  JS-300-LH  بوصة منشار يد مستقيم + حقيبة حمل. صُنع في اليابان.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 219,
        name: "سماد هيومك POW HUMUS",
        botanicalName: "",
        category: "fertilizers",
        price: 7.5,
        originalPrice: 8.62,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/19a35fa5-1c4b-4a15-9c15-45ea8c6238d1_Picsart_25-02-04_10-42-45-335.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: ": باوهيوميك المواد العضوية : البوتاسيوم االذائب في الماء ١١٪؜؜+ حامض الهيوميك ٨٠٪؜+المادة العضوية ٧٣٪؜-٦٨٪؜+ الحديد ٠٫٩٪؜  وصف المحسن : محسن تربة عضوي يحتوي على 85% حمض الهيوميك المستخلص من مادة الليوناردو الطبيعيه. يحسن من صفات التربه و تركيبها؛ كما  ينشط حركه العناصر الغذائية من التربه إلى النبات ٫ يستخدم على كافه المحاصيل الزراعية  معدل الأستخدام: ١٬٥٠ -٣ غم / ١لتر  الحجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 220,
        name: "AVAN GEL 10-40-10 سماد",
        botanicalName: "",
        category: "fertilizers",
        price: 5.5,
        originalPrice: 6.32,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ee50a344-db5f-4545-9d25-8a32c69915c5_Picsart_25-02-13_12-42-05-306.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سماد مركب عالي الفسفور على هيئة معجون مركز قابل للذوبان في الماء، يحتوي على نسب متفاوتة من العناصر الكبرى ، يستخدم العمليات التسميد الورقي والارضي في الزراعات الحقلية والمحمية  معدلات وطرق الاستخدام 1.5/1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 221,
        name: "HCT-278تايمر بطارية 3مخارج",
        botanicalName: "",
        category: "irrigation",
        price: 16.5,
        originalPrice: 18.97,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/df4f4d90-6233-4096-b3f6-1fed063763ad_Picsart_25-02-04_07-43-36-905.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر 3مخارج",
        petFriendly: true,
        inStock: true
    },
    {
        id: 222,
        name: "سفرجل",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/bac27c9d-3e87-4bb5-b12b-f1312d25de79_EmsUlXGW8AAn0_M.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من الحمضيات التي تسمى بالليمون الحلو لحلاوة طعمها وكثيرا ما تزرع في المنازل والمزراع",
        petFriendly: true,
        inStock: true
    },
    {
        id: 223,
        name: "البرتقال السكري",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3feb405d-a957-4266-8776-26e5f7fee169_maxresdefault (28).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "البرتقال الحلو، ويسمى البرتقال السكري ويعتبر من أكثر سلالات البرتقال انتشارا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 224,
        name: "ايبوميا",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/8dc6899a-1fa0-40e3-8e5d-fffe5185a2b7_download (122).jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "سريع النمو كثيف الإزهار له عدة استخدامات مثل صناعة الحواجز الجدارية او تشكيلها في احواض الاشجار كما يمكن استخدامه لصناعة العريش اوتغطية السور.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 225,
        name: "برتقال أحمر",
        botanicalName: "",
        category: "plants",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/16cb415a-09a2-47f6-9b59-3b4678bc2b5a_20200205-1648191787107816.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "رتقال الأحمر هو نوع من أنواع البرتقال ويمتاز هذا النوع من البرتقال بطعمه الحلو ولونه الأحمر، بالإضافة إلى فوائده الصحية العديدة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 226,
        name: "RainPointتايمر بطارية 4مخارج",
        botanicalName: "",
        category: "irrigation",
        price: 25.0,
        originalPrice: 28.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/eb3913ed-8a52-4809-b7aa-2a6030f81592_Picsart_25-02-04_07-42-17-709.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر من شركة RainPoint 4مخارج يعمل بالبطارية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 227,
        name: "مبيد حشري كراتي زيون 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 12.5,
        originalPrice: 14.37,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4e2017e3-67fe-4c8d-afbb-dafca5c16b81_Picsart_25-02-04_14-24-51-847.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "مبيد كراتي زيون  *المادة الفعالة* لامبداسيهالوثرين10٪ المادة الحاملة 90٪ مبيد حشري على هيئة كبسولات معلقة. كراتي زيون، مبيد حشري واسع الطيف يعمل بتقنية الزيون و يحتوي على ١٠٪؜ لمبدا سيهالوثرين. فعالية قوية باستخدام تقنية الزيون - كبسولات مجهرية صغیرة. - تدفق سریع للمادة الفعالة من الكبسولة كمية الاستخدام  250ملي /600لتر ماء  الحجم 250ملي. الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 228,
        name: "تايمر هنتر 8مخارج واي فاي",
        botanicalName: "",
        category: "irrigation",
        price: 60.0,
        originalPrice: 69.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/98d1f28e-6ec1-4695-b265-d4d1e5c8c0a7_61u0octrutl-500x500.jpg",
        badge: "ري حديث 💧",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تايمر من شركة هنتر 8مخارج مدعم بخاصية الربط بالهاتف عن طريق الواي فاي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 229,
        name: "بذور طماط ايا",
        botanicalName: "",
        category: "seeds",
        price: 25.0,
        originalPrice: 28.75,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/36b11d8a-e1a6-4236-98cc-43b577424ad0_Picsart_25-08-30_14-13-39-230.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور هجينة حجم كبير غزير الإنتاج 1000بذرة في الكيس",
        petFriendly: true,
        inStock: true
    },
    {
        id: 230,
        name: "فايكس",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5d17d88e-1c57-4e73-a545-2424a860b3fc_Ficus-Benjamina-leaves.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "أحد أشجار الزينة التي تتميز بسرعة نموها، وأوراقها الكثيفة، وخضرة أوراقها دائمًا، كما تتميز بأن رأسها يأخذ الشكل المستدير ولا يمكن أن تتساقط أوراقها، كما ينمو في البيئات الحارة ولا يمكن أن يتحمل البيئات الباردة بأي شكل من الأشكال",
        petFriendly: true,
        inStock: true
    },
    {
        id: 231,
        name: "كيمكوات",
        botanicalName: "",
        category: "plants",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6d969f75-70fb-43bb-b321-144ed681b7d3_فاكهة-الكمكوات.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "تعتبر من اشجار الزينة المثمرة  فالكمكوات هي واحدة من بين أعضاء عائلة الحمضيات التي تتميز بطعمها الحامض مع الحلو وتعرف أيضا هذه الفاكهة البرتقال الذهبي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 232,
        name: "مقص B0407C",
        botanicalName: "",
        category: "tools",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/0c68f56e-8874-4e2b-bd7f-d5df5b556274_Picsart_24-10-25_17-46-11-034.png",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "Fruit korea B0407C",
        petFriendly: true,
        inStock: true
    },
    {
        id: 233,
        name: "ذرةseminis",
        botanicalName: "",
        category: "seeds",
        price: 36.0,
        originalPrice: 41.4,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/9cc32195-6b99-4216-a73f-4401d02d0d45_IMG-20250830-WA0014.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ذرة سكرية صنف هجين يحتوي على ٥٠٠٠ بذرة فرنسي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 234,
        name: "حديد EDDHA",
        botanicalName: "",
        category: "fertilizers",
        price: 6.5,
        originalPrice: 7.47,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b03b8359-0b67-4a83-8ea2-e3622d04d3c4_Picsart_24-11-15_17-27-12-531.png",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*حديد مخلب* EDDHA بنسبة 6%  مناسب لعمليات الري ومعالجة نقص عنصر الحديد وتقوية النمو الخضري والثمري للنبات بتركيبته وطريقة تخليبه يستمر مفعوله في التربه لفترات طويله ويبدا مفعوله واضحا على النبات خلال فتره لا تتعدى الثلاث ايام وتستمر الى ٣٠ يوما كمصدر متوفر في الوسط الزراعي للنبات ملائم للامتصاص من قبل النباتات في الاوساط الزراعيه القلويه والحامضيه وذلك ضمن معامل حموضه من ٥ الى ٨،٥.  *كمية الأستخدام* 1جرام في 1لتر ماء\n\nشرح بالفيديو: https://youtu.be/M6-bVNM89hE?si=I6wGSL-hWDsI8OXU",
        petFriendly: true,
        inStock: true
    },
    {
        id: 235,
        name: "مبيد حشري تاجيتا",
        botanicalName: "",
        category: "pesticides",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3723d412-7bdd-43b4-aa74-6596499c038e_تاجيتا.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "*⛔تاجيتا ٢٢.١ زد سي⛔*   مبيد حشري زراعي يحتوى على خليط من مادتين جهازية وغير جهازية تعمل بالملامسة لمكافحة الحشرات بطريقتين مختلفتين، يستخدم لمكافحة نطاق واسع من الحشرات على المحاصيل في المسطحات الحقلية والمحمية.  *🧪معدل الاستخدام* 1ملي في 1لتر ماء  *💣الحشرات المستهدفة:* التربس، المن، النطاطات، الذبابة البيضاء، ذبابة الفاكهة، الخنافس، الديدان القارضة.   *📝ملاحظة* فترة ما قبل الحصاد *٣أيام*  *سعة العبوة:* ١٠٠ مل",
        petFriendly: true,
        inStock: true
    },
    {
        id: 236,
        name: "مبيد حشري بوند",
        botanicalName: "",
        category: "pesticides",
        price: 8.0,
        originalPrice: 9.2,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/4cb57a65-03e0-441c-8d7d-1aa37d66d732_Picsart_25-02-04_11-45-55-887.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "اسم المبيد : بوند 25 دبل يو بي  المادة الفعالة : لمداسايهلوثرين (وزن / وزن ) ٢٥٪؜ وصف المبيد : مبيد حشري ذو مجال واسع من التأثير و فعال بواسطة الملامسة و الهضم -فعال لمكافحة الديدان و الذبابة البيضاء و التربس و ذبابة القرعيات  معدل الأستخدام : 20-50جرام /200لتر ماء. الآفات المستهدفة : الديدان ٫ ذبابة بيضاء ٫ التربس ٫ ذبابة القرعيات و الجاسيد فترة الأمان : ٣ أيام الحجم 100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 237,
        name: "مانجو عماني شتلة صغيرة",
        botanicalName: "",
        category: "plants",
        price: 1.0,
        originalPrice: 1.15,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/7037b75a-70e8-49f2-afed-553edf18e05d_C7lI8WRVQAA2fvD.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "المانجو العماني والمسمى محليا بالأمبا او الهمبا من اشهر الاشجار حول العالم. ارتبطت زراعتها بالاصالة العمانية منذ القدم. تتميز بثمارها المتوسطة الحجم والحامضة اللذيذة قبل النضج وتقل الحموضة بعد تغير لونه من الاخضر إلى الأصفر.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 238,
        name: "NPK عالي الفسفور",
        botanicalName: "",
        category: "fertilizers",
        price: 1.5,
        originalPrice: 1.72,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/a8d4a59f-3763-440f-b39e-1587e83d79a0_Picsart_24-11-14_23-07-54-512.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فوائد:  يعزز نمو الجذور وتطورها: الفوسفور ضروري لنمو الجذور وتطورها. يمكن أن تعزز مستويات الفوسفور الكافية في التربة جذورًا قوية وصحية وتساعد النباتات على امتصاص العناصر الغذائية الأخرى بشكل أفضل. وايضا ينشط ويحفز الأزهار حجم 1كيلوا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 239,
        name: "هرمون  الكرايزوبون الوردي ٪0.1/ 350جرام",
        botanicalName: "",
        category: "pesticides",
        price: 30.0,
        originalPrice: 34.5,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ce1762ca-eb9c-48ef-8fb1-042b99b2c354_Picsart_25-02-27_21-43-23-944.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "و وصف مبيد الكرايزوبون الوردي 0.1% هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية    طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء.   من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 240,
        name: "0054 F1 بطيخ",
        botanicalName: "",
        category: "seeds",
        price: 19.0,
        originalPrice: 21.85,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/e5438ce9-9b72-43eb-80c6-377db456e7c1_Picsart_25-02-19_12-07-50-341.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "عدد البذور 1000بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 241,
        name: "بذور شمندر pyramid",
        botanicalName: "",
        category: "seeds",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/b513e856-4701-4685-b7be-2dc86842170e_Picsart_24-10-26_21-49-35-859.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "بذور من شركة pyramid الهندية بذور عالية الجودة حجم العبوةو100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 242,
        name: "ذرة tyson",
        botanicalName: "",
        category: "seeds",
        price: 22.0,
        originalPrice: 25.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/6762c8a9-105a-4449-88ae-7645fa80d63b_IMG-20250830-WA0013.jpg",
        badge: "بذور 🌱",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ذرة تيسون سكرية هجينة تحتوي على ٥٠٠٠ بذرة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 243,
        name: "مبيد حشري ديسيرين 250ملي",
        botanicalName: "",
        category: "pesticides",
        price: 3.0,
        originalPrice: 3.45,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/0e231b7f-f06a-4513-b494-41356969fee7_Picsart_25-02-04_13-38-53-980.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : ديسيرين ٢,٥ إي سي الماده الفعالة :دلتا مثرين  وصف المبيد:مبيد حشري ذو مجال واسع من التأثير و فعال بواسطة الملامسة و الهضم -فعال لمكافحة الذبابة البيضاء و التربس و ذبابة القريات. معدل الاستخدام : ١٠-١٥ ملي/٢٠لترماء الافات المستهدفة : ذبابة بيضاء.التربس. ذبابة القريات فترة الامان:٧أيام الحجم 250ملي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 244,
        name: "مبيد اعشاب جلوفوس",
        botanicalName: "",
        category: "pesticides",
        price: 14.0,
        originalPrice: 16.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/67bf37c2-974d-4b67-9418-e77f7fd1d210_Picsart_25-02-04_10-58-56-704.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "إسم المبيد : جلوفوس ٢٠٪؜ اس ال  المادة الفعالة: جلوفوسينيت-أمونيوم 20%(V-W) وصف المبيد:  ١- مبيد اعشاب جهازي متطور غير اختياري يمتص من خلال الأوراق و السيقان و تنتقل للجذور ليكافح مدى واسع من الأعشاب الريزومات ٢- يستخدم في محاصيل مختلفه لمكافحة الأعشاب العريضه و الأعشاب الرفيعه في بساتين العنب و الحمضيات و النخيل و نبات الزينة و الحقول الغير مزروعة و بجانب قنوات الصرف  ٣- عدم تعرض النبات أو جذور النبات للمبيد حيث ان المبيد غير إختياري معدل الإستخدام : لكل ٢٠٠ لتر ١-١٫٥ لتر  الآفات المستهدفه : الأعشاب الحولية و المعمرة ٫ عشبة السعد بأنواعها ٫الأعشاب العريضه و الأعشاب الرفيعه فترة الأمان: ٢١ يوم الحجم 1لتر",
        petFriendly: true,
        inStock: true
    },
    {
        id: 245,
        name: "تربة اصائص دوبال سماد الدودي",
        botanicalName: "",
        category: "fertilizers",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/0e3e5a16-f4c0-4d88-9da0-bdd610695d36_Picsart_24-11-13_22-54-15-186.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "50لتر. (تربة اصايص دبال بالسماد الدودي)  .تربة زراعية مثالية تحتوي على ارقى انواع مغذيات التربة(السماد الدودي)🪴  . تحتوي على أنواع مختلفة من محسنات التربة 🪴 1-البرلايت 2-البيتموس 3-الطحالب البحرية 4- خث جوز الهند  -استخداماتها…؟ 🪴 1- للزراعة الجديدة في الارض او الاصايص 2- للتعقيل والتشتيل 3- محسن التربة  4- يمكن استخدامها كاضافة للتربة لتحسينها",
        petFriendly: true,
        inStock: true
    },
    {
        id: 246,
        name: "20كيلو PERLHUMUSسماد هيومك",
        botanicalName: "",
        category: "fertilizers",
        price: 14.0,
        originalPrice: 16.1,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/275399d9-7bb8-484c-a5ba-43dfd7bad054_Picsart_25-02-05_15-32-06-274.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "وصف المنتج  حبيبات بيرل هيومس PERLHUMUS  عبارة عن حبيبات عالي الجودة من حمض الهيوميك الطبيعي لترطيب التربة و مخلب على أساس اليوناردايت من انتاج الماني.  تتكون حبيبات بيرل هيومس PERLHUMUS من الدبال المغذي المتاح على الفور و يتوفر على كمية عالية من الدبال الدائم ، و هو ثابت ضد التحلل الميكروبي في...  فوائد بيرل هيومس و التطبيق الموصى به يوفر دبالًا ثابتًا للتربة ويحفز عزل ثاني أكسيد الكربون يحسن بنية التربة وتهويتها ، خاصة في التربة الرملية والطينية يزيد من توافر مغذيات التربة ويحسن قدرة التربة على الاحتفاظ بالمياه يحسن قدرة التخزين المؤقت للتربة ، معادلة الأس الهيدروجيني يزيد من كفاءة الأسمدة وإنتاجية النبات يساعد على تحييد السموم وعزل المعادن الثقيلة في التربة يعزز تنفس الجذور وتطورها ، وخاصة رأسياً مجالات التطبيق الزراعة انتاج الخضر إنتاج الفاكهة العشب والمناظر الطبيعية معدلات التطبيق الموصى بها التربة 400 - 600 كجم / هكتار أثناء فراش البذور والتحضير العام للتربة  ركائز 1 - 15 كجم / م 3 في ركائز عضوية أو معدنية  المناظر الطبيعية 10 - 15 كجم / 100 م 2 أثناء الغرس ، وإعداد فراش البذور والعناية بالعشب  البساتين 0.5 - 2 كجم / حفرة زراعة أو 10 - 15 كجم / 100 متر مربع مع أول استخدام للأسمدة بالتساوي فوق منطقة ظل الأشجار  * هذه توصيات قياسية يمكن أن تختلف وفقًا لخصائص التربة وزراعة النباتات وظروف النظام المحلي.  التركيب المتأصل (القيم النموذجية على أساس المادة الجافة)",
        petFriendly: true,
        inStock: true
    },
    {
        id: 247,
        name: "مبيد حشري هوسبيلان",
        botanicalName: "",
        category: "pesticides",
        price: 3.5,
        originalPrice: 4.02,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f14c5ab4-fdeb-413b-ad04-877e7d70f37f_Picsart_25-02-04_07-38-24-057.png",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "هوسبيلان ٢٠ اس بي المادة الفعالة : استمبرد مبيد حشري جهازي ذو مجال واسع من التأثير فعال لمكافحة الذبابة البيضاء والتربس والمن و الجاسيد. معدل الإستخدام :٥٠ ل١٠٠غم لكل٢٠٠ لتر ماء فترة الأمان :٣ ايام الحجم 100جرام",
        petFriendly: true,
        inStock: true
    },
    {
        id: 248,
        name: "هرمون الرايزبون  ٪0.5",
        botanicalName: "",
        category: "pesticides",
        price: 60.0,
        originalPrice: 69.0,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/3d9e115f-16f8-490f-b4fc-f93dcf936c44_Picsart_25-02-27_21-41-52-648.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "و وصف مبيد هرمون الرايزبون  0.5٪     500جرام هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء. من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 249,
        name: "الألوفيرا (كبير)",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/f34ab437-c55e-402c-9c3f-f43b7c3ecb0b_pisauikan-N29JXkNO1xI-unsplash-scaled.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "يعد نبات الألوفيرا من النباتات العصارية المعمرة والتي يهتم هواة الزراعة المنزلية باقتنائها وزراعتها في المنزل وذلك بسبب فوائدها واستخداماتها العديدة. حيث دخلت حديثاً بشكل كبير في قطاع الصناعات الدوائية والتجميلية والغذائية وبالإضافة إلى أنها تزرع لأغراض الزينة. ويتميز النبات بجذور سطحية وجانبية والسيقان قصيرة تحمل أوراق سميكة رمحيه الشكل وذات حواف منشارية ومغطاة بطبقة شمعية",
        petFriendly: true,
        inStock: true
    },
    {
        id: 250,
        name: "ليمون تايلندي",
        botanicalName: "",
        category: "plants",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/ee04b2fd-a1cc-4db4-9cef-bc07da85ad1b_22-1_a88db38f-59f3-47c0-889a-c20c3098a7d8_800x.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "من اجود أصناف الليمون. لكثرة العصاره وخلوه من البذور",
        petFriendly: true,
        inStock: true
    },
    {
        id: 251,
        name: "سماد ويّويل اكس ٢",
        botanicalName: "",
        category: "fertilizers",
        price: 17.0,
        originalPrice: 19.55,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/eac5f7d7-4e07-4c0c-ac0c-62748daee4d3_IMG-20250204-WA0026.jpg",
        badge: "تغذية 🧪",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "ويّويل اكس 2  المكونات : مستخلص ديريس٥٠٪ زيت النيم ٤٥٪ ماء مقطر٥٪ مبيد حيوي وعضوي قوي للقضاء على سوسة النخيل الحمراء.  صديق للبيئة ولا يسبب أي تلوث ثانوي أو آثار جانبية لا يوجد أي ضرر للإنسان والحيوان والحشرات المفيدة والنباتات والبيئة.  الافة المستهدفة :سوسة النخيل الحمراء  كيفية الاستخدام:  1- خفف 500 لتر من الماء 500 جرام (1) كيس) من ويويل - أكس 1 مع 500 مل (1) عبوه) من ويويل - أكس 2 وحركة جيدا.  2 رش كمية كافية بواسطة ماكنة رش ذات ضغط عالي حتى يتم نقع جسم الشجرة بالكامل ، من الأوراق العلوية إلى الساق. (حوالي 50 لترا للأشجار البالغة ترش مرتين في الأسبوع في البداية . بعد ذلك ، استخدم مرتين كل 15 يوما ، ثم مرة واحدة شهريا بعد ذلك ، من الأفضل اتخاذ التدابير للسماحللعقار أو الدواء بدخول الفجوة عن طريق عمل فتحة خلال السيقان قدر الإمكان .  3 في نفس الوقت ، استخدم حاقن التربة لحقن 1 لتر على عمق 20 إلى 30 سم بالقرب من الجذور.  4- قم بعمل 3 إلى 5 ثقوب في جذع النخلة بعمق حوالي 20 سم بواسطة ثاقب كهربائي على مسافة 1.5 متر من سطح الأرض، واستخدم ماكنة الرش ذات الضغط العالي لحقن حوالي 300 مل من الدواء في كل ثقب. استمر بحقن الدواء مرة واحدة في الأسبوع لمدة شهر.  -5- يجب تنفيذ مكافحة الآفات في وقت واحد على الأشجار المجاورة للأشجار التي تضررت من سوسة النخيل الحمراء من المحتمل أن تكون الدودة البالغة قد هاجرت بالفعل إلى شجرة قريبة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 252,
        name: "مانجو عماني شتلة كبيرة",
        botanicalName: "",
        category: "plants",
        price: 6.5,
        originalPrice: 7.47,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/5e2796c1-6e89-4954-8f07-fac3818aede3_C7lI8WRVQAA2fvD.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "المانجو العماني والمسمى محليا بالأمبا او الهمبا من اشهر الاشجار حول العالم. ارتبطت زراعتها بالاصالة العمانية منذ القدم. تتميز بثمارها المتوسطة الحجم والحامضة اللذيذة قبل النضج وتقل الحموضة بعد تغير لونه من الاخضر إلى الأصفر.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 253,
        name: "مقص التطعيم",
        botanicalName: "",
        category: "tools",
        price: 4.5,
        originalPrice: 5.17,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/09fdfec0-7e43-4767-aaff-247c2247a1bf_Picsart_24-10-25_17-39-38-501.png",
        badge: "أدوات ✂️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "طعم اشجارك بكل سهولة مع هذه الاداة المتميزة",
        petFriendly: true,
        inStock: true
    },
    {
        id: 254,
        name: "زام",
        botanicalName: "",
        category: "plants",
        price: 2.0,
        originalPrice: 2.3,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/05791008-34f1-41c6-a7fb-b042c99b7485_FUqu2l6X0AAJCP7.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة الزام، تنبت أزهاراً بيضاء عطرية و تشبه ثمارها حبات الزيتون، حيث تتكون في عناقيد خضراء قبل النضج ثم يتحول اللب إلى اللون الأورجواني أو البنفسجي",
        petFriendly: true,
        inStock: true
    },
    {
        id: 255,
        name: "هرمون رمادي كرايزوبلس  0.8٪ الرمادي",
        botanicalName: "",
        category: "pesticides",
        price: 75.0,
        originalPrice: 86.25,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/29e97f26-3412-4948-85e3-e576648bfd02_Picsart_25-02-27_21-45-05-985.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "و وصف مبيد هرمون رمادي كرايزوبلس  0.8٪ الرمادي    350جرام هو مسحوق هورموني عالي التركيز كيز واستعماله بشكل خاطئ يمكن أن يتلف عقل الأشجار إذا زاد المسحوق عن حاجة الجذر المراد تجذيرة وكذلك التقليل في المسحوق يمكن أن ياخر عملية التجذير أولا يعطي نتائج وتأثيرات جيدة . فقط قم بإخراج الكمية المناسبة من المسحوق المطلوب وقم بوضعه في عبوة أخرى نظيفة لا ترجع أي كمية متبقية الى العبوة الأصلية طريقة الاستخدام : يعتبر الكرايزوبون جاهزا الاستخدام لتجذير العقل اللينة والعقل الصلبة لإنتاج نباتات الزينة من خلال تحفيز إنتاج جذور العقل وتتم عملية التجذير للعقل الصلبة بترطيب العقلة بالماء. من الأسفل بمقدار 1 الى 2 سنتيمتر وإزالة الماء الزائد عنها بنفضها ثم تغميسها في مسحوق التجذير ونفض الزائد منه بعناية ثم زرع العقلة كما هو معتاد .",
        petFriendly: true,
        inStock: true
    },
    {
        id: 256,
        name: "المستعفل البنجالي",
        botanicalName: "",
        category: "plants",
        price: 4.0,
        originalPrice: 4.6,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/7465232c-0931-49ac-9323-3d99afc4ee58_663261.jpg",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "وصفت فاكهة القشطة أو المستعفل بحسب التسمية المحلية في السلطنة بأنها مزيج بين الموز والأناناس في الطعم، ولها قشور حرشفية خارجية، وتسمى أحياناً بفاكهة الكاسترد واسمها بالإنجليزية cherimola، بينما اسمها العلمي annona.",
        petFriendly: true,
        inStock: true
    },
    {
        id: 257,
        name: "جاتروفا",
        botanicalName: "",
        category: "plants",
        price: 0.5,
        originalPrice: 0.57,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/2ab29469-85ea-4334-8888-6cb01cf768c5_6f7a7d6d-2c7b-4eb4-9b54-c47b05f7dec1.png",
        badge: "نبات طبيعي 🪴",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "شجرة الجاتروفا تتميز بأزهار حمراء قرمزية جميلة ، وهي نبات شجيري كثيف ، طويل و مستدير الشكل، اشجار دائمة الخضرة، ومن أسمائه الشائعة بيرقرنا",
        petFriendly: true,
        inStock: true
    },
    {
        id: 258,
        name: "مبيد حشري فوس ليف",
        botanicalName: "",
        category: "pesticides",
        price: 6.0,
        originalPrice: 6.9,
        rating: 4.8,
        reviewsCount: 0,
        image: "https://alarjwan.onrender.com/uplouded_images/56d42a6b-ff19-4f6b-8fed-af29a44e628c_Picsart_25-02-04_10-34-00-651.jpg",
        badge: "وقاية 🛡️",
        careLevel: "easy",
        light: "medium",
        water: "",
        potSize: "",
        height: "",
        description: "فوس ليف ٨٠ دبل يو بي المادة الفعالة : فوستايل المونيوم مبيد فطري جهازي لمكافحة مدى واسع من الأمراض الفطرية  مبيد فطري وقائي ذو تأثير طويل المدى لمكافحة مدى واسع من الأمراض الفطرية مثل أمراض البياض الزغبي وتبقع الأوراق واللفحة المبكرة والمتأخرة على محاصيل عديدة. الافة المستهدفة :البياض الزغبي اللفحة المبكرة و المتأخرة تبقع الأوراق وامراض الذبول  معدل الإستخدام : ٢لـ ٢ونص في لتر ماء  فترة الأمان : ثلاث ايام قبل الحصاد  الحجم 500جرام",
        petFriendly: true,
        inStock: true
    }
];


// --- Persistent State ---
let products = JSON.parse(localStorage.getItem('ghosn_matak_products_v2')) || DEFAULT_PRODUCTS;
let coupons = JSON.parse(localStorage.getItem('ghosn_matak_coupons')) || [
    { code: 'GHOSN15', discount: 15, desc: 'خصم 15% بمناسبة تدشين غصن المتك' },
    { code: 'OMAN10', discount: 10, desc: 'كود خصم الترحيب' },
    { code: 'FREE', discount: 0, isFreeShipping: true, desc: 'شحن مجاني لكافة محافظات عُمان' }
];
let orders = JSON.parse(localStorage.getItem('ghosn_matak_orders')) || [
    { id: '#GM-9021', date: '2026-08-30 20:10', itemsCount: 3, total: 32.20, status: 'قيد التجهيز' },
    { id: '#GM-9018', date: '2026-08-30 17:45', itemsCount: 1, total: 14.90, status: 'تم الشحن' },
    { id: '#GM-9005', date: '2026-08-29 22:30', itemsCount: 2, total: 17.30, status: 'مكتمل' }
];
let announcements = JSON.parse(localStorage.getItem('ghosn_matak_announcements')) || {
    topBar: '🌱 عروض متجر غصن المتك: شحن مجاني للطلبات فوق 25 ر.ع + بذور عضوية هدية!',
    heroBadge: '🌿 غصن المتك: وجهتك الزراعية الأولى بسلطنة عُمان',
    heroTitle: 'كل ما تحتاجه لحديقتك ومزرعتك بأسعار الجملة',
    heroDesc: 'نباتات طبيعية، بذور هجينة، مبيدات آمنة، أسمدة، شبكات ري حديث، ومعدات زراعية تصلك أينما كنت في عُمان.'
};

let editingProductId = null;

let state = {
    category: 'all',
    searchQuery: '',
    maxPrice: 60,
    petFriendlyOnly: false,
    onSaleOnly: false,
    sortBy: 'featured',
    cart: JSON.parse(localStorage.getItem('ghosn_matak_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('ghosn_matak_wishlist')) || [],
    appliedCoupon: null,
    discountPercent: 0
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLucideIcons();
    initAnnouncements();
    initAdSlider();
    initCategoryNavigation();
    initFiltersAndSorting();
    initSearch();
    initCartDrawer();
    initWishlist();
    initModals();
    initCareWizard();
    initMobileBottomNav();
    initAdminPanel();
    renderProducts();
    updateCartUI();
    updateWishlistBadge();
});

function initLucideIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            initLucideIcons();
        });
    }
}

// --- Professional Ad Slider Logic ---
function initAdSlider() {
    const track = document.getElementById('slides-track');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    const showcase = document.getElementById('hero-slider-showcase');

    if (!track) return;

    let currentSlide = 0;
    const totalSlides = 3;
    let autoSlideInterval = null;

    function goToSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        const offset = currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.className = 'slider-dot active w-6 h-2 rounded-full bg-brand-400 transition-all';
            } else {
                dot.className = 'slider-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all';
            }
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(Number(dot.dataset.slide));
            startAutoplay();
        });
    });

    if (showcase) {
        showcase.addEventListener('mouseenter', stopAutoplay);
        showcase.addEventListener('mouseleave', startAutoplay);
    }

    document.querySelectorAll('.slide-cta-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            const targetBtn = document.querySelector(`.cat-nav-btn[data-category="${cat}"]`);
            if (targetBtn) targetBtn.click();
            const catalogSec = document.getElementById('catalog-section');
            if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
        });
    });

    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) prevSlide();
            else nextSlide();
        }
        startAutoplay();
    }, { passive: true });

    goToSlide(0);
    startAutoplay();
}

// --- Announcements & Header Texts ---
function initAnnouncements() {
    const annElem = document.getElementById('announcement-text');
    const heroBadge = document.getElementById('hero-badge-text');
    const heroTitle = document.getElementById('hero-title-text');
    const heroDesc = document.getElementById('hero-desc-text');
    const statCount = document.getElementById('stat-products-count');

    if (annElem && announcements.topBar) annElem.innerHTML = announcements.topBar;
    if (heroBadge && announcements.heroBadge) heroBadge.textContent = announcements.heroBadge;
    if (heroTitle && announcements.heroTitle) heroTitle.innerHTML = announcements.heroTitle;
    if (heroDesc && announcements.heroDesc) heroDesc.textContent = announcements.heroDesc;
    if (statCount) statCount.textContent = `+${products.length}`;
}

// --- Admin Panel Security & Management Suite ---
function initAdminPanel() {
    const openAdminBtn = document.getElementById('open-admin-btn');
    const mobileAdminAccessBtn = document.getElementById('mobile-admin-access-btn');
    const mobileNavAdminBtn = document.getElementById('mobile-nav-admin');

    const loginModal = document.getElementById('admin-login-modal');
    const loginOverlay = document.getElementById('admin-login-overlay');
    const closeLoginBtn = document.getElementById('close-admin-login');
    const loginForm = document.getElementById('admin-login-form');
    const passwordInput = document.getElementById('admin-password-input');
    const loginError = document.getElementById('admin-login-error');
    const togglePasswordBtn = document.getElementById('toggle-password-visibility');

    const adminPanelModal = document.getElementById('admin-panel-modal');
    const closeAdminBtn = document.getElementById('close-admin-panel');
    const closeAdminBottomBtn = document.getElementById('admin-close-bottom-btn');
    const adminOverlay = document.getElementById('admin-panel-overlay');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');

    const adminTabs = document.querySelectorAll('.admin-tab-btn');
    const tabPanels = {
        'products': document.getElementById('tab-content-products'),
        'add-product': document.getElementById('tab-content-add-product'),
        'announcements': document.getElementById('tab-content-announcements'),
        'coupons': document.getElementById('tab-content-coupons'),
        'orders': document.getElementById('tab-content-orders')
    };

    function isSessionAuthenticated() {
        return sessionStorage.getItem('ghosn_admin_auth') === 'true';
    }

    function openAdminGateway() {
        if (isSessionAuthenticated()) {
            openAdminPanelDirectly();
        } else {
            openLoginModal();
        }
    }

    function openLoginModal() {
        if (loginError) loginError.classList.add('hidden');
        if (passwordInput) {
            passwordInput.value = '';
            setTimeout(() => passwordInput.focus(), 100);
        }
        loginModal.classList.add('active');
        initLucideIcons();
    }

    function closeLoginModal() {
        loginModal.classList.remove('active');
    }

    function openAdminPanelDirectly() {
        renderAdminProductsTable();
        renderAdminCouponsTable();
        renderAdminOrdersTable();
        populateAnnouncementForm();
        adminPanelModal.classList.add('active');
        initLucideIcons();
    }

    function closeAdminPanel() {
        adminPanelModal.classList.remove('active');
    }

    if (openAdminBtn) openAdminBtn.addEventListener('click', openAdminGateway);
    if (mobileAdminAccessBtn) {
        mobileAdminAccessBtn.addEventListener('click', () => {
            if (window.closeMobileDrawer) window.closeMobileDrawer();
            openAdminGateway();
        });
    }
    if (mobileNavAdminBtn) mobileNavAdminBtn.addEventListener('click', openAdminGateway);

    if (closeLoginBtn) closeLoginBtn.addEventListener('click', closeLoginModal);
    if (loginOverlay) loginOverlay.addEventListener('click', closeLoginModal);

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            togglePasswordBtn.innerHTML = isPassword 
                ? '<i data-lucide="eye-off" class="w-4 h-4"></i>' 
                : '<i data-lucide="eye" class="w-4 h-4"></i>';
            initLucideIcons();
        });
    }

    if (loginForm && passwordInput) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const entered = passwordInput.value.trim();

            if (entered === ADMIN_SECRET_KEY) {
                sessionStorage.setItem('ghosn_admin_auth', 'true');
                closeLoginModal();
                openAdminPanelDirectly();
                showToast('مرحباً بك في لوحة تحكم متجر غصن المتك! 🌿', 'success');
            } else {
                loginError.classList.remove('hidden');
                passwordInput.classList.add('ring-2', 'ring-rose-500');
                setTimeout(() => passwordInput.classList.remove('ring-2', 'ring-rose-500'), 1500);
            }
        });
    }

    if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdminPanel);
    if (closeAdminBottomBtn) closeAdminBottomBtn.addEventListener('click', closeAdminPanel);
    if (adminOverlay) adminOverlay.addEventListener('click', closeAdminPanel);
    
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('ghosn_admin_auth');
            closeAdminPanel();
            showToast('تم تسجيل الخروج من لوحة تحكم غصن المتك', 'info');
        });
    }

    const quickAddBtn = document.getElementById('admin-quick-add-btn');
    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => {
            resetProductForm();
            switchAdminTab('add-product');
        });
    }

    function switchAdminTab(targetTab) {
        adminTabs.forEach(btn => {
            if (btn.dataset.tab === targetTab) {
                btn.className = 'admin-tab-btn active px-4 py-2 rounded-xl bg-brand-500 text-white shadow-sm flex items-center gap-1.5 shrink-0';
            } else {
                btn.className = 'admin-tab-btn px-4 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-1.5 shrink-0';
            }
        });

        Object.keys(tabPanels).forEach(key => {
            if (tabPanels[key]) {
                if (key === targetTab) tabPanels[key].classList.remove('hidden');
                else tabPanels[key].classList.add('hidden');
            }
        });
        initLucideIcons();
    }

    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.dataset.tab === 'add-product' && !editingProductId) {
                resetProductForm();
            }
            switchAdminTab(tab.dataset.tab);
        });
    });

    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            resetProductForm();
            switchAdminTab('products');
        });
    }

    // Handle Add or Edit Product Form Submission
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('new-prod-name').value.trim();
            const botanicalName = document.getElementById('new-prod-botanical').value.trim() || 'Agricultural Product';
            const category = document.getElementById('new-prod-category').value;
            const price = parseFloat(document.getElementById('new-prod-price').value);
            const originalPrice = parseFloat(document.getElementById('new-prod-orig-price').value) || null;
            const image = document.getElementById('new-prod-image').value.trim();
            const badge = document.getElementById('new-prod-badge').value.trim() || null;
            const water = document.getElementById('new-prod-water').value.trim() || 'استخدام زراعي منتظم';
            const sizeInput = document.getElementById('new-prod-size').value.trim() || 'مواصفة قياسية';
            const petFriendly = document.getElementById('new-prod-pet').checked;
            const inStock = document.getElementById('new-prod-stock').checked;
            const description = document.getElementById('new-prod-desc').value.trim() || 'منتج زراعي عالي الجودة من غصن المتك.';

            if (editingProductId) {
                // UPDATE
                const productIndex = products.findIndex(p => p.id === editingProductId);
                if (productIndex > -1) {
                    products[productIndex] = {
                        ...products[productIndex],
                        name,
                        botanicalName,
                        category,
                        price,
                        originalPrice,
                        image,
                        badge,
                        water,
                        potSize: sizeInput,
                        height: sizeInput,
                        petFriendly,
                        inStock,
                        description
                    };
                    localStorage.setItem('ghosn_matak_products_v2', JSON.stringify(products));
                    showToast(`تم تحديث بيانات "${name}" في غصن المتك بنجاح! 💾`, 'success');
                }
            } else {
                // ADD NEW
                const newProduct = {
                    id: Date.now(),
                    name,
                    botanicalName,
                    category,
                    price,
                    originalPrice,
                    rating: 5.0,
                    reviewsCount: 1,
                    image,
                    badge,
                    careLevel: 'easy',
                    light: 'bright',
                    water,
                    potSize: sizeInput,
                    height: sizeInput,
                    petFriendly,
                    inStock,
                    description
                };
                products.unshift(newProduct);
                localStorage.setItem('ghosn_matak_products_v2', JSON.stringify(products));
                showToast(`تمت إضافة ونشر "${name}" في غصن المتك فوراً! 🚀`, 'success');
            }

            resetProductForm();
            renderAdminProductsTable();
            renderProducts();
            switchAdminTab('products');
        });
    }

    // Announcement update form
    const announcementForm = document.getElementById('announcement-form');
    if (announcementForm) {
        announcementForm.addEventListener('submit', (e) => {
            e.preventDefault();
            announcements.topBar = document.getElementById('edit-announcement-input').value.trim();
            announcements.heroBadge = document.getElementById('edit-hero-badge-input').value.trim();
            announcements.heroTitle = document.getElementById('edit-hero-title-input').value.trim();
            announcements.heroDesc = document.getElementById('edit-hero-desc-input').value.trim();

            localStorage.setItem('ghosn_matak_announcements', JSON.stringify(announcements));
            initAnnouncements();
            showToast('تم تحديث إعلانات ونصوص متجر غصن المتك بنجاح! 📢', 'success');
        });
    }

    // Add coupon form
    const addCouponForm = document.getElementById('add-coupon-form');
    if (addCouponForm) {
        addCouponForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = document.getElementById('new-coupon-code').value.trim().toUpperCase();
            const discount = parseInt(document.getElementById('new-coupon-discount').value);
            const desc = document.getElementById('new-coupon-desc').value.trim();

            coupons.push({ code, discount, desc });
            localStorage.setItem('ghosn_matak_coupons', JSON.stringify(coupons));
            
            addCouponForm.reset();
            renderAdminCouponsTable();
            showToast(`تم إنشاء الكوبون ${code} بنجاح! 🎟️`, 'success');
        });
    }
}

function resetProductForm() {
    editingProductId = null;
    const form = document.getElementById('add-product-form');
    if (form) form.reset();

    const editIdInput = document.getElementById('edit-prod-id');
    if (editIdInput) editIdInput.value = '';

    const heading = document.getElementById('product-form-heading');
    const subheading = document.getElementById('product-form-subheading');
    const submitText = document.getElementById('submit-product-text');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const tabTitle = document.getElementById('admin-product-tab-title');

    if (heading) heading.textContent = 'إضافة منتج جديد إلى غصن المتك';
    if (subheading) subheading.textContent = 'أضف أو عدل منتجات النباتات، البذور، المبيدات، أنظمة الري، الأسمدة أو الأدوات';
    if (submitText) submitText.textContent = 'حفظ ونشر المنتج في غصن المتك فوراً 🚀';
    if (cancelBtn) cancelBtn.classList.add('hidden');
    if (tabTitle) tabTitle.textContent = '+ إضافة أو تعديل منتج';
}

function startEditingProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    editingProductId = product.id;

    document.getElementById('edit-prod-id').value = product.id;
    document.getElementById('new-prod-name').value = product.name;
    document.getElementById('new-prod-botanical').value = product.botanicalName || '';
    document.getElementById('new-prod-category').value = product.category;
    document.getElementById('new-prod-price').value = product.price;
    document.getElementById('new-prod-orig-price').value = product.originalPrice || '';
    document.getElementById('new-prod-image').value = product.image;
    document.getElementById('new-prod-badge').value = product.badge || '';
    document.getElementById('new-prod-water').value = product.water || '';
    document.getElementById('new-prod-size').value = product.potSize || product.height || '';
    document.getElementById('new-prod-pet').checked = Boolean(product.petFriendly);
    document.getElementById('new-prod-stock').checked = product.inStock !== false;
    document.getElementById('new-prod-desc').value = product.description || '';

    const heading = document.getElementById('product-form-heading');
    const subheading = document.getElementById('product-form-subheading');
    const submitText = document.getElementById('submit-product-text');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const tabTitle = document.getElementById('admin-product-tab-title');

    if (heading) heading.textContent = `تعديل: ${product.name}`;
    if (subheading) subheading.textContent = 'قم بتعديل الأسعار والبيانات والتوفر ثم اضغط حفظ التعديلات';
    if (submitText) submitText.textContent = 'حفظ وتحديث بيانات المنتج 💾';
    if (cancelBtn) cancelBtn.classList.remove('hidden');
    if (tabTitle) tabTitle.textContent = `✏️ تعديل: ${product.name.substring(0, 14)}...`;

    const tabBtn = document.querySelector('.admin-tab-btn[data-tab="add-product"]');
    if (tabBtn) tabBtn.click();
}

function populateAnnouncementForm() {
    const editAnn = document.getElementById('edit-announcement-input');
    const editHeroBadge = document.getElementById('edit-hero-badge-input');
    const editHeroTitle = document.getElementById('edit-hero-title-input');
    const editHeroDesc = document.getElementById('edit-hero-desc-input');

    if (editAnn) editAnn.value = announcements.topBar;
    if (editHeroBadge) editHeroBadge.value = announcements.heroBadge;
    if (editHeroTitle) editHeroTitle.value = announcements.heroTitle;
    if (editHeroDesc) editHeroDesc.value = announcements.heroDesc;
}

function renderAdminProductsTable() {
    const tbody = document.getElementById('admin-products-table-body');
    const countSpan = document.getElementById('admin-prod-count');
    if (countSpan) countSpan.textContent = products.length;

    if (!tbody) return;

    const catLabels = {
        'plants': '🪴 النباتات والنوادر',
        'seeds': '🌱 البذور والتقاوي',
        'pesticides': '🛡️ المبيدات والوقاية',
        'irrigation': '💧 أنظمة الري الحديث',
        'fertilizers': '🧪 الأسمدة والمغذيات',
        'tools': '✂️ الأدوات والمعدات',
        'pots': '🏺 المراكن والأحواض'
    };

    tbody.innerHTML = products.map((p) => `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
            <td class="p-3">
                <img src="${p.image}" class="w-11 h-11 object-cover rounded-xl border border-gray-200 dark:border-gray-700">
            </td>
            <td class="p-3 font-bold text-gray-900 dark:text-white">
                ${p.name}
                <span class="block text-[10px] text-gray-400 font-mono">${p.botanicalName}</span>
            </td>
            <td class="p-3 text-gray-600 dark:text-gray-300 font-medium text-[11px]">${catLabels[p.category] || p.category}</td>
            <td class="p-3 font-mono font-bold text-brand-600 dark:text-brand-400">${p.price.toFixed(2)} ر.ع</td>
            <td class="p-3">
                <button class="toggle-stock-btn px-2.5 py-1 rounded-lg text-[10px] font-bold ${p.inStock ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-800'}" data-id="${p.id}">
                    ${p.inStock ? 'متوفر' : 'نفذ'}
                </button>
            </td>
            <td class="p-3 text-center">
                <div class="flex items-center justify-center gap-1.5">
                    <button class="edit-prod-btn text-brand-600 dark:text-brand-400 hover:text-brand-800 p-2 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950 transition" data-id="${p.id}" title="تعديل المنتج">
                        <i data-lucide="edit-3" class="w-4 h-4"></i>
                    </button>
                    <button class="delete-prod-btn text-rose-500 hover:text-rose-700 p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950 transition" data-id="${p.id}" title="حذف المنتج">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    tbody.querySelectorAll('.edit-prod-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            startEditingProduct(id);
        });
    });

    tbody.querySelectorAll('.toggle-stock-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const p = products.find(item => item.id === id);
            if (p) {
                p.inStock = !p.inStock;
                localStorage.setItem('ghosn_matak_products_v2', JSON.stringify(products));
                renderAdminProductsTable();
                renderProducts();
            }
        });
    });

    tbody.querySelectorAll('.delete-prod-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const p = products.find(item => item.id === id);
            if (confirm(`هل أنت متأكد من رغبتك في حذف "${p ? p.name : 'المنتج'}" من متجر غصن المتك؟`)) {
                products = products.filter(item => item.id !== id);
                localStorage.setItem('ghosn_matak_products_v2', JSON.stringify(products));
                renderAdminProductsTable();
                renderProducts();
                showToast('تم حذف المنتج من المتجر', 'info');
            }
        });
    });

    initLucideIcons();
}

function renderAdminCouponsTable() {
    const tbody = document.getElementById('admin-coupons-table-body');
    if (!tbody) return;

    tbody.innerHTML = coupons.map(c => `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
            <td class="p-3 font-mono font-bold text-brand-600 dark:text-brand-400 uppercase">${c.code}</td>
            <td class="p-3 font-bold">${c.isFreeShipping ? 'شحن مجاني' : `${c.discount}%`}</td>
            <td class="p-3 text-gray-500">${c.desc || '-'}</td>
            <td class="p-3 text-center">
                <button class="delete-coupon-btn text-rose-500 hover:text-rose-700 p-1.5" data-code="${c.code}" title="حذف">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </td>
        </tr>
    `).join('');

    tbody.querySelectorAll('.delete-coupon-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            coupons = coupons.filter(c => c.code !== code);
            localStorage.setItem('ghosn_matak_coupons', JSON.stringify(coupons));
            renderAdminCouponsTable();
            showToast(`تم حذف الكوبون ${code}`, 'info');
        });
    });

    initLucideIcons();
}

function renderAdminOrdersTable() {
    const tbody = document.getElementById('admin-orders-table-body');
    const countSpan = document.getElementById('admin-orders-count');
    if (countSpan) countSpan.textContent = `${orders.length} طلبات`;
    if (!tbody) return;

    tbody.innerHTML = orders.map(o => `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
            <td class="p-3 font-mono font-bold text-brand-600">${o.id}</td>
            <td class="p-3 text-gray-500 font-mono">${o.date}</td>
            <td class="p-3">${o.itemsCount} منتج</td>
            <td class="p-3 font-mono font-bold">${o.total.toFixed(2)} ر.ع</td>
            <td class="p-3">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    ${o.status}
                </span>
            </td>
        </tr>
    `).join('');
}

// --- Mobile Bottom Navigation ---
function initMobileBottomNav() {
    const navCats = document.getElementById('mobile-nav-cats');
    const navWishlist = document.getElementById('mobile-nav-wishlist');
    const navCart = document.getElementById('mobile-nav-cart');

    if (navCats) {
        navCats.addEventListener('click', () => {
            const drawer = document.getElementById('mobile-drawer');
            const overlay = document.getElementById('mobile-drawer-overlay');
            drawer.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
        });
    }

    if (navWishlist) {
        navWishlist.addEventListener('click', () => {
            if (state.wishlist.length === 0) {
                showToast('قائمة المفضلة فارغة حالياً 🌿', 'info');
            } else {
                showToast(`لديك ${state.wishlist.length} منتجات في المفضلة!`, 'info');
            }
        });
    }

    if (navCart) {
        navCart.addEventListener('click', () => {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-drawer-overlay');
            drawer.classList.remove('-translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
        });
    }
}

// --- Category Navigation ---
function initCategoryNavigation() {
    const desktopBtns = document.querySelectorAll('.cat-nav-btn');
    const mobileBtns = document.querySelectorAll('.mobile-cat-btn');
    const sidebarBtns = document.querySelectorAll('.filter-cat-sidebar-btn');

    function setActiveCategory(cat) {
        state.category = cat;
        
        desktopBtns.forEach(btn => {
            if (btn.dataset.category === cat) {
                btn.className = 'cat-nav-btn active shrink-0 px-3.5 py-1.5 rounded-full bg-brand-500 text-white font-bold transition shadow-sm';
            } else {
                btn.className = 'cat-nav-btn shrink-0 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 transition';
            }
        });

        const catTitles = {
            'all': 'كل الأقسام والمنتجات',
            'plants': '🪴 النباتات الطبيعية والنوادر',
            'seeds': '🌱 البذور والتقاوي',
            'pesticides': '🛡️ المبيدات والوقاية الزراعية',
            'irrigation': '💧 أنظمة الري الحديث والتقطير',
            'fertilizers': '🧪 الأسمدة والمغذيات والتربة',
            'tools': '✂️ الأدوات والمعدات الزراعية',
            'pots': '🏺 المراكن والأحواض والديكور'
        };

        const titleElem = document.getElementById('current-category-title');
        if (titleElem) {
            titleElem.textContent = catTitles[cat] || 'كل المنتجات';
        }

        renderProducts();
    }

    desktopBtns.forEach(btn => {
        btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
    });

    sidebarBtns.forEach(btn => {
        btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
    });

    mobileBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveCategory(btn.dataset.category);
            if (window.closeMobileDrawer) window.closeMobileDrawer();
        });
    });
}

// --- Filters & Sorting ---
function initFiltersAndSorting() {
    const priceSlider = document.getElementById('price-slider');
    const priceLabel = document.getElementById('price-range-label');
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            state.maxPrice = Number(e.target.value);
            priceLabel.textContent = `حتى ${state.maxPrice.toFixed(2)} ر.ع`;
            renderProducts();
        });
    }

    const petFriendlyCb = document.getElementById('filter-pet-friendly');
    if (petFriendlyCb) {
        petFriendlyCb.addEventListener('change', (e) => {
            state.petFriendlyOnly = e.target.checked;
            renderProducts();
        });
    }

    const onSaleCb = document.getElementById('filter-on-sale');
    if (onSaleCb) {
        onSaleCb.addEventListener('change', (e) => {
            state.onSaleOnly = e.target.checked;
            renderProducts();
        });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sortBy = e.target.value;
            renderProducts();
        });
    }

    const resetBtn = document.getElementById('reset-filters-btn');
    const emptyResetBtn = document.getElementById('empty-reset-btn');
    const resetAll = () => {
        state.category = 'all';
        state.searchQuery = '';
        state.maxPrice = 60;
        state.petFriendlyOnly = false;
        state.onSaleOnly = false;

        if (priceSlider) priceSlider.value = 60;
        if (priceLabel) priceLabel.textContent = 'حتى 60.00 ر.ع';
        if (petFriendlyCb) petFriendlyCb.checked = false;
        if (onSaleCb) onSaleCb.checked = false;
        
        const desktopSearch = document.getElementById('desktop-search-input');
        if (desktopSearch) desktopSearch.value = '';
        const mobileSearch = document.getElementById('mobile-search-input');
        if (mobileSearch) mobileSearch.value = '';

        renderProducts();
    };

    if (resetBtn) resetBtn.addEventListener('click', resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);
}

// --- Live Search ---
function initSearch() {
    const desktopInput = document.getElementById('desktop-search-input');
    const mobileInput = document.getElementById('mobile-search-input');
    const clearBtn = document.getElementById('clear-search-btn');
    const dropdown = document.getElementById('search-results-dropdown');

    function handleSearch(query) {
        state.searchQuery = query.trim().toLowerCase();
        if (state.searchQuery.length > 0) {
            if (clearBtn) clearBtn.classList.remove('hidden');
            if (dropdown) showSearchPreview(state.searchQuery);
        } else {
            if (clearBtn) clearBtn.classList.add('hidden');
            if (dropdown) dropdown.classList.add('hidden');
        }
        renderProducts();
    }

    function showSearchPreview(q) {
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.botanicalName.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        ).slice(0, 5);

        if (matches.length === 0) {
            dropdown.innerHTML = `
                <div class="p-3 text-center text-xs text-gray-500">
                    لا توجد نتائج مطابقة لـ "<strong>${q}</strong>" في غصن المتك
                </div>
            `;
            dropdown.classList.remove('hidden');
            return;
        }

        dropdown.innerHTML = `
            <div class="p-2 border-b border-gray-100 dark:border-gray-800 text-[10px] font-bold text-gray-400">
                نتائج مطابقة سريعة في غصن المتك:
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-800">
                ${matches.map(p => `
                    <div class="p-2.5 hover:bg-gray-50 dark:hover:bg-gray-800/60 cursor-pointer flex items-center justify-between transition search-preview-item" data-id="${p.id}">
                        <div class="flex items-center gap-2.5">
                            <img src="${p.image}" class="w-9 h-9 object-cover rounded-lg">
                            <div class="text-right">
                                <h5 class="text-xs font-bold text-gray-900 dark:text-white">${p.name}</h5>
                                <span class="text-[10px] text-gray-400 font-mono">${p.botanicalName}</span>
                            </div>
                        </div>
                        <span class="text-xs font-black text-brand-600 dark:text-brand-400 font-mono">${p.price.toFixed(2)} ر.ع</span>
                    </div>
                `).join('')}
            </div>
        `;
        dropdown.classList.remove('hidden');

        dropdown.querySelectorAll('.search-preview-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = Number(item.dataset.id);
                openQuickView(id);
                dropdown.classList.add('hidden');
            });
        });
    }

    if (desktopInput) {
        desktopInput.addEventListener('input', (e) => handleSearch(e.target.value));
        desktopInput.addEventListener('focus', () => {
            if (state.searchQuery.length > 0) showSearchPreview(state.searchQuery);
        });
    }

    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => handleSearch(e.target.value));
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (desktopInput) desktopInput.value = '';
            handleSearch('');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#desktop-search-input') && !e.target.closest('#search-results-dropdown')) {
            if (dropdown) dropdown.classList.add('hidden');
        }
    });
}

// --- Render Products Engine ---
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const countBadge = document.getElementById('product-count-badge');

    let filtered = products.filter(p => {
        if (state.category !== 'all' && p.category !== state.category) return false;

        if (state.searchQuery) {
            const matchName = p.name.toLowerCase().includes(state.searchQuery);
            const matchBotanical = p.botanicalName.toLowerCase().includes(state.searchQuery);
            const matchDesc = p.description.toLowerCase().includes(state.searchQuery);
            if (!matchName && !matchBotanical && !matchDesc) return false;
        }

        if (p.price > state.maxPrice) return false;
        if (state.petFriendlyOnly && !p.petFriendly) return false;
        if (state.onSaleOnly && (!p.originalPrice || p.originalPrice <= p.price)) return false;

        return true;
    });

    if (state.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'best-seller') {
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    if (countBadge) {
        countBadge.textContent = `${filtered.length} منتج`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    grid.innerHTML = filtered.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        
        return `
            <div class="product-card bg-white dark:bg-gray-800/90 rounded-2xl sm:rounded-3xl border border-gray-200/70 dark:border-gray-700/60 overflow-hidden shadow-xs hover:shadow-xl flex flex-col justify-between group relative transition-all duration-300">
                
                <div class="relative card-shine overflow-hidden">
                    <img src="${product.image}" 
                        alt="${product.name}" 
                        loading="lazy"
                        class="w-full h-36 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500">
                    
                    <div class="absolute top-2 right-2 flex flex-col gap-1 z-10">
                        ${product.badge ? `
                            <span class="px-2 py-0.5 rounded-full bg-brand-600/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold shadow-xs">
                                ${product.badge}
                            </span>
                        ` : ''}
                        ${discountPercentage > 0 ? `
                            <span class="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-black w-max shadow-xs">
                                -${discountPercentage}%
                            </span>
                        ` : ''}
                    </div>

                    <button class="wishlist-btn absolute top-2 left-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-600 dark:text-gray-300 hover:text-rose-500 flex items-center justify-center shadow transition z-10 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}" 
                        data-id="${product.id}" 
                        title="أضف للمفضلة">
                        <i data-lucide="heart" class="w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}"></i>
                    </button>
                </div>

                <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between text-right space-y-2">
                    <div class="space-y-1">
                        <div class="flex items-center justify-between text-[10px] text-gray-400">
                            <span class="truncate">${product.water}</span>
                            <div class="flex items-center gap-0.5 text-amber-400 font-bold">
                                <span>★</span>
                                <span class="text-gray-600 dark:text-gray-300 font-mono">${product.rating}</span>
                            </div>
                        </div>

                        <h3 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white leading-tight line-clamp-1 hover:text-brand-600 transition cursor-pointer product-title-click" data-id="${product.id}">
                            ${product.name}
                        </h3>
                        <p class="text-[10px] text-gray-400 font-mono italic truncate">${product.botanicalName}</p>
                    </div>

                    <div class="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-700/60">
                        <div class="text-right">
                            <div class="flex items-baseline gap-1">
                                <span class="text-sm sm:text-base font-black text-brand-700 dark:text-brand-400 font-mono">${product.price.toFixed(2)}</span>
                                <span class="text-[10px] text-gray-500">ر.ع</span>
                            </div>
                        </div>

                        <button class="add-to-cart-btn px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs shadow-xs transition flex items-center gap-1" 
                            data-id="${product.id}"
                            title="إضافة للسلة">
                            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                            <span class="hidden sm:inline text-[11px]">أضف</span>
                        </button>
                    </div>
                </div>

            </div>
        `;
    }).join('');

    initLucideIcons();
    attachCardEventListeners();
}

function attachCardEventListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            addToCart(id, 1);
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            toggleWishlist(id);
        });
    });

    document.querySelectorAll('.product-title-click').forEach(elem => {
        elem.addEventListener('click', () => {
            const id = Number(elem.dataset.id);
            openQuickView(id);
        });
    });
}

// --- Cart System ---
function initCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    const openBtn = document.getElementById('cart-drawer-toggle');
    const closeBtn = document.getElementById('close-cart-drawer');
    const exploreBtn = document.getElementById('cart-explore-btn');
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');

    function openCart() {
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
    }

    function closeCart() {
        drawer.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    }

    if (openBtn) openBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);
    if (exploreBtn) exploreBtn.addEventListener('click', closeCart);

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (state.cart.length === 0) return;
            closeCart();
            openCheckoutModal();
        });
    }

    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const couponInput = document.getElementById('coupon-input');
            const feedback = document.getElementById('coupon-feedback');
            const code = couponInput.value.trim().toUpperCase();

            const matched = coupons.find(c => c.code.toUpperCase() === code);

            if (matched) {
                state.appliedCoupon = matched.code;
                state.discountPercent = matched.isFreeShipping ? 0 : (matched.discount / 100);
                feedback.textContent = `🎉 تم تطبيق الكوبون ${matched.code} بنجاح (${matched.desc || ''})!`;
                feedback.className = 'text-[11px] font-bold text-emerald-600 dark:text-emerald-400 block';
            } else {
                feedback.textContent = '❌ كود غير صالح، تأكد من صحة الرمز';
                feedback.className = 'text-[11px] font-bold text-rose-500 block';
            }
            updateCartUI();
        });
    }
}

function addToCart(productId, quantity = 1) {
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            botanicalName: product.botanicalName,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    showToast('تمت إضافة المنتج إلى سلة غصن المتك! 🇴🇲🌱', 'success');
}

function updateCartQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast('تم إزالة المنتج من السلة', 'info');
}

function saveCart() {
    localStorage.setItem('ghosn_matak_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const emptyView = document.getElementById('cart-empty-view');
    const cartFooter = document.getElementById('cart-footer');
    const badge = document.getElementById('cart-badge');
    const mobileCartBadge = document.getElementById('mobile-cart-badge');
    const headerTotal = document.getElementById('cart-header-total');
    const countText = document.getElementById('cart-items-count-text');

    const subtotalElem = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('discount-row');
    const discountAmountElem = document.getElementById('cart-discount-amount');
    const shippingElem = document.getElementById('cart-shipping-fee');
    const grandTotalElem = document.getElementById('cart-grand-total');

    const freeShippingMsg = document.getElementById('free-shipping-message');
    const freeShippingProgress = document.getElementById('free-shipping-progress');
    const freeShippingPercent = document.getElementById('free-shipping-percent');

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const isFreeCode = state.appliedCoupon === 'FREE';
    const freeShippingThreshold = 25.00;
    let shippingFee = subtotal >= freeShippingThreshold || isFreeCode ? 0 : (subtotal > 0 ? 2.50 : 0);
    
    let discount = subtotal * state.discountPercent;
    let grandTotal = Math.max(0, subtotal - discount + shippingFee);

    if (badge) badge.textContent = totalItems;
    if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
    if (headerTotal) headerTotal.textContent = `${subtotal.toFixed(2)} ر.ع`;
    if (countText) countText.textContent = `${totalItems} منتجات`;

    if (subtotal >= freeShippingThreshold || isFreeCode) {
        freeShippingMsg.textContent = '🎉 مبروك! حصلت على توصيل مجاني لكافة محافظات عُمان!';
        freeShippingProgress.style.width = '100%';
        freeShippingPercent.textContent = '100%';
    } else {
        const remaining = (freeShippingThreshold - subtotal).toFixed(2);
        const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
        freeShippingMsg.textContent = `أضف ${remaining} ر.ع للحصول على شحن مجاني 🚀`;
        freeShippingProgress.style.width = `${pct}%`;
        freeShippingPercent.textContent = `${pct}%`;
    }

    if (state.cart.length === 0) {
        list.innerHTML = '';
        list.classList.add('hidden');
        cartFooter.classList.add('hidden');
        emptyView.classList.remove('hidden');
    } else {
        list.classList.remove('hidden');
        cartFooter.classList.remove('hidden');
        emptyView.classList.add('hidden');

        list.innerHTML = state.cart.map(item => `
            <div class="flex items-center gap-2.5 bg-gray-50 dark:bg-gray-800/60 p-2.5 rounded-2xl border border-gray-100 dark:border-gray-700/60">
                <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl shrink-0">
                <div class="flex-1 text-right min-w-0">
                    <h4 class="text-xs font-bold text-gray-900 dark:text-white truncate">${item.name}</h4>
                    <span class="text-[10px] text-gray-400 font-mono block">${item.botanicalName}</span>
                    <span class="text-xs font-black text-brand-600 dark:text-brand-400 font-mono">${(item.price * item.quantity).toFixed(2)} ر.ع</span>
                </div>
                
                <div class="flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-1.5 py-0.5">
                    <button class="cart-qty-minus text-gray-500 hover:text-brand-600 text-xs font-bold px-1" data-id="${item.id}">-</button>
                    <span class="text-xs font-bold text-gray-800 dark:text-gray-200 w-3 text-center font-mono">${item.quantity}</span>
                    <button class="cart-qty-plus text-gray-500 hover:text-brand-600 text-xs font-bold px-1" data-id="${item.id}">+</button>
                </div>

                <button class="cart-remove-item text-gray-400 hover:text-rose-500 p-1" data-id="${item.id}">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `).join('');

        list.querySelectorAll('.cart-qty-plus').forEach(b => {
            b.addEventListener('click', () => updateCartQuantity(Number(b.dataset.id), 1));
        });
        list.querySelectorAll('.cart-qty-minus').forEach(b => {
            b.addEventListener('click', () => updateCartQuantity(Number(b.dataset.id), -1));
        });
        list.querySelectorAll('.cart-remove-item').forEach(b => {
            b.addEventListener('click', () => removeFromCart(Number(b.dataset.id)));
        });
    }

    if (subtotalElem) subtotalElem.textContent = `${subtotal.toFixed(2)} ر.ع`;
    if (discount > 0 && discountRow && discountAmountElem) {
        discountRow.classList.remove('hidden');
        discountAmountElem.textContent = `-${discount.toFixed(2)} ر.ع`;
    } else if (discountRow) {
        discountRow.classList.add('hidden');
    }

    if (shippingElem) {
        shippingElem.textContent = shippingFee === 0 ? 'مجاني 🚀' : `${shippingFee.toFixed(2)} ر.ع`;
    }
    if (grandTotalElem) grandTotalElem.textContent = `${grandTotal.toFixed(2)} ر.ع`;

    initLucideIcons();
}

// --- Wishlist System ---
function initWishlist() {
    const toggleBtn = document.getElementById('wishlist-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (state.wishlist.length === 0) {
                showToast('قائمة المفضلة فارغة حالياً 🌿', 'info');
            } else {
                showToast(`لديك ${state.wishlist.length} منتجات في المفضلة!`, 'info');
            }
        });
    }
}

function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast('تمت الإزالة من قائمة المفضلة', 'info');
    } else {
        state.wishlist.push(productId);
        showToast('تمت الإضافة إلى المفضلة ❤️', 'success');
    }
    localStorage.setItem('ghosn_matak_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadge();
    renderProducts();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge');
    const mobileWishlistBadge = document.getElementById('mobile-wishlist-badge');
    if (badge) badge.textContent = state.wishlist.length;
    if (mobileWishlistBadge) mobileWishlistBadge.textContent = state.wishlist.length;
}

// --- Modals & Drawers ---
function initModals() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
    const closeDrawerBtn = document.getElementById('close-mobile-drawer');

    function openMobileDrawer() {
        mobileDrawer.classList.remove('translate-x-full');
        mobileDrawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
    }

    function closeMobileDrawer() {
        mobileDrawer.classList.add('translate-x-full');
        mobileDrawerOverlay.classList.add('opacity-0', 'pointer-events-none');
    }

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

    window.closeMobileDrawer = closeMobileDrawer;

    // Quick View Modal
    const quickViewModal = document.getElementById('quick-view-modal');
    const closeQuickViewBtn = document.getElementById('close-quick-view');
    const quickViewOverlay = document.getElementById('quick-view-overlay');

    function closeQuickView() {
        quickViewModal.classList.remove('active');
    }

    if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
    if (quickViewOverlay) quickViewOverlay.addEventListener('click', closeQuickView);

    const closeSuccessBtn = document.getElementById('close-success-modal-btn');
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            document.getElementById('order-success-modal').classList.remove('active');
        });
    }
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');

    content.innerHTML = `
        <div class="space-y-2">
            <div class="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xs">
                <img src="${product.image}" alt="${product.name}" class="w-full h-56 sm:h-64 object-cover">
            </div>
            <div class="flex items-center gap-1.5 text-[11px] text-brand-600 dark:text-brand-400 font-bold justify-center">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> متجر غصن المتك - ضمان جودة عالي
            </div>
        </div>

        <div class="space-y-3 text-right">
            <div>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 font-bold">
                    ${product.badge || 'منتج زراعي أصلي'}
                </span>
                <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white mt-1">${product.name}</h3>
                <p class="text-[11px] text-gray-400 font-mono italic">${product.botanicalName}</p>
            </div>

            <div class="flex items-baseline gap-1.5 font-mono">
                <span class="text-xl font-black text-brand-600 dark:text-brand-400">${product.price.toFixed(2)} ر.ع</span>
                ${product.originalPrice ? `<span class="text-xs line-through text-gray-400">${product.originalPrice.toFixed(2)} ر.ع</span>` : ''}
            </div>

            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                ${product.description}
            </p>

            <div class="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl border border-gray-100 dark:border-gray-700/60 space-y-1.5 text-[11px]">
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">طريقة الاستخدام / الجدولة:</span>
                    <strong class="text-gray-800 dark:text-white">${product.water}</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">المواصفات والحجم:</span>
                    <strong class="text-gray-800 dark:text-white">${product.potSize}</strong>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500">الأمان والتصنيف:</span>
                    <strong class="${product.petFriendly ? 'text-emerald-600' : 'text-amber-600'}">
                        ${product.petFriendly ? '🌿 منتج آمن / عضوي' : '⚠️ يراعى اتباع تعليمات الاستخدام'}
                    </strong>
                </div>
            </div>

            <div class="flex gap-2 pt-1">
                <button class="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5 modal-add-to-cart" data-id="${product.id}">
                    <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                    <span>أضف للسلة</span>
                </button>
                <button class="wishlist-btn p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300" data-id="${product.id}">
                    <i data-lucide="heart" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    initLucideIcons();

    content.querySelector('.modal-add-to-cart').addEventListener('click', () => {
        addToCart(product.id, 1);
        modal.classList.remove('active');
    });
}

// --- Plant Diagnostic Wizard ---
function initCareWizard() {
    const wizardModal = document.getElementById('care-wizard-modal');
    const openBtn = document.getElementById('open-care-wizard-btn');
    const closeBtn = document.getElementById('close-care-wizard');
    const overlay = document.getElementById('care-wizard-overlay');

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            wizardModal.classList.add('active');
        });
    }

    function closeWizard() {
        wizardModal.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeWizard);
    if (overlay) overlay.addEventListener('click', closeWizard);

    document.querySelectorAll('.wizard-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            state.category = cat;
            
            const stepsContainer = document.getElementById('wizard-steps-container');
            const resultContainer = document.getElementById('wizard-result-container');
            const recCards = document.getElementById('wizard-recommended-cards');

            const matches = products.filter(p => p.category === cat).slice(0, 2);

            recCards.innerHTML = matches.map(p => `
                <div class="bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                    <img src="${p.image}" class="w-full h-20 object-cover rounded-lg mb-1.5">
                    <h5 class="text-[11px] font-bold truncate">${p.name}</h5>
                    <span class="text-[11px] font-black text-brand-600 font-mono">${p.price.toFixed(2)} ر.ع</span>
                </div>
            `).join('');

            stepsContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');

            const applyBtn = document.getElementById('wizard-apply-filter-btn');
            applyBtn.onclick = () => {
                closeWizard();
                const targetBtn = document.querySelector(`.cat-nav-btn[data-category="${cat}"]`);
                if (targetBtn) targetBtn.click();
                document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
            };
        });
    });
}

// --- WhatsApp Checkout Modal ---
const STORE_WHATSAPP_NUMBER = '96891660990'; // رقم واتساب متجر غصن المتك

function openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const summaryContainer = document.getElementById('checkout-order-summary');
    const grandTotalElem = document.getElementById('checkout-grand-total');

    // Calculate totals
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const isFreeCode = state.appliedCoupon === 'FREE';
    let shippingFee = subtotal >= 25.00 || isFreeCode ? 0 : (subtotal > 0 ? 2.50 : 0);
    let discount = subtotal * state.discountPercent;
    let grandTotal = Math.max(0, subtotal - discount + shippingFee);

    // Render order summary inside checkout modal
    if (summaryContainer) {
        summaryContainer.innerHTML = state.cart.map(item => `
            <div class="flex items-center justify-between py-1 border-b border-gray-100 dark:border-gray-700/40 last:border-0">
                <div class="flex items-center gap-2">
                    <img src="${item.image}" class="w-8 h-8 rounded-lg object-cover">
                    <div class="text-right">
                        <span class="font-semibold text-gray-800 dark:text-gray-100 text-[11px] block">${item.name}</span>
                        <span class="text-gray-400 text-[10px] font-mono">× ${item.quantity}</span>
                    </div>
                </div>
                <span class="font-bold font-mono text-[11px] text-brand-700 dark:text-brand-400">${(item.price * item.quantity).toFixed(2)} ر.ع</span>
            </div>
        `).join('');
    }

    if (grandTotalElem) grandTotalElem.textContent = `${grandTotal.toFixed(2)} ر.ع`;

    modal.classList.add('active');
    initLucideIcons();

    // Delivery type radio toggle visual
    document.querySelectorAll('.delivery-radio').forEach(radio => {
        radio.addEventListener('change', () => {
            document.querySelectorAll('.delivery-card').forEach(card => {
                card.style.borderColor = '#e5e7eb';
                card.style.backgroundColor = '';
            });
            const selectedCard = radio.nextElementSibling;
            if (selectedCard) {
                selectedCard.style.borderColor = '#15803d';
                selectedCard.style.backgroundColor = 'rgba(21,128,61,0.07)';
            }
        });
    });

    // Close button
    const closeBtn = document.getElementById('close-checkout-modal');
    const overlay = document.getElementById('checkout-modal-overlay');
    const closeModal = () => modal.classList.remove('active');
    if (closeBtn) closeBtn.onclick = closeModal;
    if (overlay) overlay.onclick = closeModal;

    // Handle form submit -> Send WhatsApp invoice
    const form = document.getElementById('checkout-customer-form');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const customerName   = document.getElementById('customer-name').value.trim();
            const customerPhone  = document.getElementById('customer-phone').value.trim();
            const governorate    = document.getElementById('customer-governorate').value;
            const address        = document.getElementById('customer-address').value.trim();
            const notes          = document.getElementById('customer-notes').value.trim();
            const deliveryType   = document.querySelector('input[name="delivery-type"]:checked')?.value || 'توصيل للبيت 🏠';

            sendWhatsAppInvoice({
                customerName,
                customerPhone,
                governorate,
                address,
                deliveryType,
                notes,
                cart: state.cart,
                subtotal,
                discount,
                shippingFee,
                grandTotal,
                couponCode: state.appliedCoupon
            });
        };
    }
}

function sendWhatsAppInvoice(data) {
    const {
        customerName, customerPhone, governorate, address,
        deliveryType, notes, cart, subtotal, discount,
        shippingFee, grandTotal, couponCode
    } = data;

    // Generate order number
    const orderNum = '#GM-' + Math.floor(1000 + Math.random() * 9000);
    const orderDate = new Date().toLocaleString('ar-OM', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
    });

    // Build the invoice message lines
    const divider = '━━━━━━━━━━━━━━━━━━━━━━';
    const dividerLight = '─────────────────────';

    let itemsText = cart.map((item, i) => 
        `${i + 1}. ${item.name}\n    الكمية: ×${item.quantity} | السعر: ${(item.price * item.quantity).toFixed(2)} ر.ع`
    ).join('\n');

    let discountLine = discount > 0 
        ? `\n🎟️ خصم الكوبون (${couponCode}): -${discount.toFixed(2)} ر.ع` 
        : '';

    let shippingLine = shippingFee === 0 
        ? `🚀 الشحن: مجاني` 
        : `📦 رسوم الشحن: ${shippingFee.toFixed(2)} ر.ع`;

    const message = 
`🌿 *فاتورة طلب | متجر غصن المتك* 🌿
${divider}

📋 *رقم الطلب:* ${orderNum}
📅 *التاريخ:* ${orderDate}

${divider}
👤 *بيانات المشتري*
${dividerLight}
*الاسم:* ${customerName}
*الهاتف (واتساب):* +968 ${customerPhone}
*المحافظة:* ${governorate}
*العنوان:* ${address}
*طريقة الاستلام:* ${deliveryType}
${notes ? `*ملاحظات:* ${notes}` : ''}

${divider}
🛒 *تفاصيل المنتجات المطلوبة*
${dividerLight}
${itemsText}

${divider}
💰 *ملخص الفاتورة*
${dividerLight}
🧾 المجموع الفرعي: ${subtotal.toFixed(2)} ر.ع${discountLine}
${shippingLine}
${divider}
✅ *الإجمالي الكلي: ${grandTotal.toFixed(2)} ر.ع*
${divider}

🙏 شكراً لتسوقكم من متجر غصن المتك!
سيتم التواصل معكم قريباً لتأكيد الطلب والتوصيل 🇴🇲`;

    // Encode for WhatsApp URL
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedMsg}`;

    // Save order to local storage log
    orders.unshift({
        id: orderNum,
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        itemsCount: cart.reduce((s, i) => s + i.quantity, 0),
        total: grandTotal,
        status: 'قيد المراجعة'
    });
    localStorage.setItem('ghosn_matak_orders', JSON.stringify(orders));

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Close checkout modal, clear cart, open success modal
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) checkoutModal.classList.remove('active');

    // Set order number in success modal and open it
    document.getElementById('order-number').textContent = orderNum;
    openOrderSuccessModal(orderNum, grandTotal, true);
}

// --- Order Placement Success & Confetti ---
function openOrderSuccessModal(orderNum = null, grandTotal = null, skipSave = false) {
    const modal = document.getElementById('order-success-modal');
    // If called from WhatsApp flow, order number and saving already handled
    if (!skipSave) {
        const randomOrderNumber = '#GM-' + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('order-number').textContent = randomOrderNumber;

        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isFreeCode = state.appliedCoupon === 'FREE';
        let shippingFee = subtotal >= 25.00 || isFreeCode ? 0 : 2.50;
        let discount = subtotal * state.discountPercent;
        let grandTotal = Math.max(0, subtotal - discount + shippingFee);

        orders.unshift({
            id: randomOrderNumber,
            date: new Date().toISOString().replace('T', ' ').substring(0, 16),
            itemsCount: state.cart.reduce((s, i) => s + i.quantity, 0),
            total: grandTotal,
            status: 'قيد التجهيز'
        });
        localStorage.setItem('ghosn_matak_orders', JSON.stringify(orders));
    }

    modal.classList.add('active');

    if (window.confetti) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    state.cart = [];
    saveCart();
    updateCartUI();
}

// --- Custom Toast Notification ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `px-3.5 py-2.5 rounded-2xl shadow-xl border text-xs font-bold flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto ${
        type === 'success' 
            ? 'bg-brand-900 text-white border-brand-700' 
            : 'bg-gray-900 text-white border-gray-700'
    }`;

    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-4 h-4 text-emerald-400"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    initLucideIcons();

    setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}
