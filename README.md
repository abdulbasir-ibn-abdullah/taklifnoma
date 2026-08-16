# 💍 Taklifnoma — Toʻy Taklifnomasi

Zamonaviy, koʻp tilli (UZ Lotin/Kirill, RU, EN), animatsiyali va toʻliq moslashuvchan (responsive) toʻy taklifnomasi. Har qanday qurilma (telefon, planshet, kompyuter) va audio tizimida ishlaydi.

## 📁 Tuzilma

```
taklifnoma/
├── index.html
├── style.css
├── script.js
├── netlify.toml
├── vercel.json
├── data/
│   └── data.json        ← barcha matn/sana/manzil shu yerdan boshqariladi
└── assets/
    ├── groom.png / bride.png / restaurant.png
    ├── couple.jpg        (ixtiyoriy — fon watermark)
    ├── video.mp4          (ixtiyoriy — topilsa avtomatik chiqadi)
    ├── audio.mp3          (ixtiyoriy — fon musiqasi)
    └── default_*.png      (rasm topilmasa ishlatiladigan zaxira)
```

## ✏️ Maʼlumotlarni oʻzgartirish

Hamma matn `data/data.json` faylida. Kod faylini ochmasdan shu yerni tahrirlash kifoya:

- `wedding_date`, `wedding_time` — sana va vaqt (`YYYY-MM-DD`, `HH:MM`)
- `guest_name` — mehmon ismi (bosh sahifada koʻrsatiladi)
- `restaurant_location.lat/lon` — restoran koordinatalari (Google Maps'dan olish mumkin)
- `translations.uz/uzk/ru/en` — har bir til uchun ism, oila, bio, restoran nomi va manzil

## 🖼 Rasm, video va audio qo'shish

`assets/` papkasiga quyidagi nomlar bilan fayl tashlang — sayt ularni **avtomatik topadi**, kodni oʻzgartirish shart emas:

| Maqsad | Qabul qilinadigan nomlar | Formatlar |
|---|---|---|
| Kuyov rasmi | `groom` yoki `kuyov` | png, jpg, jpeg, webp, svg |
| Kelin rasmi | `bride` yoki `kelin` | png, jpg, jpeg, webp, svg |
| Restoran rasmi | `restaurant` yoki `restoran` | png, jpg, jpeg, webp, svg |
| Fon watermark | `couple` yoki `juftlik` | png, jpg, jpeg, webp, svg |
| Video (ixtiyoriy) | `video`, `wedding` yoki `toy` | mp4, webm, mov |
| Fon musiqasi (ixtiyoriy) | `audio`, `ovoz` yoki `music` | mp3, wav, ogg, m4a |

Fayl topilmasa, tegishli bo'lim avtomatik yashiriladi (video/musiqa) yoki `default_*.png` zaxira rasm ishlatiladi (kuyov/kelin/restoran).

## 🚀 Joylashtirish (Deploy)

### GitHub Pages
1. Loyihani GitHub repozitoriyga yuklang (`git init`, `git add .`, `git commit`, `git push`).
2. Repo **Settings → Pages** bo'limida branch (`main`) va papka (`/root`) ni tanlang.
3. Bir necha daqiqadan so'ng `https://username.github.io/repo-nomi/` manzilida ochiladi.

### Netlify
1. [netlify.com](https://netlify.com) ga kiring → **Add new site → Import an existing project**.
2. GitHub repo'ni tanlang. Build buyrug'i shart emas — bu statik sayt.
3. Publish directory: `.` (allaqachon `netlify.toml`da sozlangan).
4. "Deploy" tugmasini bosing — tayyor.

### Vercel
1. [vercel.com](https://vercel.com) ga kiring → **Add New → Project**.
2. GitHub repo'ni tanlang, "Framework Preset" ni **Other** qilib qoldiring.
3. Deploy qiling — `vercel.json` allaqachon caching sozlamalarini o'z ichiga oladi.

Uchalasida ham qo'shimcha sozlash shart emas — sayt toza HTML/CSS/JS, hech qanday build jarayoni talab qilmaydi.

## ✅ Nima yaxshilandi

- **Video bo'limi endi ishlaydi** — avval HTML'da bor edi, lekin JS unga umuman ulanmagan edi
- To'liq **responsive**: mobil, planshet va desktopda alohida moslashtirilgan koʻrinish (`clamp()` bilan moslashuvchan shrift o'lchamlari)
- **Notch/safe-area** qo'llab-quvvatlash (iPhone va boshqa qirrali ekranlar uchun)
- Sarlavhaga **oltin rang animatsiyasi (shimmer)**, suzuvchi bezaklar, silliqroq o'tishlar
- **`prefers-reduced-motion`** hurmat qilinadi — animatsiyani yoqtirmaydigan foydalanuvchilar uchun avtomatik o'chadi
- **Klaviatura orqali** boshqarish (Tab, Enter, Escape) va ekran o'quvchilar (screen reader) uchun yaxshilangan
- Ijtimoiy tarmoqларда ulashganda chiroyli preview chiqishi uchun **Open Graph** teglar
- Tanlangan til brauzerda **saqlanadi** — qayta kirganda o'sha tilda ochiladi
- Rasm/audio/video tekshiruvlari **parallel** ishlaydi (sahifa tezroq yuklanadi)
- GitHub Pages / Netlify / Vercelга **bir zumda** joylashtirish uchun tayyor konfiguratsiya fayllari
