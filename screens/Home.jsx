import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Files from "../conponent/Files";




const Home = ({ navigation }) => {
  const Card = ({ file }) => {
    return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", file)}>
        <View style={styles.card}>

<View style={{paddingHorizontal: 20}}>
<View style={{backgroundColor: "blue", height: 8, width: 100, position: "absolute"}}></View>
<View style={{backgroundColor: "blue", height: 100, width: 8, position: "absolute"}}></View>

</View>


<View style={{flexDirection: "row" }}>
  <Image style={{ height: 100, width: 100, marginTop: 12, marginLeft: 15}} source={file.img} />
<View style={{flexDirection: "column"}}>
 <Text style={{margin: 15, fontSize: 30, fontWeight: "bold"}}>{file.name}</Text>
 <View style={styles.footer} >
<Image style={styles.footerimg} source={require("../assets/8.jpg")} />
<Text style={{fontSize: 20, marginLeft: 5}}>Mr. Oduro</Text>
<Text style={{fontSize: 20, marginLeft: 15}}>4 min</Text>
</View>
</View>

</View>
</View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="apps" size={30} />
        <Text style={{ fontSize: 30 }}>Discover</Text>
        <Icon name="search" size={30} />
      </View>


<View>
      <FlatList
        contentContainerStyle={{ marginTop: 20, paddingBottom: 10 }}
        data={Files}
        renderItem={({ item }) => {
          return <Card file={item} />;
        }}
      />

</View>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    height: 120,
    paddingHorizontal: 20,
    flexDirection: "column",
    marginTop: 10,
  },

  header: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  info: {
    flex: 0.5,
    backgroundColor: "#dbd9d9",
    paddingHorizontal: 20,
    borderRadius: 100,
  },

  box: {
    backgroundColor: "white",
    height: 130,
    marginTop: 10,
    flexDirection: "row",
    resizeMode: "contain",
  },

  tinyLogo: {
    height: 100,
    width: 100,
    margin: 15,
  },

  text: {
    flexDirection: "column",
  },

  txt: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
  },

  infotxt: {
    fontSize: 35,
    marginLeft: 15,
  },

  footer: {
    flexDirection: "row",
    position: "absolute",
    top: 65,
    alignItems: "center",
  },

  footerimg: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 1,
  },
});

export default Home;
