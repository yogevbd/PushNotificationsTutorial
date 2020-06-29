import {Navigation} from 'react-native-navigation';
import MainScreen from './src/screens/MainScreen';
import ChatScreen from './src/screens/ChatScreen';
import ConversationScreen from './src/screens/ConversationScreen';

export default class LayoutManager {
  registerScreens() {
    Navigation.registerComponent('com.myApp.MainScreen', () => MainScreen);
    Navigation.registerComponent('com.myApp.ChatScreen', () => ChatScreen);
    Navigation.registerComponent('com.myApp.ConversationScreen', () => ConversationScreen);
  }
  
  createInitialLayout(notification) {
    return {
      bottomTabs: {
        children: [
          this._createMainLayout(),
          this._createChatLayout(notification)
        ],
        options: {
          bottomTabs: {
            currentTabIndex: notification ? 1 : 0
          }
        }
      }
    }
  }

  _createMainLayout() {
    return {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.MainScreen'
            }
          }
        ],
        options: {
          bottomTab: {
            text: 'Main'
          }
        }
      }
    }
  }

  _createChatLayout(notification) {
    const children = [{
      component: {
        name: 'com.myApp.ChatScreen'
      }
    }];

    if (notification) {
      children.push({
        component: {
          name: 'com.myApp.ConversationScreen',
          passProps: {
            userName: notification.payload.userName,
            userId: notification.payload.userId
          }
        }
      });
    }

    return {
      stack: {
        children,
        options: {
          bottomTab: {
            text: 'Chat'
          }
        }
      }
    }
  }
}