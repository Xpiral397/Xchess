/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.(gltf|glb)$/,
      type: "asset/resource",
      generator: { filename: "static/media/[name]-[hash][ext]" },
    });
    return config;
  },
};

module.exports = nextConfig;
