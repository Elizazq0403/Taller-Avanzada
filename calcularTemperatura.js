
// Funcion hallar temperatura

let calcularTemperatura = [30,50]; 
let promedio = calcularTemperatura.reduce(function(a,b){
    return a + b;},0)/calcularTemperatura.length

// Llamando la funcion

console.log(`La temperatura promedio de la luna es ${promedio }`)
