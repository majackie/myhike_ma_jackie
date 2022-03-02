//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyD4AcHWv5y9xIuO7g3NyEGNEZiK-rra_uI",
    authDomain: "fir-comp1800-82b0f.firebaseapp.com",
    projectId: "fir-comp1800-82b0f",
    storageBucket: "fir-comp1800-82b0f.appspot.com",
    messagingSenderId: "145998497909",
    appId: "1:145998497909:web:1d6412d5d06b67840b503c"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();