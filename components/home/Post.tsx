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
import { Image } from "react-native";
import { postFoooterIcons } from "@/data/post";

type PostType = {
  imageurl: string;
  user: string;
  likes: number;
  caption: string;
  profile_picture: string;
  comments: [{ user: string; comment: string }];
};

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" style={{ marginBottom: 5 }} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
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
      <TouchableOpacity
        style={{
          width: "auto",
          borderWidth: 2,
          borderRadius: 50,
          borderColor: "#ff8501",
          padding: 2,
        }}
      >
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
      </TouchableOpacity>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
        <Text
          style={{
            color: "gray",
            marginLeft: 5,
            fontWeight: "400",
            marginTop: -3,
          }}
        >
          suggested
        </Text>
      </View>
    </View>

    <Text
      style={{
        color: "white",
        fontWeight: "900",
        fontSize: 30,
        transform: [{ rotate: "90deg" }],
      }}
    >
      ...
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

type IconProps = {
  imgStyle: StyleProp<ImageStyle>;
  imgUrl: string;
};

const Icon = ({ imgStyle, imgUrl }: IconProps) => (
  <Image source={{ uri: imgUrl }} style={imgStyle} />
);

const Likes = ({ post }: { post: PostType }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en").length < 1
        ? `${post.likes.toLocaleString("en")} like`
        : `${post.likes.toLocaleString("en")}  likes`}
    </Text>
  </View>
);

const Caption = ({ post }: { post: PostType }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text style={{ color: "white", opacity: 40 }}> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }: { post: PostType }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments?.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments?.length > 1 ? "all" : ""} {post.comments?.length}{" "}
        {post.comments?.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({post}: {post: PostType})=> (
  <>
  {post.comments?.map((comment, index)=> (
    <View key={index} style={{flexDirection: 'row', marginTop: 2}}>
      <Text style={{color: 'white'}}>
        <Text style={{fontWeight: '600'}}>{comment.user}</Text>{' '}
        {comment.comment}
      </Text>
    </View>
  ))}
  </>
)

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFoooterIcons[0].imageUrl}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFoooterIcons[1].imageUrl}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFoooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ alignItems: "flex-end", flex: 1 }}>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFoooterIcons[3].imageUrl}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  footerIcon: {
    width: 31,
    height: 31,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
    gap: 5,
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
});

export default Post;
