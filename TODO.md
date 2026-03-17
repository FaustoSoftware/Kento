# Kento - Roadmap & Features TODO

## Concept Analysis
**Kento** is currently a minimalist, privacy-first personal grounding tool. Its core value proposition is providing immediate, localized relief from stress or anxiety by pairing personalized affirmations with calming visuals. 

The app's current "soul" is centered around:
1. **Speed & Accessibility**: Immediate access with zero friction (no login required for core functionality).
2. **Privacy**: All data is stored locally, ensuring the user feels safe putting deeply personal thoughts/images in the app.
3. **Simplicity**: Tap to see a new anchor. No complex menus or gamification.

To enhance the app without losing its soul, new features should focus on unobtrusive personalization, optional data persistence (like syncing), and deepening the localized calming experience.

---

## 🚀 Feature Roadmap

### Phase 1: Enhanced Local Experience (Quick Wins)
- [ ] **Customizable Timers & Breathing:** Add an optional breathing circle animation (e.g., inhale 4s, hold 4s, exhale 4s) overlaid on the images to physically aid in calming down.
- [ ] **Ambient Audio Support:** Let the user select a looping ambient sound (e.g., rain, fire, waves, brown noise) that plays softly when the app is active.
- [ ] **Categorized Anchors:** Allow users to tag messages/images (e.g., "Anxiety", "Motivation", "Grief") so they can filter the randomizer based on their current specific emotional need.
- [ ] **Font & Layout Customization:** Let users choose the font style (e.g., serif for elegance, sans-serif for modernism) and text placement (center, bottom).

### Phase 2: Data Portability & Persistence
- [ ] **Export/Import JSON (Local Backup):** Create a simple mechanism to download the `localStorage` data as a `.json` file and re-import it, allowing users to move their anchors to a new device without needing a server.
- [ ] **Progressive Web App (PWA):** Add a `manifest.json` and a Service Worker so the user can "Install to Homescreen" on iOS/Android, making it feel like a native app and ensuring 100% offline capability.
- [ ] **IndexedDB Migration:** Move from `localStorage` (which has a ~5MB limit and is synchronous) to `IndexedDB`. This will allow storing dozens/hundreds of high-quality local images without hitting browser storage caps.

### Phase 3: Optional Cloud Features (The Backend Sync)
*Note: These features must be strictly opt-in to preserve the privacy-first nature of Kento.*
- [ ] **Optional Cloud Sync Setup:** Allow users to create an account to sync their anchors across devices. (Could use a lightweight backend like Firebase or Supabase).
- [ ] **E2E Encryption:** If syncing to a backend, encrypt the text and images on the client side before sending them to the database, ensuring that even the server administrator cannot read the user's personal thoughts.
- [ ] **Daily Curated Anchors:** An optional feature where the app fetches one "globally curated" calming quote or beautiful image per day from a backend API, providing fresh content alongside the user's personal anchors.

### Phase 4: Web/Cookie Specifics
- [ ] **Cookie Consent / Analytics (Minimal):** If we add analytics to track basic usage (e.g., how many times the screen is tapped globally), implement a localized, non-intrusive cookie banner. (Ideally, use privacy-respecting analytics like Plausible or fully anonymous tracking).
- [ ] **Session State Cookies:** Use cookies to remember the last category viewed or the user's preferred theme (dark/light) if `localStorage` is cleared.
