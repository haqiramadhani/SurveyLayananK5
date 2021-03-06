import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
  },
  headerSection: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  logoPendidikan: {
    height: 65,
    width: 65,
  },
  headerTextSection: {
    paddingTop: 15,
    paddingLeft: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 12.5,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 7,
    marginBottom: 5,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  buttonIcon: {
    height: 80,
    width: 80,
  },
  bottomImage: {
    height: 105,
    width: 110
  },
  voiceButton: {
    justifyContent: 'center'
  },
  voiceIcon: {
    height: 65,
    width: 65,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 9,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});