import dotenv from 'dotenv';
dotenv.config();

console.log('API_URL:', process.env.API_URL); // Add this line to debug

const API_URL = process.env.API_URL;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/test/:path*',
        destination: `${API_URL}/test/:path*` // Proxy to Backend
      }
    ];
  }
};

export default nextConfig;