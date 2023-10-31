// numero de 4 cifras
// al menos 2 numeros diferentes
// ni 3 ni 4 xifres iguals
// 7 pasos maximo

const numeroUsuario = prompt("Elige un numero");
let numeroString = numeroUsuario.toString();
let arrayNumero = [4];

function validarNumeros() {

    if(numeroUsuario.length > 4 || numeroUsuario.length < 4) {
        alert("El numero ha de ser solamente de 4 cifras");
    }

}

function guardarNumerosArray() {

    // Guardar el numero que ha introducido el usuario en un array
    for(let i = 0; i < 4; i++) {
        arrayNumero[i] = Number(numeroString.charAt(i));
    }

}

function ordenarNumeros(arr) {
    // Ordenar sus dígitos en orden descendente (de mayor a menor)
    arr.sort((a,b)=>b-a);
    return arr;
}

validarNumeros();
guardarNumerosArray();