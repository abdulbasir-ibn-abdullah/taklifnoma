document.addEventListener("DOMContentLoaded", async () => {

    let currentLang = 'uz';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Standart zaxira JSON (Agar data.json o'qilmay qolsa yoki topilmasa ishlaydi)
    let jsonData = {
        "wedding_date": "2026-09-25",
        "wedding_time": "18:00",
        "guest_name": "Azizbek va oilangiz",
        "restaurant_location": { "lat": 41.3655, "lon": 69.2801 },
        "translations": {
            "uz": {
                "groom": "Sardor",
                "bride": "Madina",
                "groom_bio": "Sardor — IT muhandis, zamonaviy texnologiyalar va sport xushmandi.",
                "bride_bio": "Madina — Grafik dizayner va san'at oshig'i.",
                "groom_family": "Karimovlar oilasi",
                "bride_family": "Aliyevlar oilasi",
                "restaurant_name": "Shirin Bobo Tantanalar Saroyi",
                "venue_address": "Toshkent shahri, Yunusobod tumani, Amir Temur ko'chasi, 4-uy"
            },
            "uzk": {
                "groom": "Сардор",
                "bride": "Мадина",
                "groom_bio": "Сардор — IT муҳандис, замонавий технологиялар ва спорт хушманди.",
                "bride_bio": "Мадина — График дизайнер ва санъат ошиғи.",
                "groom_family": "Каримовлар оиласи",
                "bride_family": "Алиевлар оиласи",
                "restaurant_name": "Ширин Бобо Тантаналар Саройи",
                "venue_address": "Тошкент шаҳри, Юнусобод тумани, Амир Темур кўчаси, 4-уй"
            },
            "ru": {
                "groom": "Сардор",
                "bride": "Мадина",
                "groom_bio": "Сардор — IT-инженер, увлекается технологиями и спортом.",
                "bride_bio": "Мадина — Графический дизайнер и ценитель искусства.",
                "groom_family": "Семья Каримовых",
                "bride_family": "Семья Алиевых",
                "restaurant_name": "Ресторан «Shirin Bobo»",
                "venue_address": "г. Ташкент, Юнусабадский район, ул. Амира Темура, 4"
            },
            "en": {
                "groom": "Sardor",
                "bride": "Madina",
                "groom_bio": "Sardor — IT Engineer, passionate about technology and sports.",
                "bride_bio": "Madina — Graphic Designer and art lover.",
                "groom_family": "Karimov Family",
                "bride_family": "Aliyev Family",
                "restaurant_name": "Shirin Bobo Grand Hall",
                "venue_address": "Tashkent city, Yunusabad district, Amir Temur str., 4"
            }
        }
    };

    // Static UI tarjimalari
    const uiTranslations = {
        uz: {
            htmlLang: "uz",
            welcomeTitle: "Taklifnoma",
            welcomeSub: "Musiqa va animatsiya bilan koʻrish uchun bosing",
            welcomeBtn: "Ochish 💌",
            dear: "Hukmatli va qadrli",
            invitation: "Sizni taklif etamiz",
            weddingTitle: "Baxt Toʻyi",
            inviteText: "oilalari sizni farzandlarining nikoh toʻylariga bagʻishlangan tantanali marosimga lutfan taklif etadi.",
            groomRole: "Kuyov",
            brideRole: "Kelin",
            clickHint: "Batafsil ma'lumot uchun surat ustiga bosing",
            videoHeader: "Bizning videomiz",
            countdownTitle: "Toʻygacha qolgan vaqt:",
            lblDays: "Kun",
            lblHours: "Soat",
            lblMinutes: "Daqiqa",
            lblSeconds: "Soniya",
            venueHeader: "Tantanalar Saroyi",
            btnGoogle: "📍 Google Maps orqali koʻrish",
            btnYandex: "🚕 Yandex Maps orqali koʻrish",
            footerText: "Tashrifingizdan mamnun boʻlamiz!",
            startedMsg: "Toʻy marosimi boshlandi!",
            days: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
            months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
        },
        uzk: {
            htmlLang: "uz",
            welcomeTitle: "Таклифнома",
            welcomeSub: "Мусиқа ва анимация билан кўриш учун босинг",
            welcomeBtn: "Очиш 💌",
            dear: "Ҳурматли ва қадрли",
            invitation: "Сизни таклиф этамиз",
            weddingTitle: "Бахт Тўйи",
            inviteText: "оилалари сизни фарзандларининг никоҳ тўйларига бағишланган тантанали маросимга лутфан таклиф этади.",
            groomRole: "Куёв",
            brideRole: "Келин",
            clickHint: "Батафсил маълумот учун сурат устига босинг",
            videoHeader: "Бизнинг видеомиз",
            countdownTitle: "Тўйгача қолган вақт:",
            lblDays: "Кун",
            lblHours: "Соат",
            lblMinutes: "Дақиқа",
            lblSeconds: "Сония",
            venueHeader: "Тантаналар Саройи",
            btnGoogle: "📍 Google Maps орқали кўриш",
            btnYandex: "🚕 Yandex Maps орқали кўриш",
            footerText: "Ташрифингиздан мамнун бўламиз!",
            startedMsg: "Тўй маросими бошланди!",
            days: ["Якшанба", "Душанба", "Сешанба", "Чоршанба", "Пайшанба", "Жума", "Шанба"],
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        },
        ru: {
            htmlLang: "ru",
            welcomeTitle: "Приглашение",
            welcomeSub: "Нажмите для просмотра с музыкой",
            welcomeBtn: "Открыть 💌",
            dear: "Дорогой(-ая) и уважаемый(-ая)",
            invitation: "Приглашаем вас",
            weddingTitle: "Свадебное Торжество",
            inviteText: "сердечно приглашают вас на торжественное мероприятие, посвященное бракосочетанию их детей.",
            groomRole: "Жених",
            brideRole: "Невеста",
            clickHint: "Нажмите на фото для подробной информации",
            videoHeader: "Наше видео",
            countdownTitle: "До свадьбы осталось:",
            lblDays: "Дней",
            lblHours: "Часов",
            lblMinutes: "Минут",
            lblSeconds: "Секунд",
            venueHeader: "Ресторан Торжеств",
            btnGoogle: "📍 Открыть в Google Maps",
            btnYandex: "🚕 Открыть в Yandex Maps",
            footerText: "Будем рады видеть вас!",
            startedMsg: "Свадебное торжество началось!",
            days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            months: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        },
        en: {
            htmlLang: "en",
            welcomeTitle: "Invitation",
            welcomeSub: "Click to open with music and animations",
            welcomeBtn: "Open 💌",
            dear: "Dear & Honored",
            invitation: "You are invited to",
            weddingTitle: "Wedding Day",
            inviteText: "cordially invite you to celebrate the wedding ceremony of their children.",
            groomRole: "Groom",
            brideRole: "Bride",
            clickHint: "Click on photo for more details",
            videoHeader: "Our Video",
            countdownTitle: "Countdown to the wedding:",
            lblDays: "Days",
            lblHours: "Hours",
            lblMinutes: "Mins",
            lblSeconds: "Secs",
            venueHeader: "Wedding Venue",
            btnGoogle: "📍 Open in Google Maps",
            btnYandex: "🚕 Open in Yandex Maps",
            footerText: "We look forward to celebrating with you!",
            startedMsg: "The wedding ceremony has begun!",
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    };

    // Fayllarni izlash funksiyasi (rasm/audio/video uchun)
    async function resolveMedia(names, defaultFallback, exts = ['png', 'jpg', 'jpeg', 'webp', 'svg']) {
        for (const name of names) {
            for (const ext of exts) {
                const path = `assets/${name}.${ext}`;
                if (await checkFileExists(path, exts)) return path;
            }
        }
        return defaultFallback ? `assets/${defaultFallback}` : null;
    }

    function checkFileExists(url, exts) {
        // Video/audio fayllar uchun HEAD soʻrovi, rasm uchun Image() orqali tekshirish
        const isMedia = /\.(mp4|webm|mov|mp3|wav|ogg|m4a)$/i.test(url);
        if (isMedia) {
            return fetch(url, { method: 'HEAD' }).then(r => r.ok).catch(() => false);
        }
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }

    // Attempt to fetch data.json, overwrite fallback if success
    try {
        const res = await fetch('data/data.json', { cache: 'no-store' });
        if (res.ok) {
            const fetched = await res.json();
            jsonData = fetched;
        }
    } catch (e) {
        console.warn("data.json o'qib bo'lmadi (lokal fayl rejimi yoki tarmoq xatosi), zaxira ob'ekti ishlatilmoqda.");
    }

    // Media elementlarni aniqlash (parallel)
    const [groomImgUrl, brideImgUrl, restImgUrl, coupleBgUrl, videoUrl] = await Promise.all([
        resolveMedia(['groom', 'kuyov'], 'default_groom.png'),
        resolveMedia(['bride', 'kelin'], 'default_bride.png'),
        resolveMedia(['restaurant', 'restoran'], 'default_restaurant.png'),
        resolveMedia(['couple', 'juftlik'], null),
        resolveMedia(['video', 'wedding', 'toy'], null, ['mp4', 'webm', 'mov'])
    ]);

    document.getElementById('groom-img').src = groomImgUrl;
    document.getElementById('bride-img').src = brideImgUrl;
    document.getElementById('restaurant-img').src = restImgUrl;

    if (coupleBgUrl) {
        document.getElementById('couple-bg').style.backgroundImage = `url('${coupleBgUrl}')`;
    }

    // Video ulash (agar assets ichida topilsa)
    const videoContainer = document.getElementById('video-container');
    const videoEl = document.getElementById('wedding-video');
    if (videoUrl) {
        videoEl.src = videoUrl;
        if (coupleBgUrl) videoEl.setAttribute('poster', coupleBgUrl);
        videoContainer.classList.remove('hidden');
    }

    // Audio Sozlamasi
    const audioEl = document.getElementById('bg-audio');
    const musicBtn = document.getElementById('music-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const startBtn = document.getElementById('start-btn');

    async function initAudio() {
        const audioPath = await resolveMedia(['audio', 'ovoz', 'music'], null, ['mp3', 'wav', 'ogg', 'm4a']);
        if (audioPath) {
            audioEl.src = audioPath;
            audioEl.addEventListener('error', () => musicBtn.classList.add('hidden'));
            musicBtn.classList.remove('hidden');

            startBtn.addEventListener('click', () => {
                welcomeScreen.style.display = 'none';
                audioEl.play().then(() => {
                    musicBtn.classList.add('playing');
                }).catch(e => console.log("Audio avtomatik ishga tushmadi:", e));
            });

            musicBtn.addEventListener('click', () => {
                if (audioEl.paused) {
                    audioEl.play();
                    musicBtn.classList.add('playing');
                } else {
                    audioEl.pause();
                    musicBtn.classList.remove('playing');
                }
            });
        } else {
            startBtn.addEventListener('click', () => {
                welcomeScreen.style.display = 'none';
            });
        }
    }

    initAudio();

    // Tilni render qilish
    function renderLanguage(lang) {
        currentLang = lang;
        const ui = uiTranslations[lang];
        const t = jsonData.translations?.[lang] || jsonData.translations?.['uz'] || {};

        document.documentElement.lang = ui.htmlLang || 'uz';

        // Kirish oynasi
        document.getElementById('welcome-title').innerText = ui.welcomeTitle;
        document.getElementById('welcome-sub').innerText = ui.welcomeSub;
        startBtn.innerText = ui.welcomeBtn;

        // Static UI
        document.getElementById('ui-dear').innerText = ui.dear;
        document.getElementById('ui-invitation').innerText = ui.invitation;
        document.getElementById('ui-wedding-title').innerText = ui.weddingTitle;
        document.getElementById('ui-invite-text').innerText = ui.inviteText;
        document.getElementById('ui-role-groom').innerText = ui.groomRole;
        document.getElementById('ui-role-bride').innerText = ui.brideRole;
        document.getElementById('ui-click-hint').innerText = ui.clickHint;
        document.getElementById('ui-video-header').innerText = ui.videoHeader;
        document.getElementById('ui-countdown-title').innerText = ui.countdownTitle;
        document.getElementById('ui-lbl-days').innerText = ui.lblDays;
        document.getElementById('ui-lbl-hours').innerText = ui.lblHours;
        document.getElementById('ui-lbl-minutes').innerText = ui.lblMinutes;
        document.getElementById('ui-lbl-seconds').innerText = ui.lblSeconds;
        document.getElementById('ui-venue-header').innerText = ui.venueHeader;
        document.getElementById('ui-btn-google').innerText = ui.btnGoogle;
        document.getElementById('ui-btn-yandex').innerText = ui.btnYandex;
        document.getElementById('ui-footer-text').innerText = ui.footerText;

        // Mehmon kartochkasi
        if (jsonData.guest_name) {
            document.getElementById('guest-name').innerText = jsonData.guest_name;
            document.getElementById('guest-card').classList.remove('hidden');
        }

        // Ismlar va matnlar
        const groomName = t.groom || "Sardor";
        const brideName = t.bride || "Madina";
        document.getElementById('groom-family').innerText = t.groom_family || "Karimovlar oilasi";
        document.getElementById('bride-family').innerText = t.bride_family || "Aliyevlar oilasi";
        document.getElementById('groom-name').innerText = groomName;
        document.getElementById('bride-name').innerText = brideName;
        document.getElementById('groom-img').alt = groomName;
        document.getElementById('bride-img').alt = brideName;

        const restName = t.restaurant_name || "Shirin Bobo Tantanalar Saroyi";
        const restAddr = t.venue_address || "";
        document.getElementById('restaurant-name').innerText = `"${restName}"`;
        document.getElementById('venue-address').innerText = restAddr;
        document.getElementById('restaurant-img').alt = restName;

        // Xarita havolalari
        const lat = jsonData.restaurant_location?.lat || 41.3655;
        const lon = jsonData.restaurant_location?.lon || 69.2801;
        const googleBtn = document.getElementById('google-map-btn');
        const yandexBtn = document.getElementById('yandex-map-btn');

        googleBtn.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        yandexBtn.href = `https://yandex.com/maps/?pt=${lon},${lat}&z=16&l=map`;

        updateDateAndCountdown();

        try {
            localStorage.setItem('taklifnoma_lang', lang);
        } catch (e) { /* localStorage mavjud bo'lmasa e'tiborsiz qoldiriladi */ }
    }

    // Modal oyna
    const modal = document.getElementById('info-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalBio = document.getElementById('modal-bio');
    let lastFocusedEl = null;

    function openModal(name, role, bio, imgSrc) {
        lastFocusedEl = document.activeElement;
        modalName.innerText = name;
        modalRole.innerText = role;
        modalBio.innerText = bio || "";
        modalImg.src = imgSrc;
        modalImg.alt = name;
        modal.classList.remove('hidden');
        document.getElementById('modal-close').focus();
    }

    function closeModal() {
        modal.classList.add('hidden');
        if (lastFocusedEl) lastFocusedEl.focus();
    }

    function openGroomModal() {
        const t = jsonData.translations?.[currentLang] || {};
        const ui = uiTranslations[currentLang];
        openModal(t.groom || "Sardor", ui.groomRole, t.groom_bio, document.getElementById('groom-img').src);
    }

    function openBrideModal() {
        const t = jsonData.translations?.[currentLang] || {};
        const ui = uiTranslations[currentLang];
        openModal(t.bride || "Madina", ui.brideRole, t.bride_bio, document.getElementById('bride-img').src);
    }

    const groomCard = document.getElementById('groom-card');
    const brideCard = document.getElementById('bride-card');

    groomCard.addEventListener('click', openGroomModal);
    brideCard.addEventListener('click', openBrideModal);

    // Klaviatura orqali ochish (Enter/Space) — accessibility
    [groomCard, brideCard].forEach((card) => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    document.getElementById('lang-select').addEventListener('change', (e) => {
        renderLanguage(e.target.value);
    });

    // Sanani va taymerni hisoblash
    let countdownIntervalId = null;
    function updateDateAndCountdown() {
        const ui = uiTranslations[currentLang];
        const dateStr = jsonData.wedding_date || "2026-09-25";
        const timeStr = jsonData.wedding_time || "18:00";
        const [year, month, day] = dateStr.split('-').map(Number);
        const [hour, minute] = timeStr.split(':').map(Number);

        const weddingDate = new Date(year, month - 1, day, hour, minute, 0);

        document.getElementById('wedding-day-name').innerText = ui.days[weddingDate.getDay()];
        document.getElementById('wedding-day-num').innerText = String(day).padStart(2, '0');
        document.getElementById('wedding-month-year').innerText = `${ui.months[month - 1]}, ${year}`;
        document.getElementById('wedding-time-text').innerText = `${timeStr}`;

        if (countdownIntervalId) clearInterval(countdownIntervalId);

        function updateTimer() {
            const now = new Date().getTime();
            const diff = weddingDate.getTime() - now;

            if (diff > 0) {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('days').innerText = String(d).padStart(2, '0');
                document.getElementById('hours').innerText = String(h).padStart(2, '0');
                document.getElementById('minutes').innerText = String(m).padStart(2, '0');
                document.getElementById('seconds').innerText = String(s).padStart(2, '0');
            } else {
                clearInterval(countdownIntervalId);
                document.getElementById('countdown').innerHTML = `<p style='color: var(--primary-dark); font-weight:600;'>${ui.startedMsg}</p>`;
            }
        }

        updateTimer();
        countdownIntervalId = setInterval(updateTimer, 1000);
    }

    // Suzuvchi bezaklar (yurak/gullar) — harakatni kamaytirishni xohlamagan foydalanuvchilar uchun
    function initParticles() {
        if (prefersReducedMotion) return;
        const container = document.getElementById('particles');
        const symbols = ['🤍', '✦', '🌸'];
        const count = window.innerWidth < 640 ? 6 : 10;

        for (let i = 0; i < count; i++) {
            const el = document.createElement('span');
            el.className = 'particle';
            el.textContent = symbols[i % symbols.length];
            el.style.left = `${Math.random() * 100}%`;
            el.style.fontSize = `${0.8 + Math.random() * 0.9}rem`;
            const duration = 12 + Math.random() * 10;
            el.style.animationDuration = `${duration}s`;
            el.style.animationDelay = `${Math.random() * duration}s`;
            container.appendChild(el);
        }
    }

    // Dastlabki til: saqlangan tanlov bo'lsa o'shani, bo'lmasa 'uz'
    let initialLang = 'uz';
    try {
        const savedLang = localStorage.getItem('taklifnoma_lang');
        if (savedLang && uiTranslations[savedLang]) initialLang = savedLang;
    } catch (e) { /* localStorage mavjud bo'lmasa e'tiborsiz qoldiriladi */ }

    document.getElementById('lang-select').value = initialLang;
    renderLanguage(initialLang);
    initParticles();

    // Animatsiyalar (scroll paytida ko'rinishga chiqish)
    const animatedElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-zoom');
    if (prefersReducedMotion) {
        animatedElements.forEach(el => el.classList.add('visible'));
    } else if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Eski brauzerlar uchun zaxira: hammasini darhol ko'rsatish
        animatedElements.forEach(el => el.classList.add('visible'));
    }
});
