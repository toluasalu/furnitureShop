import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const DetailsScreen = () => {
    return (
        <SafeAreaView>
            <Text style={{ color: "black" }}>Details</Text>
            <StatusBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default DetailsScreen;