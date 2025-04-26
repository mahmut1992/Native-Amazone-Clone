import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Category } from "../Data/Categories";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../utils/router";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item, key) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.PRODUCTSSCREEN)}
          key={key}
          style={styles.category}
        >
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}> {item.title} </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  container: {
    padding: 10,
  },
  title: {
    color: "#2c4341",
  },
});
