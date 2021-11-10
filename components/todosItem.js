import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TodosItem({ item, todosFilter }) {
  return (
    <TouchableOpacity onPress={() => todosFilter(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='black' />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
  },
  itemText: {
    marginLeft: 10,
  },
})
