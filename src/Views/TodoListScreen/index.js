import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const TodoListScreen = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleChangeText = text => {
    setTodoText(text);
  };

  const handleButtonPress = () => {
    if (todoText.trim().length > 0) {
      setTodoList(value => value.concat(todoText));
      setTodoText('');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="escribe tu palabra"
          placeholderTextColor="#c4c4c4"
          value={todoText}
          onChangeText={handleChangeText}
        />
        <Button title="Enter" onPress={handleButtonPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFB',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default TodoListScreen;
