// numero de 4 cifras
// al menos 2 numeros diferentes
// ni 3 ni 4 xifres iguals
// 7 pasos maximo

const numeroUsuario = prompt("Elige un numero");

function validarNumero() {

    if(numeroUsuario.length > 4 || numeroUsuario.length < 4) {
        alert("El numero ha de ser solamente de 4 cifras");
    }

}

function calcularNumero() {

    let numeroString = numeroUsuario.toString();
    let arrayNumero = [4];

    // Guardar el numero que ha introducido el usuario en un array
    for(let i = 0; i < 4; i++) {
        arrayNumero[i] = numeroString.charAt(i);
    }

}

function ordenarNumeros() {

    // Ordenar sus dígitos en orden descendente (de mayor a menor)
    arrayNumero.sort();
    console.log(arrayNumero);

}


validarNumero();
calcularNumero();
ordenarNumeros();
