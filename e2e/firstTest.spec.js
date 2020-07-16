describe('Push Notifications Tutorial', () => {
  beforeEach(async () => {
    await device.relaunchApp({delete: true, permissions: {notifications: 'YES'}});
  });

  describe('initial launch', () => {
    it('should open conversation', async () => {
      await device.launchApp({newInstance: true, userNotification: createChatNotification({id: '1', name: 'Jhon'})});
      await expect(element(by.label('Conversation with: Jhon'))).toBeVisible();
    });
  });

  describe('background state', () => {
    it('should open conversation', async () => {
      await device.launchApp({newInstance: true});
      await device.sendToHome();
      await device.launchApp({newInstance: false, userNotification: createChatNotification({id: '1', name: 'Jhon'})});
      await expect(element(by.label('Conversation with: Jhon'))).toBeVisible();
    });
  });
});

function createChatNotification(user) {
  return {
    "trigger": {
      "type": "push"
    },
    "title": "From push",
    "subtitle": "Subtitle",
    "body": "Body",
    "badge": 1,
    "payload": {
      "userId": user.id,
      "userName": user.name
    },
    "category": "com.example.category",
    "content-available": 0,
    "action-identifier": "default"
  }
}
