import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Button with icon component"
        />
      </View>
    );
  }
}

export default HomeScreen;
