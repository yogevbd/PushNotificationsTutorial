describe('Push Notifications Tutorial', () => {
  beforeEach(async () => {
    await device.relaunchApp({delete: true, permissions: {notifications: 'YES'}});
  });

  it('should present initial chat notification', async () => {
    await device.launchApp({newInstance: true, userNotification: createChatNotification({id: '1', name: 'Jhon'})});
    await expect(element(by.label('Conversation with: Jhon'))).toBeVisible();
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
