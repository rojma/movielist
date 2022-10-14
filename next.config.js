/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'links.papareact.com',
      'image.tmdb.org',
      'https://image.tmdb.org/t/p/original',
    ],
  },
};

module.exports = nextConfig;
