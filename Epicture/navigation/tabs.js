import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FindScreen from "../screens/FindScreen";
import AddScreen from "../screens/AddScreen";
import UserScreen from "../screens/UserScreen";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Login from "../components/login";

function LogoTitle() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../assets/LogoEpicture.png")}
      />
      <Login style={styles.login} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Epicture"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: "",
          headerStyle: {
            backgroundColor: "#2A3239",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "light",
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={FindScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: "",
          headerStyle: { backgroundColor: "#2A3239" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "light" },
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              <Image
                source={require("../assets/icons/search.png")}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: "",
          headerStyle: {
            backgroundColor: "#2A3239",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "light",
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              <Image
                source={require("../assets/icons/add.png")}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: "",
          headerStyle: {
            backgroundColor: "#2A3239",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "light",
          },
          tabBarIcon: () => (
            <View style={styles.screen}>
              <Image
                source={require("../assets/icons/user.png")}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 100,
    height: 50,
    padding: 5,
    marginBottom: 15,
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    backgroundColor: "#242B32",
    height: 80,
  },
  logo: {
    width: 200,
    height: 50,
  },
});
