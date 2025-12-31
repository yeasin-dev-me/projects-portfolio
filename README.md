# Projects Portfolio

Professional portfolio showcasing full-stack development projects, optimized for marketplace platforms like Upwork.

## 🌐 Live Site

**Production:** [https://projects.yeasindev.me](https://projects.yeasindev.me)

## 📋 Overview

This is a dedicated projects showcase site featuring:

- **All Projects**: Backend APIs, React/Next.js frontends, and ML solutions
- **Detailed Case Studies**: Challenge → Solution → Results format
- **Key Metrics**: Quantifiable impact and achievements
- **Tech Stack Showcase**: Comprehensive technology breakdowns
- **Client Testimonials**: Real feedback from satisfied clients
- **Marketplace Optimized**: No contact information (Upwork compliant)

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages
- **Domain**: Custom subdomain (projects.yeasindev.me)

## 📁 Project Structure

```
projects-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Landing page with projects grid
│   ├── globals.css             # Tailwind + custom styles
│   └── projects/
│       └── [slug]/page.tsx     # Dynamic project detail pages
├── components/
│   ├── ProjectCard.tsx         # Project grid card
│   └── ProjectFilters.tsx      # Category filtering
├── data/
│   └── projects.ts             # All project data
├── public/
│   ├── CNAME                   # Custom domain config
│   └── images/                 # Project screenshots
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Pages deployment
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

Development server runs at [http://localhost:3001](http://localhost:3001)

## 📦 Deployment

### GitHub Pages Setup

1. **Create Repository**: `projects-portfolio` on GitHub
2. **Push Code**: Push this directory to the repository
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: GitHub Actions
4. **Configure Custom Domain**:
   - Add `projects.yeasindev.me` in Custom domain field
   - Wait for DNS check to pass
   - Enable "Enforce HTTPS"

### DNS Configuration

Add CNAME record to your domain registrar:

```
Type: CNAME
Name: projects
Value: yeasin-dev-me.github.io
TTL: 3600
```

### Automated Deployment

Every push to `main` branch triggers:

1. Install dependencies
2. Build Next.js static export
3. Deploy to GitHub Pages
4. Site live at https://projects.yeasindev.me

## 🎨 Features

### Landing Page

- Hero section with statistics
- Category filtering (All, Backend, Frontend, ML/AI)
- Responsive project grid
- Hover effects and animations

### Project Detail Pages

- Comprehensive case study format
- Challenge, Solution, Results sections
- Key metrics dashboard
- Tech stack breakdown
- Screenshots gallery
- Client testimonials
- Related projects

### Marketplace Compliance

- ✅ No email address
- ✅ No phone number
- ✅ No social media links
- ✅ No contact forms
- ✅ Focus on work showcase only

## 📊 Projects Included

- **Backend**: BrightLife Membership Platform (Django REST API)
- **Frontend**: BrightLife Frontend (React/TypeScript), Arriva Soft, Thinkland, Health Insights
- **ML/AI**: Human Genomic Mutation Analysis, Churn Prediction, Document Classification, Recommendation Engine

## 🔧 Customization

### Adding New Projects

Edit `data/projects.ts`:

```typescript
{
  slug: "project-slug",
  category: "backend" | "frontend" | "ml",
  title: "Project Title",
  tagline: "Brief description",
  // ... rest of project data
}
```

### Updating Styles

Edit `app/globals.css` for theme tokens and utility classes.

### Modifying Layout

- Landing page: `app/page.tsx`
- Project detail: `app/projects/[slug]/page.tsx`
- Components: `components/`

## 📝 License

© 2025 Yeasin Arafat. All rights reserved.

## 🔗 Related

- Main Portfolio: [https://yeasindev.me](https://yeasindev.me)
- GitHub: [@yeasin-dev-me](https://github.com/yeasin-dev-me)
