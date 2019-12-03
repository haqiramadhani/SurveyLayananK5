import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {HomeScreen, RatingScreen, VoiceScreen} from '../screens';

const stackNavigation = createStackNavigator(
  {
    HomeScreen,
    RatingScreen,
    VoiceScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default AppNavigation = createAppContainer(stackNavigation)