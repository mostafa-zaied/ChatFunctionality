/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Routes from './src/navigation/Routes'
import 'react-native-gesture-handler';
import Nav from './src/navigation'

AppRegistry.registerComponent(appName, () => Nav);
