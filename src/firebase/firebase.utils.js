import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC33G6ikWgv-6a1AnvvN5wM6vzlvGE7Krc',
  authDomain: 'astute-sky-276515.firebaseapp.com',
  databaseURL: 'https://astute-sky-276515.firebaseio.com',
  projectId: 'astute-sky-276515',
  storageBucket: 'astute-sky-276515.appspot.com',
  messagingSenderId: '210887031161',
  appId: '1:210887031161:web:6732e28e558a358578d7a8',
  measurementId: 'G-RQ9TNC7PGD',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
