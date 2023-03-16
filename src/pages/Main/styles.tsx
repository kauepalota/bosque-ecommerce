import styled from "styled-components/native";

import {Platform} from "react-native";
import Constants from "expo-constants";

import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: white;
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};

  justify-content: space-between;
  align-items: center;
`;

export const YellowSquare = styled.View`
  width: 100%;
  height: 100%;
  background: ${colors.yellow};
  border-radius: 24px;
  align-items: center;
`;

export const Header = styled.View`
  height: 53%;
`

export const Logo = styled.Image`
  width: 123px;
  height: 183px;
  margin-top: 15%;
`;


export const MainText = styled.Text`
  width: 280px;
  font-family: 'Karla_Bold';
  line-height: 24px;
  font-size: 24px;
  margin-top: 33px;
`;

export const SubText = styled.Text`
  width: 280px;
  height: 72px;
  font-family: 'Karla_Medium';
  line-height: 24px;
  font-size: 16px;
  margin-top: 18px;
`;

export const ButtonArea = styled.TouchableOpacity`
  height: 40px;
  width: 280px;
  margin-top: 72px;
  background-color: ${colors.blue};
  border-radius: 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  width: 101px;
  height: 24px;
  margin-top: 8px;
  font-family: 'Karla_Medium';
  line-height: 24px;
  font-size: 16px;
  color: white;
`;