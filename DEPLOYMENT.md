# Deployment Guide - Projects Portfolio

## 🚀 Quick Deployment Steps

### 1. Initialize Git Repository

```bash
cd projects-portfolio
git init
git add .
git commit -m "Initial commit: Projects portfolio for marketplace"
```

### 2. Create GitHub Repository

**Option A: Using GitHub CLI**
```bash
gh repo create projects-portfolio --public --source=. --remote=origin
```

**Option B: Using Git (Manual)**
```bash
# After creating repository on GitHub.com:
git remote add origin https://github.com/yeasin-dev-me/projects-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: **GitHub Actions** (not Deploy from a branch)
3. Save

### 4. Configure Custom Domain

1. In Settings → Pages → Custom domain
2. Enter: `projects.yeasindev.me`
3. Click "Save"
4. Wait for DNS check (may take a few minutes)
5. Once verified, enable "Enforce HTTPS"

### 5. Add DNS Record

Go to your domain registrar (where you manage yeasindev.me) and add:

```
Type: CNAME
Name: projects
Value: yeasin-dev-me.github.io
TTL: 3600 (or Auto)
```

**Note**: DNS propagation can take 5-60 minutes.

### 6. Verify Deployment

1. Push triggers automatic deployment via GitHub Actions
2. Check Actions tab in GitHub to see deployment progress
3. Once complete, visit:
   - Temporary URL: `https://yeasin-dev-me.github.io/projects-portfolio/`
   - Custom domain: `https://projects.yeasindev.me` (after DNS propagates)

## 🔐 Security Note

**IMPORTANT**: 
- ✅ Consider using SSH keys for ongoing work
- ✅ Never commit tokens to public repositories

### Setting up SSH (Recommended)

```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "yeasinarafat.cs@gmail.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Then use SSH remote instead:
git remote set-url origin git@github.com:yeasin-dev-me/projects-portfolio.git
```

## 📋 Post-Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] DNS CNAME record added
- [ ] Custom domain configured in GitHub Pages settings
- [ ] HTTPS enforced
- [ ] Deployment workflow completed successfully
- [ ] Site accessible at https://projects.yeasindev.me
- [ ] All project pages loading correctly
- [ ] Images displaying properly
- [ ] No contact information visible (Upwork compliance)

## 🔄 Future Updates

To update the portfolio:

```bash
# Make changes to code
git add .
git commit -m "Update: description of changes"
git push

# GitHub Actions will automatically rebuild and deploy
```

## 🐛 Troubleshooting

### DNS not resolving
- Wait 30-60 minutes for propagation
- Check DNS with: `nslookup projects.yeasindev.me`
- Verify CNAME points to `yeasin-dev-me.github.io`

### 404 errors
- Ensure GitHub Pages source is "GitHub Actions"
- Check that CNAME file exists in `public/` directory
- Verify build completed successfully in Actions tab

### Images not loading
- Check image paths are relative (start with `/`)
- Verify images copied to `public/images/`
- Ensure `next.config.ts` has `images.unoptimized: true`

### Build failures
- Check Actions tab for error logs
- Verify all dependencies installed
- Test build locally: `npm run build`

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify DNS settings
3. Test local build: `npm run build`
4. Check browser console for errors
