import React from 'react';
import {View, TouchableOpacity, Image, Text, Platform, Alert} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Axios from 'axios';

import {BackgroundComponent} from '../../components';
import {back, logoPendidikan, logo, maskot} from '../../assets';
import styles from './styles';

export default VoiceScreen = props => {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  let file = '';
  let path = '';
  
  const handleRecord = async () => {
    path = Platform.select({
      ios: (new Date()).getTime() + '.m4a',
      android: 'sdcard/' + (new Date()).getTime() + '.mp3',
    })
    await audioRecorderPlayer.startRecorder(path);
  };

  const handleStop = async () => {
    file = await audioRecorderPlayer.stopRecorder();
  };

  const handlePlay = async () => {
    if (file !== '') await audioRecorderPlayer.startPlayer(path);
  };

  const handleSubmit = async () => {
    if (file === '') return null;
    var data = new FormData();
    data.append("file", {
      uri: file.replace('//', '///'),
      name: 'note.mp3',
      type: 'audio/mpeg'
    });
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    // Axios.post('http://192.168.43.174:8080/voice', data, config)
    Axios.post('http://3.90.7.176:8080/voice', data, config)
    .then(r => {
      Alert.alert('K5 Voice Note', r.data.message);
      props.navigation.goBack();
      console.warn(r);
    })
    .catch(e => console.warn(e));
    console.warn('hore')
  };
  
  return (
    <>
    <BackgroundComponent/>
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
          <Image source={back} style={styles.backIcon}/>
        </TouchableOpacity>
        <View style={styles.headerTextSection}>
          <Text style={styles.headerText}>KEMENTRIAN PENDIDIKAN DAN KEBUDAYAAN</Text>
          <Text style={styles.headerText}>DIREKTORAT JENDERAL PENDIDIKAN ANAK USIA DINI DAN PENDIDIKAN MASYARAKAT</Text>
        </View>
        <Image source={logoPendidikan} style={styles.logoPendidikan}/>
      </View>
      <Text style={styles.title}>K5 VOICE NOTE</Text>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.activeButton} onPress={() => handleRecord()}>
          <Text style={styles.buttonText}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleStop()}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlay()}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Kirim</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Image source={logo} style={styles.bottomImage}/>
        <Image source={maskot} style={styles.bottomImage}/>
      </View>
    </View>
    </>
  )
}
