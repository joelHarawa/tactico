import { View, Pressable, TextInput } from "react-native";
import styled from "styled-components/native";
import { useState } from "react";
import { useRouter } from "expo-router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return (
        <Container>
            <SubtitleBox>
                <Subtitle>Login</Subtitle>
            </SubtitleBox>
            <Inputs>
                <Input 
                    placeholder="email"
                    placeholderTextColor="black"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Input 
                    placeholder="password"
                    placeholderTextColor="black" 
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </Inputs>
            <Buttons>
                <Button>
                    <ButtonText>Login</ButtonText>
                </Button>
                <Button onPress={() => router.push("./signup")}>
                    <ButtonText>Sign Up</ButtonText>
                </Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.View`
    display: flex;
    height: 50%;
    width: 100%;
`;

const SubtitleBox = styled.View`
    display: flex;
    align-items: center;
`;

const Inputs = styled.View`
    display: flex;
    align-items: center;
`;

const Input = styled.TextInput`
    background-color: white;
    width: 70%;
    height: 40px;
    border-radius: 25px;
    padding-inline: 4%;
    margin-top: 20px;
    font-family: "Inter_400Regular";
    color: black;
`;

const Buttons = styled.View`
    align-items: center;
    margin-top: 40px;
`;

const Button = styled.Pressable`
    background-color: #2C2C2C;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 40px;
    border-radius: 25px;
    margin-top: 20px;
`;

const ButtonText = styled.Text`
    color: white;
    font-family: "Inter_400Regular";
`;

const Subtitle = styled.Text`
  font-size: 26px;
  color: white;
  font-family: "Inter_500Medium";
`;

export default LoginForm;