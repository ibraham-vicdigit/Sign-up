import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as RNPTextInput } from "react-native-paper";

const Verification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verificationView}>
      <View style={styles.backgroundView} />
      <View style={styles.moduleView}>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.keyboardNumpadView}>
        <Image
          style={styles.fillsGray}
          resizeMode="cover"
          source={require("../assets/backgrounds--keyboards--gray.png")}
        />
        <Image
          style={styles.keysIcon}
          resizeMode="cover"
          source={require("../assets/keys.png")}
        />
        <View style={styles.view}>
          <Image
            style={styles.keyBackgroundIcon}
            resizeMode="cover"
            source={require("../assets/key-background.png")}
          />
          <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.view1}>
          <Image
            style={styles.keyBackgroundIcon1}
            resizeMode="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={styles.aBCText}>WXYZ</Text>
          <Text style={styles.text1}>9</Text>
        </View>
        <View style={styles.view2}>
          <Image
            style={styles.keyBackgroundIcon2}
            resizeMode="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={styles.aBCText1}>TUV</Text>
          <Text style={styles.text2}>8</Text>
        </View>
        <View style={styles.view3}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={styles.aBCText2}>PQRS</Text>
          <Text style={styles.text3}>7</Text>
        </View>
        <View style={styles.view4}>
          <Image
            style={styles.keyBackgroundIcon3}
            resizeMode="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={styles.aBCText3}>MNO</Text>
          <Text style={styles.text4}>6</Text>
        </View>
        <View style={styles.view5}>
          <Image
            style={styles.keyBackgroundIcon4}
            resizeMode="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={styles.aBCText4}>JKL</Text>
          <Text style={styles.text5}>5</Text>
        </View>
        <View style={styles.view6}>
          <Image
            style={styles.keyBackgroundIcon5}
            resizeMode="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={styles.aBCText5}>GHI</Text>
          <Text style={styles.text6}>4</Text>
        </View>
        <View style={styles.view7}>
          <Image
            style={styles.keyBackgroundIcon6}
            resizeMode="cover"
            source={require("../assets/key-background.png")}
          />
          <Text style={styles.aBCText6}>DEF</Text>
          <Text style={styles.text7}>3</Text>
        </View>
        <View style={styles.view8}>
          <Image
            style={styles.keyBackgroundIcon7}
            resizeMode="cover"
            source={require("../assets/key-background.png")}
          />
          <Text style={styles.aBCText7}>
            <Text style={styles.aBText}>AB</Text>C
          </Text>
          <Text style={styles.text8}>2</Text>
        </View>
        <View style={styles.view9}>
          <Image
            style={styles.keyBackgroundIcon8}
            resizeMode="cover"
            source={require("../assets/key-background.png")}
          />
          <Text style={styles.text9}>1</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btncontinueTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.resendOn024}>Resend on 0:24</Text>
      <RNPTextInput
        style={styles.txtotpcodeRNPTextInput}
        placeholder=""
        mode="flat"
        placeholderTextColor="#2e3a59"
        theme={{ colors: { text: "#2e3a59", background: "#fff" } }}
      />
      <Text style={styles.enterTheOTPCodeF}>
        Enter the OTP code from the phone we just sent you.
      </Text>
      <Text style={styles.verificationText}>Verification</Text>
      <Pressable
        style={styles.iconsLineLeftArrowLong}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/22-iconslineleft-arrow-long.png")}
        />
      </Pressable>
      <StatusBar barStyle="default" />
      <View style={styles.iPhoneXHomeIndicatorHomeI}>
        <View style={styles.rectangleView2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    position: "absolute",
    height: "34.98%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "65.02%",
    left: "0%",
    backgroundColor: "#ff7e00",
  },
  rectangleView: {
    position: "absolute",
    transform: [
      {
        translateY: -354.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    height: 709,
  },
  moduleView: {
    position: "absolute",
    height: "87.32%",
    width: "100%",
    top: "12.68%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  fillsGray: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  keysIcon: {
    position: "absolute",
    height: "6.19%",
    width: "75.47%",
    top: "61.86%",
    right: "13.33%",
    bottom: "31.96%",
    left: "11.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  keyBackgroundIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    position: "absolute",
    height: "65.22%",
    width: "100%",
    top: "17.39%",
    right: "0%",
    bottom: "17.39%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    height: "15.81%",
    width: "31.2%",
    top: "57.39%",
    right: "34.4%",
    bottom: "26.8%",
    left: "34.4%",
  },
  keyBackgroundIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText: {
    position: "absolute",
    height: "25.53%",
    width: "100%",
    top: "63.83%",
    right: "0%",
    bottom: "10.64%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    height: "63.83%",
    width: "100%",
    top: "3.19%",
    right: "0%",
    bottom: "32.98%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view1: {
    position: "absolute",
    height: "16.15%",
    width: "31.2%",
    top: "38.83%",
    right: "1.6%",
    bottom: "45.02%",
    left: "67.2%",
  },
  keyBackgroundIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText1: {
    position: "absolute",
    height: "25.53%",
    width: "100%",
    top: "63.83%",
    right: "0%",
    bottom: "10.64%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    height: "63.83%",
    width: "100%",
    top: "3.19%",
    right: "0%",
    bottom: "32.98%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view2: {
    position: "absolute",
    height: "16.15%",
    width: "31.2%",
    top: "38.83%",
    right: "34.4%",
    bottom: "45.02%",
    left: "34.4%",
  },
  rectangleIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText2: {
    position: "absolute",
    height: "25.53%",
    width: "100%",
    top: "63.83%",
    right: "0%",
    bottom: "10.64%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    height: "63.83%",
    width: "100%",
    top: "3.19%",
    right: "0%",
    bottom: "32.98%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view3: {
    position: "absolute",
    height: "16.15%",
    width: "31.2%",
    top: "38.83%",
    right: "67.2%",
    bottom: "45.02%",
    left: "1.6%",
  },
  keyBackgroundIcon3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText3: {
    position: "absolute",
    height: "25.53%",
    width: "100%",
    top: "63.83%",
    right: "0%",
    bottom: "10.64%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    height: "63.83%",
    width: "100%",
    top: "3.19%",
    right: "0%",
    bottom: "32.98%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view4: {
    position: "absolute",
    height: "16.15%",
    width: "31.2%",
    top: "20.27%",
    right: "1.6%",
    bottom: "63.57%",
    left: "67.2%",
  },
  keyBackgroundIcon4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText4: {
    position: "absolute",
    height: "25.53%",
    width: "100%",
    top: "63.83%",
    right: "0%",
    bottom: "10.64%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text5: {
    position: "absolute",
    height: "63.83%",
    width: "100%",
    top: "3.19%",
    right: "0%",
    bottom: "32.98%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view5: {
    position: "absolute",
    height: "16.15%",
    width: "31.2%",
    top: "20.27%",
    right: "34.4%",
    bottom: "63.57%",
    left: "34.4%",
  },
  keyBackgroundIcon5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText5: {
    position: "absolute",
    height: "25.53%",
    width: "100%",
    top: "63.83%",
    right: "0%",
    bottom: "10.64%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text6: {
    position: "absolute",
    height: "63.83%",
    width: "100%",
    top: "3.19%",
    right: "0%",
    bottom: "32.98%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view6: {
    position: "absolute",
    height: "16.15%",
    width: "31.2%",
    top: "20.27%",
    right: "67.2%",
    bottom: "63.57%",
    left: "1.6%",
  },
  keyBackgroundIcon6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBCText6: {
    position: "absolute",
    height: "26.09%",
    width: "100%",
    top: "63.04%",
    right: "0%",
    bottom: "10.87%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text7: {
    position: "absolute",
    height: "65.22%",
    width: "100%",
    top: "2.17%",
    right: "0%",
    bottom: "32.61%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view7: {
    position: "absolute",
    height: "15.81%",
    width: "31.2%",
    top: "2.06%",
    right: "1.6%",
    bottom: "82.13%",
    left: "67.2%",
  },
  keyBackgroundIcon7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  aBText: {
    letterSpacing: 2,
  },
  aBCText7: {
    position: "absolute",
    height: "26.09%",
    width: "100%",
    top: "63.04%",
    right: "0%",
    bottom: "10.87%",
    left: "0%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  text8: {
    position: "absolute",
    height: "65.22%",
    width: "100%",
    top: "2.17%",
    right: "0%",
    bottom: "32.61%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view8: {
    position: "absolute",
    height: "15.81%",
    width: "31.2%",
    top: "2.06%",
    right: "34.4%",
    bottom: "82.13%",
    left: "34.4%",
  },
  keyBackgroundIcon8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text9: {
    position: "absolute",
    height: "65.22%",
    width: "100%",
    top: "2.17%",
    right: "0%",
    bottom: "32.61%",
    left: "0%",
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
  },
  view9: {
    position: "absolute",
    height: "15.81%",
    width: "31.2%",
    top: "2.06%",
    right: "67.2%",
    bottom: "82.13%",
    left: "1.6%",
  },
  keyboardNumpadView: {
    position: "absolute",
    height: "35.84%",
    width: "100%",
    top: "64.16%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#ff7e00",
  },
  continueText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "25.9%",
    top: "50%",
    right: "39.05%",
    left: "39.05%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
  },
  btncontinueTouchableOpacity: {
    position: "absolute",
    height: "5.42%",
    width: "84%",
    top: "53.82%",
    right: "8%",
    bottom: "40.76%",
    left: "8%",
    overflow: "hidden",
  },
  resendOn024: {
    position: "absolute",
    height: "2.22%",
    width: "29.87%",
    top: "46.8%",
    right: "6.67%",
    bottom: "50.99%",
    left: "63.47%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "right",
  },
  txtotpcodeRNPTextInput: {
    position: "absolute",
    height: "7.77%",
    width: "90%",
    top: "36.95%",
    right: "8%",
    bottom: "56.28%",
    left: "8%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  enterTheOTPCodeF: {
    position: "absolute",
    transform: [
      {
        translateY: -201,
      },
      {
        translateX: -134.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 270,
  },
  verificationText: {
    position: "absolute",
    transform: [
      {
        translateY: -260,
      },
      {
        translateX: -134.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 270,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconsLineLeftArrowLong: {
    position: "absolute",
    left: 15,
    top: 49,
  },
  rectangleView2: {
    position: "absolute",
    transform: [
      {
        translateX: -66.5,
      },
    ],
    bottom: 9,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  iPhoneXHomeIndicatorHomeI: {
    position: "absolute",
    height: "4.19%",
    width: "100%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  verificationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Verification;
