import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Login from "../components/login";
import Logout from "../components/logout";

import FindScreen from "./FindScreen";

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Login />
      <Logout />
    </View>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A3239",
  },
});
