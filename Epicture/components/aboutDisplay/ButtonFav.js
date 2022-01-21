import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import Login from "../login";

const AddFav = (props) => {
    const image = props.image;

    const [fav, setFav] = useState("Add to favorites");
    const favStatus = image.favorites;

    const HandleFav = async () => {
        const token = await SecureStore.getItemAsync("secure_token");
        const res = await axios({
            method: "POST",
            url: `https://api.imgur.com/3/image/${image.cover}/favorite`,
            headers: {Authorization: "Bearer " + token},
        });

        try {
            if (token != null) {
                if (favStatus === false) {
                    setFav("Remove from favorites");
                } else {
                    setFav("Add to favorites");
                }
            } else {
                alert("Please Login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Text
                style={styles.text}
                type="button"
                onPress={() => {
                    HandleFav()
                }}>
                {fav}
            </Text>
        </View>
    );
};

export default AddFav;

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 18,
    },
});
