import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Corousel,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";


import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-native-snap-carousel-v4";
import Movie from "../components/Movie";
import { useSafeAreaInsets } from "react-native-safe-area-context";



const { width: windowWidth } = Dimensions.get("window");



export default function HomeScreen({ navigation }) {
  const { top } = useSafeAreaInsets();

  

  const [isLoading, setIsLoading] = useState(true);

  const [peliculas, setPelculas] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const { data: nowPlaying } = await axios.get("/now_playing?");

      const { data: popular } = await axios.get("/popular?");

      const { data: topRated } = await axios.get("/top_rated?");

      const { data: upcoming } = await axios.get("/upcoming?");

      setPelculas({
        nowPlaying: nowPlaying.results,
        topRated: topRated.results,
        popular: popular.results,
        upcoming: upcoming.results,
      });

      setIsLoading(false);

      console.log({
        nowPlaying: nowPlaying.results,
        topRated: topRated.results,
        popular: popular.results,
        upcoming: upcoming.results,
      });
    } catch (error) {
      setIsLoading(false);
      console.log("Error en getMovies", error.messages);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={80} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={peliculas.nowPlaying}
            renderItem={({ item }) => <Movie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        //populares
        <View style={{ height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 10 }}>
            Popular
          </Text>
          <FlatList
            data={peliculas.popular}
            renderItem={({ item }) => (
              <Movie movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString}
          />
        </View>
      </View>
    </ScrollView>
  );
}

{
  /* <View style={{height:440}}></View> */
}
// <View>
//   <Text>HomeScreen</Text>
//   <Button title="ir a detalles" onPress={()=> navigation.navigate("DetailScreen")}/>
// </View>
const styles = StyleSheet.create({});
