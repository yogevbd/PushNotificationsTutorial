import React from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

class ChatScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={[{
            userId: '1',
            userName: 'Jhon'
          },
          {
            userId: '2',
            userName: 'Ben'
          }]}
          renderItem={this.renderItem}
          keyExtractor={item => item.userId}
        />
      </SafeAreaView>
    );
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{height: 100, justifyContent: 'center', backgroundColor: '#0ff00f', margin: 10}}
        onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: 'com.myApp.ConversationScreen',
              passProps: {
                item
              }
            }
          });
        }}>
        <Text style={{marginLeft: 20}}>{item.userName}</Text>
      </TouchableOpacity>
    );
  }
}

export default ChatScreen;
