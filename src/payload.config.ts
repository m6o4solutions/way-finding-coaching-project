import sharp from "sharp";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

import path from "path";
import { fileURLToPath } from "url";

import { collections } from "@/payload/collections";
import { globals } from "@/payload/blocks/globals";
import { Users } from "@/payload/collections/users/schema";

import { lexical } from "@/payload/fields/lexical";
import { resend } from "@/payload/fields/resend";

import { plugins } from "@/payload/plugins/schema";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		importMap: {
			baseDir: path.resolve(dirname),
		},
		livePreview: {
			breakpoints: [
				{
					label: "Mobile",
					name: "mobile",
					width: 375,
					height: 667,
				},
				{
					label: "Tablet",
					name: "tablet",
					width: 768,
					height: 1024,
				},
				{
					label: "Desktop",
					name: "desktop",
					width: 1440,
					height: 900,
				},
			],
		},
		meta: {
			titleSuffix: " | Way Finding Coaching",
		},
		user: Users.slug,
	},
	collections: collections,
	db: mongooseAdapter({
		url: process.env.DATABASE_URI!,
	}),
	editor: lexical,
	email: resend,
	globals: globals,
	plugins: [...plugins],
	secret: process.env.PAYLOAD_SECRET!,
	sharp,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
});
