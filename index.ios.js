/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var shadowrandom = require("shadowrandom");

class mrjohnson extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Zufallsrun
      </Text>
        <Text style={styles.instructions}>
          {shadowrandom.randomRun()}
        </Text>
        <TouchableHighlight onPress={() => this.setState({ currentRun: "egal" })}>
          <Text style={styles.next}>
            Neuer Run
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mrjohnson', () => mrjohnson);
