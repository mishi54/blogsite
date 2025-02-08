/** @type {import('next').NextConfig} */
const nextConfig = {
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
      output: 'export',
};

export default nextConfig;
