import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenName} from '../Utils/util';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const PreLoginScreen = ({navigation}) => {
  const newPage = (pageName) => {
    navigation.push(pageName);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../img/image5.png')}>
          <View style={styles.textView}>
            <FadeInView>
              <View
                style={styles.borderTop}
                onStartShouldSetResponder={() =>
                  newPage(screenName.LoginScreen)
                }>
                <Text style={styles.textSetup}>Sign In</Text>
              </View>
            </FadeInView>
            <FadeInView>
              <View style={[styles.borderTop, styles.marginText]}>
                <Text style={[styles.textSetup]}>Sign Up</Text>
              </View>
            </FadeInView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  textView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  borderTop: {
    borderBottomColor: '#8F6A35',
    borderBottomWidth: 2,
    alignItems: 'center',
    width: 75,
  },
  textSetup: {
    alignItems: 'center',
    color: '#8F6A35',
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'josefinsans_regular',
  },
  marginText: {
    marginStart: 15,
  },
});

export default PreLoginScreen;
