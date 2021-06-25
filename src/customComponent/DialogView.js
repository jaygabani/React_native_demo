import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const DialogView = props => {
  const [movieName, onChangeText] = useState('');

  const onNegativeButtonPress = () => {
    props.onPressNegativeButton();
  };

  const onPositiveButtonPress = movieName => {
    props.onPressPositiveButton(movieName);
  };

  return (
    // open dialog view and set different button tap effect
    <Modal
      visible={props.displayAlert}
      statusBarTranslucent={true}
      transparent={true}
      animationType={'fade'}>
      <View style={styles.mainOuterComponent}>
        <View style={styles.mainContainer}>
          {/* First Row - Alert Icon and Title */}
          <View style={[styles.topPart, styles.topBorder]}>
            <Text style={styles.alertTitleTextStyle}>
              {`${props.alertTitleText}`}
            </Text>
          </View>
          {/* Second Row - Alert Message Text */}
          <View style={styles.middlePart}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onChangeText(text)}
              value={movieName}
              spellCheck={false}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Movie Name"
              placeholderTextColor={'#000000'}
              autoFocus={true}
              selectionColor={'#000000'}
            />
          </View>
          {/* Third Row - Positive and Negative Button */}
          <View style={styles.bottomPart}>
            {props.displayPositiveButton && (
              <TouchableOpacity
                style={[
                  styles.alertMessageButtonStyle,
                  styles.leftBottomBorder,
                ]}
                onPress={() => {
                  onPositiveButtonPress(movieName);
                  onChangeText('');
                }}>
                <Text style={styles.alertMessageButtonTextStyle}>
                  {props.positiveButtonText}
                </Text>
              </TouchableOpacity>
            )}
            <View style={{width: 0.5, backgroundColor: '#FFFFFF'}}></View>
            {props.displayNegativeButton && (
              <TouchableHighlight
                style={styles.alertButtonHighlight}
                activeOpacity={0.5}
                underlayColor="#9c743a"
                onPress={() => {
                  onNegativeButtonPress();
                  onChangeText('');
                }}
                style={[
                  styles.alertMessageButtonStyle,
                  styles.rightBottomBorder,
                ]}>
                <Text style={styles.alertMessageButtonTextStyle}>
                  {props.negativeButtonText}
                </Text>
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

DialogView.propTypes = {
  displayAlert: PropTypes.bool,
  displayAlertIcon: PropTypes.bool,
  alertTitleText: PropTypes.string,
  alertMessageText: PropTypes.string,
  displayPositiveButton: PropTypes.bool,
  positiveButtonText: PropTypes.string,
  displayNegativeButton: PropTypes.bool,
  negativeButtonText: PropTypes.string,
  onPressPositiveButton: PropTypes.func,
  onPressNegativeButton: PropTypes.func,
};

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000088',
  },
  mainContainer: {
    flexDirection: 'column',
    height: 200,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  topPart: {
    flex: 0.3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    backgroundColor: '#8F6A35',
    paddingVertical: 4,
  },
  middlePart: {
    flex: 1,
    width: '100%',
    padding: 5,
    color: '#FFFFFF',
    fontSize: 16,
    justifyContent: 'center',
    marginVertical: 2,
  },
  textInput: {
    marginHorizontal: 5,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#000000',
    fontSize: 14,
    fontFamily: 'josefinsans_regular',
  },
  bottomPart: {
    flex: 0.4,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertIconStyle: {
    height: 35,
    width: 35,
  },
  alertTitleTextStyle: {
    flex: 1,
    textAlign: 'justify',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'josefinsans_bold',
    padding: 2,
    paddingLeft: 6,
    marginHorizontal: 2,
  },
  alertMessageTextStyle: {
    color: '#8F6A35',
    textAlign: 'justify',
    fontSize: 14,
    paddingHorizontal: 6,
    fontFamily: 'josefinsans_regular',
    paddingVertical: 2,
  },
  alertMessageButtonStyle: {
    width: '50%',
    backgroundColor: '#8F6A35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBottomBorder: {
    borderBottomRightRadius: 8,
  },
  leftBottomBorder: {
    borderBottomLeftRadius: 8,
  },
  topBorder: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  alertMessageButtonTextStyle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'times_new_roman',
  },
  alertButtonHighlight: {},
});

export default DialogView;
