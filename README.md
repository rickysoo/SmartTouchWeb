# Smart Touch Technology - Modern Website

A modern, responsive React-based website for Smart Touch Technology, a leading provider of integrated HR automation, biometric access, and workforce management solutions in Malaysia.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, Solutions, Products, About Us, and Contact pages
- **Complete Content**: All products, services, and information from the original documentation
- **Navigation**: Intuitive menu structure with smooth navigation
- **Contact Forms**: Functional contact form with WhatsApp integration
- **Social Integration**: Links to social media platforms
- **SEO Ready**: Optimized for search engines with proper meta tags

## 📋 Pages Included

1. **Home** - Hero section, trust signals, product showcase, features, industries, FAQ
2. **Solutions** - Complete list of all HR and security solutions
3. **Products** - Detailed product listings organized by category
4. **About Us** - Company history, mission, values, team, and milestones
5. **Contact** - Contact information, contact form, and location map

## 🛠️ Technology Stack

- **React 18** - UI framework
- **React Router** - Page navigation
- **Lucide React** - Icons
- **CSS3** - Styling (no external CSS frameworks)
- **Responsive Grid/Flexbox** - Layout

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates an optimized build in the `build` folder

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js       # Main navigation bar
│   ├── Navigation.css
│   ├── Footer.js          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.js            # Homepage
│   ├── Home.css
│   ├── Solutions.js       # Solutions page
│   ├── Solutions.css
│   ├── Products.js        # Products page
│   ├── Products.css
│   ├── About.js          # About Us page
│   ├── About.css
│   ├── Contact.js        # Contact page
│   └── Contact.css
├── App.js                # Main app component
├── App.css               # Global styles
└── index.js             # Entry point
```

## 🎨 Design Features

- **Color Scheme**: Professional navy blue (#1a3a52), orange accent (#e85d2a)
- **Fonts**: Clean sans-serif (Inter) for readability
- **Animations**: Smooth hover effects and transitions
- **Mobile Responsive**: Fully responsive from 320px to 4K displays
- **Accessibility**: Semantic HTML and ARIA labels

## 🔧 Customization

### Colors
Update color variables in component CSS files:
- Primary: `#1a3a52` (Navy)
- Accent: `#e85d2a` (Orange)
- Background: `#f8f9fa` (Light Gray)

### Content
All content is defined in React components and can be easily updated:
- Products list in `Home.js` and `Products.js`
- Solutions in `Solutions.js`
- Company info in `About.js`
- Contact details in `Contact.js` and `Footer.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Then deploy the build folder to Vercel
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `build` folder contents to your web server
3. Configure server to serve `index.html` for all routes (for React Router)

## 📧 Contact Integration

The contact form currently displays a success message. To enable email sending:

1. **Option 1: Backend API** - Create an API endpoint and update the form submission
2. **Option 2: Email Service** - Integrate services like SendGrid, Mailgun, or EmailJS
3. **Option 3: Form Service** - Use services like Formspree or Basin

## 🔐 SEO & Meta Tags

Update meta tags in `public/index.html`:
```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta property="og:title" content="..." />
```

## 🔒 Security Notes

- All forms should be validated on both client and server sides
- Never expose sensitive information in the frontend code
- Use environment variables for API keys and endpoints

## 📊 Analytics

To add Google Analytics or other tracking:

1. Add GTM tag in `public/index.html`
2. Update tracking IDs in component files if needed

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This website is the intellectual property of Smart Touch Technology Sdn Bhd.

## 🤝 Support

For questions or issues:
- Email: sales@smartouch.com.my
- Phone: +607-388 9903
- WhatsApp: +6011-5354 9903

---

Built with React | Designed for Smart Touch Technology | 2026
