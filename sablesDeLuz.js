let colores = ['verde', 'amarillo', 'rojo', 'azul']
let cortadores = ['Obi Wan', 'Watto', 'Sara Bel', 'Nodin']


let sables=[]

for(let i=0; i<20; i++){

    let sable={}
    // llenando un objeto sable

    sable.color=colores[Math.floor(Math.random()*colores.length)]
    sable.cortador=cortadores[Math.floor(Math.random()*cortadores.length)]
    sable.energia=Math.floor(Math.random()*50)

    // agregando el objeto SABLE al arreglo SABLES

    sables.push(sable)
}

console.log(sables)


let filtrado = sables.filter(function(sable){
    return(sable.energia<=20)
})

let suma=0
suma=filtrado.length
console.log(`la cantidad de sables de luz que tienen energias menores a 20 joules son: ${suma}`) 


    


