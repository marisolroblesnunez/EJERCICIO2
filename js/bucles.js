



//crear un bucle for que muestre los numeros del 1 al 10
for (let i=1; i<=10;i++){
    console.log(i);
}
    //como queremos que i empieze en uno, se pone let i= 1, ahora queremos que i cuente desde el uno hasta el diez entonces hay que decirle i<=10 porque quiero que empieze en el uno y cuando muestre el diez se pare; ahora le pongo que quiero que a i se le sume uno y ya que me lo muestre
    
    

    //crear un bucle que muestre la tabla de multiplicar del 5

    for( let i=1;i<=10;i++){
        console.log("5 x "+i+" = "+ 5*i);
    } 
    // le muestro primero que quiero que me ponga del uno al diez, en el bucle y luego en console le digo que me muestre fijo siempre" 5 x "por eso va entre comillas,  ahora le digo que me muestre la variable i, que seria +i+ y abro comillas para poner el igual porque no quiero que cambie "=" y ahora le digo que quiero que me multiplique 5*i.
    for(let i= 1; i<=20; i++){
        console.log("7 x "+i+" = "+7*i);
    }

    //Crear un bucle que muestre la tabla de multiplicar de un número
    //pedir el numero al usuario

    
    let numero = prompt("¿Dime un número");
    //intento pasar lo que haya en la variable numero a un nume4ro entero
    //si lo consigue en un numero habra un numeros entero
    //si no lo coonsigue en numero habra un NaN ( no es un number)
    numero = parseInt(numero);
    console.log(numero);
   

    if(isNaN (numero)){
        alert("no es un número");
    }else{
        document.getElementById("mensaje1").textContent= "voy a mostrar la tabla de multiplicar de : " +numero;
        
        let resultadotxt = "";

        for(let i=1; i<=10; i++){
            resultadotxt += numero+" x "+i+ "="+numero * i+"<br>";
        }
        document.getElementById("mensaje2").innerHTML=resultadotxt
    }
//pedir al usuario la edad de su mascota y mostrar la edad en años humanos 
//1 año de perro = 7 años reales 
//realizar las siguientes validaciones:
//que sea un numero
//que sea mayo que 0
//si no se cumple alguna de estas condiciones, mostrar un mensaje de error y volver a pedir el dato

    let edadmascota= prompt("¿Dime la edad de tu mascota");
    edadmascota= parseInt(edadmascota);
    if(Number.isInteger(edadmascota) && edadmascota > 0 && edadmascota < 30){
         document.getElementById("mensaje3").innerHTML=" la edad de tu mascota en humanos es: " + edadmascota*7;
    }else{
        alert("No has introducido una edad válida");
    }

    //mostrar por console utilizando el bucle while los 100 primeros números pares comenzando por 0
    let veces= 0;
    
    while(veces<=100){
      
      
        console.log(veces*2);
           veces++; 
          
    }
    //  let pares= 0;
    //  while(pares<=100){
    //     console,log("numero par:", pares)
    //  }

/**
 * do 
 * pedir edad
 * validar edad
 * si es correcta: calcular edad y mostrar resultado
 * si no es correcta: mostrar mensaje de error
 */

// let esCorrecta = false;

// do{
//     let edadmascota = prompt("Dime la edad de tu mascota");
//     edadmascota = parseInt(edadmascota);
//     if(Number.isInteger(edadmascota) && edadmascota >0 && edadmascota<30){
//         Document.getElementById("resultado").textContent="La edad de tu mascota en años humanos es:" +edadmascota * 7;

//         esCorrecta= true;}else{
//             alert("No has introducido una edad válida");
//         } 
          

// }while(esCorrecta==false);
// document.getElementById()
   
//bucle do while, se ejecuta al menos una vez y kuego comprueba la condicion

    //una funcion esw una porcion de código que se puede reutilizar en cualquier parte del programa.
    //crear una funcion que compruebe si la edad de la mascota es correcta o no y devuelva un boleano.
    
    function sumar(){
        console.log(2+2);
}

sumar();
sumar();
sumar();

//Parámetros y argumentos
//la funcion sumar2 suma los numeros que le lleguen por parámetros y los muestra por consola
function sumar2(num1, num2){
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}
sumar2(4,30);
sumar2(45,90);
//funciones que devuelven valores
//sumar3 devuelve la suma de los dos parámetros

function sumar3(num1, num2){
    return num1 + num2;

}

let resultado = sumar3(5, 23);
let edad1 = 10;
let edad2 = 20;
let sumaEdades= sumar3(edad1, edad2);
//Crear una funcion que reciba un nombre y una edad y devuelva un mensaje diciendo si el usuario puede sacar el carnet de conducir o no
function crearMensaje(nombre, edad){
    let resultado = "";
    if (edad>=18){
        resultado = `${nombre} puedes sacar el carnet de conducir`;
    }else{
        resultado= `${nombre} no tienes edad suficiente`;
    }
    return resultado;
}
let mensaje= crearMensaje("Marisol", 22);
document.getElementById("mensaje").textContent = mensaje;

ll
