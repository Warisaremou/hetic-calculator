import Loader from "@/components/loader";
import PageHeader from "@/components/page-header";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { styles } from "@/constants/styles";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalculatorPayload, calculatorSchema } from "@/lib/validations/calculator";

export default function Index() {
	const [isPending, setIsPending] = useState(false);
	const [result, setResult] = useState(0);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CalculatorPayload>({
		resolver: zodResolver(calculatorSchema),
		defaultValues: {
			firstNumber: "",
			secondNumber: "",
		},
		mode: "all",
	});

	const onSubmit = async (data: CalculatorPayload) => {
		setIsPending(true);
		await setResult(parseInt(data.firstNumber) + parseInt(data.secondNumber));
		setTimeout(() => {
			setIsPending(false);
		}, 1500);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View className="flex-1 flex flex-col justify-center">
				<PageHeader>My calculator</PageHeader>
				<View className="mb-5 w-full">
					<View className="mb-3">
						<Controller
							control={control}
							name="firstNumber"
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									placeholder="First number"
									inputMode="numeric"
									onChangeText={onChange}
									onBlur={onBlur}
									value={value}
									className={cn(errors.firstNumber && "border-state-error")}
								/>
							)}
						/>
						{errors.firstNumber && (
							<Text className="mt-1 text-xs font-headingMedium text-state-error">{errors.firstNumber.message}</Text>
						)}
					</View>

					<View>
						<Controller
							control={control}
							name="secondNumber"
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									placeholder="Second number"
									inputMode="numeric"
									onChangeText={onChange}
									onBlur={onBlur}
									value={value}
									className={cn(errors.firstNumber && "border-state-error")}
								/>
							)}
						/>
						{errors.secondNumber && (
							<Text className="mt-1 text-xs font-headingMedium text-state-error">{errors.secondNumber.message}</Text>
						)}
					</View>
				</View>

				<Text className="text-sm font-headingMedium text-neutral-600 mb-5">Result is: {result}</Text>

				<Button
					onPress={handleSubmit(onSubmit)}
					disabled={isPending}
					className={cn("w-full", isPending && "bg-primary-500")}
				>
					{isPending && <Loader />}
					<Text className="text-sm font-headingMedium text-white">{isPending ? "Calculating " : "Calculate"}</Text>
				</Button>
			</View>
		</SafeAreaView>
	);
}
