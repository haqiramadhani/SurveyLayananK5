import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  headerSection: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingTop: 10,
	},
	backButton: {
    alignSelf: 'center',
	},
	backIcon: {
		height: 45,
    width: 45,
    alignSelf: 'center',
	},
	logoPendidikan: {
		height: 60,
    width: 60,
    marginLeft: 10,
	},
  headerTextSection: {
    paddingTop: 15,
    paddingLeft: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 12,
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
    paddingHorizontal: 100,
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
  button: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#A6292A',
    backgroundColor: '#808080',
    borderWidth: 5,
  },
  activeButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#A6292A',
    backgroundColor: 'red',
    borderWidth: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }
})