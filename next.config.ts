import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental'
  },
  // Prevent build error on Vercel, while doing tutorial
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
