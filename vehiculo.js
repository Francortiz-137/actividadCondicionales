
function totalAPagar( vehiculo, litrosConsumidos){
    total = 0;
    precioLitro = 0;

    // usando if-else
    /* if(vehiculo === "coche"){
        precioLitro = 86;
    }else if(vehiculo === "moto"){
        precioLitro = 70;
    } else if(vehiculo === "autobus"){
        precioLitro = 55;
    } */

    //usando switch
    switch(vehiculo){
        case "coche":
            precioLitro = 86;
            break;
        case "moto":
            precioLitro = 70;
            break;
        case "autobus":
            precioLitro = 55;
            break;
    }
    total+= precioLitro * litrosConsumidos;

    if(litrosConsumidos>0 && litrosConsumidos<+25){
        total+= 50;
    }
    else if(litrosConsumidos>25){
        total+= 25;
    }

    return total;
}