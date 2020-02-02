import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../containers/screens/home';

const App = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);

export default App;
