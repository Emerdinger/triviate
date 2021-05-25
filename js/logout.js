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

//Se trae el texto logout para verificar si el usuario esta o no
const logout = document.querySelector('#logout');

//Si se le da click al logout, se cierra la sesion
logout.addEventListener('click', e => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log('Salio correctamente');
    })
});

//Ver el estado del usuario en sesion
auth.onAuthStateChanged(user => {
    if(user){
        loginCheck(user);
    } else{
        loginCheck(user);
    }
})

const loggedIn = document.querySelector('#logout');

//Como este logout lo comparten dos html el if es para que no se rompa el codigo, aparte toma los elementos welcome y el boton para iniciar sesion
if(document.querySelector('#inicia')){
    var btnLogin =  document.querySelector('#inicia');
    var welcome = document.getElementById('welcome');
}

//En esta funcion se verifica si el usuario esta logeado, en caso de estarlo se esconde el boton de login y se muestra un mensaje de bienvenida, en caso de no estar logeado se hace al reves, el if se hace para no romper el codigo si no se encuentra el elemento con ese id
const loginCheck = user => {
    if (user){
        loggedIn.style.display = '';
        if(document.querySelector('#inicia')){
            btnLogin.style.display = 'none';
            welcome.innerHTML = `Bienvenido ${user.email}`;
        }
    }else{
        loggedIn.style.display = 'none';
        if(document.querySelector('#inicia')){
            btnLogin.style.display = '';
            welcome.innerHTML = ``;
        }
    }
}