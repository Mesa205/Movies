import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";



export default function Movie({ movie, height = 420, width = 300 }) {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;



  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailScreen", movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
    >
      
      <View style={styles.imgContainer}>
        <Image source={{ uri }} style={styles.Image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    borderRadius: 18,
  },

  imgContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 10,
  },
});
