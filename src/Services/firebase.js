import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB4-pXk-UJtPh1qab_mzaEdiJrnGPd9Zkc",
    authDomain: "resturantapp-ae443.firebaseapp.com",
    databaseURL: "https://resturantapp-ae443-default-rtdb.firebaseio.com",
    projectId: "resturantapp-ae443",
    storageBucket: "resturantapp-ae443.appspot.com",
    messagingSenderId: "42643984495",
    appId: "1:42643984495:web:cec2cc380e7438804bfd9a",
    measurementId: "G-3SS5R8K80J"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export default firebase