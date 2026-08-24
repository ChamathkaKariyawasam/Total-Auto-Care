# TAC Total Auto Care

Marketing website for TAC Total Auto Care, built with React, React Router and Vite.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm ci
npm run dev
```

Create a production build locally with:

```bash
npm run build
npm run preview
```

## Publish to GitHub

1. Create a new repository on GitHub. Keep it empty; do not add a README, `.gitignore`, or license during creation.
2. From this project folder, initialize Git and create the first commit:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   ```

3. Connect the local folder to GitHub and push it. Replace the URL with the repository URL GitHub gives you:

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

4. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for **Build and deploy to GitHub Pages** to complete.
6. GitHub will show the live site URL under **Settings > Pages**. For a project repository it will usually be `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

Every later push to `main` builds and deploys the site automatically.

## Before launch

- Replace demo Unsplash images and sample content with TAC-owned content.
- Verify the contact and booking details in `src/data/data.js` and the page components.
- Confirm the repository is public, or use a GitHub plan that supports Pages for private repositories.
