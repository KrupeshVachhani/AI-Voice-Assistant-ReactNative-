/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Feature() {
  return (
    <View>
      <Text style={style.text}>Feature</Text>
      <View style={style.container}>
        <Image source={require('../../assets/images/chatgptIcon.png')} style={style.img} />
        <Text style={style.textFeature}>Integrated ChatGPT</Text>
      </View>
      <View style={[style.container, { backgroundColor: '#ce9efd' }]}>
        <Image source={require('../../assets/images/dalleIcon.png')} style={style.img} />
        <Text style={style.textFeature}>Integrated Dalle</Text>
      </View>
      <View style={[style.container, { backgroundColor: '#80deea' }]}>
        <Image source={require('../../assets/images/smartaiIcon.png')} style={style.img} />
        <Text style={style.textFeature}>Integrated SmartAI</Text>
      </View>
    </View>
  );
}

const style = {
  text: {
    fontSize: wp('6.5'),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: wp('3%'),
  },
  textFeature: {
    fontSize: wp('5'),
    fontWeight: '600', // Use a string for fontWeight
    color: '#3f3f3f',
    padding: wp('1'),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('90%'),
    height: hp('10'),
    marginTop: hp('3%'),
    backgroundColor: '#87dbba',
    paddingLeft: wp('5%'),
    paddingTop: wp('5%'),
    paddingBottom: wp('5%'),
    borderRadius: 10,
  },
  img: {
    width: wp('12'),
    height: hp('6'),
    marginRight: wp('2%'),
  },
};
