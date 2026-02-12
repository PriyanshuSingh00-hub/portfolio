#  Portfolio

> A modern, interactive portfolio website showcasing projects and skills with stunning animations and 3D experiences.

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-00d9ff?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-silk-ten-30.vercel.app)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

</div>

---

## ✨ Features

- 🎭 **Smooth Animations** - GSAP-powered transitions and effects
- 🌌 **3D Graphics** - React Three Fiber for immersive 3D elements
- 📱 **Responsive Design** - Mobile-friendly with Tailwind CSS
- ⚡ **High Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Interactive Components** - Dynamic scrolling and animated text transitions
- 🎨 **Modern UI** - Clean, professional design with custom fonts
- 🚀 **Production Ready** - Optimized builds and fast deployment.
- ♿ **Smooth Scrolling** - Enhanced UX with Lenis scroll optimization

---

## 🛠️ Tech Stack

<div align="center">

| 🎨 Category | 📦 Technologies |
|-----------|-----------------|
| **⚛️ Frontend** | ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) |
| **🎬 Build Tool** | ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white) |
| **🎨 Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwind-css&logoColor=white) |
| **✨ Animations** | ![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?logoColor=white) ![Lenis](https://img.shields.io/badge/Lenis-Smooth%20Scroll-000000?logoColor=white) |
| **🌌 3D Graphics** | ![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=three.js) ![React Three Fiber](https://img.shields.io/badge/R3F-WebGL-000000?logoColor=white) |
| **🎯 Utilities** | ![React Scroll](https://img.shields.io/badge/React%20Scroll-Navigation-61DAFB) ![Iconify](https://img.shields.io/badge/Iconify-Icons-000000) |
| **☁️ Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white) |

</div>

---

## 📦 Installation & Setup

### 📥 Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

### 📚 Install dependencies
```bash
npm install
```

### 🚀 Start development server
```bash
npm run dev
```
The project will be available at `http://localhost:5173`

### 🏗️ Build for production
```bash
npm run build
```

### 👀 Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
📦 src/
├── 🧩 components/           # Reusable components
│   ├── AnimatedHeaderSection.jsx
│   ├── AnimatedTextLines.jsx
│   ├── Marquee.jsx
│   └── Planet.jsx
├── 📄 sections/             # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Works.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   ├── ServiceSummary.jsx
│   └── ContactSummary.jsx
├── ⚙️ constants/            # Configuration & constants
├── 🎨 App.jsx              # Main application component
├── 🎭 index.css            # Global styles
└── 🚀 main.jsx             # Entry point

📂 public/
├── 🎨 assets/
│   ├── backgrounds/         # Background images
│   └── projects/            # Project images
├── 🔤 fonts/                # Custom fonts (Amiamie)
├── 🖼️ images/               # General images
└── 🤖 models/               # 3D models
```

---

## 🚀 Scripts

| Command | Description |
|---------|-------------|
| 🔧 `npm run dev` | Start development server with hot reload |
| 🏗️ `npm run build` | Build optimized production bundle |
| 📝 `npm run lint` | Run ESLint to check code quality |
| 👀 `npm run preview` | Preview production build locally |

---

## 🎯 Key Sections

### 🎬 Hero
Captivating introduction with animated elements and smooth scroll transitions.

### 👤 About
Detailed information about skills, experience, and professional background.

### 💼 Services
Showcase of services offered with descriptions and icons.

### 🖼️ Works
Portfolio of projects with descriptions, images, and links.

### 📧 Contact
Contact form and summary with multiple ways to get in touch.

### 🧭 Navbar
Responsive navigation with smooth scrolling between sections.

---

## 🌐 Deployment

This project is deployed on **Vercel** and automatically deploys from the main branch.

### ☁️ Deploy to Vercel
```bash
npm run build
# Then push to GitHub and Vercel will auto-deploy
```

**📍 Deployment Link:** [![Vercel](https://img.shields.io/badge/Visit%20Live-portfolio--silk--ten--30.vercel.app-00d9ff?style=for-the-badge&logo=vercel)](https://portfolio-silk-ten-30.vercel.app)

---

## 📝 Dependencies

### 📦 Production
- ⚛️ react & react-dom (19.2.0) - UI library
- 🌌 three & react-three-fiber - 3D graphics
- ✨ gsap & @gsap/react - Advanced animations
- 🎨 tailwindcss & @tailwindcss/vite - Styling
- 📜 lenis - Smooth scrolling
- 🔗 react-scroll & react-responsive - Utilities
- 🎯 @iconify/react - Icon pack

### 🔧 Development
- 🚀 vite - Build tool
- ⚛️ @vitejs/plugin-react - React support
- 📝 eslint - Code quality
- 🎨 @tailwindcss/vite - Tailwind CSS Vite plugin

---

## 🎓 Learning Resources

- 📚 [Vite Documentation](https://vite.dev) - Build tool guide
- ⚛️ [React Documentation](https://react.dev) - UI library
- 🌌 [Three.js Documentation](https://threejs.org) - 3D graphics library
- ✨ [GSAP Documentation](https://gsap.com) - Animation library
- 🎨 [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📧 Contact & Social

For inquiries or collaboration, feel free to reach out:

<div align="center">

📧 **Email:** [priyanshusingh00031@gmail.com]

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Your%20Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyanshu-singh-aa19a13a4/)
[![GitHub Badge](https://img.shields.io/badge/GitHub-Your%20Profile-171515?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PriyanshuSingh00-hub)
[![Twitter Badge](https://img.shields.io/badge/Twitter-Your%20Handle-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)

</div>

---

<div align="center">

### 🌟 If you found this helpful, please give it a star!

**Built with ❤️ using modern web technologies**

![Visitors](https://visitor-badge.glitch.me/badge?page_id=yourprofile.portfolio)

</div>
