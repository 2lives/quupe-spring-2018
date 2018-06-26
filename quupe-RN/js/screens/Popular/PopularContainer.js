import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import Popular from './Popular';
import Category from '../Category';

import styles from './styles';

class PopularContainer extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.dimension}>
          <Popular />
        </View>
      </ScrollView>
    );
  }
}

export default PopularContainer;
