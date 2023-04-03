// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: 'AIzaSyDwLoLn4h0XVVudJa05_-hHgtQNNUy3qYI',
  authDomain: 'tik-tok---jornadadev.firebaseapp.com',
  projectId: 'tik-tok---jornadadev',
  storageBucket: 'tik-tok---jornadadev.appspot.com',
  messagingSenderId: '1056194450014',
  appId: '1:1056194450014:web:6c3f42fa7dff2485b75acf'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
