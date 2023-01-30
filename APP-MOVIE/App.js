import {NavigationContainer} from "@react-navigation/native"
import axios from "axios";
import { Navigation } from "./src/navigation/Navigation";

axios.defaults.baseURL="https://api.themoviedb.org/3/movie",
axios.defaults.params={
  lenguage: "es-ES",
  api_key: "b364ed4df213315fb2398fffd55596f1"
}


export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}