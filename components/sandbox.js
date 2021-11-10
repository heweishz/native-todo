import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    // justifyContent: 'space-around',
    alignItems: 'center',
    alignItems: 'flex-start',

    paddingTop: 150,
    backgroundColor: '#333',
  },
  boxOne: {
    flex: 7,
    backgroundColor: 'coral',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 40,
  },
})

export default Sandbox
