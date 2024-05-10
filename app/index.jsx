import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text className="text-3xl font-pblack">index</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to profile</Link>
    </View>
  );
};

export default index;
