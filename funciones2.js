//crear una funcion que reciba 3 parámetros:
//edad, tieneCarnet, nombre
//devuelva un string: nombre tiene permiso y puede conducir
//o nombre no puede conducir
//mostrar por consola el resultado


// function versiTienecarnet(edad, tieneCarnet, nombre){
//     if (tieneCarnet){
//     nombre = `${nombre} tiene permiso y puede conducir`;
// }else{
//     nombre= `${nombre} no tiene permiso y no puede conducir`;
// }
//     return nombre;
// }

// let nombre = "Casimiro";
// let edad = 18;
// let tieneCarnet = true;


// console.log(versiTienecarnet (edad, tieneCarnet, nombre));



document.getElementById("botonEnviar").addEventListener("click", carnet);

function carnet(){
    let nombreUsuario= document.getElementById("nombre").value;
    // console.log(nombreUsuario);
    let edadUsuario = document.getElementById("edad").value;
    
    nombreUsuario=nombreUsuario.trim();//elimina los espacios del principio y final de un string, en este caso del texto nombreUsuario
    let e =  document.getElementById("resultado");

    if(nombreUsuario === "" || edadUsuario <0|| edadUsuario > 100){
            alert("Por favor, completa todos los datos y asegurate que todo sea correcto");

    }else{ let mensaje = "";
    
        if(edadUsuario >= 18){
        mensaje = `${nombreUsuario} puede sacarse el carnet`;

    }else{
        mensaje = `${nombreUsuario}tienes que esperar`;
        e.style.backgroundColor=rgb(219, 22, 22) ; }// he puesto el color dandole a f1, color piker, y selecciono el color que quiera y lo inserto.

    e.innerHTML = `<p>${mensaje}</p>`;
    e.style.display="block";
    }

}
document.getElementById("nombre").addEventListener("input", function(){// input, significa que cuando haga una modificacion, me cambie lo que le ponga dentro de function
 e.style.display="none";
})

//funcion que crea un mensaje de error para el usuaio
function mensajeError(nombre, edad){
    let mensaje= "";
    if(nombre ===""){
        mensaje= "<p>Debes introducir un nombre</p>";
    }
   
   
   //otra manera de hacer el if/Else, pero esta se utiliza más cuando quiero hacer muchas precuntas








