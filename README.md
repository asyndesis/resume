# Trevor Bonomi - Resume Portfolio

A modern, responsive resume portfolio built with Tailwind CSS and optimized for GitHub Pages deployment.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Print-Friendly**: Optimized for printing with custom print styles
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Fast Loading**: Optimized assets and minified CSS
- **GitHub Pages Ready**: Automated deployment workflow included

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev` - Start development mode with CSS watching
- `npm run build` - Build CSS only
- `npm run build:html` - Copy HTML to dist
- `npm run build:assets` - Copy assets to dist
- `npm run build:all` - Build everything (HTML, assets, CSS)
- `npm run clean` - Clean dist directory
- `npm run preview` - Preview the built site locally
- `npm run deploy` - Build and prepare for deployment

### Development Workflow

1. Make changes to files in the `src/` directory
2. Run `npm run dev` to watch for changes and rebuild CSS
3. Run `npm run build:all` to build everything for production
4. Use `npm run preview` to test the built site locally

## Project Structure

```
├── src/
│   ├── index.html          # Source HTML file
│   ├── input.css           # Tailwind CSS input file
│   └── assets/             # Images and other assets
├── dist/                   # Built files (generated)
├── .github/workflows/      # GitHub Actions workflows
├── tailwind.config.js      # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://[username].github.io/[repository-name]`

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

Then push the `dist/` directory to your GitHub Pages branch.

## Customization

### Styling

- Edit `src/input.css` to add custom CSS
- Modify `tailwind.config.js` to customize Tailwind settings
- Update `src/index.html` to change content and structure

### Content

- Edit `src/index.html` to update your resume content
- Add new assets to `src/assets/`
- Update asset references in the HTML file

## Technologies Used

- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting

## License

ISC License - see package.json for details
