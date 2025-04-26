import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ProductData } from "../Data/ProductData";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helper";

const ProductsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Result</Text>
      <Text style={styles.tagLine}>
        Price and other details may very bassed on product aside and color
      </Text>
      {ProductData.map((item) => (
        <View style={styles.productSection}>
          <View style={styles.productImageSection}>
            <Image style={styles.productImage} source={item.image} />
          </View>
          <View style={styles.productDetailSection}>
            <Text style={styles.sponsored}>sponsored</Text>
            <Text style={styles.productName}>{item.productName} </Text>
            <View style={styles.row}>
              <Text style={styles.rating}>{item.rating} </Text>
              {getRating(item.rating)}
              <Text style={styles.ratingCount}> {item.ratingCount} </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.price}>{item.price} ₺</Text>
              <Text style={styles.crossout}>{item.crossOutText} ₺</Text>
            </View>
            <Text style={styles.cashback}>
              Up to 5% cashback with Amazon Pay Credit card
            </Text>
            <Image source={PrimeLogo} style={styles.logo} />

            <Text style={styles.cashback}>
              FREE Delivery by {item.deliveryBy}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tagLine: {
    fontSiz: 11,
    color: "gray",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productSection: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    marginVertical: 15,
  },
  productImageSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
    padding: 10,
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 12,
    color: "#000",
  },
  productName: {
    fontSize: 13,
    color: "#000",
    lineHeight: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: "#017185",
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: "#017185",
    marginLeft: 3,
  },
  price: {
    fontSize: 15,
    color: "#000000",
  },
  crossout: {
    textDecorationLine: "line-through",
    color: "gray",
    fontSize: 12,
    marginLeft: 6,
  },
  cashback: {
    fontSize: 10,
    marginVertical: 3,
  },
  logo: {
    height: 15,
    width: 42,
    marginVertical: 3,
  },
});
