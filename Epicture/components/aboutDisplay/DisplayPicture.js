import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import NbViews from "./NbViews";
import ButtonFav from "./ButtonFav";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
const DisplayPicture = (props) => {
  const image = props.image;
  let url;
  if (image.cover) {
    url = "https://i.imgur.com/" + image.cover + ".jpg";
  } else if (image.link) {
    url = image.link;
  } else {
    url = "https://stickeramoi.com/9333-large_default/sticker-lettre-e.jpg";
  }

  return (
    <View style={styles.display}>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
      />
      <Text style={styles.text}>{url}</Text>
      <Text style={styles.text}>{image.title}</Text>
      <NbViews image={image} />
      <ButtonFav image={image} />
    </View>
  );
};

export default DisplayPicture;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 2,
  },
  display: {
    width: width,
    height: height * 0.7,
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
