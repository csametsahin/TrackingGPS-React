import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyChMr-fShkun_nK9K-ZMRtnrBIRy273EqI",
    authDomain: "demomap-329008.firebaseapp.com",
    projectId: "demomap-329008",
    storageBucket: "demomap-329008.appspot.com",
    messagingSenderId: "1036542846605",
    appId: "1:1036542846605:web:c48959a142d3591b32e4c4"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}