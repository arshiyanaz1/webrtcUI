import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CallingScreen from './src/screens/CallingScreen';
import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <Navigation />
    </>
  );
};

export default App;
