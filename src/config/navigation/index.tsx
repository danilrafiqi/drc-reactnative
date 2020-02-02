import React from 'react';
import {createAppContainer} from 'react-navigation';
import Splash from '../../containers/screens/splash';
import AuthStack from './Auth';
import AppStack from './App';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

const RootStack = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      Splash: Splash,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Splash',
      transition: (
        <Transition.Together>
          <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    },
  ),
);

export default RootStack;
