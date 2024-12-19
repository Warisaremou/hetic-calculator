import { cn } from "@/lib/utils";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

type Props = {
	className?: string;
	cursorColor?: string;
	placeholderTextColor?: string;
};

export default function Input({ className, cursorColor, placeholderTextColor, ...props }: Props & TextInputProps) {
	return (
		<TextInput
			{...props}
			cursorColor={cursorColor ?? "#388EFF"}
			placeholderTextColor={placeholderTextColor ?? "#96989E"}
			className={cn(
				"border focus:border-2 h-11 w-full py-2 px-3 rounded-xl flex items-center text-sm font-headingMedium border-neutral-100 bg-white focus:border-primary-500",
				className
			)}
		/>
	);
}
