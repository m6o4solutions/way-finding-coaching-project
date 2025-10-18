import { isAuthenticated, isPublic } from "@/payload/access/access-control";

import type { CollectionConfig } from "payload";

const FAQs: CollectionConfig = {
	slug: "faqs",
	access: {
		create: isAuthenticated,
		delete: isAuthenticated,
		read: isPublic,
		update: isAuthenticated,
	},
	admin: {
		defaultColumns: ["question", "answer", "createdAt", "updatedAt"],
		useAsTitle: "question",
	},
	labels: {
		singular: "FAQ",
		plural: "FAQs",
	},
	fields: [
		{
			name: "question",
			type: "text",
			label: "Question",
			required: true,
		},
		{
			name: "answer",
			type: "textarea",
			label: "Answer",
			required: true,
		},
	],
};

export { FAQs };
