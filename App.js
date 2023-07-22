import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Tabs from "./src/components/Tabs"
import Counter from "./src/demontrations/Counter"
import * as Location from 'expo-location';

const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted'){
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if(location){
    console.log(location)
  }

  if(loading){
    console.log("masuk sini")
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          color={'blue'}
        />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1
  }
})
export default App