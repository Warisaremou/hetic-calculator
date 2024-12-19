import { colors } from "@/constants/styles";
import React from "react";
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";

type Props = {
	color?: string;
	size?: number | "small" | "large";
	style?: StyleProp<ViewStyle>;
};

export default function Loader({ color, size, style }: Props) {
	return (
		<ActivityIndicator
			color={color ?? colors.whiteColor}
			size={size ?? "small"}
			style={
				style ?? {
					marginRight: 5,
				}
			}
		/>
	);
}
