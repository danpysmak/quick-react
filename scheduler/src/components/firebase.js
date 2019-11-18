import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcdnANRmEGpuxYRwbrqqZf0YwVue_jOmg",
    authDomain: "quick-react-eb43a.firebaseapp.com",
    databaseURL: "https://quick-react-eb43a.firebaseio.com",
    projectId: "quick-react-eb43a",
    storageBucket: "quick-react-eb43a.appspot.com",
    messagingSenderId: "568267084945",
    appId: "1:568267084945:web:49e47af270dc517a529b30"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;