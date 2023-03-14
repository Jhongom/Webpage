let popup1 = document.getElementById("ventana1");
let popup2 = document.getElementById("ventana2");
let popup3 = document.getElementById("ventana3");
let popup4 = document.getElementById("ventana4");


function abrirVent(){
    popup1.classList.add("open-popup");
    popup1.classList.remove("close-popup");
    popup2.classList.add("open-popup");
    popup2.classList.remove("close-popup");
    popup3.classList.add("open-popup");
    popup3.classList.remove("close-popup");
    popup4.classList.add("open-popup");
    popup4.classList.remove("close-popup");
}

function cerrarVent(){
    popup1.classList.add("close-popup");
    popup2.classList.add("close-popup");
    popup3.classList.add("close-popup");
    popup4.classList.add("close-popup");

    //popup.classList.remove("open-popup");
}

