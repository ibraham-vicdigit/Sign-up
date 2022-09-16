import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Discover = () => {
  return (
    <View style={styles.discoverView}>
      <View style={styles.specialOffersView}>
        <View style={styles.card2View}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Text style={styles.owenRobersonText}>Owen Roberson</Text>
          <Text style={styles.openingANewShop}>Opening a new shop</Text>
          <Text style={styles.text}>-15%</Text>
        </View>
        <View style={styles.card1View}>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <Text style={styles.josephDrakeHairSa}>Joseph Drake Hair Salon</Text>
          <Text style={styles.coolSummerEvent}>Cool Summer Event!!!!</Text>
          <Text style={styles.text1}>-15%</Text>
        </View>
        <View style={styles.viewAll}>
          <Text style={styles.viewAllText}>View all</Text>
          <Image
            style={styles.iconsLineRightArrow}
            resizeMode="cover"
            source={require("../assets/22-iconslineright-arrow.png")}
          />
          <Image
            style={styles.iconsLineRightArrowCopy2}
            resizeMode="cover"
            source={require("../assets/22-iconslineright-arrow.png")}
          />
        </View>
        <Text style={styles.specialOffersText}>Special Offers</Text>
      </View>
      <View style={styles.bestSpecialistsView}>
        <View style={styles.card3View}>
          <View style={styles.rectangleView6} />
          <View style={styles.rectangleView7} />
          <Text style={styles.jaredGuerreroText}>Jared Guerrero</Text>
          <Text style={styles.barberText}>Barber</Text>
        </View>
        <View style={styles.card2View1}>
          <View style={styles.rectangleView8} />
          <View style={styles.rectangleView9} />
          <Text style={styles.ceceliaReyesText}>Cecelia Reyes</Text>
          <Text style={styles.hairStylistText}>Hair Stylist</Text>
        </View>
        <View style={styles.card1View1}>
          <View style={styles.rectangleView10} />
          <View style={styles.rectangleView11} />
          <Text style={styles.elizaBurkeText}>Eliza Burke</Text>
          <Text style={styles.makeupArtistText}>Makeup Artist</Text>
        </View>
        <View style={styles.viewAll1}>
          <Text style={styles.viewAllText1}>View all</Text>
          <Image
            style={styles.iconsLineRightArrow1}
            resizeMode="cover"
            source={require("../assets/22-iconslineright-arrow.png")}
          />
          <Image
            style={styles.iconsLineRightArrowCopy21}
            resizeMode="cover"
            source={require("../assets/22-iconslineright-arrow.png")}
          />
        </View>
        <Text style={styles.bestSpecialistsText}>Best Specialists</Text>
      </View>
      <View style={styles.rectangleView12} />
      <View style={styles.btnsearchView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView13} />
          <Text style={styles.findASalonSpecia}>
            Find a salon, specialists,…
          </Text>
          <Image
            style={styles.iconsLineLocation}
            resizeMode="cover"
            source={require("../assets/22-iconslinelocation.png")}
          />
        </View>
      </View>
      <Image
        style={styles.btnFiltersIcon}
        resizeMode="cover"
        source={require("../assets/btnfilters.png")}
      />
      <View style={styles.addressView}>
        <Text style={styles.dorthyWalksCh}>
          301 Dorthy Walks, Chicago, Illinois, US.
        </Text>
        <Image
          style={styles.iconsFilledAlert}
          resizeMode="cover"
          source={require("../assets/22-iconsfilledalert.png")}
        />
      </View>
      <View style={styles.notificationView}>
        <Image
          style={styles.iconsLineLike}
          resizeMode="cover"
          source={require("../assets/22-iconslinelike.png")}
        />
        <Image
          style={styles.ovalIcon}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Text style={styles.text2}>3</Text>
      </View>
      <Text style={styles.hiJacksonText}>
        <Text style={styles.hiText}>{`Hi `}</Text>
        <Text style={styles.jacksonText}>Jackson</Text>
        <Text style={styles.text3}>,</Text>
      </Text>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView14} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text4}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.navbarView}>
        <View style={styles.groupView1}>
          <Image
            style={styles.path2Icon}
            resizeMode="cover"
            source={require("../assets/path-2.png")}
          />
          <View style={styles.iPhoneXHomeIndicatorHomeI}>
            <View style={styles.rectangleView15} />
          </View>
          <View style={styles.view}>
            <Image
              style={styles.iconsFilledGrid}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid.png")}
            />
            <View style={styles.navbarTextActiveCopyView}>
              <Text style={styles.discoverText}>Discover</Text>
            </View>
          </View>
          <View style={styles.view1}>
            <Image
              style={styles.iconsFilledGridCopy9}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy-9.png")}
            />
            <View style={styles.navbarTextActiveView}>
              <Text style={styles.discoverText1}>Nearby</Text>
            </View>
          </View>
          <View style={styles.view2}>
            <Image
              style={styles.iconsFilledGridCopy}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy.png")}
            />
            <View style={styles.navbarTextActiveCopy2}>
              <Text style={styles.discoverText2}>Appointment</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <Image
              style={styles.iconsFilledGridCopy2}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy-2.png")}
            />
            <View style={styles.navbarTextActiveCopy3}>
              <Text style={styles.discoverText3}>Messages</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <Image
              style={styles.iconsFilledGridCopy3}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy-3.png")}
            />
            <View style={styles.navbarTextActiveCopy4}>
              <Text style={styles.discoverText4}>Profiles</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    height: "100.42%",
    width: "100.35%",
    top: "-0.21%",
    right: "-0.17%",
    bottom: "-0.21%",
    left: "-0.17%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView1: {
    position: "absolute",
    height: "71.43%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "28.57%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  rectangleView2: {
    position: "absolute",
    height: "28.57%",
    width: "100%",
    top: "71.43%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#fff",
  },
  owenRobersonText: {
    position: "absolute",
    transform: [
      {
        translateY: 61,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 213,
  },
  openingANewShop: {
    position: "absolute",
    transform: [
      {
        translateY: 90,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 213,
  },
  text: {
    position: "absolute",
    height: "10.08%",
    width: "18.12%",
    top: "85.71%",
    right: "3.48%",
    bottom: "4.2%",
    left: "78.4%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#6600ff",
    textAlign: "left",
  },
  card2View: {
    position: "absolute",
    height: "85.92%",
    width: "48.98%",
    top: "14.08%",
    right: "0%",
    bottom: "0%",
    left: "51.02%",
    overflow: "hidden",
  },
  rectangleView3: {
    position: "absolute",
    height: "100.42%",
    width: "100.35%",
    top: "-0.21%",
    right: "-0.17%",
    bottom: "-0.21%",
    left: "-0.17%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView4: {
    position: "absolute",
    height: "71.43%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "28.57%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  rectangleView5: {
    position: "absolute",
    height: "28.57%",
    width: "100%",
    top: "71.43%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#fff",
  },
  josephDrakeHairSa: {
    position: "absolute",
    transform: [
      {
        translateY: 61,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 213,
  },
  coolSummerEvent: {
    position: "absolute",
    transform: [
      {
        translateY: 90,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 213,
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: 85,
      },
    ],
    top: "50%",
    right: 10,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "left",
    width: 52,
  },
  card1View: {
    position: "absolute",
    height: "85.92%",
    width: "48.98%",
    top: "14.08%",
    right: "51.02%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  viewAllText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF UI Display",
    color: "#ff7e00",
    textAlign: "left",
    width: 49,
    height: 18,
  },
  iconsLineRightArrow: {
    position: "absolute",
    transform: [
      {
        translateY: -6,
      },
    ],
    top: "50%",
    right: 4,
    width: 12,
    height: 12,
  },
  iconsLineRightArrowCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: -6,
      },
    ],
    top: "50%",
    right: 0,
    width: 12,
    height: 12,
  },
  viewAll: {
    position: "absolute",
    transform: [
      {
        translateY: -135.5,
      },
    ],
    top: "50%",
    right: 241,
    width: 64,
    height: 18,
  },
  specialOffersText: {
    position: "absolute",
    transform: [
      {
        translateY: -138.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 173,
  },
  specialOffersView: {
    position: "absolute",
    transform: [
      {
        translateY: 29,
      },
    ],
    top: "50%",
    right: -226,
    left: 15,
    height: 277,
    overflow: "hidden",
  },
  rectangleView6: {
    position: "absolute",
    height: "100.55%",
    width: "100.8%",
    top: "-0.28%",
    right: "-0.4%",
    bottom: "-0.28%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView7: {
    position: "absolute",
    height: "69.06%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.94%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  jaredGuerreroText: {
    position: "absolute",
    transform: [
      {
        translateY: 44.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  barberText: {
    position: "absolute",
    transform: [
      {
        translateY: 66.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 105,
  },
  card3View: {
    position: "absolute",
    height: "81.9%",
    width: "31.33%",
    top: "18.1%",
    right: "0%",
    bottom: "0%",
    left: "68.67%",
    overflow: "hidden",
  },
  rectangleView8: {
    position: "absolute",
    height: "100.55%",
    width: "100.8%",
    top: "-0.28%",
    right: "-0.4%",
    bottom: "-0.28%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView9: {
    position: "absolute",
    height: "69.06%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.94%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  ceceliaReyesText: {
    position: "absolute",
    transform: [
      {
        translateY: 44.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  hairStylistText: {
    position: "absolute",
    transform: [
      {
        translateY: 66.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 105,
  },
  card2View1: {
    position: "absolute",
    height: "81.9%",
    width: "31.33%",
    top: "18.1%",
    right: "34.34%",
    bottom: "0%",
    left: "34.34%",
    overflow: "hidden",
  },
  rectangleView10: {
    position: "absolute",
    height: "100.55%",
    width: "100.8%",
    top: "-0.28%",
    right: "-0.4%",
    bottom: "-0.28%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView11: {
    position: "absolute",
    height: "69.06%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.94%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  elizaBurkeText: {
    position: "absolute",
    transform: [
      {
        translateY: 44.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  makeupArtistText: {
    position: "absolute",
    transform: [
      {
        translateY: 66.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 105,
  },
  card1View1: {
    position: "absolute",
    height: "81.9%",
    width: "31.33%",
    top: "18.1%",
    right: "68.67%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  viewAllText1: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF UI Display",
    color: "#ff7e00",
    textAlign: "left",
    width: 49,
    height: 18,
  },
  iconsLineRightArrow1: {
    position: "absolute",
    transform: [
      {
        translateY: -6,
      },
    ],
    top: "50%",
    right: 4,
    width: 12,
    height: 12,
  },
  iconsLineRightArrowCopy21: {
    position: "absolute",
    transform: [
      {
        translateY: -6,
      },
    ],
    top: "50%",
    right: 0,
    width: 12,
    height: 12,
  },
  viewAll1: {
    position: "absolute",
    transform: [
      {
        translateY: -107.5,
      },
    ],
    top: "50%",
    right: 54,
    width: 64,
    height: 18,
  },
  bestSpecialistsText: {
    position: "absolute",
    transform: [
      {
        translateY: -110.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 173,
  },
  bestSpecialistsView: {
    position: "absolute",
    transform: [
      {
        translateY: -217,
      },
    ],
    top: "50%",
    right: -39,
    left: 15,
    height: 221,
    overflow: "hidden",
  },
  rectangleView12: {
    position: "absolute",
    height: "22.66%",
    width: "100%",
    top: "-0.62%",
    right: "0%",
    bottom: "77.96%",
    left: "0%",
    backgroundColor: "#fff",
  },
  rectangleView13: {
    position: "absolute",
    height: "100.73%",
    width: "100.35%",
    top: "-0.36%",
    right: "-0.17%",
    bottom: "-0.36%",
    left: "-0.17%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  findASalonSpecia: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 35,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "left",
  },
  iconsLineLocation: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 6,
    width: 24,
    height: 24,
  },
  groupView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  btnsearchView: {
    position: "absolute",
    transform: [
      {
        translateY: -279,
      },
    ],
    top: "50%",
    right: 72,
    left: 15,
    height: 42,
    overflow: "hidden",
  },
  btnFiltersIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -279,
      },
    ],
    top: "50%",
    right: 15,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  dorthyWalksCh: {
    position: "absolute",
    transform: [
      {
        translateY: -8.5,
      },
    ],
    top: "50%",
    left: 19,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 253,
  },
  iconsFilledAlert: {
    position: "absolute",
    transform: [
      {
        translateY: -8.5,
      },
    ],
    top: "50%",
    left: 0,
    width: 16,
    height: 16,
  },
  addressView: {
    position: "absolute",
    transform: [
      {
        translateY: -316,
      },
    ],
    top: "50%",
    left: 15,
    width: 272,
    height: 17,
  },
  iconsLineLike: {
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
  ovalIcon: {
    position: "absolute",
    height: "43.33%",
    width: "43.33%",
    top: "6.67%",
    right: "6.67%",
    bottom: "50%",
    left: "50%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text2: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "20%",
    top: "50%",
    right: "16.67%",
    left: "63.33%",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "left",
  },
  notificationView: {
    position: "absolute",
    top: 49,
    right: 15,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  hiText: {
    color: "#2e3a59",
  },
  jacksonText: {
    color: "#ff7e00",
  },
  text3: {
    color: "#2e3a59",
  },
  hiJacksonText: {
    position: "absolute",
    transform: [
      {
        translateY: -357,
      },
    ],
    top: "50%",
    left: 15,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    textAlign: "left",
    width: 173,
  },
  rectangleView14: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupIcon: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 68,
    height: 12,
    overflow: "hidden",
  },
  text4: {
    letterSpacing: -0.28,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 54,
  },
  timeStyleView: {
    position: "absolute",
    top: 13,
    left: 21,
    width: 54,
    height: 21,
  },
  iPhoneXStatusBarsStatusBa: {
    position: "absolute",
    transform: [
      {
        translateY: -22,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 44,
    overflow: "hidden",
  },
  iPhoneXStatusBarsStatusBa1: {
    position: "absolute",
    height: "5.42%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
  },
  path2Icon: {
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
  rectangleView15: {
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
    height: "50%",
    width: "100%",
    top: "50%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iconsFilledGrid: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "SF UI Display",
    color: "#ff7e00",
    textAlign: "center",
  },
  navbarTextActiveCopyView: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view: {
    position: "absolute",
    transform: [
      {
        translateY: -24,
      },
    ],
    top: "50%",
    left: 0,
    width: 75,
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy9: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveView: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view1: {
    position: "absolute",
    width: "20%",
    right: "60%",
    bottom: 18,
    left: "20%",
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view2: {
    position: "absolute",
    width: "20%",
    right: "40%",
    bottom: 18,
    left: "40%",
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view3: {
    position: "absolute",
    width: "20%",
    right: "20%",
    bottom: 18,
    left: "60%",
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view4: {
    position: "absolute",
    transform: [
      {
        translateY: -24,
      },
    ],
    top: "50%",
    right: 0,
    width: 75,
    height: 40,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    transform: [
      {
        translateY: -34,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    height: 68,
    overflow: "hidden",
  },
  navbarView: {
    position: "absolute",
    height: "8.37%",
    width: "100%",
    top: "91.63%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  discoverView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Discover;
