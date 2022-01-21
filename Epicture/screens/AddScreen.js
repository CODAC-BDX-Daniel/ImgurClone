import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, Image, Platform, Pressable} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-ico-material-design';
import {Button} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function AddScreen() {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }
    const [photo, setPhoto] = useState(null);
    const pickPhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setPhoto(result.uri);
        }
    };
    return (
        <View style={[styles.container, {
            flexDirection: "row"
        }]}>


            <View style={{flex: 5, backgroundColor: "#2A3239"}}>
                <Pressable style={styles.button2} onPress={{/*pickImage*/}} >
                {image && <Image source={{ uri: image }} style=
                    {{ alignItems:'center', width: 200, height: 200}} />}

                {photo && <Image source={{ uri: photo }} style=
                    {{ alignItems:'center', width: 200, height: 200}} />}
                    <Text style={styles.text}><Icon name="add-plus-button" /></Text>
                </Pressable>
            <Pressable style={styles.button} onPress={pickImage} >
                <Text style={styles.text}>Add Photo Gallery</Text>
            </Pressable>

                <Pressable style={styles.button} onPress={pickPhoto} >
                        <Image source={require('../assets/icons/takePicture.png')} resizeMode="contain" style={{width: 50, height: 50}}/>
                </Pressable>

            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        borderBottomColor:'white',
        margin:10,
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#2A3241',
        borderBottomColor:'white',
        margin:10,
    },
    text: {
        margin:10,
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    Image:{
      margin:5,
    },
});
