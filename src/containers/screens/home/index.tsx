import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationRoute,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

const Home: FC<Props> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
