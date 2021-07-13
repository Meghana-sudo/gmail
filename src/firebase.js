import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAOFDBz64jvU4ofzqptehWxSydFl0sT-xk",
  authDomain: "clone-yt-43ca2.firebaseapp.com",
  projectId: "clone-yt-43ca2",
  storageBucket: "clone-yt-43ca2.appspot.com",
  messagingSenderId: "1020546766869",
  appId: "1:1020546766869:web:20079bfae477e534fcd61c",
  measurementId: "G-Y6VPRCX0ED"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
