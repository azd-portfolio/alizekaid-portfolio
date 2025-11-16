# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step 1: Install Dependencies

```bash
npm install
```

This will install `gh-pages` package needed for deployment.

## Step 2: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 3: Create GitHub Repository

1. Go to GitHub and create a new repository named `Portfolio-Website-Design`
2. **Important**: Make sure the repository name matches exactly (case-sensitive)

## Step 4: Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-Website-Design.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your project
2. Deploy it to the `gh-pages` branch
3. Make it available at: `https://YOUR_USERNAME.github.io/Portfolio-Website-Design/`

## Step 6: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

## Important Notes

- The `base` path in `vite.config.ts` is set to `/Portfolio-Website-Design/` - make sure your repository name matches
- If you change the repository name, update the `base` path in `vite.config.ts`
- After deployment, it may take a few minutes for the site to be available
- The site will be available at: `https://YOUR_USERNAME.github.io/Portfolio-Website-Design/`

## Updating the Site

To update your deployed site:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy again
npm run deploy
```

