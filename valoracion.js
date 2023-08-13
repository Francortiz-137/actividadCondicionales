
const valoracionPeliculas = (valoracion) =>{
    switch(valoracion){
        case "Muy mala":
            console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
            break;
        case "Mala":
            console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
            break;
        case "Mediocre":
            console.log("Calificaste la película como Mediocre.  Gracias por su feedback.");
            break;
        case "Buena":
            console.log("Calificaste la película como Buena.");
            break;
        case "Muy buena":
            console.log("Calificaste la película como Muy buena.");
            break;
            break;
        default:
            console.log("Ingresaste un valor invalido");
            break;

    }
    
    console.log("Gracias por su visita");
}