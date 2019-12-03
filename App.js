import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Image, View} from 'react-native';
import Orientation from 'react-native-orientation';
import AppNavigation from './src/navigation';
import {background} from './src/assets';

const App = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
