# Harshitha Inampudi — Personal Site

A static, plain, academic-style personal site for a CSE (Honors) undergrad at IIT Bombay applying to PhD
programs in Robotics and Machine Learning, built for GitHub Pages. Modeled on professor/grad-student homepages —
serif type, a "News" feed, bibliography-style project listings, a real CV page — rather than a marketing/SaaS
layout. Content is sourced directly from [resume.tex](resume.tex) — no fabricated roles, metrics, or products.

## Pages

- `index.html` (**about**): short bio, research interests, and a dated "News" list of recent milestones
- `projects.html` (**research**): project entries organized by domain — Robotics, Machine Learning, Systems &
  Algorithms, Optimization & Quantitative Research, and Miscellaneous — linked to public repos at
  [github.com/Harsheys18](https://github.com/Harsheys18) where available
- `activities.html` (**cv**): education, work experience, research experience, positions of responsibility, and
  scholastic/extracurricular honors, formatted as an actual CV
- `interests.html` (**skills**): focus areas, languages, and libraries
- `musings.html` (**notes**): informal, personal notes — separate in tone from the rest of the site
- `contact.html`: plain contact details, no form

## Tech Stack

- HTML5, hand-written per page (no templating/build step)
- CSS3: single stylesheet (`styles.css`), serif typography (Source Serif 4 + JetBrains Mono for labels/dates),
  no cards, gradients, or box-shadows — hairline rules and whitespace do the layout work
- `script.js`: one job, sets the footer year. No scroll effects, no JS-driven nav.

## Run Locally

Open [index.html](index.html) directly in a browser, or serve the folder (e.g. `python -m http.server`) and
visit `http://localhost:8000`.

## Publish to GitHub Pages (github.io)

### Option A: User Site (recommended)

Use this if you want your site at https://your-username.github.io/

1. Create a new repository named exactly: your-username.github.io
2. Copy all files from this project into that repository root.
3. Commit and push to the main branch.
4. Wait 1 to 3 minutes and open https://your-username.github.io/

### Option B: Project Site

Use this if you want your site at https://your-username.github.io/repository-name/

1. Push this code to any repository (for example, portfolio).
2. On GitHub, open Settings > Pages.
3. Under Build and deployment, set Source: Deploy from a branch, Branch: main, folder: /(root).
4. Save and wait for deployment.

## Keeping Content Accurate

All section content is pulled from real resume entries. When updating:

- Edit `resume.tex` first, then propagate factual changes into the corresponding HTML page.
- The "Research Direction" note on the Projects page is explicitly framed as an aspiration/PhD direction, not
  completed or shipped work — keep that framing.
- `resume.tex` is linked directly from the CV page as the primary source; add a compiled `resume.pdf` and swap
  the link if you want a downloadable, non-LaTeX version.
