import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {ButtonArea, ButtonText, Header, Logo, MainText, SubText, Wrapper, YellowSquare} from './styles';

const Main: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Wrapper>
            <Header>
                <Logo source={require('../../assets/img.png')}/>
            </Header>

            <YellowSquare>
                <MainText>Bem-vindo ao aplicativo de vendas do terceirão</MainText>
                <SubText>Aqui você pode depositar o dinheiro das compras para maior segurança do seu filho!</SubText>
                <ButtonArea onPress={() => {
                    navigation.navigate("SignIn");
                }}>
                    <ButtonText>Autenticar-se</ButtonText>
                </ButtonArea>
            </YellowSquare>
        </Wrapper>
    );
};

export default Main;