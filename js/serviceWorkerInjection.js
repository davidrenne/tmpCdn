addEventListener("notificationclick", (event) => {
  event.waitUntil(
    (async function () {
      const allClients = await clients.matchAll({});

      let focusedClient;

      for (const client of allClients) {
        client.focus();
        focusedClient = client;
        break;
      }

      if (!focusedClient) {
        focusedClient = await clients.openWindow(event.notification.data);
      } else {
        focusedClient.navigate(event.notification.data);
      }

      event.notification.close();
    })()
  );
});

self.addEventListener("push", (e) => {
  const payload = JSON.parse(e.data.text());

  e.waitUntil(
    self.registration.showNotification(payload.title, {
      data: payload.data,
      body: payload.body,
      image: payload.image,
      badge: "https://cdn.firebaseapptemplate.com/images/SMC_Icon_Mask.png",
      icon: "https://cdn.firebaseapptemplate.com/images/SMC_App_Icon_192.png",
    })
  );
});
