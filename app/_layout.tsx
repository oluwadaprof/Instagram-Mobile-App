import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
