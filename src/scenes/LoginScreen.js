import AsyncStorage from '@react-native-community/async-storage';
import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {STORAGE_USER_DETAIL, STORAGE_IS_LOGIN, screenName} from '../Utils/util';
import styles from '../css/loginScreenCSS';
import Colors from '../css/values/colors';

const LoginScreen = ({setIsLogin}) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [emailLabel, setEmailLabel] = useState(false);
  const [passLabel, setPassLabel] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();

  const onSubmit = () => {
    if (validate()) {
      SaveData();
    }
  };

  const SaveData = async () => {
    let loginDetail = {
      password: password,
      emailId: emailId,
    };

    await AsyncStorage.setItem(
      STORAGE_USER_DETAIL,
      JSON.stringify(loginDetail),
    );
    await AsyncStorage.setItem(STORAGE_IS_LOGIN, JSON.stringify(true));
    setIsLogin(true);
  };

  const validate = () => {
    let result = true;

    if (emailId === '') {
      emailRef.current.focus();
      setEmailLabel(true);
      result = false;
    } else if (password === '') {
      passRef.current.focus();
      setPassLabel(true);
      result = false;
    }
    return result;
  };

  const changeText = (text, checkText) => {
    if (checkText === 'email') {
      setEmailLabel(false);
      setEmailId(text);
    } else {
      setPassLabel(false);
      setPassword(text);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../img/image5.png')}>
        <View style={styles.headerView}>
          <Image
            style={styles.icon}
            source={require('../img/ic_login_user.png')}></Image>
          <View style={styles.textView}>
            <View>
              <Text style={styles.textSetup}>Sign Up</Text>
            </View>
            <View style={[styles.borderTop, styles.marginText]}>
              <Text style={styles.textSetup}>Sign In</Text>
            </View>
          </View>
        </View>
        <View style={styles.centerImageConatiner}>
          <ImageBackground
            resizeMode={'stretch'}
            style={styles.backgroundImage}
            source={require('../img/ic_login.png')}>
            <View style={{padding: 20, flex: 1}}>
              <Text style={styles.loginText}>Sign In</Text>
              <View
                style={[
                  styles.container,
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                  },
                ]}>
                <TextInput
                  multiline={false}
                  style={styles.borderBottom}
                  placeholder="E-mail address"
                  placeholderTextColor={Colors.textGrey}
                  ref={emailRef}
                  value={emailId}
                  onChangeText={text => changeText(text, 'email')}
                />
                {emailLabel && (
                  <Text style={{color: 'red'}}>
                    Please enter valid email id
                  </Text>
                )}
                <TextInput
                  multiline={false}
                  style={styles.borderBottom}
                  placeholder="Password"
                  placeholderTextColor={'#8F6A35'}
                  ref={passRef}
                  value={password}
                  secureTextEntry={true}
                  onChangeText={text => changeText(text, 'password')}
                />
                {passLabel && (
                  <Text style={{color: 'red'}}>
                    Please enter valid password
                  </Text>
                )}
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.appButtonContainer}
                  onPress={onSubmit}>
                  <Text style={styles.appButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.shadow} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
