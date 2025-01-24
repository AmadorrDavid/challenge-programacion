// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

let almacenNombre = [];
let contador = 0;


function agregarAmigo(){
    let entradaAmigo = document.querySelector("#amigo").value;
    for (let index = 0; index < almacenNombre.length; index++) {
        if (entradaAmigo === almacenNombre[index]) {
            alert("Este amigo ya esta en la lista...");
            break;
        }
    }
    actualizarAmigo();
}



function sortearAmigo() {

    let nombreSorteado = Math.floor(Math.random()* contador);
    console.log(nombreSorteado)
    let nombre = almacenNombre[nombreSorteado];

    if (isNaN(entradaAmigo)) {
        alert("No puedes soltear sin agregar un nombre en el cuadro de texto...")
    }

    else{
    editarEtiquetas("h2", `Tu amigo secreto es: ${nombre}`); 
    }
}



function actualizarAmigo() {
    editarEtiquetas("h2", "Digite el nombre de sus amigos");
    let entradaAmigo = document.querySelector("#amigo").value;

    if (entradaAmigo != "") {  
        while (contador >= 0) {
            almacenNombre[contador] = entradaAmigo;
            alert("Se ha agregado el nombre correctamente");  
            contador++;
            break;
        }
    }   
    else{
        alert("No puedes dejar el cuadro vacio...")
    }
}


function editarEtiquetas(etiqueta, texto) {
    let recibirEtiqueta = document.querySelector(etiqueta);
    recibirEtiqueta.innerHTML = texto;
}