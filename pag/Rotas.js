import{createStackNavigator} from "@react-navigation/stack";

import Home from './Home';
import Menu from './Menu';
import Cafe from './cafe';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <Stack.Navigator>
    <Stack.Screen name ='Home' component={Home} options={{headerShown:false, title: 'Home'}}/>
       <Stack.Screen name ='Menu' component={Menu} options={{headerShown:false, title: 'Menu'}}/>
    <Stack.Screen name ='Cafe' component={Cafe} options={{headerShown:false, title: 'Cafe'}}/>

       </Stack.Navigator>
  );
}