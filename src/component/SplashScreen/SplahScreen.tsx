import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';


const SplahScreen = () => {



  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <Image
        source={require('../../Image/SplashScreen.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default SplahScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
