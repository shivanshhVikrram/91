import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDrNvQxxWSFxr6XLdA24lolfl14DzLCLiY",
  authDomain: "barter-system-new.firebaseapp.com",
  projectId: "barter-system-new",
  storageBucket: "barter-system-new.appspot.com",
  messagingSenderId: "322280552757",
  appId: "1:322280552757:web:7e147ba1485f815189347c"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
