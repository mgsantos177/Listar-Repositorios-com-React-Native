import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
        },
        {
            headerTitleAlign: 'center',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#103197',
                },
                headerTintColor: '#FFF',
            },
        }
    )
);

export default Routes;
