// var alumno = {
//     nombre: "Jose", 
//     apellido:"Perez",
//     edad: 30,
//     tieneMascotas: true,
//     hijos: [
//         {
//             nombre: "Jose ",
//             apellido: "Perez"
//         }, 
//         {
//             nombre: "Carla ",
//             apellido: "Perez"
//         }
//     ],
//     saludar: function(){console.log(`Hola ${this.nombre}`)}
// }
 
// alumno.saludar()
// modulo 3 sesion 2 ejercicio de comprobacion

//Ejercicio individual: Hasta las 20.10
//Orden: 
//Quien ve esto por primera vez, hacer 1, 3 , 2
//Quien ya vio esto, hacer 2, 3, 1 

// Ejercicio 1: Crear un objeto y utilizar this en un método
// Consigna: Crea un objeto auto con las propiedades marca, modelo, y anio. Añade un método detalles que imprima un mensaje en la consola con la marca, el modelo y el anio usando this.

// var auto = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     anio: 2018,
//     detalles: function() {
//         console.log((`Auto: ${this.marca} ${this.modelo}, Año:${this.anio}`))
//     }
// }

// auto.detalles()


// Ejercicio 2: Uso de this en un método con función flecha
// Consigna: Crea un objeto usuario con las propiedades nombre y edad, y un método imprimirEdad que utilice una función flecha dentro de un setTimeout para imprimir la edad después de 5 segundos.

var usuario = {
    nombre: "Juan",
    edad: 20,
    imprimirEdad: function() {
        setTimeout(()=>{
            console.log(`La edad de ${this.nombre} es ${this.edad}`)
        },5000)     
   
    }
}
usuario.imprimirEdad()

// Ejercicio 3: Uso de this para modificar propiedades
// Consigna: Crea un objeto contador con una propiedad valor inicializada en 0. Añade un método incrementar que incremente valor en 1 cada vez que se llame. Usa this para referenciar la propiedad valor 

// var contador = {
//     valor: 0,
//     incrementar: function() {
//         this.valor++
//         console.log(`Valor actual es: ${this.valor}`)
//     }
// }
// contador.incrementar()
// contador.incrementar()
// contador.incrementar()
