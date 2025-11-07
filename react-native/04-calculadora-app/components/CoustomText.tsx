import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
    variant?: 'h1' | 'h2'
}

const CoustomText = ({ children, variant, ...restProps }: Props) => {

    return (
        <Text
            style={[
                { color: 'white' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...restProps}
        >
            {children}
        </Text>
    )

}

export default CoustomText;