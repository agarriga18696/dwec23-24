function calculadoraNotes() {

    let nomEstudiant = "Andreu Garriga";
    let notaExamen1 = 8.5; // 20%
    let notaExamen2 = 9.2; // 20%
    let notaProjecte = 7.8; // 60%
    let notaFinal;   

    notaFinal = (notaExamen1*0.2)+(notaExamen2*0.2)+(notaProjecte*0.6)/3;

    console.log(notaFinal);

}

//calculadoraNotes();