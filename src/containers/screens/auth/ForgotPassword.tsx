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

const ForgotPassword: FC<Props> = () => {
  return (
    <View>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;
