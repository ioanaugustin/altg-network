# AltGNetwork - Personal Portfolio Website

A clean, modern personal portfolio website built with Angular showcasing resume, articles, and professional information.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dynamic resume page with detailed experience, skills, and education sections
- Article showcase section with featured content
- Contact integration
- Modern UI with smooth animations and transitions

## Project Structure

The project follows a standard Angular structure with standalone components:

```
src/
├── app/
│   ├── header/          # Site navigation component
│   ├── home/            # Landing page with hero section & article previews
│   ├── resume/          # Detailed resume/CV component
│   └── app.component.*  # Root component files
├── assets/              # Static assets like images
└── styles/              # Global styles
```

## Technologies Used

- **Angular 17+**: Standalone components architecture
- **Sass/SCSS**: For advanced styling
- **Responsive Design**: Mobile-first approach
- **Angular Router**: For navigation between pages

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/AltGNetwork.git
   cd AltGNetwork
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Navigate to `http://localhost:4200/` in your browser.

## Running Tests

```bash
ng test
```

## Building for Production

To build the application for production:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Code Quality

This project adheres to Angular style guidelines and best practices:

- Component/file size limits (<4KB)
- Proper SCSS organization
- Accessibility considerations

## Responsive Behavior

The site is fully responsive with dedicated layouts for:
- Mobile phones (<480px)
- Tablets (480px - 768px)
- Small desktops (768px - 992px)
- Large desktops (>992px)

## Components

### Header Component
Navigation with mobile-friendly hamburger menu and smooth transitions.

### Home Component
Features a hero section, about section, articles grid, and contact call-to-action.

### Resume Component
Detailed professional history with:
- Personal information
- Skills and proficiencies
- Work experience
- Education
- Certifications
- Projects

## License

[MIT License](LICENSE)

## Author

Ioan Augustin Lates
- Email: latesioanaugustin@gmail.com
- LinkedIn: [iaugustinlates](https://www.linkedin.com/in/iaugustinlates/)

---

© 2025 Ioan Augustin Lates. All rights reserved.