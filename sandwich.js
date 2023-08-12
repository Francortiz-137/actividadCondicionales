
function armarSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    total = 0

    switch(base.toLowerCase()){
        case "pollo":
            total+= 150;
            break;
        case "carne":
            total+= 200;
            break;
        case "veggie":
            total+= 100;
            break;
    }

    switch(pan.toLowerCase()){
        case "blanco":
            total+= 50;
            break;
        case "negro":
            total+= 60;
            break;
        case "s/gluten":
            total+= 75;
            break;
    }

    total+= queso ? 20: 0;
    total+= tomate ? 15: 0;
    total+= lechuga ? 10: 0;
    total+= cebolla ? 15: 0;
    total+= mayonesa ? 5: 0;
    total+= mostaza ? 5: 0;

    return total;
}