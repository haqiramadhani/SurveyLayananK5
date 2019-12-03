import React from 'react';
import {Image} from 'react-native';

import {background} from '../../assets';
import styles from './styles';

export default BackgroundComponent = props => {
  return (
    <Image source={background} style={styles.background}/>
  )
}