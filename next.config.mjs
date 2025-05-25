/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // You might want to add this if you're not using a hosting provider that supports Next.js image optimization out-of-the-box for static sites,
  // or if you encounter issues with images in your static export.
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
