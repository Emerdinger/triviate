//Cambiar color del nav durante el scroll
window.onscroll = function(e){
    var elemento =  document.getElementById("navbar-Color");
    var boton = document.getElementById("nav-button");
    var scrollTop = window.scrollY;

    if(scrollTop >= 200){
        elemento.classList.remove('navbarColorNo');
        elemento.classList.add('navbarColor');
        boton.classList.add('bg-light')
    }

    if(scrollTop < 200){
        elemento.classList.remove('navbarColor');
        elemento.classList.add('navbarColorNo');
        boton.classList.remove('bg-light')
    }
}