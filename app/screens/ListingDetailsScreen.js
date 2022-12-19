import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sell</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userDetails}>
          <ListItem
            image={require("../assets/gopall.jpeg")}
            title="Gopal Saraf"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  userDetails: {
    marginVertical: 40,
  },
});
