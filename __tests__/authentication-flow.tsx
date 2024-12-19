import AuthStep1Form from "@/components/forms/auth-step-1";
import AuthStep2Form from "@/components/forms/auth-step-2";
import { render } from "@testing-library/react-native";

describe("Authentication flow", () => {
	test("should render the first step", () => {
		const tree = render(<AuthStep1Form />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test("should render the second step", () => {
		const tree = render(<AuthStep2Form />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
