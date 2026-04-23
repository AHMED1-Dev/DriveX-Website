# 🚗 DriveX - Premium Car Rental Website Template
🔗 **Live Demo:** [View Website](https://ahmed1-dev.github.io/DriveX-Website/)
A professional, fully responsive car rental website template built with HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
DriveX/
│
├── index.html        → Main page (Home)
├── car.html          → Cars page (with filter)
├── book.html         → Booking form page
├── main.js           → All JavaScript logic
├── style.css         → All styles
├── cars.json         → Cars data (name, price, specs...)
│
└── image/            → All images folder
    ├── logo.jpg
    ├── car_6-removebg-preview.png
    ├── section.png
    ├── image.jpg
    └── [car images].webp
```

---

## 🎨 How to Change Colors

Open `style.css` and find this section at the top:

```css
:root {
  --text-dark: #000000;     /* Main text color */
  --text-light: #767268;    /* Secondary text color */
  --extra-light: #f3f4f6;   /* Background sections */
  --white: #ffffff;         /* White color */
  --accent: #c9a84c;        /* Gold accent color → Change this to your brand color */
}
```

> 💡 Change `--accent` to any color you want (example: `#e63946` for red)

---

## 🖼️ How to Change Images

### Logo
1. Replace `./image/logo.jpg` with your logo file
2. Keep the same file name **or** update all `src="./image/logo.jpg"` in HTML files

### Hero Image (background)
- Open `style.css`
- Find `.header__image` and change:
```css
background-image: url(./image/image.jpg);
```

### About Section Image
- Replace `./image/section.png` with your image
- Or change `src="./image/section.png"` in `index.html`

### Car Images
- Add your car images to the `image/` folder
- Update the `img` field in `cars.json` (explained below)

---

## 🚗 How to Add / Edit Cars

Open `cars.json` — each car looks like this:

```json
{
  "name": "Mercedes S-Class",
  "img": "./image/Mercedes S-Class.webp",
  "brand": "Mercedes",
  "rentalPrice": "$250 / day",
  "Seats": "5 Seats",
  "Bags": "4 Bags",
  "Transmission": "Automatic",
  "engine": "4.0L V8 Biturbo",
  "topSpeed": "250 km/h",
  "purchasePrice": "$150,000 - $200,000 USD"
}
```

### To add a new car:
1. Add the car image to the `image/` folder
2. Copy the block above and paste it at the end of the list
3. Update all the fields with your car's info
4. Make sure to add a comma `,` after the previous car's closing `}`

### To add a new brand filter button:
Open `car.html` and find:
```html
<div class="fillter_buttons">
  <button data-name="all" class="active">All Brands</button>
  ...
</div>
```
Add your new brand:
```html
<button data-name="YourBrand">YourBrand</button>
```
Then in `cars.json`, set `"brand": "YourBrand"` for the matching cars.

---

## 📞 How to Change Contact Info

### WhatsApp Number
Open `main.js` and find:
```js
window.open(`https://wa.me/201113650935?text=...`)
```
Replace `201113650935` with your number (country code + number, no + sign)

### Email Address
In all HTML files, find:
```html
<a href="mailto:abdelwareth369@gmail.com">
```
Replace with your email.

### Formspree (Booking & Newsletter Forms)
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. In `index.html` and `book.html`, find:
```html
action="https://formspree.io/f/maqadobo"
```
Replace `maqadobo` with your own form ID.

---

## ✏️ How to Change Text Content

All text is in the HTML files. Open the file and search for the text you want to change:

| What to change | File |
|---|---|
| Hero title & description | `index.html` → `<header>` section |
| About section text | `index.html` → `#about` section |
| Features text | `index.html` → `#features` section |
| Page title (browser tab) | All files → `<title>` tag |
| Footer copyright | All files → `.footer__bar` |

---

## 🌐 How to Change the Website Name (DriveX → Your Brand)

Search and replace `DriveX` in all HTML files with your brand name.

---

## 🚀 How to Deploy (Go Live for Free)

1. Upload all files to [GitHub](https://github.com)
2. Go to **Settings → Pages**
3. Select **main branch** → Save
4. Your website will be live at: `https://yourusername.github.io/your-repo-name`

---

## 📦 What's Included

- ✅ 3 Pages (Home, Cars, Booking)
- ✅ 50+ Cars with details & filter
- ✅ Responsive design (Mobile & Desktop)
- ✅ Smooth animations (ScrollReveal)
- ✅ Booking form with email integration
- ✅ WhatsApp integration
- ✅ Car details modal
- ✅ Newsletter subscription
- ✅ Page loader

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [RemixIcon](https://remixicon.com/)
- [ScrollReveal](https://scrollrevealjs.org/)
- [Formspree](https://formspree.io/)

---

## 📬 Support

If you need help customizing this template, feel free to reach out!

Built by **Ahmed Mohamed** — Frontend Developer