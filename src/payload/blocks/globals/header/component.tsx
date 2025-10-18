import { getCachedGlobal } from "@/payload/utilities/get-globals";

import { HeaderClient } from "@/payload/blocks/globals/header/component-client";

import type { Header } from "@/payload-types";

const Header = async () => {
	const headerData: Header = await getCachedGlobal("header", 1)();

	return <HeaderClient data={headerData} />;
};

export { Header };
