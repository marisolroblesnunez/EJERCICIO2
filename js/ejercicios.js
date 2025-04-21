/** 
 * Ejercicio 1:
 * Crea un objeto llamado persona con las propiedades: nombre, edad y profesión.
 * Luego muestra cada propiedad en la consola por separado.
 */

// const persona ={
//     nombre: "Marisol",
//     edad: 28,
//     profesion:"informática",
// // }
//  console.log(persona);
//aqui lo muestra todo junto

const persona ={
    nombre: "Marisol",
    edad: 28,
    profesion:"informática",
    presentacion: function(){
        return "Hola, soy " +this.nombre+ ", tengo "+this.edad+ " y soy "+this.profesion;
    }
    }
     console.log(persona.nombre);
     console.log(persona.edad);
     console.log(persona.profesion);
//aqui lo muestra por separado que es como ella ha dicho en el ejercicio.


/** 
 * Ejercicio 2:
 * añade un metodo al objeto persona que devuelva un string con los valores de sus propiedades: "Hola, soy Marisol, tengo 28 años y soy informática"
*/
persona.presentacion = function() {
    return "Hola, soy " +this.nombre+ ", tengo "+this.edad+ " y soy "+this.profesion;
    // return `Hola, soy ${this.nombre} y soy ${this.profesion}`; (asi se haria de la otra forma nueva que hemos aprendido)

}
console.log(persona.presentacion ());

/**
 * Ejercicio 3:
 * Crea un objeto llamado coche con las propiedades: marca, modelo y año.
 * añade un metodo que calcule cuantos años tiene el coche basado en el año actual
 */

//new Date()devuelve la fecha actual
//new Date().getFullYear()devuelve el año actual
const anyoActual = new Date().getFullYear();

const coche={
marca: "Opel",
modelo:"Omega",
anyo: 1980,
antiguedad: function(){
    const anyoActual = new Date().getFullYear();
    const anyos = anyoActual-this.anyo;
    return anyos;
}
}
document.getElementById("mensaje").textContent=`Marca: ${coche.marca}, Modelo: ${coche.modelo}, Antiguedad: ${coche.antiguedad()} años`;

/**
 * Ejercicio 4:
 * Crea un objeto llamado tienda que contenga un array de productos 
 * Cada producto debe ser un objeto con las propiedades: nombre y precio
 * Añade un método para calcular el precio total de todos los productos
 */
const tienda = {
    productos: [
        {nombre: "Monitor 32 pulgadas", precio: 400.00},
        {nombre: "Monitor 32 pulgadas", precio: 200.00},
        {nombre: "Monitor 32 pulgadas", precio: 200.00},
        {nombre: "Monitor 32 pulgadas", precio: 200.00},
    ], //las comas estas ultimas no son obligatorias
    calcularTotalprecios: function(){
        let total =0;
        this.productos.forEach(item => {
            total= total + item.precio;
        })
        return total; //lo pongo cuando acaba el bucle para que así los sume todos
    },
    calcularMultiplicacion: function(){
        let total = 1;
        this.productos.forEach(item =>{
            total = total * item.precio;
        })
        return total;
    }

}
    //calcular la suma de todos los elementos del array
    const precios = [200,32,25,80];
    let total = 0;
    precios.forEach(item =>{
        total = total + item.precio;
    })

console.log("Precio total de los productos de la tienda es " +tienda.calcularTotalprecios());
console.log(tienda.productos[0].nombre);
console.log(tienda.productos[2].precio);
console.log("Resultado de la multiplicacion es "+tienda.calcularMultiplicacion());
//Calcular el mayor de los elementos del array
//lo podria haber metido dentro de const tienda pero lo he sacado fuera porque es otro ejercicio
 let resultado = precios[0];
 precios.forEach(item =>{
    if(item> resultado){
    resultado = item;
    }// aqui le dado a la variable resultado el primer elemento de los precios dentro de un array, osea [0], y ahora le digo que cualquier precio que sea mayor que este me lo muestre
 })

 //Calcular la media de los elementos del array
 // media : suma de todos los elementos entre todos los elementos
 let media = total / precios.length // he puesto total, porque ya he calculado antes el total de todos los elementos del array entonces ya lo tengo hecho, solo he vuelto a llamar la variable total y ya le dividido precios.length porque significa cada elemento de los precios
//ALGO