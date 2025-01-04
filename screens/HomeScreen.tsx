import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/home/Header";

import { POSTS } from "@/data/post";
import Stories from "@/components/home/Stories";
import Post from "@/components/home/Post";
import BottomTabs, { BottomTabIcons } from "@/components/home/BottomTabs";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={BottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
