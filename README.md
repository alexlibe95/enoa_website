# Ελληνικός Ναυτικός Όμιλος Αιγυπτιωτών (ΕΝΟΑ) - Website

Modern, responsive website for the Hellenic Nautical Club of Egyptians (ENOA) built with Astro, TypeScript, Tailwind CSS, and Decap CMS.

## 🌊 Features

- **Modern Stack**: Built with Astro 5, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first, accessible design following WCAG 2.1 AA standards
- **Content Management**: Integrated Decap CMS for easy content editing
- **SEO Optimized**: Structured data, sitemaps, and optimized meta tags
- **Dark/Light Mode**: Manual theme toggle with localStorage persistence
- **Multi-language Support**: Greek primary with English translations
- **Performance**: Static site generation for fast loading times
- **Clean Design**: Minimal, elegant design with 3-color palette (white, dark blue, logo blue)
- **Modern Typography**: Inter font for headings, system fonts for body text
- **Perfect Icons**: Sport-specific Lucide icons (Waves, Wind, Zap, Droplets)

## 🏗️ Project Structure

```
/
├── public/
│   ├── admin/           # Decap CMS admin interface
│   ├── images/          # Static images (including ENOA logo and hero background)
│   └── favicon.png      # Site favicon (ENOA logo)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/          # Website pages
│   └── styles/         # Global CSS styles
├── content/
│   ├── pages/          # Page content (Markdown)
│   ├── sports/         # Sports information
│   ├── news/           # News articles
│   ├── board/          # Board members
│   ├── gallery/        # Image galleries
│   └── settings/       # Site configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/enoa-website.git
   cd enoa-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Content Management

1. **Access CMS Admin**
   ```
   http://localhost:4321/admin
   ```

2. **Local Development**
   For local CMS development, run:
   ```bash
   npx decap-server
   ```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 🎨 Design System

### Colors

The website uses a clean 3-color palette:

- **White**: `#ffffff` - Light backgrounds and light mode text
- **Dark Blue**: `#1e293b` - Dark backgrounds and containers  
- **Logo Blue**: `#1d4ed8` - Accent color, buttons, and highlights

Additional utility colors:
- **Pure Black**: `#000000` - Maximum contrast text
- **Dark Gray**: `#374151` - Secondary text in light mode
- **Light Gray**: `#f1f5f9` - Text in dark mode

### Typography

- **Headings**: Inter (Google Fonts) - Modern, elegant sans-serif
- **Body Text**: System fonts (system-ui, -apple-system, sans-serif)
- **Greek Language**: Optimized for Greek typography with proper character support
- **Letter Spacing**: Tight (-0.025em) for contemporary look

### Components

All components are built with:

- **Accessibility**: WCAG 2.1 AA compliance with proper contrast ratios
- **Responsive design**: Mobile-first approach with Tailwind breakpoints  
- **Dark mode support**: Class-based theme switching with localStorage
- **Clean aesthetics**: Minimal design inspired by modern maritime aesthetics
- **Sport-specific icons**: Lucide icons (Waves, Wind, Zap, Droplets) for each sport

## 📊 Content Management

### Collections

The CMS includes the following content types:

1. **Pages** (`/content/pages/`) - Static pages like About, Contact
2. **Sports** (`/content/sports/`) - Information about each sport
3. **News** (`/content/news/`) - News articles and announcements  
4. **Board Members** (`/content/board/`) - Leadership team
5. **Gallery** (`/content/gallery/`) - Photo galleries
6. **Settings** (`/content/settings/`) - Site configuration

### Adding Content

#### News Article
```markdown
---
title: "Article Title"
description: "Brief description"
image: "/images/news-image.jpg"
publishDate: 2025-01-01T10:00:00.000Z
author: "ΕΝΟΑ"
category: "Ανακοινώσεις"
featured: true
---

# Article Content

Your article content in Markdown format...
```

#### Sport Information
```markdown
---
title: "Sport Name"
description: "Sport description"
image: "/images/sport-image.jpg"
icon: "IconName"
order: 1
featured: true
info:
  trainingHours: "Monday-Friday 17:00-19:00"
  coach: "Coach Name"
  contact: "sport@enoa.gr"
---

# Sport Details

Detailed information about the sport...
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Enable Identity & Git Gateway**
   - Go to Site Settings > Identity
   - Enable Git Gateway
   - Configure authentication providers

3. **Environment Variables**
   ```
   NODE_VERSION=18
   ```

### Vercel

1. **Connect Repository**
   - Import project from GitHub
   - Framework: Astro
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Configure CMS**
   - Set up Git Gateway or alternative authentication

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy the 'dist' folder to your hosting provider
```

## 🔧 Configuration

### Site Settings

Edit `content/settings/general.yml`:

```yaml
siteName: "Site Name"
siteDescription: "Site description"
siteUrl: "https://your-domain.com"
contact:
  address: "Your address"
  phone: "+30 210 XXX XXXX"
  email: "info@your-domain.com"
social:
  facebook: "https://facebook.com/yourpage"
  instagram: "https://instagram.com/yourpage"
```

### Navigation

Edit `content/settings/navigation.yml`:

```yaml
mainMenu:
  - name: "Menu Item"
    url: "/page"
    submenu:
      - name: "Submenu Item"
        url: "/subpage"
```

### Homepage

Edit `content/settings/homepage.yml` to customize:

- Hero section content
- Featured sports
- Statistics

## 🛠️ Development

### Adding New Components

1. Create component in `src/components/`
2. Use TypeScript interfaces for props
3. Include accessibility attributes
4. Support dark mode with CSS variables

### Styling Guidelines

- **Tailwind CSS**: Use utility-first approach with custom configuration
- **3-Color Palette**: Stick to white, dark blue, and logo blue only
- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- **Dark Mode**: Use `dark:` prefix with class-based theme switching (requires `darkMode: 'class'` in tailwind.config.js)
- **Text Contrast**: Ensure WCAG AA compliance (use `text-black` for maximum contrast in light mode)
- **Typography**: Inter font for headings, system fonts for body text

### Content Type Development

1. Add new collection to `public/admin/config.yml`
2. Create content folder structure
3. Add corresponding page templates
4. Test with CMS interface

## 🧪 Testing

### Local Testing

```bash
# Test build
npm run build
npm run preview

# Test CMS
npx decap-server
```

### Performance Testing

- Use Lighthouse for performance auditing
- Test on various devices and browsers
- Verify accessibility standards

## 📚 Resources

### Documentation

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Decap CMS](https://decapcms.org/docs/)
- [Lucide Icons](https://lucide.dev/)

### ENOA Resources

- [Current Website](https://www.enoa.gr)
- Club History and Information
- Sport-specific content and media

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Check Node.js version (18+ required)
- Clear `node_modules` and reinstall
- Verify all images exist in `public/images/`

**CMS Issues**
- Ensure Git Gateway is configured
- Check authentication settings
- Verify content format matches schema

**Styling Issues**
- Check Tailwind CSS compilation
- Verify custom CSS variables
- Test dark mode implementation

### Getting Help

1. Check existing issues on GitHub
2. Review Astro documentation
3. Contact development team

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for the Hellenic Nautical Club of Egyptians (ΕΝΟΑ)**