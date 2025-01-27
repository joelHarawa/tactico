import styled from "styled-components/native";

const Logo = () => {
    return (
        <Field>
            <Line/>
            <Circle/>
        </Field>
    )
}

const Field = styled.View`
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: white;
    width: 140px;
    height: 140px;
    border-width: 5px;
`;

const Line = styled.View`
    border-color: white;
    height: 140px;
    border-width: 2.6px;
`;

const Circle = styled.View`
    border-color: white;
    width: 40px;
    height: 40px;
    border-width: 5px;
    border-radius: 50%;
    position: absolute;
`;

export default Logo;