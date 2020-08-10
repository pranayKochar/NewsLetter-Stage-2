import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

var { width } = Dimensions.get('window')

export default class NewsIndex extends Component {
  render() {
    return (
        <View style={styles.horizontalLine}>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontalLine: {
      borderBottomColor: 'black', 
      borderBottomWidth: 0.5, 
      width: width - 60,
      marginTop: 20,
      marginBottom: 20,
  },
});
