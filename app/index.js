import { useState } from "react";
import { useRouter, Stack } from "expo-router";
import { Text, View, ScrollView, SafeAreaView } from "react-native";

import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

export default function Home() {
  // useState
  return (
    <View>
      <Text> Home </Text>
      <Text> About </Text>
    </View>
  );
}
