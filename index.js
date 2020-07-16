import {Navigation} from 'react-native-navigation';
import {Notifications} from 'react-native-notifications';
import LayoutManager from './src/services/LayoutManager';

const layoutManager = new LayoutManager();
layoutManager.registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Notifications.events().registerNotificationOpened((notification) => {
    setRoot(notification);
  });

  const notification = await Notifications.getInitialNotification();
  setRoot(notification);
});

function setRoot(notification) {
  Navigation.setRoot({
    root: layoutManager.createLayout(notification)
  });
}