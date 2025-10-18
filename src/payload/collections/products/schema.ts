import { isAuthenticated } from "@/payload/access/access-control";

import type { CollectionConfig } from "payload";

const Products: CollectionConfig = {
	slug: "products",
	access: {
		admin: isAuthenticated,
		create: isAuthenticated,
		delete: isAuthenticated,
		read: isAuthenticated,
		update: isAuthenticated,
	},
	admin: {
		defaultColumns: ["image", "name", "description", "price", "createdAt", "updatedAt"],
		useAsTitle: "name",
	},
	labels: {
		singular: "Product",
		plural: "Products",
	},
	fields: [
		{
			name: "name",
			type: "text",
			label: "Product Name",
			required: true,
		},
		{
			name: "description",
			type: "text",
			label: "Description",
		},
		{
			name: "price",
			type: "number",
			label: "Price",
			min: 0,
			max: 999999,
		},
		{
			name: "features",
			type: "array",
			label: "Features",
			fields: [
				{
					name: "feature",
					type: "text",
					label: "Feature",
				},
			],
			minRows: 0,
			maxRows: 5,
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			label: "Product Image",
			required: true,
			admin: {
				position: "sidebar",
			},
		},
	],
};

export { Products };
