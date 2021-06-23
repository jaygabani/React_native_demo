import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screenName, STORAGE_IS_LOGIN} from './src/Utils/util';

import LoginScreen from './src/scenes/LoginScreen';
import ListScreen from './src/scenes/ListScreen';
import {ActivityIndicator, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';

const Stack = createStackNavigator();

const App = props => {
  const [isLogin, setIsLogin] = useState('');
  const [isLoading, setisLoading] = useState(true);

  const initialise = async () => {
    let isLogin = await AsyncStorage.getItem(STORAGE_IS_LOGIN);
    setIsLogin(isLogin);
    setisLoading(false);
    SplashScreen.hide();
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8F6A35"
        translucent={false}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : isLogin ? (
        <Stack.Navigator
          initialRouteName={screenName.ListScreen}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={screenName.ListScreen}>
            {props => <ListScreen {...props} setIsLogin={setIsLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <LoginScreen setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default App;
