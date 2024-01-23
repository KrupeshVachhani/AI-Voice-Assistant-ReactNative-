/* eslint-disable prettier/prettier */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {

    const navigation = useNavigation();
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container1}>
        <Text style={style.text}>Penguin</Text>
        <Text style={style.smallText}>The Future is here, Powered by AI</Text>
      </View>

      <View style={style.container2}>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={style.img}
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={style.getst}>
        <Text style={style.text1}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = {
  text: {
    fontSize: wp('10%'),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3f3f3f',
  },
  smallText: {
    fontSize: wp('5%'),
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#3f3f3f',
    marginTop: 10,
  },
  text1: {
    fontSize: wp('6%'),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    alignItems: 'center',
    margin: 30,
  },
  container2: {
    alignItems: 'center',
    marginTop: 100,
  },
  img: {
    width: wp('60%'),
    height: hp('30%'),
  },
  getst: {
    backgroundColor: '#2ecc71',
    width: wp('80%'),
    height: hp('8%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
};
