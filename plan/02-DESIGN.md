# Design System & Layout

Clean, technical, recruiter-friendly. Fast to scan, mobile-first, accessible.

---

## Layout (one page, sticky nav, smooth scroll)

```
┌──────────────────────────────────────────────┐
│ NAV (sticky)  Susilkessav   About Skills       │
│               Experience Projects Contact ⇩CV  │
├──────────────────────────────────────────────┤
│ HERO                                           │
│   [headshot]   Name                            │
│                Tagline                          │
│                location · MS @ Northeastern     │
│                [View Projects][Résumé][Email]   │
│                GitHub · LinkedIn                 │
├──────────────────────────────────────────────┤
│ ABOUT          short bio paragraph             │
├──────────────────────────────────────────────┤
│ SKILLS         grouped chip clusters           │
├──────────────────────────────────────────────┤
│ EXPERIENCE     vertical timeline, 3 roles      │
├──────────────────────────────────────────────┤
│ PROJECTS       responsive card grid (6–7)      │
├──────────────────────────────────────────────┤
│ PUBLICATIONS   single entry                     │
├──────────────────────────────────────────────┤
│ EDUCATION      2 entries                         │
├──────────────────────────────────────────────┤
│ FOOTER         contact CTAs + socials          │
└──────────────────────────────────────────────┘
```

---

## Visual style

- **Theme:** ✅ **Theme 1 — Midnight blue**, shipped with a dark/light toggle (`data-theme` on `<html>`, saved to `localStorage`, defaults to system preference).
  - **Dark:** bg `#0d1117`, surface `#161b22`, border `#2b3340`, text `#e6edf3`, muted `#8b949e`, accent `#58a6ff`.
  - **Light:** bg `#ffffff`, surface `#f6f8fa`, border `#d8dee4`, text `#1f2328`, muted `#57606a`, accent `#0969da`.

| # | Theme | Mode | Background | Surface | Accent | Text | Vibe |
|---|-------|------|-----------|---------|--------|------|------|
| 1 | Midnight blue | dark | `#0d1117` | `#161b22` | `#58a6ff` | `#e6edf3` | Classic dev, GitHub-dark, technical |
| 2 | Slate teal | dark | `#0b1120` | `#111a2e` | `#2dd4bf` | `#e8eef5` | Modern AI/ML, cool + fresh |
| 3 | Aurora violet | dark | `#0e0a1a` | `#181228` | `#a78bfa` | `#ece8f5` | Bold, creative, GenAI energy |
| 4 | Clean light | light | `#ffffff` | `#f5f7fa` | `#2563eb` | `#0f172a` | Minimal, bright, recruiter-safe |
- **Typography:** system UI stack + `Inter` (via Google Fonts or self-hosted) for headings; monospace (`JetBrains Mono`/`ui-monospace`) for tech tags and metrics. Big, readable sizes; generous line-height.
- **Spacing:** 8px scale; section vertical padding ~`clamp(48px, 8vw, 96px)`; max content width `1080px`, centered.
- **Components:** rounded cards (12px radius), subtle border + hover lift, pill-shaped skill/tech chips, underline-on-hover links.
- **Motion:** subtle `IntersectionObserver` fade/slide-in on scroll; respects `prefers-reduced-motion`. No heavy libraries.

---

## Section specifics

- **Nav:** sticky top bar, collapses to a hamburger under ~720px. Active-section highlight via scroll-spy. "Résumé" download button at the right.
- **Hero:** two-column on desktop (text + circular headshot), single column stacked on mobile. Headshot has graceful placeholder if none supplied.
- **Skills:** each group is a labeled row of chips; wraps naturally. Monospace chips read as "technical."
- **Experience:** left-rail timeline (dot + line) on desktop; flattens to stacked cards on mobile. Each entry: role · company · location · dates · bullets.
- **Projects:** CSS grid, `repeat(auto-fill, minmax(320px, 1fr))` → 3-up desktop / 2-up tablet / 1-up mobile. Each card: cover image, title, description, tech chips, GitHub icon-link (+ live demo link where it exists). Whole card is keyboard-focusable.
- **Publications / Education:** simple list rows, no cards needed.
- **Footer:** centered CTAs + social icons + copyright.

---

## Responsiveness & accessibility

- Mobile-first CSS; breakpoints at ~480 / 720 / 1024px.
- Fluid type with `clamp()`; no fixed pixel widths on containers.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`, logical heading order.
- All images have `alt`; icons have `aria-label`; visible focus rings; color contrast ≥ WCAG AA.
- Works with JS disabled (content is plain HTML; JS only enhances nav + animations).

---

## Tech-tag chips

Tech stacks render as small monospace pills. Optional: tiny inline SVG brand/letter marks per tech (kept lightweight) — decide on review; default is text chips only for simplicity.
