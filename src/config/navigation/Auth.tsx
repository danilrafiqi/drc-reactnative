import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../../containers/screens/auth/Login';
import Register from '../../containers/screens/auth/Register';
import ForgotPassword from '../../containers/screens/auth/ForgotPassword';

const AuthStack = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
      },
      Register: {
        screen: Register,
      },
      ForgotPassword: {
        screen: ForgotPassword,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);

export default AuthStack;
