const withPWA = require("next-pwa")({
  dest: "public",
  swSrc: "sw.ts",
  additionalManifestEntries: ["https://dummyimage.com/720x600"],
  disable: process.env.NODE_ENV !== "production",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
};

module.exports = withPWA(nextConfig);
