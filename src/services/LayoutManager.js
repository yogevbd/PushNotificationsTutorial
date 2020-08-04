import {Navigation} from 'react-native-navigation';
import MainScreen from '../screens/MainScreen';
import ConversationsListScreen from '../screens/ConversationsListScreen';
import ConversationScreen from '../screens/ConversationScreen';

const Tabs = {
  Main: 0,
  Chat: 1
};

export default class LayoutManager {
  registerScreens() {
    Navigation.registerComponent('com.myApp.MainScreen', () => MainScreen);
    Navigation.registerComponent('com.myApp.ConversationsListScreen', () => ConversationsListScreen);
    Navigation.registerComponent('com.myApp.ConversationScreen', () => ConversationScreen);
  }

  loadRoot(initialNotification) {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            this._createMainLayout(),
            this._createChatLayout(initialNotification)
          ],
          options: {
            bottomTabs: {
              currentTabIndex: initialNotification ? Tabs.Chat : Tabs.Main
            }
          }
        }
      }
    });
  }
  
  loadChatNotification(notification) {
    Navigation.setStackRoot('Chat', this._createChatChildren(notification));
    Navigation.mergeOptions('Chat', {
      bottomTabs: {
        currentTabIndex: Tabs.Chat
      }
    });
  }

  _createMainLayout() {
    return {
      stack: {
        id: 'Main',
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
    return {
      stack: {
        id: 'Chat',
        children: this._createChatChildren(notification),
        options: {
          bottomTab: {
            text: 'Chat'
          }
        }
      }
    }
  }
  
  _createChatChildren(notification) {
    const children = [{
      component: {
        name: 'com.myApp.ConversationsListScreen'
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

    return children;
  }
}