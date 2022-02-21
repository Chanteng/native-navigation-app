import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";



const Home = (props) => {


  return (
     
    <View style={styles.container}>
         
      <View style={styles.header}>
        <Icon name="apps" size={30} />
        <Text style={{ fontSize: 30 }}>Discover</Text>
        <Icon name="search" size={30} />
      </View>
      <SafeAreaView>

      <View style={styles.info}>
        <View style={styles.box}>
          <Image style={styles.tinyLogo} source={require("../assets/1.jpg")} />
        <View style={styles.text} >
        <Text style={styles.txt}>Does Dry is January</Text>
        <Text style={styles.infotxt}>Healthy?</Text>
        </View>
        <View style={styles.footer} >
        <Image style={styles.footerimg} source={require("../assets/8.jpg")} />
       <Text style={{fontSize: 25, marginLeft: 30}}>Mr. Oduro</Text>
       <Text style={{fontSize: 20, marginLeft: 15}}>4 min read</Text>
        </View>
        
        <View style={{backgroundColor: "pink", height: 10, width: 100, position: "absolute"}}></View>
        <View style={{backgroundColor: "pink", height: 100, width: 10, position: "absolute"}}></View>
        </View>

        <View style={styles.box}>
          <Image style={styles.tinyLogo} source={require("../assets/1.jpg")} />
        <View style={styles.text} >
        <Text style={styles.txt}>Does Dry is January</Text>
        <Text style={styles.infotxt}>Healthy?</Text>
        </View>
        <View style={styles.footer} >
        <Image style={styles.footerimg} source={require("../assets/8.jpg")} />
       <Text style={{fontSize: 25, marginLeft: 30}}>Mr. Oduro</Text>
       <Text style={{fontSize: 20, marginLeft: 15}}>4 min read</Text>
        </View>
        
        <View style={{backgroundColor: "pink", height: 10, width: 100, position: "absolute"}}></View>
        <View style={{backgroundColor: "pink", height: 100, width: 10, position: "absolute"}}></View>
        </View>

        <View style={styles.box}>
          <Image style={styles.tinyLogo} source={require("../assets/1.jpg")} />
        <View style={styles.text} >
        <Text style={styles.txt}>Does Dry is January</Text>
        <Text style={styles.infotxt}>Healthy?</Text>
        </View>
        <View style={styles.footer} >
        <Image style={styles.footerimg} source={require("../assets/8.jpg")} />
       <Text style={{fontSize: 25, marginLeft: 30}}>Mr. Oduro</Text>
       <Text style={{fontSize: 20, marginLeft: 15}}>4 min read</Text>
        </View>
        
        <View style={{backgroundColor: "pink", height: 10, width: 100, position: "absolute"}}></View>
        <View style={{backgroundColor: "pink", height: 100, width: 10, position: "absolute"}}></View>
        </View>

        <View style={styles.box}>
          <Image style={styles.tinyLogo} source={require("../assets/1.jpg")} />
        <View style={styles.text} >
        <Text style={styles.txt}>Does Dry is January</Text>
        <Text style={styles.infotxt}>Healthy?</Text>
        </View>
        <View style={styles.footer} >
        <Image style={styles.footerimg} source={require("../assets/8.jpg")} />
       <Text style={{fontSize: 25, marginLeft: 30}}>Mr. Oduro</Text>
       <Text style={{fontSize: 20, marginLeft: 15}}>4 min read</Text>
        </View>
        
        <View style={{backgroundColor: "pink", height: 10, width: 100, position: "absolute"}}></View>
        <View style={{backgroundColor: "pink", height: 100, width: 10, position: "absolute"}}></View>
        </View>
      </View>
   
      </SafeAreaView>
    
      
    </View>
   
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
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
    height: 150,
    marginTop: 20,
    flexDirection: "row",
    resizeMode: 'contain'
  },

  tinyLogo: {
    height: 120,
    width: 100,
    margin: 15,
  },

  text: {
      flexDirection: "column"
  },

  txt: {
     resizeMode: 'contain',
     fontSize: 20,
     marginTop: 15,
     marginLeft: 15
  },

  infotxt: {
      fontSize: 35,
      marginLeft: 15,
  },

footer: {
    flexDirection: "row",
    position: "absolute",
    top: 90,
    alignItems: "center"
},

  footerimg: {
      height: 40,
      width: 40,
      borderRadius: 50,
      marginLeft: 140,
      marginTop: 10
  }
});

export default Home;
