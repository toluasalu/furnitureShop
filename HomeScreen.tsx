import React,  { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, 
       TextInput, TouchableOpacity, FlatList, Dimensions, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from './constants/colors';
import furnitures from "./constants/furnitures";

const {width} = Dimensions.get("screen");

const categoryItems = [
    { name: "Chair", iconName: "seat-outline" },
    { name: "Table", iconName: "table-furniture" },
    { name: "Cupboard", iconName: "cupboard-outline" },
    { name: "Bed", iconName: "bed-queen-outline" }

]

const HomeScreen = ({ navigation }) => {

    const ListCategories = () => {
        const [ selCategoryIndex, setSelCategoryIndex ] = useState(0);

        return (
            <View style={styles.categoriesContainer}>
                {categoryItems.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.8} 
                    key={index}
                    onPress ={() => setSelCategoryIndex(index)}>
                    <View style={[styles.itemCategoryBtn, {backgroundColor: selCategoryIndex == index ? Colors.primary: Colors.white}]}>
                    <MaterialCommunityIcons name={item.iconName} size={20} color={selCategoryIndex == index ? Colors.white : Colors.primary} />
                    <Text style={[styles.categoryText, {color: selCategoryIndex == index ? Colors.white : Colors.primary } ]}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                  
                ))}
            </View>
        )
    }

      const Card = ({furniture}) => {
          return (
           <Pressable onPress={() => navigation.navigate("Details", furniture)}>
             <View style={styles.card}>
             <View style={styles.iconContainer}>
               <MaterialCommunityIcons name="heart" color={furniture.liked ? Colors.red : Colors.primary}/>
            </View>
             <Image source={furniture.image} style={{
                height: 120, 
                width: "100%", 
                borderRadius: 10}} />

               <Text style={styles.cardName}>{furniture.name}</Text>
                <View style={{marginTop: 5, flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.price}>{furniture.price}</Text>
                    <View style={{flexDirection: "row", marginLeft: 10}}>
                      <MaterialCommunityIcons name="star" color={Colors.yellow} size={18} />
                      <Text style={styles.rating}> 4.3</Text>
                    </View>
                </View>
             </View>
          </Pressable>
          )
           
      }

      const ItemCard = ({furniture}) => {
        return(
            <View style={styles.itemCard}>
                <Image source={furniture.image} style={{
                    width: 100, 
                    height: "100%", 
                    borderTopLeftRadius: 10, 
                    borderBottomLeftRadius: 10,
                    marginRight: 10,

                    }}/>
                    <View style={{paddingVertical: 15, justifyContent: "center"}}>
                        <Text style={styles.cardName}>{furniture.name}</Text>
                        <View style={{flexDirection: "row", marginTop:10}}>
                            <Text style={styles.price}>{furniture.price}</Text>
                          <View style={{flexDirection: "row", marginLeft: 10}}>
                             <MaterialCommunityIcons name="star" color={Colors.yellow} size={18}/>
                             <Text style={styles.rating}>4.3</Text>
                           </View>
                        </View>
                       
                    </View>
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
                <Text style={styles.decText}> Top Furniture</Text>
                <FlatList 
                contentContainerStyle={{paddingLeft: 20}}
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={furnitures}
                renderItem={({item}) => <Card furniture ={item} />}
                />
                <Text style={styles.decText}>Popular</Text>
                <FlatList 
                contentContainerStyle={{paddingLeft: 20}}
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={furnitures}
                renderItem={({item}) => <ItemCard furniture ={item} />}
                />
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
        paddingHorizontal: 20,
        paddingVertical: 10
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
    },
    categoryText: {
        fontSize: 13,
        fontWeight: "bold",
        color: Colors.primary,
        marginLeft: 5,
    },

    card: {
        height: 190,
        backgroundColor: Colors.white,
        elevation: 10,
        width: width/2.5,
        marginRight: 20,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    }, 

    cardName: {
        marginTop:10,
        fontSize: 12,
        color: Colors.primary,
        fontWeight: "bold"
    },

    price: {
        fontSize: 12,
        color: Colors.primary,
        fontWeight: "bold"
    },

    rating: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 12
    },
    itemCard: {
      height: 90,
      width: -100,
      backgroundColor: Colors.white,
      elevation: 10,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 10,
      flexDirection: "row"

    },
    iconContainer: {
      height: 25,
      width: 25,
      backgroundColor: Colors.white,
      position: "absolute",
      elevation: 2,
      right: 15,
      top: 15,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center"

    } 
});


export default HomeScreen;