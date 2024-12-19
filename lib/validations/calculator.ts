import { z } from "zod";

export const calculatorSchema = z
	.object({
		firstNumber: z
			.string({
				required_error: "Please enter the first number",
			})
			.min(1, {
				message: "Please enter a valid number",
			}),
		secondNumber: z
			.string({
				required_error: "Please enter the second number",
			})
			.min(1, {
				message: "Please enter a valid number",
			}),
	})
	.required();

export type CalculatorPayload = z.infer<typeof calculatorSchema>;
