
const numeroSecreto = (numero) =>{
    if(numero === Math.floor(Math.random() * 10) + 1){
        console.log("Felicidades! Acertaste el numero secreto");
    }else{
        console.log("Lo sentimos, no has acertado, sigue intentando!");
    }
}
