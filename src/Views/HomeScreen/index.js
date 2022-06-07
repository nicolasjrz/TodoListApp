import React from 'react';
import {StyleSheet, Text, useColorScheme, View, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back, User!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    backgroundColor: '#63a4ff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 12,
    paddingRight: 12,
  },
  img: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default HomeScreen;
