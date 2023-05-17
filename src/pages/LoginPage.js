import react, { useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge, getCities } from '../redux/actions'

export default function ScreenA({ navigation }) {

    const { name, age, cities } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCities());
        // dispatch(setName());
    })

    onPressHandler = () => {
        navigation.navigate('ScreenB', { itemName: ' A ekranından gelsim slm cnm', itemId: 12 })
    }

    // const setData = async () => {
    //     dispatch(setName(name))
    //     dispatch(setAge(age))
    //     dispatch(getCities());
    // }
    return (
        <View style={styles.sectionContainer}>
            {/* <Text style={styles.sectionTitle}>
                Screen A
            </Text>
            <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value) => dispatch(setName(value))} />
            <TextInput style={styles.input} placeholder='Enter your age' onChangeText={(value) => dispatch(setAge(value))} />
            <Pressable onPress={onPressHandler} style={{ backgroundColor: 'blue' }}> */}
                <FlatList
                    data={cities}
                    renderItem={({item})=>(
                        <View>
                            <Text style={styles.input}>{item.country}</Text>
                            <Text style={styles.input}>{item.city}</Text>
                        </View>
                    )

                    }

                />
                 <Pressable onPress={onPressHandler} style={{ backgroundColor: 'blue' }}></Pressable>
            {/* </Pressable> */}

        </View>)
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: 'purple'

    },
    sectionTitle: {
        margin: 5,
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
    highlight: {
        fontWeight: '700',
    },
});