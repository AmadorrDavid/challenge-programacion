// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

let almacenNombre = [];
let contador = 0;


function agregarAmigo(){
    let Amigos = document.querySelector("#amigo").value; 
    almacenNombre.includes(Amigos) ?  alert("Ya este amigo esta agregado...") : actualizarAmigo();
    if (contador >= 2) {
        document.getElementById("buttonSortear").removeAttribute("disabled");
    } 
}



function sortearAmigo() {
    let nombreSorteado = Math.floor(Math.random()* contador);
    let nombre = almacenNombre[nombreSorteado];
    editarEtiquetas("h2", `Tu amigo secreto es: ${nombre}`); 
    document.getElementById("buttonSortear").setAttribute("disabled", true);

}



function actualizarAmigo() {
    editarEtiquetas("h2", "Digite el nombre de sus amigos");
    let entradaAmigo = document.querySelector("#amigo").value;

    if (entradaAmigo != "") {  
        while (contador >= 0) {
            almacenNombre[contador] =entradaAmigo ; //Almacen de Nombres
            vaciarElementos();
            alert("Se ha agregado el nombre correctamente");
            editarEtiquetas("h3", `Amigos Agregados: ${almacenNombre}`)
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

function vaciarElementos() {
    let vaciarElementos = document.querySelector("#amigo");
    vaciarElementos.value = "";
}

