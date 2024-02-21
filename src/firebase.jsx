
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbK5ekdbzBjR8lQQAn8bKK3AeTIg8nLDY",
  authDomain: "disneyplus-f1f77.firebaseapp.com",
  projectId: "disneyplus-f1f77",
  storageBucket: "disneyplus-f1f77.appspot.com",
  messagingSenderId: "784296189327",
  appId: "1:784296189327:web:7a14dee8e25449f698bffa",
  measurementId: "G-DWN33GW218",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);


export {auth, storage};
export default db;