# Images & Assets Plan

**Important finding:** there are currently **zero image files** anywhere in `Codex_resume` (no headshot, no screenshots, no logos). So the site needs an image strategy that looks complete *now* and lets you drop in real photos later without touching code.

---

## Strategy (recommended)

Use a `/assets/img/` folder with **stable filenames**. The HTML references those names; you replace the file, the site updates. For v1 I generate lightweight **SVG placeholders** so nothing looks broken, then you swap in real assets.

| Asset | Filename | v1 (now) | Final (you supply) |
|-------|----------|----------|--------------------|
| Headshot | `headshot.jpg` | Monogram circle ("SS") SVG placeholder | Your real photo, square, ≥600×600 |
| Favicon | `favicon.svg` | Generated "S" monogram on accent bg | Keep or replace |
| OG / social preview | `og-image.png` (1200×630) | Generated name+tagline card | Keep or replace |
| Project covers ×6 | `project-<slug>.svg` | Generated cover tiles (theme color + title + tech marks) | Real screenshots (`.png/.webp`, 16:9) |
| Résumé PDF | `resume.pdf` | Button links to it; you drop the file in `/assets/` | Your chosen résumé |

Project slugs (6): `valorant-cli`, `ai-sports-commentary`, `atlas`, `amazon-automotive-mlops`, `voice-scheduling-agent`, `msd-continuous-manufacturing`.

---

## Generated SVG covers (default for v1)

Each project gets a clean, on-brand cover tile rendered as inline/standalone SVG:
- Project accent gradient background (varies per card for visual variety).
- Project title + short kicker.
- A couple of monospace tech labels.

These are crisp at any size, ~1–2 KB each, need no external hosting, and keep the grid looking intentional until real screenshots exist.

**Upgrade path:** when you have real screenshots, drop `project-<slug>.png` into `/assets/img/` and I (or you) flip the `src` — or I can auto-prefer a `.png` when present.

---

## Real screenshots — what to capture later (optional, best impact)

- **Valorant_CLI:** terminal REPL session showing a coaching answer / post-game analysis.
- **AI Sports Commentary:** the FastAPI dashboard with live commentary + win-probability.
- **Atlas:** the React board/workflow UI.
- **Amazon Automotive MLOps:** Langfuse trace view or the RAG answer UI.
- **Voice Scheduling Agent:** the live Vercel app with the voice orb + transcript.
- **MSD Continuous Manufacturing:** a forecast/RTD plot or a process-analytics chart.

---

## Icons

- Social + UI icons (GitHub, LinkedIn, email, external-link, hamburger) as **inline SVG** — no icon-font dependency, fully themeable via `currentColor`. Sourced from a permissive set (e.g., Lucide/Simple Icons) or hand-written.

---

## What I need from you (optional — site works without these)

1. A headshot (square). 2. Any real project screenshots. 3. The Voice Scheduling Agent live URL. 4. Which résumé PDF to serve. 5. IEEE Xplore/DOI link for the publication, if you have it.
