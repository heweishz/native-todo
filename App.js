import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Header from './components/header'
import AddTodos from './components/addTodos'
import TodosItem from './components/todosItem'
import Sandbox from './components/sandbox'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'create another app', key: '4' },
    { text: 'play on the switch', key: '3' },
  ])

  const todosFilter = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log('dismissed keyboard')
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodos setTodos={setTodos} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                //<Text style={styles.item}>{item.text}</Text>
                <TodosItem item={item} todosFilter={todosFilter} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
