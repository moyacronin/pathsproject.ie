# PATHS project website — how to put this online

You end up paying **once a year for the domain name only**. Hosting and the
contact form are both free, with no monthly fee.

## What's in this folder
- `index.html` — the whole site (about, approach, gallery, publications, contact)
- `styles.css` — all the styling
- `script.js` — mobile menu, photo gallery pop-up, contact form
- `images/` — put your workshop photos here

## 1. Fill in your own details
Before publishing, open `index.html` in any text editor (even Notepad/TextEdit)
and replace anything in `[square brackets]`, such as:
- `paths@yourdomain.ie` → your real contact email (search for `mailto:`)
- `[Your Research Centre]`
- The three placeholder entries under **Publications**
- `https://formspree.io/f/YOUR_FORM_ID` → see step 3 below

## 2. Put it on GitHub Pages (free hosting, no CLI needed)
1. Go to [github.com](https://github.com) and create a free account if you
   don't have one.
2. Click the **+** in the top right → **New repository**.
   - Name it e.g. `paths-project`
   - Set it to **Public**
   - Click **Create repository**
3. On the new repo page, click **Add file → Upload files**.
4. Drag in `index.html`, `styles.css`, `script.js`, and the `images` folder
   (with your real photos in it). Click **Commit changes**.
5. Go to **Settings → Pages** (left sidebar).
6. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
7. Within a minute or two, GitHub will show you a free web address like
   `https://yourusername.github.io/paths-project/` — that's your site, live.

No git, no terminal, no extension — just the GitHub website.

## 3. Turn on the contact form (free, no monthly fee)
1. Go to [formspree.io](https://formspree.io) and sign up free (50
   submissions/month on the free plan, which is plenty for a project site).
2. Create a new form and set it to deliver to your real email address.
3. Formspree gives you a form URL like `https://formspree.io/f/abc123`.
4. In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and
   replace `YOUR_FORM_ID` with your actual ID.
5. Re-upload the changed `index.html` to GitHub (Add file → Upload files,
   it will offer to replace the existing one).

Formspree will ask you to confirm your email address the first time — do
that, then test the form on your live site once.

## 4. Add your own domain (optional, ~€15–25/year, no monthly fee)
1. Buy a domain (e.g. `paths-project.ie`) from an Irish registrar such as
   Blacknight or Register365, or `.com`/`.org` from any registrar.
2. In your repo, go to **Settings → Pages → Custom domain**, and enter your
   domain. GitHub will show you the DNS records to add.
3. In your registrar's DNS settings, add those records (usually one `A`
   record set and one `CNAME` for `www`).
4. Tick **Enforce HTTPS** in GitHub Pages settings once it's verified
   (can take up to 24 hours for DNS to propagate).

## Adding real photos to the gallery
In `index.html`, each gallery tile currently looks like this:

```html
<button class="gallery-item" data-caption="Add a caption once you upload this photo">
  <span class="gallery-placeholder">...</span>
</button>
```

Replace it with:

```html
<button class="gallery-item" data-full="images/workshop-01.jpg" data-caption="Cork workshop, March 2026">
  <img src="images/workshop-01.jpg" alt="Participants at the Cork workshop discussing housing access">
</button>
```

Put the actual photo file in the `images` folder with the same name.

## Adding real publications
Each entry in the Publications section is one `<li class="pub-item">` block.
Duplicate one, edit the year/title/author text, and point the link at your
PDF (put PDFs in a `publications/` folder you create yourself, same way as
`images/`).
