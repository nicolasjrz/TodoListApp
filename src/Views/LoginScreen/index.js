import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TextInput,
  Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSignInPress = () => {
    if (user.trim().length > 0 && pass.trim().length > 0) {
      if (user === 'nicolas' && pass === '1234') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'el usuario y/o password son incorrectos');
        setUser('');
        setPass('');
      }
    }
  };

  const handleUserTextChange = text => {
    setUser(text);
  };
  const handlePassTextChange = text => {
    setPass(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
          }}
        />
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={handleUserTextChange}
          value={user}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePassTextChange}
          value={pass}
        />
      </View>
      <Button
        style={styles.button}
        title="Sign in"
        onPress={handleSignInPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  imgContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  inputsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    color: '#212121',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default LoginScreen;
