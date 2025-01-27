import SignUp, {Background} from "@/app/signup";
import { render } from "@testing-library/react-native";

describe("<SignUp />", () => {
    test("Title renders correctly on SignUp", () => {
        const { getByText } = render(<SignUp/>);
        getByText("Tactico");
    });

    test("Background image source is correct", () => {
        const { getByTestId } = render(
            <Background 
                testID="background-image" 
                source={require("../media/kyle-hinkson-dxcVW0W_q_o-unsplash.jpg")}
            />
        );

        expect(getByTestId("background-image").props.source).toEqual(
            require("../media/kyle-hinkson-dxcVW0W_q_o-unsplash.jpg")
        );
    });
    
});