/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
           
          },
        ],
      },
      basePath: '/blogsite',
      assetPrefix: '/blogsite/',
};

export default nextConfig;
