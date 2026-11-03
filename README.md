# OSCE Checklists

Tick-box OSCE checklists for Deakin MD2 clinical skills: 26 examinations and histories, plus 8 HME922 procedural skills (with images). It works on a phone, iPad or computer, and works offline once it has been opened.

**Features**
- Choose an examination from the home screen, or search for any step (e.g. "McMurray").
- Tap steps to tick them. Ticks are saved on that device.
- Station timer warns at 1 minute and again at time up.
- **Recall mode** hides the details so you can say each step from memory.
- A **Printable PDF** button on every checklist, plus one combined PDF of all 26.
- Light and dark mode.

---

## Put it online with GitHub Pages (about 5 minutes, done on a computer)

1. Sign in at **github.com** (make a free account if you need one).
2. Click **+** (top right) → **New repository**.
   - Name: `osce-checklists`
   - Choose **Public** (free GitHub Pages needs a public repository; anyone with the link can see it).
   - Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip `osce-checklists.zip` on your computer. Open the folder, select **everything inside it** (`index.html`, `data.js`, `sw.js`, `manifest.webmanifest`, `README.md`, `.nojekyll` and the `icons` and `pdf` folders) and drag it all into the GitHub upload box.
   - Tip: on a Mac, press `Cmd + Shift + .` in Finder to show the hidden `.nojekyll` file. If it's missing, the site still works.
5. Click **Commit changes**.
6. Go to **Settings** → **Pages** (left menu).
   - Under *Build and deployment*, **Source** = *Deploy from a branch*.
   - **Branch** = `main`, folder `/ (root)` → **Save**.
7. Wait 1–2 minutes and refresh the page. Your link appears at the top:
   `https://YOUR-USERNAME.github.io/osce-checklists/`

## Put it on your phone or iPad like an app

- **iPhone / iPad (Safari):** open the link → Share button → **Add to Home Screen**.
- **Android (Chrome):** open the link → ⋮ menu → **Add to Home screen** / **Install app**.

Open it once while online, and after that it also works without internet.

## Updating later

- Procedural skills images are in the `img/proc` folder.
- To change wording, edit `data.js` (each checklist's text is there), or replace a PDF in the `pdf` folder with the same file name.
- Upload the changed file(s) to the repository the same way (**Add file → Upload files**).
- Then open `sw.js` on GitHub (pencil icon) and change the version number (e.g. `osce-v3` to `osce-v4`) each time so phones pick up the new version.

---

Based on Deakin CP guidelines 2026 and Talley & O'Connor 10e. Items marked † are from standard teaching, not the Deakin guideline. Always check against your marking rubric.
