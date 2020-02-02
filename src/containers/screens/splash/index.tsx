import React, {useEffect, FC} from 'react';
import {View, Image} from 'react-native';
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationRoute,
} from 'react-navigation';
interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

const Splash: FC<Props> = props => {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('App'), 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        style={{
          width: 160,
          justifyContent: 'center',
          resizeMode: 'contain',
        }}
        source={require('../../../assets/logo-white.png')}
      />
    </View>
  );
};

export default Splash;
