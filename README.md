# Badis Mahjoubi - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full-Stack Developer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**:
  - Dynamic typing effect
  - Smooth scrolling navigation
  - Animated skill bars
  - Floating technology icons
  - Interactive project cards
  - Counter animations for statistics
- **Dark Theme**: Eye-friendly dark color scheme
- **Contact Form**: Easy-to-use contact form with mailto functionality
- **SEO Optimized**: Proper meta tags and semantic HTML

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and transitions
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Poppins font family

## Sections

1. **Hero Section**: Introduction with animated typing effect
2. **About**: Professional summary and key statistics
3. **Experience**: Timeline of work experience
4. **Projects**: Featured projects with descriptions
5. **Skills**: Technical skills with progress bars
6. **Contact**: Contact information and form

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. **Create a New Repository**
   - Go to [GitHub](https://github.com)
   - Click on "New Repository"
   - Name it: `<your-username>.github.io` (e.g., `badismahjoubi.github.io`)
   - Make it public
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all files from the `portfolio-site` folder
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://<your-username>.github.io`

### Option 2: Using Git Command Line

1. **Initialize Git and Push to GitHub**

```bash
# Navigate to the portfolio-site folder
cd portfolio-site

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio setup"

# Add remote repository (replace with your username)
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"

3. **Access Your Site**
   - Your portfolio will be live at: `https://<your-username>.github.io`
   - It may take a few minutes for the site to go live

## Customization Guide

### Update Personal Information

1. **index.html**
   - Update email, phone, LinkedIn, GitHub links
   - Modify experience descriptions
   - Add/remove projects
   - Update skills and progress percentages

2. **style.css**
   - Change color scheme by updating CSS variables in `:root`
   - Adjust spacing, fonts, or animations
   - Modify responsive breakpoints

3. **script.js**
   - Update typing effect titles in the `titles` array
   - Modify animation timings
   - Add custom functionality

### Color Scheme Customization

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main theme color */
    --secondary-color: #8b5cf6;  /* Secondary accent */
    --accent-color: #ec4899;     /* Highlight color */
    /* ... other variables ... */
}
```

### Adding New Sections

1. Add HTML section in `index.html`
2. Add navigation link in the navbar
3. Style the section in `css/style.css`
4. Add interactivity in `js/script.js` if needed

## File Structure

```
portfolio-site/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Images folder (add your images here)
├── assets/             # Additional assets
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization Tips

1. **Optimize Images**: Use compressed images (WebP format recommended)
2. **Minify Files**: Minify CSS and JavaScript for production
3. **Enable Caching**: Add appropriate cache headers
4. **Use CDN**: Consider using CDN for Font Awesome and Google Fonts

## Adding Custom Domain (Optional)

1. Purchase a domain from a domain registrar
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub's IP addresses
   - Or add a CNAME record pointing to `<your-username>.github.io`
4. Enable "Enforce HTTPS" in GitHub Pages settings

## Local Development

To test the site locally:

1. **Using Python**:
```bash
cd portfolio-site
python -m http.server 8000
```
Visit `http://localhost:8000` in your browser

2. **Using Node.js (http-server)**:
```bash
npx http-server portfolio-site -p 8000
```

3. **Using VS Code Live Server**:
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## Troubleshooting

### Site Not Loading
- Wait 5-10 minutes after pushing to GitHub
- Check GitHub Pages settings
- Ensure repository is public
- Clear browser cache

### Images Not Showing
- Check file paths are correct
- Ensure images are in the repository
- Use relative paths (not absolute)

### Styling Issues
- Clear browser cache
- Check CSS file path in HTML
- Validate CSS syntax

## Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering
- [ ] Integrate with CMS for easy updates
- [ ] Add animations on scroll
- [ ] Implement contact form backend
- [ ] Add testimonials section
- [ ] Create multi-language support

## License

This project is open source and available under the MIT License.

## Contact

**Badis Mahjoubi**
- Email: badismahjoubi.dev@gmail.com
- LinkedIn: [linkedin.com/in/badismahjoubi](https://linkedin.com/in/badismahjoubi)
- Location: Tunisia

---

Made with ❤️ by Badis Mahjoubi
