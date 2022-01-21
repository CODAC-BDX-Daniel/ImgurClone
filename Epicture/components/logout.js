import * as React from "react";

import { Button } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function Logout() {
  // Request
  const onPressLearnMore = async () => {
    const token = await SecureStore.deleteItemAsync("secure_token");
    alert("Déconnexion");
  };

  React.useEffect(() => {}, []);

  return (
    <Button
      onPress={onPressLearnMore}
      title="Logout"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
}
