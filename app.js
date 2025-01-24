// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

let almacenNombre = [];
let contador = 0;



function agregarAmigo(params){
    

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



function sortearAmigo(arreglo) {

    let nombreSorteado = Math.floor(Math.random()* contador);

    let nombre = almacenNombre[nombreSorteado];
    editarEtiquetas("h2", `Tu amigo secreto es: ${nombre}`); 
}


function editarEtiquetas(etiqueta, texto) {
    let recibirEtiqueta = document.querySelector(etiqueta);
    recibirEtiqueta.innerHTML = texto;
}
