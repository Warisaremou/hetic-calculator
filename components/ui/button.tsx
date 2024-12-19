import { cn } from "@/lib/utils";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonVariant =
	| "primary"
	| "primary-outline"
	| "secondary"
	| "link"
	| "secondary-outline"
	| "icon"
	| "icon-outline"
	| "destructive";

type Props = {
	className?: string;
	children: React.ReactNode;
	variant?: ButtonVariant;
};

export default function Button({ className, children, variant, ...props }: Props & TouchableOpacityProps) {
	const variantsStyles = {
		primary: "bg-primary-700",
		"primary-outline": "bg-transparent border border-primary-700",
		secondary: "bg-neutral-600",
		"secondary-outline": "bg-transparent border border-neutral-600",
		link: "bg-none",
		icon: "bg-transparent h-6 w-6",
		"icon-outline": "bg-transparent h-11 w-11 rounded-xl border border-neutral-100",
		destructive: "bg-state-error",
	} satisfies Record<ButtonVariant, string>;

	return (
		<TouchableOpacity
			{...props}
			className={cn(
				"flex-row items-center rounded-xl h-11 justify-center",
				className,
				variantsStyles[variant ?? "primary"]
			)}
		>
			{children}
		</TouchableOpacity>
	);
}
