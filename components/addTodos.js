import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

const AddTodos = ({ setTodos }) => {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos]
      })
      setText('')
    } else {
      Alert.alert('Error', 'Todo must be over 3 characters long', [
        { text: 'Okay', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
    <View style={styles.inputForm}>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        title='Submit'
        color='coral'
        onPress={() => submitHandler(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#7F00FF',
  },
})

export default AddTodos
