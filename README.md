# Kento 🏯

**Kento** (from Japanese, implying solid foundation, architecture, or well-being/health depending on the kanjis used) is a personal grounding tool built for moments of anxiety or stress. 

## The Meaning of "Kento"
The name "Kento" reflects a "solid foundation". Just like a building needs a strong base to weather storms, our minds need anchors to remain calm during turbulent times. The application serves as this digital foundation.

## Features
- **Anchors & Reminders:** Store personal phrases of self-improvement and calmness.
- **Visual Peace:** Upload photos from your camera roll or paste URLs of landscapes, family, or anything that brings you peace.
- **Bilingual Interface:** Support for English and Spanish, defaulting to Spanish.
- **Privacy-First:** All data (including uploaded images) is saved strictly in your browser's local storage. No data is sent to external servers.
- **Accessible & Calming UI:** Designed with a distraction-free, glassmorphic dark mode to reduce visual clutter and soothe the eyes.

## Usage
1. Open `index.html` in any modern web browser.
2. Tap the **gear icon** ⚙️ to access Settings.
3. Add your favorite phrases and upload comforting images.
4. Return to the main view. Tap the screen to randomly visualize one of your text anchors paired with a comforting background. 

## Technical Details
This application operates completely offline after loading the initial HTML file. 
- Built purely with HTML, CSS, and Vanilla JavaScript.
- It uses the local `FileReader` API and HTML5 `<canvas>` to compress images prior to saving them in `localStorage`. This circumvents the typical 5-10MB storage limit of web browsers without losing much visual fidelity, allowing you to store many personal photos right in the site's local storage.
