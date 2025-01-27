import { View, Pressable } from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const SignUpForm = () => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const signup = async () => {
        if (password1 != password2) { 
            setError(true);
            setErrorMessage("Passwords don't match.");
            return;
        } if (!passwordRegex.test(password1)) {
            setError(true);
            setErrorMessage("Password must include 8 Characters," +
            " at least 1 special character, 1 capital letter, and 1 digit.")
            return;
        }


        try {
            // POST the email and password to the backend
            const response = await fetch("http://localhost:4000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    password: password1
                })
            });

            if (response.ok) {
                router.push("./");
            } else if (response.status == 409) {
                setError(true);
                const data = await response.json();
                setErrorMessage(data.message);
            }

            console.log(response.json);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <SubtitleBox>
                <Subtitle>Sign Up</Subtitle>
            </SubtitleBox>
            <ErrorBox>
                {error ? <Error>{errorMessage}</Error> : <Error/>}
            </ErrorBox>
            <Inputs>
                <Input 
                    placeholder="email"
                    placeholderTextColor="black"
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="first name"
                    placeholderTextColor="black"
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder="password" 
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword1(text)}
                />
                <Input 
                    placeholder="re-enter password" 
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword2(text)}
                />
            </Inputs>
            <Buttons>
                <Button onPress={signup}>
                    <ButtonText>Sign Up</ButtonText>
                </Button>
                <Button onPress={() => router.push("./")} >
                    <ButtonText>Login</ButtonText>
                </Button>
            </Buttons>
        </Container>
    )
}

export const Container = styled.View`
    display: flex;
    height: 50%;
    width: 100%;
`;

const SubtitleBox = styled.View`
    display: flex;
    align-items: center;
    height: 5%;
`;
const ErrorBox = styled.View`
    display: flex;
    align-items: center;
    height: 5%;
    width: 100%;
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
`;

const Buttons = styled.View`
    align-items: center;
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
  font-size: 18px;
  color: white;
  font-family: "Inter_500Medium";
`;

const Error = styled.Text`
  font-size: 12px;
  color: white;
  font-family: "Inter_400Regular";
  text-align: center;
  width: 90%;
`;

export default SignUpForm;