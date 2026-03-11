# Varsha's Sketching Portfolio - High-End Design Specification

## 1. Reference Mood & Aesthetic
**Concept:** Editorial Fashion Portfolio meets High-End Art Gallery.
**Vibe:** Elegant, artistic, premium, deliberate, and gallery-focused.
**Key Characteristics:**
- Extreme use of negative space (whitespace/cream-space).
- Deliberate asymmetry in grid layouts.
- Interactions and animations feel smooth, heavy, and deliberate (custom bezier easing).
- Focus is 100% on the art. The UI is invisible but structurally striking.
- Clean, premium feel—absolutely no basic template structures.

---

## 2. Color Palette, Typography & Spacing System

### Color Palette (Monochrome & Cream)
- **Primary Background:** `#F9F8F6` (Alabaster/Warm Cream)
- **Secondary Background/Dark Mode:** `#121212` (Gallery Black)
- **Primary Text:** `#1A1A1A` (Deep Charcoal)
- **Secondary Text:** `#8C8C8C` (Gallery Gray)
- **Accent Color:** `#D4AF37` (Muted Champagne Gold)

### Typography
- **Display (H1-H3):** `Playfair Display` or `Cinzel`
- **Body & UI:** `Inter` or `Neue Haas Grotesk`
- **Accents (Captions, Dimensions):** `Space Mono`

### Spacing System
- **Base Unit:** 8px
- **Section Padding:** 160px (Desktop), 80px (Mobile)
- **Grid:** 12-column fluid grid, 32px gutters

---

## 3. Component Library

- **Nav:** Minimalist fixed top. Left: typographic logo "V . R". Right: hamburger → full-screen dark overlay, or simple text links.
- **Artwork Cards:** Aspect ratios mimic physical canvases (3:4, 4:5, 1:1). Hover: 1.05x zoom within bounds, grayscale→color reveal. Metadata appears on hover.
- **Buttons:** Sharp corners, transparent bg, 1px charcoal border. Hover: fills charcoal, text inverts to cream.

---

## 4. Scroll Animation Behaviors

- **Parallax Depths:** Background text at 0.3x, artwork at 1.0x, UI/captions at 1.2x scroll speed.
- **Card Stacking:** `position: sticky` — cards slide over each other as you scroll, like stacking physical canvases.
- **Horizontal Scroll:** Section pins vertically, vertical scroll translates to horizontal `translateX`.
- **Image Reveals:** clip-path mask slides up on viewport entry.

---

## 5. Page Wireframes

### HOME
1. **Hero (100vh):** Oversized artwork placeholder, massive overlapping serif "VARSHA" behind it, parallax on scroll.
2. **Philosophy:** Two-column offset — large serif quote left, body text right.
3. **Featured Works (Stacked Cards):** 100vh pinned, 3-4 artwork cards stack on scroll.
4. **Exhibition (Horizontal Gallery):** Dark bg (#121212), pinned horizontal track, varying aspect ratios.
5. **Footer:** Massive serif "Let's Talk" / "Commission a Piece", IG links.

---

## 6. Responsive Breakpoints

- **Desktop (>1024px):** Full experience — horizontal scroll, parallax, stacking, custom cursor.
- **Tablet (768-1024px):** Horizontal scroll stays, typography scales down, margins reduce.
- **Mobile (<768px):** Horizontal scroll → vertical feed. Parallax disabled. Stacking → fade-up on intersection. Hamburger nav only.
