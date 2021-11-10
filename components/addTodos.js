import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

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
      <View style={styles.button}>
        <Ionicons name='ios-add' size={20} color='black' />
        <Button
          title='Submit'
          color='coral'
          onPress={() => submitHandler(text)}
        />
      </View>
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
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputForm: {},
})

export default AddTodos
