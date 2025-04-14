// screens/FeedScreen.js
import React from "react";
import { FlatList, Text, View } from "react-native";

const posts = [
  { id: "1", text: "Lost black wallet near canteen 😭" },
  { id: "2", text: "Coding event this Saturday!" },
  { id: "3", text: "Anyone selling old laptop?" },
];

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  );
}
