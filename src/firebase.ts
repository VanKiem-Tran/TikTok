import 'firebase/app';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrsX0TwPzGOj6IEcQFzOL0Cbivmo4VwqM',
  authDomain: 'tiktok-clone-90c21.firebaseapp.com',
  projectId: 'tiktok-clone-90c21',
  storageBucket: 'tiktok-clone-90c21.appspot.com',
  messagingSenderId: '1006962040244',
  appId: '1:1006962040244:web:91c8301e29c2d1378ca6e1',
  measurementId: 'G-KE5YWKKQ6W'
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
