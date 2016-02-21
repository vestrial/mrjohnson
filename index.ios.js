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
var Icon = require('react-native-vector-icons/FontAwesome');

class mrjohnson extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.title}>
            Zufallsrun
          </Text>
          <TouchableHighlight underlayColor="#F5FCFF" onPress={() => this.setState({ currentRun: "egal" })}>
            <Text style={styles.newRun}>
              <Icon name="refresh" size={25} color="#900" />
            </Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.result}>
          {shadowrandom.randomRun()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
  newRun: {
    fontSize: 20,
    textAlign: 'right',
  },
  result: {
    flex: 1,
    textAlign: 'auto',
    color: '#333333',
    marginHorizontal: 20,
  },
});

AppRegistry.registerComponent('mrjohnson', () => mrjohnson);
