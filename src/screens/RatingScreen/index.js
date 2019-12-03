import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import Axios from 'axios';

import {BackgroundComponent} from '../../components';
import {logoPendidikan, back, sangatBaik, logo, maskot, baik, cukup} from '../../assets';
import styles from './styles';

export default RatingScreen = props => {
  const [category, setCategory] = useState('');

  const handleSubmit = async rating => {
    const data = {
      category,
      rating,
    };
    // console.warn(data);
    await Axios.post('url', data)
    .then(r => {
      Alert.alert('K5 Survey', r.data.message);
      props.navigation.goBack();
    })
    .catch(e => Alert.alert('K5 Survey', 'Failed to connect!'));
  };

  useEffect(() => {
    setCategory(props.navigation.state.params.category);
  }, [])

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
      <Text style={styles.title}>SURVEY LAYANAN K5</Text>
      <View style={styles.buttonSection}>
        <TouchableOpacity onPress={() => handleSubmit('Sangat baik')}>
          <Image source={sangatBaik} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>SANGAT BAIK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmit('Baik')}>
          <Image source={baik} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>BAIK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmit('Cukup')}>
          <Image source={cukup} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>CUKUP</Text>
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