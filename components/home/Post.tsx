import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { POSTS } from "@/data/post";
import { Image } from "react-native";

type PostType = {
  imageurl: string;
  user: string;
  likes: number;
  caption: string;
  profile_picture: string;
  contacts: Array<{ user: string; comment: string }>;
};

type Props = {
  post: PostType; // Expecting a single post object
};

const postFoooterIcons = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/?size=100&id=87&format=png&color=000000",
    likedImageUrl:
      "https://img.icons8.com/?size=100&id=19411&format=png&color=000000",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/?size=100&id=143&format=png&color=000000",
  },
  {
    name: "Share",
    imageUrl: "",
  },
  {
    name: "Save",
    imageUrl: "",
  },
];

const Post = ({ post }: Props) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
      </View>
    </View>
  );
};

const PostHeader = ({ post }: Props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>
      . . .
    </Text>
  </View>
);

const PostImage = ({ post }: Props) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageurl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <Icon imgStyle={styles.footerIcon} imgUrl={postFoooterIcons[0].imageUrl} />
);

type IconProps = {
  imgUrl: string;
  imgStyle: StyleProp<ImageStyle>;
};

const Icon = ({ imgStyle, imgUrl }: IconProps) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});

export default Post;
