# Portfolio Website — Plan Overview

**Owner:** Susilkessav Seshadri Bhuvaneswari
**Goal:** A simple, fast, responsive single-page portfolio that showcases experience, projects, and skills — all content sourced *truthfully* from the `Codex_resume` pools.
**Status:** PLAN ONLY — nothing is built yet. Review these 5 files, then I'll execute.

---

## The 5 plan files

| File | What it covers |
|------|----------------|
| `00-OVERVIEW.md` (this) | Goals, scope, tech decision, file structure, open decisions |
| `01-CONTENT.md` | Every word/link/number on the site, copied accurately from the pools |
| `02-DESIGN.md` | Layout, sections, colors, typography, responsive behavior |
| `03-IMAGES-AND-ASSETS.md` | Image strategy (none exist today), favicon, OG image, resume PDF |
| `04-BUILD-AND-DEPLOY.md` | Build steps, final file tree, local preview, deployment |

---

## Recommended approach (my defaults — change any of these on review)

- **Stack:** Plain **HTML + CSS + a little vanilla JS**. No framework, no build step.
  - *Why:* You want "simple + responsive." A static site is the easiest to maintain, loads instantly, has zero dependencies to rot, and deploys free to GitHub Pages / Vercel / Netlify. A React/Next setup would add tooling overhead for a site that is essentially content.
- **One page**, smooth-scroll nav, with these sections in order:
  `Hero → About → Skills → Experience → Projects → Publications → Education → Contact/Footer`
- **Single source of truth for content:** `01-CONTENT.md`. The HTML is generated from it, so the site can never drift from your verified resume facts.
- **Truthfulness carries over from the resume rules:** no invented tools, metrics, titles, or dates. Every link, number, and label on the site already appears in `RESUME_RULES.md` / `RESUME_TOOL_STACK.md`.

---

## Scope

**In scope (v1):**
- Responsive one-page site, mobile-first, works down to ~320px.
- All real links: GitHub, LinkedIn, email, phone, 6–7 project repos, live demo where it exists.
- Light/dark friendly, accessible (semantic HTML, alt text, keyboard nav, good contrast).
- Resume PDF download button.
- SEO basics: title, meta description, Open Graph tags, favicon.

**Out of scope (v1, can add later):**
- Blog / CMS / contact form backend (a `mailto:` link is used instead).
- Analytics, animations beyond subtle fade-in, multi-page routing.

---

## Decisions — RESOLVED

1. **Stack:** ✅ Plain static HTML + CSS + vanilla JS. No build step.
2. **Theme:** ✅ Theme 1 — Midnight blue, with a working dark/light toggle (persisted, respects system preference).
3. **Projects shown:** ✅ **6 cards** — Valorant_CLI, AI Sports Commentary, Atlas, Amazon Automotive MLOps, Voice Scheduling Agent, MSD Continuous Manufacturing. **Telemetry pipeline dropped.**
4. **Images:** ✅ I generate relatable SVG covers + monogram headshot placeholder now; you can supply real photo/screenshots later.
5. **Emails shown:** ✅ Both — `seshadribhuvaneswa.s@northeastern.edu` and `susilkessavsb@gmail.com`.
6. **Résumé PDF:** ✅ You will add `resume.pdf` to `/assets/`; the download button links to it.
7. **Deployment:** ✅ GitHub Pages → `susilkessav.github.io`.

Goal restated by owner: **simple, super impressive, fully responsive.**
