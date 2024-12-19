import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		"SpaceGrotesk-Light": require("../assets/fonts/SpaceGrotesk-Light.ttf"),
		"SpaceGrotesk-Regular": require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
		"SpaceGrotesk-Medium": require("../assets/fonts/SpaceGrotesk-Medium.ttf"),
		"SpaceGrotesk-SemiBold": require("../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
		"SpaceGrotesk-Bold": require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
	});

	useEffect(() => {
		if (error) throw error;

		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);

	if (!fontsLoaded) {
		return null;
	}

	if (!fontsLoaded && !error) {
		return null;
	}

	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#FFFFFF",
				},
				headerShadowVisible: false,
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
		</Stack>
	);
}
