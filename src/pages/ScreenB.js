import react from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'


export default function ScreenB({ navigation, route }) {

 const { itemName, itemId } = route.params;
    console.log(route)

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
           {itemName}        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        margin: 5,
        fontSize: 24,
        fontWeight: '600',
        color: 'red'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});