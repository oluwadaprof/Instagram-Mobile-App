import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "@/data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        horizontal
        contentContainerStyle={{ alignItems: "center" }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Your Story */}
        <View style={{ marginLeft: 9, position: "relative" }}>
          <Image
            source={{ uri: "https://picsum.photos/200/300?random=3" }}
            style={styles.story}
          />
          <Text style={{ color: "white", marginTop: 10, marginLeft: 2 }}>your story</Text>
          <View
            style={{
              backgroundColor: "blue",
              borderRadius: 50,
              borderColor: "black",
              borderWidth: 3,
              height: 26,
              width: 26,
              position: "absolute",
              top: 41,
              left: 34,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=11153&format=png&color=ffffff",
              }}
              style={{
                borderRadius: 50,
                height: 18,
                width: 18,
              }}
            />
          </View>
        </View>

        {/* User Story */}
        {USERS.map((user, index) => (
          <View
            key={index}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                marginLeft: 10,
                borderWidth: 3,
                borderColor: "#ff8501",
                borderRadius: 50,
                borderStyle: "solid",
                padding: 2,
              }}
            >
              <Image source={{ uri: user.image }} style={styles.story} />
            </View>
            <Text style={{ color: "white", marginLeft: 7 }}>
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
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default Stories;
