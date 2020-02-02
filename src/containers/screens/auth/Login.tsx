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

const Login: FC<Props> = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
