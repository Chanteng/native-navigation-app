import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Details = ({ navigation, route }) => {
  const file = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>

<View>
<View style={{backgroundColor: "pink", height: 80, width: 180, position: "absolute"}}></View>
<View style={{backgroundColor: "pink", height: 200, width: 30, position: "absolute"}}></View>
</View>


      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 28 }}>Beauty</Text>
        <Icon name="headset" size={28} />
        <Icon name="favorite-border" size={28} />
        <Icon name="share" size={28} />
      </View>

    <View style={styles.imageContainer}>
      <Image source={file.img} style={{resizeMode: "contain", flex: 1}} />
    </View>

     <View style={styles.detailsContainer}>
      <View>
        <Text style={{fontSize: 20,}}>{file.about}</Text>
      </View>
     </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  imageContainer: {
    flex: 0.45,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  img: {
    height: 350,
    width: 350,
  },

  footer: {
    flexDirection: "row",
    position: "absolute",
    top: 450,
    left: -70,
    alignItems: "center",
  },

  footerimg: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 140,
    marginTop: 10,
  },
});
