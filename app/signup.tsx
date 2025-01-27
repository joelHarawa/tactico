import { 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Platform, ScrollView, Keyboard, 
  TouchableWithoutFeedback  } from "react-native";
import SignUpForm from "./components/signupform";
import styled from "styled-components/native";
import Logo from "./components/logo";

export default function SignUp() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <Container>
      <Background source={require("../media/kyle-hinkson-dxcVW0W_q_o-unsplash.jpg")}/>
      {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <ScrollView 
              contentContainerStyle={{ flexGrow: 1 }}> */}
      <TitleBox>
        <Title>Tactico</Title>
        <Logo/>
      </TitleBox>
      <SignUpForm/>
      {/* </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView> */}
    </Container>
  );
}

// Components
const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Background = styled.ImageBackground`
  object-fit: cover;
  height: 100%;
  width: 120%; /* Increase width to allow for left adjustment */
  position: absolute;
  left: -40%; /* Adjust this value to control the left offset */
`;

const TitleBox = styled.View`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 49px;
  margin-top: 20%;
  color: white;
  font-family: "Inter_600SemiBold";
`;
