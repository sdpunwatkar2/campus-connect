// components/SearchBar.js
import React, { useState } from "react";
import { TextInput, View } from "react-native";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          onSearch(text);
        }}
      />
    </View>
  );
}
