import {Navigation} from 'react-native-navigation';
import {Notifications} from 'react-native-notifications';
import LayoutManager from './src/services/LayoutManager';

const layoutManager = new LayoutManager();
layoutManager.registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Notifications.events().registerNotificationOpened((notification) => {
    // Handle notification opened from background
    layoutManager.loadChatNotification(notification);
  });

  // Get the notification that triggered the app launch
  const initialNotification = await Notifications.getInitialNotification();
  
  // Load the application root layout with the initial notification
  layoutManager.loadRoot(initialNotification);
});
