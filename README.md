# DEFY Portfolio Website

A bold, edgy portfolio website built with React + Vite that defies conventional design patterns and showcases innovative web development skills.

## 🚀 Features

- **Modern Design**: Dark theme with neon accents and gradient effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and transitions for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and dynamic content
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: Proper focus management and keyboard navigation support

## 🎨 Design Theme

The "DEFY" theme represents:
- Breaking conventional design patterns
- Bold, edgy visual elements
- Neon green (#00ff88) and blue (#0066ff) color scheme
- Dark backgrounds with subtle gradients
- Modern typography using Inter font family

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: CSS3 with CSS Variables and Grid/Flexbox
- **Animations**: CSS Animations and Transitions
- **Fonts**: Google Fonts (Inter)
- **Icons**: Emoji icons for simplicity

## 📱 Sections

1. **Hero Section**: Dynamic taglines and animated visual elements
2. **About**: Personal philosophy and statistics
3. **Skills**: Categorized skills with animated progress bars
4. **Projects**: Filterable project showcase with hover effects
5. **Contact**: Contact form and information
6. **Footer**: Navigation and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-defy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Customization

### Personal Information

Update the following files to customize the portfolio for your needs:

- `src/components/Hero.jsx` - Change name, role, and taglines
- `src/components/About.jsx` - Update personal information and philosophy
- `src/components/Skills.jsx` - Modify skills and proficiency levels
- `src/components/Projects.jsx` - Add your own projects
- `src/components/Contact.jsx` - Update contact information

### Colors and Theme

Modify the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #00ff88;    /* Main accent color */
  --secondary-color: #ff0066;  /* Secondary accent */
  --accent-color: #0066ff;     /* Blue accent */
  --dark-bg: #0a0a0a;         /* Main background */
  --darker-bg: #050505;       /* Secondary background */
}
```

### Images

Replace placeholder images in the components with your own:
- Profile photo in About section
- Project screenshots in Projects section

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎭 Animations

- **Loading Screen**: Animated "DEFY" text with progress bar
- **Scroll Animations**: Elements fade in as they come into view
- **Hover Effects**: Interactive elements with smooth transitions
- **Background Effects**: Subtle grid animations and gradient overlays

## 🚀 Performance Features

- **Lazy Loading**: Components animate in as they become visible
- **Optimized CSS**: Efficient selectors and minimal repaints
- **Smooth Scrolling**: Native smooth scroll behavior
- **Reduced Motion**: Respects user's motion preferences

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx     # Navigation component
│   ├── Hero.jsx       # Hero section
│   ├── About.jsx      # About section
│   ├── Skills.jsx     # Skills section
│   ├── Projects.jsx   # Projects showcase
│   ├── Contact.jsx    # Contact form
│   └── Footer.jsx     # Footer component
├── App.jsx            # Main app component
├── main.jsx           # Entry point
├── App.css            # Global styles and variables
└── index.css          # Base styles and fonts
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `App.jsx`
4. Update navigation if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Built with ❤️ and React + Vite**

*Defy the ordinary. Build the extraordinary.*
