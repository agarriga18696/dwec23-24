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

function mediaNotas() {
    let media = 0;

    for(let i = 0; i < estudiante.notas.length; i++) {
        media += estudiante.notas[i];
    }

    media /= estudiante.notas.length;

    console.log(media);
}

// mediaNotas();

let estudiante = {
    id: 2,
    nombre: "Jason",
    diHola: function() {
        return "Hola";
    },
    notas: [10, 0, 4]
}

// this

let factura = {
    descripcion: "factura de prueba",
    precio: 100.0,
    iva: 21.0,
    divisa: "€",
    subTotal: function() {
        return this.precio;
    },
    total: function() {
        return this.precio + (this.precio * this.iva) / 100 + this.divisa;
    }
}

// console.log(factura.total());

// ---------- CONSTRUCTORES ----------

function Web() {
    this.url = "http://localhost";
    this.nombre = "Localhost";

    this.muestraInformacion = function() {
        return "url: " + this.url + "\n" + "Web: " + this.nombre;
    }
}

Web.prototype.visitas = 2;
Web.prototype.miFuncion = function() {
    return "Hola";
}

let unaWeb = new Web();
unaWeb.url = "https://www.amazon.es";
unaWeb.nombre = "Comprar online";

// console.log(unaWeb.miFuncion());
// console.log(unaWeb);
// console.log(unaWeb.muestraInformacion());