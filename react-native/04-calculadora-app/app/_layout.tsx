import { globalStyles } from "@/styles/global-styles";
import { Slot } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";


const RootLayout = () => {
    return (
        <View style={globalStyles.background}>
            {/* para renderizar el contenido */}
            <Slot />

            <StatusBar style="light" />
        </View>
    )
}

export default RootLayout;