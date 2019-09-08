import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {SCREEN_WIDTH} from './config/functions';

import HomeScreen from './screens/HomeScreen';
import CustomDrawerComponent from './components/CustomDrawerComponent';

const AppTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
  }),
  AppStackNavigator = createStackNavigator({
    MainTabNavigator: {
      screen: AppTabNavigator,
    },
  });

WebStackNavigator = createStackNavigator({
  Web: HomeScreen,
});

const MainDrawer = createDrawerNavigator(
  {
    Anasayfa: AppStackNavigator,
    KopgitWeb: WebStackNavigator,
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: (SCREEN_WIDTH / 3) * 2,
    contentOptions: {
      activeTintColor: 'orange',
      style: {backgroundColor: 'tomato'},
    },
  },
);

const Main = createAppContainer(MainDrawer);

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  render() {
    return <Main />;
  }
}
