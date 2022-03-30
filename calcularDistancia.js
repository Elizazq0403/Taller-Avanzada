// funcion tradicional para calcular la distancia entre dos puntos

function calcularDistancia(x1,y1,x2,y2){

    //potencia cuadrada resta de x
    let potenciaCuadradax= Math.pow((x2-x1),2)

    //potencia cuadrada resta de y
    let potenciaCuadraday= Math.pow((y2-y1),2)


    // calcular raiz cuadrada
    let raiz= Math.sqrt(potenciaCuadradax+potenciaCuadraday)
    return(raiz)

}

//llamado a la funcion (usar la funcion)
    let distancia=calcularDistancia(0,0,-10,-10).toFixed(2)
    console.log(`La distancia calculada es ${distancia }`)