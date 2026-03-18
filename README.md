# Kento 🏯

**Kento** (from Japanese, implying solid foundation, architecture, or well-being/health depending on the kanjis used) is a personal grounding tool built for moments of anxiety or stress. 

## The Meaning of "Kento"
The name "Kento" reflects a "solid foundation". Just like a building needs a strong base to weather storms, our minds need anchors to remain calm during turbulent times. The application serves as this digital foundation.

## ✨ Premium Features
- **Anchors & Reminders:** Store personal phrases of self-improvement, mindfulness, and calmness.
- **Visual Peace:** Upload photos directly from your device's camera roll or paste image URLs that bring you peace.
- **Advanced Glassmorphism UI:** A meticulously crafted, hardware-accelerated frosted-glass interface that adapts dynamically to brand gradients. Optimized perfectly for mobile devices to prevent browser-specific rendering artifacts (like Chrome's *edge bleeding*).
- **Interactive Micro-Animations:** Tactile, premium interactive elements such as responsive SVG icons, soft-glow buttons, and smooth transition layers.
- **Bilingual Interface (i18n):** Seamlessly toggle between English and Spanish.
- **Privacy-First Architecture:** Utmost privacy is guaranteed. All data and compressed images are stored strictly in your browser's local storage (`localStorage`). Absolutely no data is transmitted to external servers.
- **Backup & Restore System:** Safely export all your personal anchors and images to a local JSON file, allowing you to restore them on different devices or browsers at any time.

## 🚀 Usage & Deployment
Kento has been modernized from a simple HTML script to a professional, scalable web application using **Vite**.

### Running Locally (Development)
You can test the application instantly via Vite:
```bash
npm install
npm run dev
```

### Building for Production
To bundle the application, run:
```bash
npm run build
```

### Docker deployment 🐳
Kento is fully containerized using an ultra-lightweight **Nginx Alpine multi-stage Alpine build**. This makes hosting it on your personal server trivial:
```bash
docker-compose up --build -d
```
The app will be available instantly at `http://localhost:8080`.

## 🛠 Technical Details
- **Frontend Stack:** HTML5, modern CSS3 (Variables, Clip-paths, Hardware GPU Acceleration), and Vanilla JavaScript (ES Modules).
- **Image Compression Engine:** Uses the HTML5 `<canvas>` API to heavily compress and resize user-uploaded images on-the-fly. This circumvents the 5-10MB `localStorage` limitations inherently found in web browsers, letting you store vast amounts of visual anchors without performance degradation.
- **Responsive & PWA-ready layout:** Mobile-first approach built with flexible `flex` spacing.
