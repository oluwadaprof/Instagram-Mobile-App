import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "@/data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => (
          <View key={index} style={{alignItems: "center"}}>
            <Image source={{ uri: user.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {user.user.length > 10
                ? user.user.slice(0, 10).toLowerCase() + "..."
                : user.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501"
  },
});

export default Stories;
