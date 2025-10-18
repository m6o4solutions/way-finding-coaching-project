import { isAuthenticated } from "@/payload/access/access-control";

import type { CollectionConfig } from "payload";

const Testimonials: CollectionConfig = {
	slug: "testimonials",
	access: {
		admin: isAuthenticated,
		create: isAuthenticated,
		delete: isAuthenticated,
		read: isAuthenticated,
		update: isAuthenticated,
	},
	admin: {
		defaultColumns: ["name", "testimony", "createdAt", "updatedAt"],
		useAsTitle: "name",
	},
	labels: {
		singular: "Testimonial",
		plural: "Testimonials",
	},
	fields: [
		{
			name: "name",
			type: "text",
			label: "Name",
			required: true,
		},
		{
			name: "testimony",
			type: "textarea",
			label: "Testimony",
			required: true,
		},
		{
			name: "job",
			type: "text",
			label: "Job Title",
		},
		{
			name: "photo",
			type: "upload",
			relationTo: "media",
			label: "Photo",
			admin: {
				position: "sidebar",
			},
		},
	],
};

export { Testimonials };
