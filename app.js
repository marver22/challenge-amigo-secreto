// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos un array global para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtenemos el valor del input con id "amigo"
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();
  
  // Validar que se ingrese un nombre
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  
  // Agregar o actualizar el nombre al arreglo
  amigos.push(nombre);
  
  // Limpiar el campo de texto
  input.value = "";
  
  // Actualizar la lista HTML con el nuevo amigo
  actualizarListaAmigos();
}

// Función que recorre el array "amigos" y muestra cada nombre como un elemento <li>
// Se utiliza innerHTML para limpiar la lista antes de agregar nuevos elementos.
function actualizarListaAmigos() {
  // 1. Obtener el elemento de la lista usando su id
  let lista = document.getElementById("listaAmigos");
  
  // 2. Limpiar la lista existente para evitar duplicados
  lista.innerHTML = "";
  
  // 3. Iterar sobre el arreglo "amigos" y agregar cada nombre en un <li>
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Función para realizar el sorteo aleatorio del amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía.");
    return;
  }
  // Se selecciona un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indiceAleatorio];
  
  // Mostrar el resultado en el elemento con id "resultado"
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;  

}

// Función para reiniciar el sorteo
// Esta función limpia el contenido del elemento "resultado" para que el botón de sortear quede "reiniciado".
function reiniciarSorteo() {

  // Limpiar el resultado del sorteo
  document.getElementById("resultado").innerHTML = "";


  // Opcional: Si deseas reiniciar también la lista de amigos, descomenta las siguientes dos líneas:
  amigos = [];
  actualizarListaAmigos();
}
