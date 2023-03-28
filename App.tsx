/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import Main from './src/Main';

function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

export default App;
