import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrul2KvktqXh_Gca7oSQ102PuEw-aTgv8",
  authDomain: "order-app-4563d.firebaseapp.com",
  databaseURL: "https://order-app-4563d.firebaseio.com",
  projectId: "order-app-4563d",
  storageBucket: "order-app-4563d.appspot.com",
  messagingSenderId: "444367037690"
};

firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
