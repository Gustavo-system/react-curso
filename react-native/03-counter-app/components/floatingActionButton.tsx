import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string,
    // metodos o acciones
    onPress?: () => void,
    onLongPress?: () => void,
    position?: 'left' | 'right'
}


export default function FloatingActionButton({
    label,
    onPress,
    onLongPress,
    position = 'right'
}: Props) {
    return (
        <Pressable
            style={({ pressed }) =>
                [
                    styles.floatingButton,
                    position == 'left' ? styles.positionLeft : styles.positionRight,
                    pressed ? { opacity: 0.7 } : { opacity: 1 }
                ]
            }
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: '#fff', fontSize: 24 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        // right: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3
    },
    positionRight: {
        right: 30
    },
    positionLeft: {
        left: 30
    }
})