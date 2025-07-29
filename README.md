# 🚀 Benedict Isaac — Personal Portfolio Website

A fully responsive, high-performance, dark/light-mode enabled portfolio site for showcasing the work, skills, and services of **Benedict Isaac** — a creative software developer, digital marketer, and full-stack web engineer.

Designed to **attract clients**, **demonstrate past projects**, and **encourage collaboration**, this portfolio integrates modern web practices with sleek, scroll-based animations and bold visual design.

---

## ✨ Features

✅ Fully Responsive Design (Mobile‑First)\
✅ Dark & Light Mode Toggle\
✅ Project Portfolio Grid with Live Demos\
✅ Services Showcase (Design, Dev, Strategy)\
✅ Client Testimonials Carousel\
✅ Contact Form with Email Integration\
✅ Social Media Integration\
✅ Smooth Animations via Framer Motion\
✅ SEO-Friendly Metadata Structure\
✅ Ready for Vercel/Netlify Deployment

---

## 🧠 Tech Stack

| Layer        | Tools Used                                                                 |
|--------------|------------------------------------------------------------------------------|
| **Frontend** | `Next.js`, `React.js`, `Tailwind CSS`, `HTML`, `CSS`, `JavaScript`         |
| **Animation**| `Framer Motion`, `Scroll-based effects`, `Lottie` (optional)                |
| **Forms**    | `Formspree` or `EmailJS` (emails routed to Gmail)                          |
| **Deployment**| `Vercel` (static hosting optimized)                                        |

---

## 📁 Project Structure

├── public/
│ ├── ben.png # Profile image
│ ├── favicon.ico # Site icon
│ └── assets/ # Placeholder/project images
├── pages/
│ ├── index.tsx # Homepage
│ ├── projects.tsx # Portfolio projects
│ ├── contact.tsx # Contact page (optional)
│ └── _app.tsx # Global layout wrapper
├── components/
│ ├── Hero.tsx # Hero section
│ ├── About.tsx # About me block
│ ├── Services.tsx # Services section
│ ├── Portfolio.tsx # Projects grid
│ ├── Testimonials.tsx # Client quotes
│ ├── Footer.tsx # Socials + nav links
│ └── ThemeToggle.tsx # Dark/light switch
├── styles/
│ └── globals.css # Tailwind & global styles
├── utils/
│ └── constants.ts # Reusable project/config data
├── tailwind.config.js
├── tsconfig.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Benedict258/portfolio-site.git
cd portfolio-site
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Start Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000 to see your site live.
