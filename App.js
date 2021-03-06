import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigators/AppNavigator';
import { store } from './src/createStore';

export default class App extends Component {
  render() {
    return (
          <Provider store={store}>
              <AppNavigator/>
          </Provider>
    );
  }
}
