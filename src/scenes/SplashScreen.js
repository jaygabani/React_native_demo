import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {STORAGE_IS_LOGIN, screenName} from '../Utils/util';
var bg = require('../img/image2.png');

const SplashScreen = ({navigation}) => {
  newPage(navigation);

  return (
    <>
      <ImageBackground
        source={bg}
        style={styles.backgroundImage}></ImageBackground>
    </>
  );
};

let newPage = async (navigation) => {
  let isLogin = await AsyncStorage.getItem(STORAGE_IS_LOGIN);
  setTimeout(() => {
    if (JSON.parse(isLogin)) {
      navigation.replace(screenName.ListScreen);
    } else {
      navigation.replace(screenName.PreLoginScreen);
    }
  }, 3000);
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default SplashScreen;
