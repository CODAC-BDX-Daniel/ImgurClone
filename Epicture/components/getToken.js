import { Button } from "react-native";

import * as SecureStore from "expo-secure-store";

export default function GetToken() {
  const onPressLearnMore = async () => {
    const token = await SecureStore.getItemAsync("secure_token");
    console.log("token : ", token);
  };

  return (
    <Button
      onPress={onPressLearnMore}
      title="getToken"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
}
