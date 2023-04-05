/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "talkinglandsdevamplib0049fab41ad495c98611d7786b180525-dev.s3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
