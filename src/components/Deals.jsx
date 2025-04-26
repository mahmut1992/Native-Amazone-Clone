import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecommendedProduct from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommeded deal for you</Text>
      <Image source={RecommendedProduct} style={styles.imageStyle} />
      <View style={styles.bottomSecrion}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offdeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,5999 ₺</Text>
          <Text style={styles.actualPrice}>1,9000 ₺</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Cleanser, Moisturizing, refreshing, Soothing,
          hydrating.
        </Text>
        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageStyle: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000",
  },
  bottomSecrion: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    width: 60,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  offdeal: {
    fontSize: 12,
    color: "#fff",
  },
  deal: {
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 12,
  },
  discountPrice: {
    color: "#000000",
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 12,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },
  productName: {
    fontSize: 14,
    color: "#000000",
  },
  allDeals: {
    fontSize: 14,
    color: "#017185",
    marginVertical: 10,
  },
});
