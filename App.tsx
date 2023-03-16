import {NavigationContainer} from "@react-navigation/native";
import Routes from "./src/routes/auth.routes";

import {Karla_500Medium, Karla_700Bold, useFonts} from '@expo-google-fonts/karla'

import React from "react";
import AppLoading from "expo-app-loading";

export default function App() {
    let [fontsLoaded, error] = useFonts({
        Karla_Bold: Karla_700Bold,
        Karla_Medium: Karla_500Medium
    });

    console.log(fontsLoaded);

    if(!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}
