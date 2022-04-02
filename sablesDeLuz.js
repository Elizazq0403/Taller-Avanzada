let colores = ['verde', 'amarillo', 'rojo', 'azul']
let energias = [50, 40, 30 , 10, 5]
let cortadores = ['Obi Wan', 'Watto', 'Sara Bel', 'Nodin']


let sables=[]

for(let i=0; i<20; i++){

    let sable={}
    // llenando un objeto sable

    sable.color=colores[Math.floor(Math.random()*colores.length)]
    sable.energia=energias[Math.floor(Math.random()*energias.length)]
    sable.cortador=cortadores[Math.floor(Math.random()*cortadores.length)]

    // agregando el objeto SABLE al arreglo SABLES

    sables.push(sable)
}

console.log(sables)


let filtrado = sables.filter(function(sable){
    return(sable.energia<=20)
})
console.log(filtrado)

/*let suma=0
filtrado.forEach(function(sable){
    suma=suma+sable.energia
    
})
console.log(suma)*/ 


    


