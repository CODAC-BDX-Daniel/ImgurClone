import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from "expo-auth-session";
import { Text } from "react-native";
import * as SecureStore from "expo-secure-store";
WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://api.imgur.com/oauth2/authorize",
  tokenEndpoint: "https://api.imgur.com/oauth2/token",
};

export default function Login() {
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "a8772d9a582dde6",
      clientSecret: "a2f5dc0df9009b23ec4c25d3388b1532ee3b1b0e",
      redirectUri: makeRedirectUri({
        scheme: "undefined",

      }),

      // imgur requires an empty array
      scopes: [],
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      SecureStore.setItemAsync("secure_token", access_token);
      alert("Connexion Réussi");
    }
  }, [response]);

  return (
    <Text
      disabled={!request}
      color="#f194ff"
      onPress={() => {
        promptAsync();
      }}
    >
      Login
    </Text>
  );
}
