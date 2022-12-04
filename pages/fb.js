import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAZ3dLsamyirhNmuJZWaeuDXCWw9l-Tj0g",
  authDomain: "mamamia-1abd9.firebaseapp.com",
  databaseURL:
   process.env.FIRESTORE_DB_API_KEY,
  projectId: "mamamia-1abd9",
  storageBucket: "mamamia-1abd9.appspot.com",
  messagingSenderId: "813276695958",
  appId: "1:813276695958:web:6edaf46c9576bf4ac221b7",
  measurementId: "G-R3BQRGYYRQ",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true });

export default db;