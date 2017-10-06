import * as firebase from 'firebase';

const config  = {
    apiKey: "AIzaSyBadd0t-gHd_W6aq9x2iNBbjQy9PiVxtAY",
    authDomain: "goalcoach-8be0f.firebaseapp.com",
    databaseURL: "https://goalcoach-8be0f.firebaseio.com",
    projectId: "goalcoach-8be0f",
    storageBucket: "goalcoach-8be0f.appspot.com",
    messagingSenderId: "945859078866"
  };

   export const firebaseApp = firebase.initializeApp(config);
   export const goalRef = firebase.database().ref('goals');