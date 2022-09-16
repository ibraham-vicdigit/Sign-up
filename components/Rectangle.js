import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Rectangle = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectanglePressable, style]}
      onPress={() => navigation.navigate("Discover")}
    />
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#ff7e00",
    width: 315,
    height: 44,
  },
});

export default Rectangle;
