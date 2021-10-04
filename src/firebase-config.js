/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBWJ7DI-uNiOJFo8o2Sx33J54WjJhvUqlc",
  authDomain: "friendly-chat-edd59.firebaseapp.com",
  projectId: "friendly-chat-edd59",
  storageBucket: "friendly-chat-edd59.appspot.com",
  messagingSenderId: "872981552803",
  appId: "1:872981552803:web:7e30735b12e00ff3d8a916"
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}