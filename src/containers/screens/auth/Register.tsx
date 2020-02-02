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

const Register: FC<Props> = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
