import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "XXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXX",
  projectId: "XXXXX",
  storageBucket: "XXXXX",
  messagingSenderId: "XXXXX"
};

firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
