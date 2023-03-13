import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from './constants/colors';


const categoryItems = [
    { name: "Chair", iconName: "seat-outline" },
    { name: "Table", iconName: "table-furniture" },
    { name: "Cupboard", iconName: "cupboard-outline" },
    { name: "Bed", iconName: "bed-queen-outline" }

]

const HomeScreen = ({ navigation }) => {

    const ListCategories = () => {
        return (
            <View style={styles.categoriesContainer}>
                {categoryItems.map((item, index) => (
                    <View style={[styles.itemCategoryBtn]}>
                        <MaterialCommunityIcons name={item.iconName} size={20} color={Colors.primary} />
                        <Text style={[]}>{item.name}</Text>
                    </View>
                ))}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 24,
                paddingHorizontal: 20
            }}>
                <MaterialIcons name='horizontal-split' color={Colors.primary} size={28} />
                <MaterialIcons name="shopping-cart" color={Colors.primary} size={28} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{
                    paddingHorizontal: 20,
                    color: Colors.dark,
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 30,
                    width: "55%"
                }}>Best Furniture For Your Home</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                    <View style={styles.searchInput}>
                        <MaterialIcons name='search' color={Colors.grey} size={25} />
                        <TextInput placeholder='Search' />
                    </View>
                    <View style={{
                        backgroundColor: Colors.primary,
                        height: 50,
                        width: 50,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                    }}>
                        <MaterialIcons name='tune' color={Colors.white} size={28} />
                    </View>
                </View>

                <Text style={styles.decText}>Categories</Text>
                <ListCategories />
            </ScrollView>
            <StatusBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    searchInput: {
        height: 50,
        backgroundColor: Colors.light,
        flex: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,

    },
    decText: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    categoriesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,

    },
    itemCategoryBtn: {
        flexDirection: "row",
        backgroundColor: Colors.light,
        padding: 10,
        borderRadius: 7,
        alignItems: "center"
    }
});


export default HomeScreen;