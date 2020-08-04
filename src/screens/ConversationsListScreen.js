import React from 'react';
import {Text, FlatList, SafeAreaView, TouchableOpacity, Image, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

class ConversationsListScreen extends React.Component {
  render() {
    return (
      <SafeAreaView flex>
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
      <TouchableOpacity style={{height: 90, justifyContent: 'center', backgroundColor: '#0ff00f', margin: 5}}
        onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: 'com.myApp.ConversationScreen',
              passProps: {
                ...item
              }
            }
          });
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/image-placeholder.png')} style={{width: 60, height: 60, margin: 20}} />
          <Text>{item.userName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ConversationsListScreen;
