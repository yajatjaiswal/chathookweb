import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDARI1sMMpMgVhZRmHOOxkWg4E52RpbNow",
  authDomain: "chathook-f2855.firebaseapp.com",
  projectId: "chathook-f2855",
  storageBucket: "chathook-f2855.appspot.com",
  messagingSenderId: "174416072583",
  appId: "1:174416072583:web:96c1001bedc0a49f800d22",

  // apiKey: "AIzaSyBAsYuIpeIP6BvdWlYbsJL7wl_lynmQsWQ",
  // authDomain: "fookreywebs-c2c5b.firebaseapp.com",
  // databaseURL:
  //   "https://fookreywebs-c2c5b-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "fookreywebs-c2c5b",
  // storageBucket: "fookreywebs-c2c5b.appspot.com",
  // messagingSenderId: "107824438909",
  // appId: "1:107824438909:web:c03c8e8758c908054edb14",
  // measurementId: "G-N3K8Z2CDD4",
});

const db = firebaseapp.firestore();

const auth = firebase.auth();

export { db, auth };
