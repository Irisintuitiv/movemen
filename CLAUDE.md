# MOVEMEN — Project Rules for Claude

## Before Every Change
- Read the relevant section of the file before editing — never guess at content
- Make the smallest change that achieves the goal
- Never change more than what was asked

## Before Pushing to GitHub
- [ ] Always ask: "Do you want to test this locally before I push?"
- [ ] Start localhost if not already running: `python3 -m http.server 3456` from `/Users/emilierose/Documents/movemen`
- [ ] Confirm the user has seen the change in the browser before running `git push`
- [ ] Never auto-push a large or visual change without explicit confirmation

## Local Testing Checklist (before every push)
- [ ] Open `http://localhost:3456/index.html` in browser
- [ ] Check desktop layout (full width)
- [ ] Check mobile layout (resize browser or use DevTools)
- [ ] Scroll through the full page — no broken sections or overlapping elements
- [ ] Click all buttons — popups open and close correctly
- [ ] Check that photos display correctly and are not cropped badly
- [ ] No console errors in browser DevTools

## Responsive Design Rules
- All sections must work on mobile (max-width: 900px)
- Two-column layouts must stack to single column on mobile
- Font sizes must scale down on mobile — nothing should overflow horizontally
- Images must use `background-size: cover` and look reasonable on all screen sizes
- Nav links must be readable on small screens
- Buttons must be tap-friendly (min height 44px)
- Always check the CSS file has `@media (max-width: 900px)` rules for any new layout

## Photo & Image Rules
- Always optimise images before adding to the project: `sips -Z 1920 --setProperty formatOptions 82`
- Store all photos in `/images/` folder with clean names (hero.jpg, break-1.jpg, etc.)
- Never embed images as base64 in HTML
- Background images: always set `background-size: cover` and a sensible `background-position`
- After changing `background-position`, ask the user to confirm the crop looks right before pushing

## CSS Rules
- All colours must use CSS variables from `:root` in `style.css` — never hardcode hex values
- Font weights: use 400 for body text, never 300 (too thin, hurts readability)
- Section padding baseline: `120px 80px` — only reduce with explicit reason
- Never delete an existing CSS class without checking all HTML files for usage

## Git Rules
- Never use `git push --force`
- Commit messages must clearly describe what changed and why
- Always add `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` to commits
- When reverting, use `git revert HEAD` (not `git reset --hard`)
- Stage specific files — never use `git add .` blindly

## Content Rules
- Dates: currently **September & October 2026** — update everywhere if changed
- Program: **Maximum 10 men**, **Wednesdays 18:30–21:30**, **Copenhagen**
- Price: **4.995–5.995 kr.** (group), **3.500 / 5.500 / 9.500 kr.** (1:1)
- Contact email: **hello@movemen.dk**
- Language switcher: English ↔ Dansk — always keep both pages in sync

## Files Overview
| File | Purpose |
|---|---|
| `index.html` | Main English page |
| `da.html` | Danish version |
| `about.html` | About Emilie Rose page |
| `quiz.html` | Self-reflection questionnaire |
| `css/style.css` | All shared styles |
| `js/main.js` | Popup logic + testimonial carousel |
| `images/` | All optimised photos |
| `favicon.svg` | Browser tab icon |

## What NOT to Do
- Do not redesign entire sections without showing a preview first
- Do not delete content without explicit instruction
- Do not change copy/text unless the user provides new text
- Do not push after major visual changes without local confirmation
- Do not add new pages without linking them from the nav
