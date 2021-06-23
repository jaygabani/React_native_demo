import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#8F6A35',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    alignSelf: 'stretch',
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    padding: 8,
    fontFamily: 'josefinsans_semibold',
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  borderBottom: {
    borderBottomColor: '#8F6A35',
    marginTop: 25,
    borderBottomWidth: 1,
    padding: 2,
    fontSize: 18,
    alignSelf: 'stretch',
    color: '#8F6A35',
    height: 30,
    fontFamily: 'josefinsans_regular',
  },
  borderTop: {
    borderBottomColor: '#8F6A35',
    borderBottomWidth: 2,
    alignItems: 'center',
    width: 65,
  },
  centerImageConatiner: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  container: {
    flex: 1,
  },
  headerView: {
    height: 65,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
  },
  loginText: {
    color: '#8F6A35',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'josefinsans_semibold',
    marginTop: 10,
  },
  marginText: {
    marginEnd: 15,
  },
  shadow: {
    height: 10,
    marginLeft: 15,
    marginRight: 15,
    margin: 0,
    padding: 0,
    backgroundColor: '#B49A71',
    opacity: 0.5,
    borderBottomEndRadius: 18,
    borderBottomLeftRadius: 18,
  },
  textView: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  textSetup: {
    color: '#8F6A35',
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'josefinsans_regular',
  },
});

export default styles;
