/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feature from '../components/Feature';
import {dummyMessages} from '../contants';
import Voice from '@react-native-voice/voice';

export default function HomeScreen() {
  // State variables
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  // Function to clear messages
  const Clear = () => {
    setMessages([]);
  };

  // Function to stop speech
  const StopSpeech = () => {
    setSpeaking(false);
  };

  // Event handler for speech start
  const onSpeechStart = e => {
    console.log('onSpeechStart: ', e);
  };

  // Event handler for speech end
  const onSpeechEnd = e => {
    console.log('onSpeechEnd: ', e);
    setRecording(false);
  };

  // Event handler for speech results
  const onSpeechResults = e => {
    console.log('onSpeechResults: ', e);
  };

  // Event handler for speech error
  const onSpeechError = e => {
    console.log('onSpeechError: ', e);
  };

  // Function to start recording
  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-GB');
    } catch (e) {
      console.error(e);
    }
  };

  // Function to stop recording
  const stopRecording = async () => {
    setRecording(false);
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  // Effect hook for setting up voice event listeners
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // JSX structure
  return (
    <View style={style.home}>
      <SafeAreaView>
        {/* Header */}
        <View style={style.imgview}>
          <Image
            source={require('../../assets/images/bot.png')}
            style={style.img}
          />
        </View>

        {/* Features and messages */}
        {messages.length > 0 ? (
          <View style={style.ass}>
            <Text style={style.text}>Assistant</Text>
            <View style={style.scroll}>
              <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                {/* Message rendering */}
                {messages.map((msg, index) => {
                  if (msg.role === 'assistant') {
                    // Render assistant messages
                    return msg.content.includes('https') ? (
                      <View key={index}>
                        <View
                          style={[
                            style.aires,
                            {
                              backgroundColor: '#87dbba',
                              width: wp(60),
                              height: hp(30),
                            },
                          ]}>
                          <Image
                            source={{uri: msg.content}}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 10,
                            }}
                          />
                        </View>
                      </View>
                    ) : (
                      <View
                        key={index}
                        style={[style.aires, {backgroundColor: '#87dbba'}]}>
                        <Text style={style.assText}>{msg.content}</Text>
                      </View>
                    );
                  } else {
                    // Render user messages
                    return (
                      <View key={index} style={style.mainres}>
                        <View style={style.aires}>
                          <Text style={style.assText}>{msg.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          // Display feature component if no messages
          <Feature />
        )}

        {/* Bottom section with buttons */}
        <View style={style.bottom}>
          {/* Recording/Stop recording button */}
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              <Image
                source={require('../../assets/images/voiceLoading.gif')}
                style={[
                  style.img,
                  {
                    width: wp(22),
                    height: hp(11),
                    marginBottom: wp(2),
                  },
                ]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              <Image
                source={require('../../assets/images/recordingIcon.png')}
                style={[
                  style.img,
                  {
                    width: wp(20),
                    height: hp(10),
                    marginBottom: wp(2),
                  },
                ]}
              />
            </TouchableOpacity>
          )}

          {/* Clear and Stop buttons */}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={Clear}
              style={[
                style.button,
                {
                  backgroundColor: '#a0aec0',
                  borderRadius: 20,
                  padding: 8,
                  position: 'absolute',
                  right: 10,
                },
              ]}>
              <Text style={[style.assText, {fontWeight: 'bold'}]}>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              onPress={StopSpeech}
              style={[
                style.button,
                {
                  backgroundColor: '#e53e3e',
                  borderRadius: 20,
                  padding: 8,
                  position: 'absolute',
                  left: 10,
                },
              ]}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

// Styles
const style = {
  text: {
    fontSize: wp('6.5'),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: wp('3'),
    marginTop: wp('3'),
  },
  assText: {
    fontSize: wp('4.1'),
    fontWeight: 'normal',
    color: 'black',
  },
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img: {
    width: wp('30'),
    height: hp('18'),
  },
  imgview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  ass: {
    flex: 1,
    alignItems: 'start',
  },
  scroll: {
    marginTop: wp(5),
    width: wp(90),
    height: hp(57),
    backgroundColor: '#d7d7d7',
    borderRadius: 15,
    padding: wp(2),
  },
  aires: {
    width: wp(70),
    backgroundColor: '#fff',
    padding: wp(2),
    margin: wp(2),
    borderRadius: 10,
  },
  mainres: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3'),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: wp(5),
    right: wp(5),
  },
  button: {
    width: wp(20),
    backgroundColor: '#d7d7d7',
    padding: wp(3),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
