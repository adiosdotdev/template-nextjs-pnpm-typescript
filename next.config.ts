import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingExcludes: { "*": ["./.runtime/**/*"] },
};

export default nextConfig;
