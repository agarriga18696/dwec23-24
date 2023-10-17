function sistemaSolar() {
    // ARRAY PLANETAS
    let planetas = [
        ["Mercurio", 1, "38%", "1500 a.C"],
        ["Venus", 2, "95%", "1581 a.C"],
        ["Marte", 4, "53%", "Desconocido"],
        ["Jupiter", 5, "1.120%", "1610 d.C"],
        ["Saturno", 6, "945%", "1610 d.C"]
    ];

    function Planeta() {
        this.nombre;
        this.posicion;
        this.tamañoRelativoTierra;
        this.fechaDescubrimiento = new Date();
    }

    // BUCLE PARA CREAR OBJETOS CON LAS PROPIEDADES DEL CONSTRUCTOR PLANETA
    for(let i = 0; i < planetas.length; i++) {
        for(let j= 0; j < planetas.length; j++) {
            // CONSTRUCTOR PLANETA
            function Planeta() {
                this.nombre = planetas[i][z];
                this.posicion = planetas[i][z];
                this.tamañoRelativoTierra = planetas[i][z];
                this.fechaDescubrimiento = new Date(planetas[i][z]);
            }
        }
        console.log(Planeta());
    }
   
    
}

sistemaSolar();