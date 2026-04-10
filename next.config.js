/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  transpilePackages: ["ogl", "react-wrap-balancer", "@number-flow/react"],
};

module.exports = nextConfig;
