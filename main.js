var readlineSync = require('readline-sync');
var ingresarCantidad = Number((readlineSync.question("Ingrese la cantidad de vueltas: ")));
var cantidadDeVueltas = new Array(ingresarCantidad);
var sumaVueltas = 0;
function cargarVueltas() {
    for (var i = 0; i < ingresarCantidad; i++) {
        cantidadDeVueltas[i] = Number(readlineSync.question("Ingrese el tiempo de la vuelta ".concat(i + 1, " : ")));
    }
}
// FALTARIA FUNCION MOSTRARPROMEDIO 
function sumarVueltas(cantidadDeVueltas) {
    for (var i = 0; i < cantidadDeVueltas.length; i++) {
        sumaVueltas += cantidadDeVueltas[i];
    }
    console.log("El tiempo total de las vueltas es ".concat(sumaVueltas, " minutos"));
}
function mostrarPromedio() {
    var promedio = sumaVueltas / cantidadDeVueltas.length;
    console.log("El promedio por vuelta es de : ".concat(promedio, " minutos."));
}
cargarVueltas();
sumarVueltas(cantidadDeVueltas);
mostrarPromedio();
// SOLUCIONADO CON += 
