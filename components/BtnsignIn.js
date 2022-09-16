import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BtnsignIn = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.btnsignInPressable, style]}
      onPress={() => navigation.navigate("Discover")}
    >
      <TouchableOpacity
        style={styles.signInTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Discover")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  signInText: {
    transform: [
      {
        translateY: -10,
      },
      {
        translateX: -25.5,
      },
    ],
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
  },
  signInTouchableOpacity: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  btnsignInPressable: {
    position: "relative",
    width: 315,
    height: 44,
    overflow: "hidden",
  },
});

export default BtnsignIn;
