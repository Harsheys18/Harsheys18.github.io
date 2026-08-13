# Harshitha Inampudi — Personal Site

A static, plain, academic-style personal site for a CSE (Honors) undergrad at IIT Bombay applying to PhD
programs in Robotics and Machine Learning. Modeled on a researcher's personal homepage — serif type, narrow
reading column, bibliography-style entries, a real CV page — rather than a marketing/SaaS layout. Content is
sourced directly from [resume.tex](resume.tex) and rewritten into plain prose; nothing is invented that isn't
in the resume.

## Pages

- `index.html` (**About**): a short bio — who I am, academic background, and the ML/robotics problems I work on
- `research.html` (**Research**): formal research and work experience, grouped by theme, written as short
  essay-style entries (problem &rarr; approach &rarr; outcome) rather than resume bullets
- `projects.html` (**Projects**): coursework, competitions, and self-driven builds outside formal research
  positions, organized by domain — Robotics, Machine Learning, Systems & Algorithms, Optimization & Quant,
  Miscellaneous — linked to public repos at [github.com/Harsheys18](https://github.com/Harsheys18) where available
- `musings.html` (**Musings**): an informal notebook for research ideas, papers, and half-formed thoughts.
  Currently holds two entries clearly marked as design placeholders, not real posts.
- `cv.html` (**CV**): a summary CV (education, experience, skills, positions, honors) with a Download CV button
- `contact.html`: plain contact details, no form

## Tech Stack

- HTML5, hand-written per page (no templating/build step)
- CSS3: single stylesheet (`styles.css`), serif typography (Source Serif 4 + JetBrains Mono for labels/dates/
  nav), no cards, gradients, or box-shadows — hairline rules and whitespace do the layout work
- `script.js`: one job, sets the footer year. No scroll effects, no JS-driven nav.

## Run Locally

Open [index.html](index.html) directly in a browser, or serve the folder (e.g. `python -m http.server`) and
visit `http://localhost:8000`.

## Publish to GitHub Pages (github.io)

### Option A: User Site (recommended)

1. Create a new repository named exactly: your-username.github.io
2. Copy all files from this project into that repository root.
3. Commit and push to the main branch.
4. Wait 1 to 3 minutes and open https://your-username.github.io/

### Option B: Project Site

1. Push this code to any repository (for example, portfolio).
2. On GitHub, open Settings > Pages.
3. Under Build and deployment, set Source: Deploy from a branch, Branch: main, folder: /(root).
4. Save and wait for deployment.

## Keeping Content Accurate

- Edit `resume.tex` first, then propagate factual changes into the corresponding HTML page — Research and
  Projects entries should stay in prose, not resume-bullet fragments.
- The Download CV button on `cv.html` currently links straight to `resume.tex` (browsers will download the raw
  LaTeX source). Compile a `resume.pdf`, add it to the repo, and swap that link's `href` when one exists.
- Musings entries should be added as new `<article class="note">` blocks at the top of the list in
  `musings.html`; remove the two example entries once real notes replace them.
