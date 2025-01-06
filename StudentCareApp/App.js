import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{title:'UoV Student Care',headerStyle: { backgroundColor: '#520f4e' },headerTintColor: '#fff', headerTitleAlign:'center'}} />    
            <Stack.Screen name='Dashboard' component={Dashboard} options={{title:'UoV Student Care',headerStyle: { backgroundColor: '#520f4e' },headerTintColor: '#fff', headerTitleAlign:'center'}}/>    
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  </PaperProvider>
  );
}
const styles=StyleSheet.create({
  image:{
    width:500
  }
})