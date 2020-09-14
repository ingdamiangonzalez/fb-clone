import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBZzPdUbLrCooFAbCMh3RX4D7STK5Hc-8c',
  authDomain: 'fb-clone-7643c.firebaseapp.com',
  databaseURL: 'https://fb-clone-7643c.firebaseio.com',
  projectId: 'fb-clone-7643c',
  storageBucket: 'fb-clone-7643c.appspot.com',
  messagingSenderId: '28084597898',
  appId: '1:28084597898:web:d693ff32b2aaa203832973',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
