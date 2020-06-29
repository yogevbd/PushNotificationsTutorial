import React from 'react';
import {View, Text} from 'react-native';

class ConversationScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Conversation with: {this.props.userName}</Text>
      </View>
    );
  }
}

export default ConversationScreen;
