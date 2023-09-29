const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");
/* Siempre colocamos el (.) antes para que busque la clase que queremos que modifique */


hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
    /* Este menu.classList.toggle("spread") cada vez que toque el menu hamburguesa, va a quitarle o ponerle la clase de pendiendo de si la tiene o no la tiene*/
} )
/* Aqui al elemento hamburguer le agrego un evento de clic y cuando el usuario le de clic al icono hamburguer, se desate una funcion de fecha */

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target !=hamburguer   ){

        
        menu.classList.toggle("spread")
    }
})

/* Aqui quiero que cuando alguien toque la ventana dispares otra funcion de flecha y le paso el parametro e. Aqui le dije si toco el menu hamburguesa apararece y si toco fuera del menu desaparece el menu, este if hace que mientras sea diferente se abre y se cierra pero mientras permanesca dentro del elemente esta abierto */