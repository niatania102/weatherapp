import React from "react"
import { View, StyleSheet } from "react-native"
import UpcomingWeather from "./src/components/UpcomingWeather"
import OurChild from "./src/components/OurChild"

const App = () => {
  return (
    <View style={styles.container}>
      <OurChild message={'Hello'}/>
      <OurChild message={'Greetings'}/>
      <OurChild message={'Goodbye'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App