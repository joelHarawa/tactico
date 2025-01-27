import { Text,
         View, 
         KeyboardAvoidingView, 
         Platform, ScrollView, Keyboard, 
         TouchableWithoutFeedback 
        } from "react-native";
import LoginForm from "./components/loginform";
import Logo from "./components/logo";
import styled from "styled-components/native";
import {useFonts, 
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_400Regular
        } from "@expo-google-fonts/inter";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular
  });

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
              <LoginForm/>
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
  overflow: hidden;
`;

const Background = styled.ImageBackground`
  object-fit: cover;
  height: 100%;
  width: 120%;
  position: absolute;
  left: -40%; 
`;

const TitleBox = styled.View`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 49px;
  margin-top: 20%;
  color: white;
  font-family: "Inter_600SemiBold";
`;
