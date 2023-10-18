/* // typeof nos dice que tipo de variable es

// var, let, const
var uno = 1;
let dos = 2;
const PI = 3.14151692;

// String
let nombre = "Andreu";
let apellido = 'Garriga';
let nombreCompleto = "Andreu Garriga";
let comillas = "Texto \"sdsds\"";

// Numeros
let edad = -25;
let anyos = 25;
let precio = 21.25;
let aprobados = Infinity;
let suspendidos = -Infinity;

// Null
let valor = null;

// NaN
let miedad = "af" / 2;

// typeOf, delete
let persona = {
    nombre: "Andreu",
    edad: 25
}

// console.log(persona.nombre);
// delete persona.nombre;
// console.log(persona.nombre);

// Boolean
let algo;


// if(algo) {
//     console.log("hola");
// } else {
//     console.log("adios");
// }

// Operadores Aritméticos
// --> operaciones matematicas


// +   sumar
// -   restar
// *   multiplicar
// /   dividir
// %   modulo (resto)
// ++  incremento
// --  decremento
// +=  suma y asigna
// -=  resta y asigna
// /=  divide y asigna
// *=  multiplica y asigna
// %=  modulo y asigna

// - cambio de signo

// !=  diferente a

// ARRAY
// let a = [1, 2, 3];
// console.log(a);
// delete a[2];
// console.log(a);

// let i = 2;
// if(a[i]){
//     console.log(a[i]);
// } else {
//     console.log("Slot vacio");
// }

// Iteración de arrays
let letras = [..."Hola amiguitos"];
let aux = "";

for (let letra of letras) {
    aux += letra;
}

//console.log(aux);

// aux = "";
// let suma = 0;
// for(let [index, letra] of letras.entries()) {
//     //aux += letra;
//     //suma += index;
//     if(index % 2 === 0) aux += letra;
// }

// console.log(aux);
// console.log(suma); 

let mayusculas = "";

// letras.forEach(letra => {
//     mayusculas += letra.toUpperCase();
// });

//console.log(mayusculas);

let letra = "";
let vocales = "";
for (let i = 0; i < letras.length; i++) {
    letra = letras[i];

    if (/[aeiou]/.test(letra)) {
        vocales += letra;
    }
}

//console.log(vocales);

// ARRAYS MULTIDIMENSIONALES
let tabla = new Array(10);

for (let i = 0; i < tabla.length; i++) {
    tabla[i] = new Array(5); // Cada fila va a tener 5 columnas.
}

for (let fila = 0; fila < tabla.length; fila++) {
    let miArrayInterior = tabla[fila];
    for (let col = 0; col < miArrayInterior.length; col++) {
        miArrayInterior[col] = fila * col;
    }
}

//console.log(tabla);

let tablaMultiplicar = new Array(11);

for (let i = 0; i < tablaMultiplicar.length; i++) {
    console.log("tabla del " + i + "\n");
    for (let z = 0; z < tablaMultiplicar.length; z++) {
        tablaMultiplicar[i] = i * z;

        if (tablaMultiplicar[i] % 2 != 0) {
            console.log(i + " * " + z + " = " + tablaMultiplicar[i] + "\n");
        }

    }
} */

/* ----------------UNIDAD 4---------------- */

// FUNCIONES
// function diHola() {
//     console.log("Hola");
// }

// let resultado = multiplica(3, 10) + 1;
// console.log(resultado);

// function multiplica(c, d) {
//     let a = 10;
//     let b = 20;

//     return (a * b * c * d);
//     //console.log(a * b * c * d);
// }

/* OBJETOS */

// let unCliente = {
//     nombre: "Peter",
//     apellido: "Parker",
//     "direccion fiscal": "Calle Telaraña, 8",
//     '-+-+-+': "boquepasa",
//     // otro objeto como propiedad
//     pago: {
//         tipo: "Visa",
//         tarjeta: "9543902348",
//         fecha_de_caducidad: "nunca"
//     },
//     vencimiento: 30
// }

// unCliente["vencimiento"] = 60;
// console.log(unCliente.nombre, unCliente.apellido);
// console.log(unCliente.pago.tarjeta);
// console.log(unCliente.pago["fecha_de_caducidad"]);
// console.log(unCliente["pago"]["tipo"]);

// console.log(unCliente);
// console.log(unCliente['-+-+-+']);

// ---------- METODOS COMO ELEMENTOS ----------

// function mediaNotas() {
//     let media = 0;

//     for(let i = 0; i < estudiante.notas.length; i++) {
//         media += estudiante.notas[i];
//     }

//     media /= estudiante.notas.length;

//     console.log(media);
// }

// // mediaNotas();

// let estudiante = {
//     id: 2,
//     nombre: "Jason",
//     diHola: function() {
//         return "Hola";
//     },
//     notas: [10, 0, 4]
// }

// // this

// let factura = {
//     descripcion: "factura de prueba",
//     precio: 100.0,
//     iva: 21.0,
//     divisa: "€",
//     subTotal: function() {
//         return this.precio;
//     },
//     total: function() {
//         return this.precio + (this.precio * this.iva) / 100 + this.divisa;
//     }
// }

// // console.log(factura.total());

// // ---------- CONSTRUCTORES ----------

// function Web() {
//     this.url = "http://localhost";
//     this.nombre = "Localhost";

//     this.muestraInformacion = function() {
//         return "url: " + this.url + "\n" + "Web: " + this.nombre;
//     }
// }

// Web.prototype.visitas = 2;
// Web.prototype.miFuncion = function() {
//     return "Hola";
// }

// let unaWeb = new Web();
// unaWeb.url = "https://www.amazon.es";
// unaWeb.nombre = "Comprar online";

// console.log(unaWeb.miFuncion());
// console.log(unaWeb);
// console.log(unaWeb.muestraInformacion());

// const ciudades = [
//     {
//         "municipio": "Zaragoza",
//         "provincia": "Zaragoza"
//     },
//     {
//         "municipio": "Ávila",
//         "provincia": "Ávila"
//     },
//     {
//         "municipio": "madrid",
//         "provincia": "madrid"
//     },
//     {
//         "municipio": "Barcelona",
//         "provincia": "Barcelona"
//     }
// ];

// console.log(ciudades);

// ciudades.sort((a, b) => {
//     return a.municipio.localeCompare(b.municipio);
// });

// console.log(ciudades);

// const miArray = ["A", "b", "C"];
// miArray.push("D");
// miArray[1] = "B";
// console.log(miArray);

// ---------- DESESTRUCTURACIÓN ----------
// const numeros = [1, 2, 3];

// const [a, b, c] = numeros;

// console.log(b+c);

// const persona = {
//     nombre: "Andreu",
//     edad: 33
// }

// const {nombre, edad} = persona;

// console.log(nombre);

// const nombre = "Josep";
// const edad = 33;

// const persona = {
//     nombre,
//     edad
// }

// console.log(persona);

// Template Strings - Plantillas de Cadenas
// operador de interpolación ${}

// const nombre = "Bob";
// const edad = 32;

// // PARA QUE FUNCIONE EL OPERADOR DE INTERPOLACIÓN HAY QUE USAR ACENTOS `` EN LUGAR DE COMILLAS
// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// console.log(mensaje);

// Operador Spread ...
// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];

// console.log(nuevosNumeros);

// Parámetros por defecto
// function saludar(nombre = "Invitado"){
//     console.log(`Hola, ${nombre}`);
// }
// saludar();

// Prámetros rest (rest parameter)
// function sumar(...numeros) {
//     let resultado = 0;

//     for(let numero of numeros) {
//         resultado += numero;
//     }
//     console.log(typeof resultado);

//     return resultado;
// }

// console.log(sumar(5, 4, -1, 8));

// Funciones Flecha () => {}

// function sumar(a, b) {
//     return a + b;
// }

// const sumar = (a, b) => a + b;

// Bucle For Each
// forEach(): Ejecuta una función (nuestra) una vez por cada elemento del array
// const numeros = [1, 2, 3, 4, 5];

// const multiplica = (n) => {
//     return n * 2;
// }

// numeros.forEach((numero) => {
//     console.log(multiplica(numero));
// })

// console.log(numeros);

// numeros.forEach((numero) => console.log(numero));
// numeros.forEach((numero) => {
//     console.log(numero);
// })

// map(): Crea un nuevo array con los resultados de 
// aplicar una función a cada elemento del array.

// const dobleNumero = numeros.map((numero) => {
//     return multiplica(numero);
// })

// console.log(dobleNumero);

// filter(): Crea un nuevo array con todos los elementos
// que cumplan una condición determinada.
// const numeros = [1, 2, 3, 4, 5];

// const numerosPares = numeros.filter((numero) => {
//     //return numero % 2 === 0;
//     return numero > 2;
// });

// console.log(numerosPares);

// reduce(): Aplica una función a un acumulador y a cada 
// elemento del array (de izquierda a derecha) para
// reducirlo a un ÚNICO valor.
// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero;
// }, 0);

// console.log(suma);

// find(): Devuelve el PRIMER elemento del array que
// cumpla una determinada condición.
// const numeros = [1, 2, 3, 4, 5];

// const numeroEncontrado = numeros.find((numero) => {
//     return numero < 3;
// });

// console.log(numeroEncontrado);

// findIndex(): Devuelve el indice del PRIMER elemento
// del array que cumple con una función de prueba
// o devolverá -1 si no encuentra nada.
// const numeros = [1, 2, 3, 4, 5];

// const indiceEncontrado = numeros.findIndex((numero) => {
//     return numero < 3;
// });

// console.log(indiceEncontrado);

// some(): Comprueba si al menos un elemento del array
// cumple una condición determinada y devuelve un valor booleano (true o false).
// const numeros = [1, 2, 3, 4, 5];

// const tieneNumeroPar = numeros.some((numero) => {
//     return numero % 2 === 0;
// });

// console.log(tieneNumeroPar);

// every(): Comprueba si TODOS los elementos del array cumplen
// una condición y devuelve un valor booleano (true o false)
const numeros = [1, 2, 3, 4, 5];

// const todosNumerosPares = numeros.every((numero) => {
//     return numero % 2 === 0;
// });

const todosNumerosPares = numeros.every((numero) => {
    if(numero > 3){
        return numero % 2 === 0;
    } else {
        return numero > 8;
    }
});

console.log(todosNumerosPares);