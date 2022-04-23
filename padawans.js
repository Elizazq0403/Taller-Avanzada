//declarando la funcion principal

function crearAprendiz(nombre, planeta, edad, estatura, callback){

    // definiendo el proceso de la funcion principal
    setTimeout(function(){
        let aprendiz={
            nombreAprendiz:nombre, //la informacion de esta variables me va a llegar de un formulario (ej), el nombre va a variar segun los nombres ingresados
            planetaAprendiz:planeta,
            edadAprendiz:edad,
            estaturaAprendiz:estatura,
        }
        // llamando al callback
        callback(aprendiz) //el callback recibe el objeto - fin de la funcion principal
    },10000)
    
}
// llamando a la funcion principal, se ingresan los parametros nombre, planeta, edad, estatura, el ultimos parametro es la funcion callback

crearAprendiz("Padawans1", "simios",10,  1.65, function(aprendiz){
if(aprendiz.edadAprendiz<=15)
    console.log(`Al aprendiz le corresponde la clase manejo de la fuerza`)
else{
    console.log(`Al aprendiz le corresponde la clase manejo del sable de luz`)
}
})
