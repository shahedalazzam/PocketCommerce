import {
   View,
   Text,
   StyleSheet,
   Image,
   ScrollView,
   Button,
   Pressable,
   TouchableOpacity,
} from "react-native";
import React from "react";
import CartItem from "./components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useCartsContext } from "../../hooks/useCartContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cart() {
   const { cards, dispatch } = useCartsContext();
   const navigation = useNavigation();
   return (
      <View style={{ flex: 1 }}>
         {cards.length == 0 && (
            <View style={styles.containerEmpty}>
               <Text>Your Cart Is empty</Text>
               <MaterialCommunityIcons
                  name="cart-outline"
                  style={styles.iconButton}
                  size={24}
                  color="black"
               />
            </View>
         )}
         {cards.length != 0 && (
            <>
               <ScrollView style={styles.container}>
                  {cards.map((card, index) => {
                     return <CartItem key={index} card={card} />;
                  })}
               </ScrollView>
               <TouchableOpacity
                  onPress={() => navigation.navigate("CheckoutScreen")}
               >
                  <Text style={styles.button}>Go To Check Out</Text>
               </TouchableOpacity>
            </>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 30,
      paddingBottom: 20,
      paddingHorizontal: 20,
      gap: 10,
   },
   containerEmpty: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
   },
   button: {
      backgroundColor: "#FF9900",
      padding: 15,
      textAlign: "center",
      color: "white",
      fontWeight: "700",
      fontSize: 18,
      borderRadius: 6,
      marginBottom: 5,
      width: "90%",
      alignSelf: "center",
   },
});
