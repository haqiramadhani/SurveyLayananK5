import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {logoPendidikan, keamanan, ketertiban, kebersihan, keindahan, kerapihan, logo, maskot, voice} from '../../assets';
import {BackgroundComponent} from '../../components';
import styles from './styles';

export default HomeScreen = props => {
  // useEffect(() => {
  // }, [])

  return (
    <>
    <BackgroundComponent/>
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Image source={logoPendidikan} style={styles.logoPendidikan}/>
        <View style={styles.headerTextSection}>
          <Text style={styles.headerText}>KEMENTRIAN PENDIDIKAN DAN KEBUDAYAAN</Text>
          <Text style={styles.headerText}>DIREKTORAT JENDERAL PENDIDIKAN ANAK USIA DINI DAN PENDIDIKAN MASYARAKAT</Text>
        </View>
      </View>
      <Text style={styles.title}>SURVEY LAYANAN K5</Text>
      <View style={styles.buttonSection}>
        <TouchableOpacity onPress={() => props.navigation.navigate('RatingScreen', {category: 'keamanan'})}>
          <Image source={keamanan} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>KEAMANAN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RatingScreen', {category: 'ketertiban'})}>
          <Image source={ketertiban} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>KETERTIBAN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RatingScreen', {category: 'kebersihan'})}>
          <Image source={kebersihan} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>KEBERSIHAN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RatingScreen', {category: 'keindahan'})}>
          <Image source={keindahan} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>KEINDAHAN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RatingScreen', {category: 'kerapihan'})}>
          <Image source={kerapihan} style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>KERAPIHAN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Image source={logo} style={styles.bottomImage}/>
        <TouchableOpacity style={styles.voiceButton} onPress={() => props.navigation.navigate('VoiceScreen')}>
          <Image source={voice} style={styles.voiceIcon}/>
        </TouchableOpacity>
        <Image source={maskot} style={styles.bottomImage}/>
      </View>
    </View>
    </>
  )
};