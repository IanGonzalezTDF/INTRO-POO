var readlineSync = require('readline-sync');
let ingresarCantidad:number = Number((readlineSync.question(`Ingrese la cantidad de vueltas: `)));
let cantidadDeVueltas:number[] = new Array (ingresarCantidad);
let sumaVueltas:number = 0;

function cargarVueltas():void{
    for(let i:number=0; i<ingresarCantidad; i++){
        cantidadDeVueltas[i] = Number(readlineSync.question(`Ingrese el tiempo de la vuelta ${i+1} : `));
    }
}

// FALTARIA FUNCION SUMARVUELTAS Y FUNCION MOSTRARPROMEDIO 

function sumarVueltas(cantidadDeVueltas:number[]){
    for(let i:number=0; i<cantidadDeVueltas.length; i++){ 
        sumaVueltas += cantidadDeVueltas [i]; 
    }
    console.log(`El tiempo total de las vueltas es ${sumaVueltas} minutos`)
    
}

function mostrarPromedio():void{
    let promedio = sumaVueltas / cantidadDeVueltas.length;
    console.log(`El promedio por vuelta es de : ${promedio} minutos.`)
}

cargarVueltas();
sumarVueltas(cantidadDeVueltas);
mostrarPromedio();
// SOLUCIONADO CON += 