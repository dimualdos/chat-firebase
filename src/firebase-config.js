/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

const config = {
  apiKey: "AIzaSyD6bt2W-LA4ht1Md-9I9nDQrT83VrOir0s",
  authDomain: "friendlychat-90049.firebaseapp.com",
  databaseURL: "https://friendlychat-90049-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "friendlychat-90049",
  storageBucket: "friendlychat-90049.appspot.com",
  messagingSenderId: "419399684120",
  appId: "1:419399684120:web:e726005a25b3885d14736d"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}