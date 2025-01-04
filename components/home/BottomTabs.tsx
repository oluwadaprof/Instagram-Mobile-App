import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export interface TabIcon {
  name: string;
  active: string;
  inActive: string;
}

export const BottomTabIcons: TabIcon[] = [
  {
    name: "Home",
    active:
      "https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=ffffff",
    inActive:
      "https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=ffffff",
  },
  {
    name: "Search",
    active:
      "https://img.icons8.com/?size=100&id=VNGluvySmxmA&format=png&color=ffffff",
    inActive: "https://img.icons8.com/?size=100&id=132&format=png&color=ffffff",
  },
  {
    name: "Add",
    active: "https://img.icons8.com/?size=100&id=38113&format=png&color=ffffff",
    inActive:
      "https://img.icons8.com/?size=100&id=37787&format=png&color=ffffff",
  },
  {
    name: "Reels",
    active:
      "https://img.icons8.com/?size=100&id=YoIaSvIehcuI&format=png&color=ffffff",
    inActive:
      "https://img.icons8.com/?size=100&id=PxI9IPCyBAOD&format=png&color=ffffff",
  },
  {
    name: "User",
    active: "https://picsum.photos/200/300?random=3",
    inActive: "https://picsum.photos/200/300?random=3",
  },
];

const BottomTabs = ({ icons }: { icons: TabIcon[] }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }: { icon: TabIcon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inActive }}
        style={[
          styles.icon,
          icon.name === "User" ? styles.profilePicture : null,
          activeTab === "User" && icon.name === activeTab
            ? styles.activeProfilePicture
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   wrapper: {
  //     position: 'absolute',
  //     width: '100%',
  //     bottom: '3%',
  //     zIndex: 999,
  //     backgroundColor: '#000'
  //   },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePicture: {
    borderRadius: 50,
    borderColor: "white",
  },
  activeProfilePicture: {
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
  },
});

export default BottomTabs;
