import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function DetailScreen({navigation}) {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title="ir a Home" onPress={()=> navigation.navigate("HomeScreen")}/>
    </View>
  )
}

const styles = StyleSheet.create({})