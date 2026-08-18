# 💍 Taklifnoma — Toʻy Taklifnomasi

Zamonaviy, koʻp tilli (UZ Lotin/Kirill, RU, EN), animatsiyali va toʻliq moslashuvchan (responsive) toʻy taklifnomasi. Har qanday qurilma (telefon, planshet, kompyuter) va audio tizimida ishlaydi.

## 📁 Tuzilma

```
taklifnoma/
├── index.html
├── style-gold.css     ← standart dizayn (Oltin)
├── style-blue.css     ← Koʻk-Oq dizayn
├── style-royal.css    ← Qirollik Oltin dizayn
├── script.js
├── netlify.toml
├── vercel.json
├── data/
│   └── data.json        ← barcha matn/sana/manzil shu yerdan boshqariladi
└── assets/
    ├── groom.png / bride.png / restaurant.png
    ├── couple.jpg        (ixtiyoriy — fon watermark)
    ├── video.mp4, video2.mp4, video3.mp4 ...  (ixtiyoriy — bir nechtasi boʻlishi mumkin)
    ├── gallery1.jpg, gallery2.jpg ...          (ixtiyoriy — qoʻshimcha rasmlar galereyasi)
    ├── audio.mp3          (ixtiyoriy — fon musiqasi)
    └── default_*.png      (rasm topilmasa ishlatiladigan zaxira)
```

## 🎨 Dizaynlar

Sahifa yuqori oʻng burchagida ikkita tugma bor: **til** va **dizayn**. Uchta tayyor dizayn mavjud, hammasi bir xil `data.json`dan foydalanadi — faqat koʻrinishi va animatsiyasi farq qiladi:

| Dizayn | Ranglar | Uslub |
|---|---|---|
| 🟡 **Oltin** (standart) | Krem + oltin | Klassik, yumshoq shimmer sarlavha, doira freymli suratlar |
| 🔵 **Koʻk-Oq** | Oq + moviy | Zamonaviy, "suv tomchisi" shaklidagi suratlar, pufakcha animatsiyasi |
| ⚜️ **Qirollik Oltin** | Oq/qora + oltin | Art-deco uslub, olti burchakli suratlar, yogʻilayotgan oltin zarralar |

Tanlangan dizayn brauzerda saqlanadi — mehmon qayta kirganda oʻsha dizaynda ochiladi. Standart holat har doim **Oltin**.

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
| Video (ixtiyoriy, bir nechta) | `video`, `wedding` yoki `toy` | mp4, webm, mov |
| Galereya rasmlari (ixtiyoriy, bir nechta) | `gallery`, `rasm` yoki `photo` | png, jpg, jpeg, webp |
| Fon musiqasi (ixtiyoriy) | `audio`, `ovoz` yoki `music` | mp3, wav, ogg, m4a |

Fayl topilmasa, tegishli bo'lim avtomatik yashiriladi (video/galereya/musiqa) yoki `default_*.png` zaxira rasm ishlatiladi (kuyov/kelin/restoran).

**Bir nechta video yoki rasm qo'shish** — birinchisi suffikssiz, keyingilari 2 dan boshlab raqamlanadi:
```
assets/video.mp4    yoki   assets/wedding.mp4       (1-video)
assets/video2.mp4                                    (2-video)
assets/video3.mp4                                    (3-video)

assets/gallery1.jpg  yoki  assets/rasm1.jpg          (1-rasm)
assets/gallery2.jpg                                   (2-rasm)
assets/gallery3.jpg                                   (3-rasm)
```
Raqamlash ketma-ket bo'lishi kerak — masalan `gallery1.jpg` va `gallery3.jpg` bor-u `gallery2.jpg` yo'q bo'lsa, qidiruv 2-raqamda to'xtaydi va 3-rasm chiqmaydi.

**Video va fon musiqasi birga ishlaganda:** video ovoz bilan ijro etilsa, fon musiqasi avtomatik pauza bo'ladi; video to'xtatilganda yoki tugaganda, agar musiqa oldin ijro etilayotgan bo'lsa, o'zi davom etadi.

## 🏷 Istalgan nomdagi fayllarni ishlatish (ixtiyoriy)

Yuqoridagi nomlash qoidasi (`groom`, `gallery1`, `video2`...) shart emas — agar fayllaringizni haqiqiy ism bilan (`ali.jpeg`, `ruxsora2.png`) saqlamoqchi bo'lsangiz, `data/data.json` fayliga quyidagi **ixtiyoriy** `media` bo'limini qo'shing:

```json
{
  "wedding_date": "2026-09-25",
  ...
  "media": {
    "groom_image": "ali.jpeg",
    "bride_image": "ruxsora.png",
    "restaurant_image": "shirin_bobo.jpg",
    "couple_image": "ali_ruxsora_fon.jpg",
    "audio": "nikoh_kuyi.mp3",
    "videos": ["nikoh_video.mp4", "toy_clipi.mov"],
    "gallery_images": ["ali1.jpg", "ruxsora_toy.png", "oila_surat.webp"]
  }
}
```

**Muhim tartib:** tizim avval odatdagi nomlarni (`groom.png`, `gallery1.jpg`...) qidiradi — **shular topilmagandagina** shu `media` bo'limiga qaraydi. Ya'ni ikkalasini aralashtirib ishlatish shart emas: yo hammasini odatdagi nom bilan saqlang, yo hammasini `media` orqali ko'rsating.

`media` bo'limidagi har bir maydon **ixtiyoriy** — kerakli qismini qoldirib, qolganini o'chirib tashlashingiz mumkin.

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
- **3 xil tayyor dizayn** (Oltin / Koʻk-Oq / Qirollik Oltin) — dizayn tugmasi orqali almashtiriladi, tanlov saqlanadi
- **Bir nechta video va rasm galereyasi** — assets papkasiga qo'shilsa avtomatik chiqadi, bo'lmasa bo'lim butunlay yashiriladi
- **Video + fon musiqasi aqlli boshqaruvi** — video ovoz bilan ijro etilganda musiqa avtomatik pauza, video to'xtaganda davom etadi
- To'liq **responsive**: mobil, planshet va desktopda alohida moslashtirilgan koʻrinish (`clamp()` bilan moslashuvchan shrift o'lchamlari)
- **Notch/safe-area** qo'llab-quvvatlash (iPhone va boshqa qirrali ekranlar uchun)
- **`prefers-reduced-motion`** hurmat qilinadi — animatsiyani yoqtirmaydigan foydalanuvchilar uchun avtomatik o'chadi
- **Klaviatura orqali** boshqarish (Tab, Enter, Escape) va ekran o'quvchilar (screen reader) uchun yaxshilangan
- Ijtimoiy tarmoqларда ulashganda chiroyli preview chiqishi uchun **Open Graph** teglar
- Tanlangan til va dizayn brauzerda **saqlanadi** — qayta kirganda o'sha holatda ochiladi
- Rasm/audio/video tekshiruvlari **parallel** ishlaydi (sahifa tezroq yuklanadi)
- GitHub Pages / Netlify / Vercelga **bir zumda** joylashtirish uchun tayyor konfiguratsiya fayllari
