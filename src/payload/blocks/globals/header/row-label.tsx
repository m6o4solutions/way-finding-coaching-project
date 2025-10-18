"use client";

import { RowLabelProps, useRowLabel } from "@payloadcms/ui";

import { Header } from "@/payload-types";

const RowLabel = (_props: RowLabelProps) => {
	const data = useRowLabel<NonNullable<Header["navItems"]>[number]>();

	const label = data?.data?.link?.label
		? `Navigation Item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ""}: ${data?.data?.link?.label}`
		: "Row";

	return <div>{label}</div>;
};

export { RowLabel };
