import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Home from './Home';
import styles from './styles';

class HomeContainer extends Component {
  render() {
    return (
      <View>
        <Home />
        <Text>Home Container</Text>
      </View>
    );
  }
}

export default HomeContainer;
