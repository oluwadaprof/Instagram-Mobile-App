import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Image } from "react-native";
import { Button, Divider } from "react-native-elements";

const PLACEHOLDERIMAGE =
  "https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png&color=000000";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDERIMAGE);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              marginLeft: -7,
              marginTop: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Image
              source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDERIMAGE }}
              style={{ width: 100, height: 100 }}
            />
            {/* Write Caption Input */}
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 20, height: "auto" }}
                placeholder="Write a caption"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider style={{width: '99%' , marginLeft: 2}} width={0.2} orientation="vertical" />
          {/* Image URL Input */}
          <View style={{marginHorizontal: 2}}>
            <TextInput
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
              style={{ color: "white", fontSize: 18, height: "auto" }}
              placeholder="Enter Image Url"
              placeholderTextColor="gray"
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button
              onPress={() => handleSubmit}
              title="Share"
              disabled={!isValid}
              style={{marginTop: 20}}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
