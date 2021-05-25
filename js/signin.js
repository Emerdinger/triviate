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

//Se trae el formulario
const signinForm = document.querySelector('#signIn');
var userLogged;
let msgNoVerificado = 0;

const auth = firebase.auth();

//Se escucha el evento submit del formulario para iniciar sesion

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    auth.signInWithEmailAndPassword(email,password).then(userCredential => {
        cheackVerified(userCredential.user);
    });
});

//Se verifica el estado del usuario loggeado o desloggeado

auth.onAuthStateChanged(user => {
    if(user){
        cheackVerified(user);
    } 
})

//quitar la sesion si no esta verificado el email

const cheackVerified = user => {
    if(user.emailVerified == false && msgNoVerificado != 1){
        auth.currentUser.sendEmailVerification();
        auth.signOut();
        msgNoVerificado = 1;
        alert('Debes activar tu cuenta antes de iniciar sesión, por favor revisa tu correo')
        console.log("hola")
    }else if(user.emailVerified == true){
        window.location.assign('categories.html');
    }
}
