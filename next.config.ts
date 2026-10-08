import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:
    process.env.GITHUB_ACTIONS === "true" ? "/azrougMohamedAbdelAli" : undefined,
};

export default nextConfig;
