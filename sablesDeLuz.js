let colores = ['verde', 'amarillo', 'rojo', 'azul']
let energias = [50, 40, 30 , 10, 5]
let cortadores = ['Obi Wan', 'Watto', 'Sara Bel', 'Nodin']

//arreglo semilla
let numero=[Math.floor(Math.random()*colores.length)]
let numero2=[Math.floor(Math.random()*energias.length)]
let numero3=[Math.floor(Math.random()*cortadores.length)]

//imprimiendo un elemento de las semillas de forma aleatoria

console.log(colores[numero])
console.log(energias[numero2])
console.log(cortadores[numero3])

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


