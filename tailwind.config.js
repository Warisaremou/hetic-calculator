/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				gray: "#E8E9EA",
				state: {
					success: "#1CBF58",
					warning: "#FACC15",
					error: "#DF1B1B",
					info: "#4486F2",
				},
				neutral: {
					50: "#E8E9EA",
					100: "#B8BABE",
					200: "#96989E",
					300: "#666A72",
					400: "#484D56",
					500: "#1A202C",
					600: "#181D28",
					700: "#12171F",
					800: "#0E1218",
					900: "#0B0D12",
				},
				primary: {
					50: "#EEF7FF",
					100: "#D9ECFF",
					200: "#BCDFFF",
					300: "#8ECBFF",
					400: "#59ADFF",
					500: "#388EFF",
					600: "#1B6AF5",
					700: "#1455E1",
					800: "#1744B6",
					900: "#1744B6",
					950: "#142757",
				},
			},
			fontFamily: {
				headingLight: ["SpaceGrotesk-Light", "sans-serif"],
				headingRegular: ["SpaceGrotesk-Regular", "sans-serif"],
				headingMedium: ["SpaceGrotesk-Medium", "sans-serif"],
				headingSemiBold: ["SpaceGrotesk-SemiBold", "sans-serif"],
				headingBold: ["SpaceGrotesk-Bold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
