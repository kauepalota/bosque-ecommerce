import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Main from "../pages/Main";
import SignIn from "../pages/SignIn";

export const AuthStack = createStackNavigator();

const Routes: React.FC = () => (
    <AuthStack.Navigator
    initialRouteName="Main"
    screenOptions={{
        headerShown: false
    }}>
        <AuthStack.Screen name={"Main"} component={Main} />
        <AuthStack.Screen name={"SignIn"} component={SignIn} />
    </AuthStack.Navigator>
);

export default Routes;