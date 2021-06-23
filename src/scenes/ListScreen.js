import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import styles from '../css/listScreenCSS';
import axios from 'axios';
import DialogView from '../customComponent/DialogView';
import AsyncStorage from '@react-native-community/async-storage';
import {screenName} from '../Utils/util';

const ListView = ({navigation, setIsLogin}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [DialogOpen, setDialogOpen] = useState(false);
  Geolocation.getCurrentPosition(info => console.warn(info));

  const onPressAlertPositiveButton = text => {
    if (text === '') {
      alert('Please enter movie Name');
    } else {
      setDialogOpen(false);

      data.push({
        id: `${data.length + 1}`,
        title: text,
        releaseYear: `${2020}`,
      });
      setData(data);
    }
  };

  const onPressAlertNegativeButton = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    let options;
    options = {
      url: `https://reactnative.dev/movies.json`,
      method: 'GET',
    };
    axios(options)
      .then(response => response.data)
      .then(json => setData(json.movies))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [setData]);

  return (
    <>
      <LogoTitle navigation={navigation} setIsLogin={setIsLogin} />
      <DialogView
        displayAlert={DialogOpen}
        displayAlertIcon={true}
        alertTitleText={'Add your favorite Movie'}
        alertMessageText={'Alert message from props'}
        displayPositiveButton={true}
        positiveButtonText={'Add'}
        displayNegativeButton={true}
        negativeButtonText={'Cancel'}
        onPressPositiveButton={text => onPressAlertPositiveButton(text)}
        onPressNegativeButton={() => onPressAlertNegativeButton()}
      />
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: 'center',
        }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#8F6A35" />
        ) : (
          <FlatList
            style={{
              width: '100%',
            }}
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item, index}) => (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={styles.text}>
                  {index + 1}. {item.title}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    data.splice(index, 1);
                    setData([...data]);
                  }}>
                  <Image
                    source={require('../img/ic_delete.png')}
                    style={{
                      tintColor: '#8F6A35',
                      width: 20,
                      height: 20,
                    }}></Image>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}
          onPress={() => {
            setDialogOpen(true);
          }}>
          <Image
            source={require('../img/ic_add.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

function LogoTitle(props) {
  const logOut = async () => {
    try {
      await AsyncStorage.clear();
      props.setIsLogin(false);
    } catch (e) {
      console.log(e);
    }
  };

  const BackPress = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.toolBar}>
      <TouchableOpacity activeOpacity={0.7} onPress={BackPress}>
        <Image source={require('../img/back.png')} style={styles.headerBtn} />
      </TouchableOpacity>
      <Text style={styles.statusBarTitle}>Data</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={logOut}>
        <Image
          source={require('../img/ic_logout.png')}
          style={[styles.headerBtn, {marginRight: 20}]}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ListView;
