import React from "react";
import { 
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from "react-native";
import Sound from "react-native-sound";

const soundList = [
  require("./assets/sounds/one.wav"),
  require("./assets/sounds/two.wav"),
  require("./assets/sounds/three.wav"),
  require("./assets/sounds/four.wav"),
  require("./assets/sounds/five.wav"),
  require("./assets/sounds/six.wav"),
  require("./assets/sounds/seven.wav"),
  require("./assets/sounds/eight.wav"),
  require("./assets/sounds/nine.wav"),
  require("./assets/sounds/ten.wav"),
]

const App = () => {

  const playSound = (sound) => {
    const soundObject = new Sound( sound, Sound.MAIN_BUNDLE, (err) => {
      if(err){
        console.log("NOT ABLE TO LOUD SOUND");
      }
    });

    setTimeout(() => {
      soundObject.play();
    }, 100);
    
    soundObject.release();
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require("./assets/images/logo.png")} />
        <View style={styles.gridContainer}>
            {soundList.map((sound) => (
              <TouchableOpacity
                key={sound}
                style={styles.box}
                onPress={() => {playSound(sound)}}
              >
                 <Text style={styles.text}>{sound}</Text>
              </TouchableOpacity>
            ))} 
        </View>
      </ScrollView>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  logo: {
    alignSelf: "center",
    marginTop: 20,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  box: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginVertical: 6,
    backgroundColor: "#0f4c75",
    borderRadius: 5,

    shadowColor: "#393e46",
    elevation: 5,
  },  
  text:{
    fontSize: 40,
    color: "#ff4301",
  },
});