import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const ValidateField = () => {
    if (username.trim() === ' ||password.trim() === ') {
      Alert.alert('Error', 'PLease enter both username and password');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!ValidateField()) return;

    setLoading(true);

    try {
      const response = await fetch('https://requers.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        navigation.replace('LoginScreen');
      } else {
        Alert.alert(
          'Login Failed',
          data.mesage || 'Inavild username or password',
        );
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'something went wrong. PLease try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button
        title={loading ? 'Logging in....' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});
