let alimentos = ['ensalada', 'frijoles', 'postre', 'jugo', 'carnes'] // los arreglos van en plural
let tipos = ['animal', 'vegetal', 'insecto']


let comidas=[]

for(let i=0; i<50; i++){

    let comida={}
    // llenando un objeto comida

    comida.alimento=alimentos[Math.floor(Math.random()*alimentos.length)]
    comida.tipo=tipos[Math.floor(Math.random()*tipos.length)]
    comida.nivelEnergia=Math.floor(Math.random()*500)

    // agregando el objeto COMIDA al arreglo COMIDAS

    comidas.push(comida)
}
console.log(comidas)

//declarando la funcion principal

function filtrarVegetales(comidas, callback){
    setTimeout(function(){
        let comidasVegetales=comidas.filter(function(comida){
            return (comida.tipo=="vegetal" && comida.nivelEnergia>200)
        })
        callback(comidasVegetales)
    },5000)
}

//llamando la funcion principal

filtrarVegetales(comidas, function(comidasVegetales){
    let sumaEnergias = 0
        comidasVegetales.forEach(function(comidaVegetal){
            sumaEnergias = sumaEnergias + comidaVegetal.nivelEnergia
        })        
        console.log(`la sumatoria de niveles de 
        energía de los alimentos vegetales consumidos en la dieta de Grogu fue: ${sumaEnergias}`)
    
})

