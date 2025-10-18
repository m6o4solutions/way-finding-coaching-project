import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.way-finding.co.ke",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
		],
	},
	output: "standalone",
	turbopack: {
		resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
	},
	webpack: (webpackConfig) => {
		webpackConfig.resolve.extensionAlias = {
			".cjs": [".cts", ".cjs"],
			".js": [".ts", ".tsx", ".js", ".jsx"],
			".mjs": [".mts", ".mjs"],
		};
		return webpackConfig;
	},
};

const configWithPayload = withPayload(nextConfig, { devBundleServerPackages: false });

export { configWithPayload as default };
