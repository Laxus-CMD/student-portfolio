# Student Portfolio — Dark Glassmorphism

A personal portfolio styled like a macOS / visionOS workspace app: a floating frosted-glass window over an atmospheric wallpaper, a collapsible icon rail, a filterable bento project grid with case-study modals, and a floating "Ask Alex" contact drawer.

Built with plain **HTML, CSS and vanilla JavaScript**. There's no build step and nothing to install.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8000
```

## Make it yours

| What | Where |
| --- | --- |
| Name, role, bio, links | `index.html` (hero + rail) |
| Projects, skills, experience, FAQ, contact email | the arrays at the top of `script.js` |
| Colors, blur, radii, motion | CSS variables at the top of `styles.css` |
| Background photo | `assets/wallpaper.jpg` (optional) |
| Resume | `assets/resume.pdf` |

## Features

- App-shell layout: collapsible left rail (remembers its state) that becomes a floating top pill dock on mobile
- Segmented switcher (All Work / Case Studies / Experiments) with a sliding indicator
- Bento project grid with a pointer tilt effect and frosted case-study modals
- Experience & capabilities panels
- Floating contact pill that opens a drawer with a quick-message form (`mailto:`) and an FAQ
- Respects `prefers-reduced-motion`, keyboard accessible, with native `<dialog>` focus handling

## Deploy to GitHub Pages

Push to GitHub, then go to **Settings → Pages → Deploy from branch → `main` / root**.
