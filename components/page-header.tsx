import React, { ReactNode } from "react";
import { Text } from "react-native";

export default function PageHeader({ children }: { children: ReactNode }) {
	return <Text className="mb-5 font-headingBold text-neutral-500 text-xl">{children}</Text>;
}
