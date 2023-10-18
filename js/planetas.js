// ARRAY PLANETAS
let planetas = [
    ["Mercurio", 1, 38, "1500 a.C", 57.9],
    ["Venus", 2, 95, "1581 a.C", 108],
    ["Marte", 4, 53, "Desconocido", 230],
    ["Jupiter", 5, 1.120, "1610 d.C", 484],
    ["Saturno", 6, 945, "1610 d.C", 890]
];

// CONSTRUCTOR PLANETA
function Planeta(nom, pos, tamRel, feDes, diSol) {
    this.nombre = nom;
    this.posicion = pos;
    this.tamañoRelativoTierra = tamRel;
    this.fechaDescubrimiento = feDes;
    this.distanciaSol = diSol;
}

function crearObjetosPlaneta() {
    //CREAR OBJETO PLANETA
    const planeta = new Object();

    planeta.nombre = Planeta.prototype.nombre;
    planeta.posicion = Planeta.prototype.posicion;
    planeta.tamañoRelativoTierra = Planeta.prototype.tamañoRelativoTierra;
    planeta.fechaDescubrimiento = Planeta.prototype.fechaDescubrimiento;
    planeta.distanciaSol = Planeta.prototype.distanciaSol;

    // BUCLE PARA CREAR OBJETOS CON LAS PROPIEDADES DEL CONSTRUCTOR PLANETA
    for (let i = 0; i < planetas.length; i++) {

        for (let j = 0; j < planetas.length; j++) {

            planeta.nombre = planetas[i][j];
            planeta.posicion = planetas[i][++j];
            planeta.tamañoRelativoTierra = planetas[i][++j];
            planeta.fechaDescubrimiento = planetas[i][++j];
            planeta.distanciaSol = planetas[i][++j];
            
            console.log(planeta);

        }

    }

}

function mostrarPlanetas() {
    crearObjetosPlaneta();
}

mostrarPlanetas();