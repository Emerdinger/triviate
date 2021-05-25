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

const auth = firebase.auth();

//Se escucha el evento submit del formulario para iniciar sesion

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    auth.signInWithEmailAndPassword(email,password).then(userCredential => {
        alert('Sesión iniciada correctamente');
        window.location.assign('categories.html')

    });
});

//Se verifica el estado del usuario loggeado o desloggeado

auth.onAuthStateChanged(user => {
    if(user){
        userLogged = user.email
        console.log(userLogged);
    } else{
        
    }
})