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

//Se obtiene el elemento con el id 
const signupForm = document.querySelector('#signUp');

const auth = firebase.auth();

//Se escucha el elemento submit del formulario para crear un nuevo usuario
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    auth.createUserWithEmailAndPassword(email, password).then(() =>{
        alert('Usuario creado correctamente, por favor verifique su cuenta con su correo');
        
    }).catch(error => {
        console.error(error);
    });
});

//Verificar si el usuario esta logeado para enviarlo a categorias o dejarlo

auth.onAuthStateChanged(user => {
    if(user){
        cheackVerified(user);
    } 
})

//quitar la sesion si no esta verificado el email

const cheackVerified = user => {
    if(user.emailVerified == false){
        auth.currentUser.sendEmailVerification();
        auth.signOut();
        msgNoVerificado = 1;
        window.location.assign('signin.html');
    }else if(user.emailVerified == true){
        window.location.assign('categories.html');
    }
}