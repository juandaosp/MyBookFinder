# 📚 Book Finder

**Book Finder** is a simple React-based application built with [Next.js](https://nextjs.org/) using **Static Site Generation (SSG)**. It allows users to search for books using the [Google Books API](https://developers.google.com/books).

> Built with Next.js 15, React 19, and styled using Tailwind CSS 4.

## 🚀 Features

- 🔍 Search for books using keywords
- 📖 Display book results using the Google Books API
- ⚡️ Fast static export for deployment anywhere (GitHub Pages, Netlify, Vercel static, etc.)
- 🎨 Minimal UI with Tailwind CSS
- 🪶 Lightweight with modern React (Client Components)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (SSG via `next export`)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [Google Books API](https://developers.google.com/books)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-finder.git
cd book-finder
```

2. Install dependencies
```bash
npm install
```
3. Run locally in development
```bash
npm run dev
```
4. Build for production (Static Export)
```bash
npm run build
```
Then export the site:
```bash
npm run next export
```
🔧 Configuration
next.config.mjs
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Uncomment below if you need unoptimized images
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
```

📁 Project Structure (Simplified)
```lua
book-finder/
├── public/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── containers/
│   │   └── page.js       # Main homepage
├── next.config.mjs
├── tailwind.config.js
└── package.json

```
🧪 Linting
```bash
npm run lint
```

🛑 Notes
Be sure to set the appropriate CORS policy if self-hosting.

This app uses Client Components ('use client') due to useState and useEffect.

📤 Deployment
Since it's a static export, you can deploy the out/ directory on:

* GitHub Pages

* Netlify

* Vercel (static mode)

* Firebase Hosting

* Surge

or any static file hosting service

📘 License
MIT — Feel free to use, modify, and distribute.

✨ Author
Developed by Juan David Ospina Vasquez — LinkedIn · GitHub

