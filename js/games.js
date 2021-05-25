// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDnuOCn-84q3dNyVOwIDiXkuXPOhAvKw0c",
    authDomain: "triviate-17857.firebaseapp.com",
    projectId: "triviate-17857",
    storageBucket: "triviate-17857.appspot.com",
    messagingSenderId: "377140535338",
    appId: "1:377140535338:web:f39b2743bca36890cf6353",
    measurementId: "G-GNT0SH6PK4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// en logged user se guarda el correo del usuario y en username el usuario del correo sin el @, esto para ser usado luego en los minijuegos y el ranking
let loggedUser;
let username;

auth.onAuthStateChanged(user => {
    if(user){
        loggedUser = user.email;
        username = loggedUser.split('@')
        username = username[0];
    } else{
        window.location.assign('signin.html')
    }
})