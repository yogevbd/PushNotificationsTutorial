import {Navigation} from 'react-native-navigation';
import {Notifications} from 'react-native-notifications';
import LayoutManager from './src/services/LayoutManager';

const layoutManager = new LayoutManager();
layoutManager.registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  const notification = await Notifications.getInitialNotification();
  Navigation.setRoot({
    root: layoutManager.createInitialLayout(notification)
  });
});
