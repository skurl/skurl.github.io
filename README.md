<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/a6ecd7bd-b57a-41e2-a8d4-1447a4826358

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

## Deploy to GitHub Pages (skurl.github.io)

1. Push this repo to GitHub (main branch).
2. In GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Push any commit; the workflow `.github/workflows/deploy.yml` will build and deploy.

Local run:

```bash
npm install
npm run dev
```
