import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodosItem({ item, todosFilter }) {
  return (
    <TouchableOpacity onPress={() => todosFilter(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
  },
})
