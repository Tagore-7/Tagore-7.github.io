# Tagore Kosireddy — Personal Website

A single-page academic site. No build step, no framework. Plain HTML, CSS, and one data file.

## How to deploy on GitHub Pages (one time, ~2 minutes)

1. Create a new repository named `Tagore-7.github.io` (must match your GitHub username exactly).
2. Put these files in the repo root: `index.html`, `style.css`, `data.js`, `README.md`, and the `assets/` folder.
3. Push to the `main` branch.
4. Done. The site is live at **https://tagore-7.github.io** within a minute or two.

If you prefer a project site instead (e.g., `github.com/Tagore-7/website`), go to the repo Settings → Pages → set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. The site will be at `https://tagore-7.github.io/website`.

## How to update the site

**Everything on the page is rendered from `data.js`.** You never need to touch the HTML or CSS.

- **Add a paper:** copy one of the entries in `publications`, edit the fields, save, push.
- **Add news:** add a line at the top of the `news` array.
- **Add an award / talk / job:** same pattern in `awards`, `talks`, `experience`.
- **Update your CV/resume:** replace the PDFs in `assets/`.

Push the change and the live site updates automatically.

### Publication entry fields

```js
{
  title: "Paper title",
  authors: "Full author list, comma separated",
  venue: "Workshop @ Conference Year",   // shown as a tag
  year: 2026,
  type: "oral" | "poster" | "paper",     // "oral" gets a gold tag
  note: "Pages, city, or presentation info",
  links: { paper: "https://...", code: "https://..." },  // any keys work
  summary: "One plain sentence about the paper."
}
```

## Files

- `index.html` — page structure and the small render script
- `style.css` — all styling (colors, type, layout)
- `data.js` — **your content. This is the only file you edit.**
- `assets/` — CV and resume PDFs, and a place for a profile photo later
