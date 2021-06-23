import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  headerBtn: {
    width: 18,
    height: 18,
    marginTop: 2,
    tintColor: '#ffffff',
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#8F6A35',
    height: StatusBar.currentHeight * 2,
    paddingLeft: 15,
    shadowColor: '#8F6A35',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  statusBarTitle: {
    fontSize: 22,
    color: '#FFFFFF',
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    fontFamily: 'josefinsans_semibold',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
    minHeight: 30,
    fontFamily: 'josefinsans_regular',
  },
});
export default styles;
