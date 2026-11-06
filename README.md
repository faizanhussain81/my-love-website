# My Love Website 💜

A romantic static website designed for GitHub Pages. It includes animated lavender doors, your love letter, a clickable heart, a photo gallery, butterflies and a song player.

## Project folder structure

```text
my-love-website/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    │   ├── lavender-garden-door.png
    │   ├── photo-placeholder.svg
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   ├── photo5.jpg
    │   ├── photo6.jpg
    │   ├── photo7.jpg
    │   └── photo8.jpg
    └── music/
        └── our-song.mp3
```

The entrance background and placeholder are already included. Add your **eight personal photos** and your song using the exact filenames below.

## 1. Add your photos and song

Copy your eight photos into `assets/images/` and name them:

- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`
- `photo7.jpg`
- `photo8.jpg`

Add your song as `assets/music/our-song.mp3`.

The gallery is set up for exactly eight photos. On larger screens they appear in four columns; on mobile they appear in two columns. GitHub Pages is public, so only upload photos you are comfortable sharing.

## 2. Preview on your computer

Open `index.html` in a modern browser. For best local testing, you can also run a simple local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Publish using GitHub Pages

1. Create a GitHub repository named `my-love-website`.
2. Set it to **Public** (GitHub Pages availability depends on your plan and repository visibility).
3. Upload the contents of this folder to the repository root. `index.html` must be at the root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait for the deployment to finish. Your site address will be:

   `https://YOUR-GITHUB-USERNAME.github.io/my-love-website/`

## Notes

- This is a static site: no server, database, API key or backend is needed.
- Music starts only after she presses Play. Browsers generally block autoplay.
- The Google Fonts are loaded from Google Fonts when internet access is available; fallback fonts are included.
- The repository and website are public if you use a public repository. Avoid uploading private or sensitive photos unless you are comfortable with that.

The Bollywood song starts when she taps the heart to open the photo gallery. This click is the browser-approved interaction that allows the music to play; if playback is blocked or the MP3 is missing, she can use the Play song button.
