import { Image, StyleSheet } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../Data/CarouselData";

const Carousel = () => {
  return (
    <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
      {CarouselData.map((item) => (
        <Image key={item.id} source={item.image} style={styles.imgStyle} />
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 250,
  },
  wrapper: {
    height: 300,
  },
});
