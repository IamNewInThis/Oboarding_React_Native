import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <AppNavigation />
  </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
