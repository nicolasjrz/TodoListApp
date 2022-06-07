import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const TodoListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="escribe tu palabra"
          placeholderTextColor="#c4c4c4"
        />
        <Button title="Enter" />
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
