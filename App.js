import React, { useState } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Tabs from "./src/components/Tabs"
import Counter from "./src/demontrations/Counter"

const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, setLoading] = useState(true)
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