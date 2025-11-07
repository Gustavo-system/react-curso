import CalculadoraButton from "@/components/CalculadoraButton";
import CoustomText from "@/components/CoustomText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";


const CalculadoraApp = () => {

    return (
        <View style={globalStyles.calculadoraContainer}>
            {/* <Text style={globalStyles.mainResult}
                numberOfLines={1}
                adjustsFontSizeToFit>
                50 x 50
            </Text>

            <Text style={globalStyles.subResult}>
                2500
            </Text> */}


            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <CoustomText variant='h1'>
                    50 x 50
                </CoustomText>

                <CoustomText variant='h2'>
                    2500
                </CoustomText>
            </View>

            {/* filas de botones */}
            <View style={globalStyles.row}>
                <CalculadoraButton label="C" onPress={() => console.log("click C")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="+/-" onPress={() => console.log("click +/-")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="del" onPress={() => console.log("click del")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="/" onPress={() => console.log("click /")} color={Colors.orange} />
            </View>

            <View style={globalStyles.row}>
                <CalculadoraButton label="7" onPress={() => console.log("click 7")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="8" onPress={() => console.log("click 8")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="9" onPress={() => console.log("click 9")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="X" onPress={() => console.log("click X")} color={Colors.orange} />
            </View>

            <View style={globalStyles.row}>
                <CalculadoraButton label="4" onPress={() => console.log("click 4")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="5" onPress={() => console.log("click 5")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="6" onPress={() => console.log("click 6")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="-" onPress={() => console.log("click -")} color={Colors.orange} />
            </View>

            <View style={globalStyles.row}>
                <CalculadoraButton label="1" onPress={() => console.log("click 1")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="2" onPress={() => console.log("click 2")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="3" onPress={() => console.log("click 3")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="+" onPress={() => console.log("click +")} color={Colors.orange} />
            </View>

            <View style={globalStyles.row}>
                <CalculadoraButton label="0" onPress={() => console.log("click 0")} blackText color={Colors.lightGray} doubleSize />
                <CalculadoraButton label="." onPress={() => console.log("click .")} blackText color={Colors.lightGray} />
                <CalculadoraButton label="=" onPress={() => console.log("click =")} color={Colors.orange} />
            </View>


        </View>
    )

}


export default CalculadoraApp;