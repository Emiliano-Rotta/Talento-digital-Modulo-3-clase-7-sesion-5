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

// var usuario = {
//     nombre: "Juan",
//     edad: 20,
//     imprimirEdad: function() {
//         setTimeout(()=>{
//             console.log(`La edad de ${this.nombre} es ${this.edad}`)
//         },5000)     

//     }
// }
// usuario.imprimirEdad()

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


//-------------class--------------------
//EcmaScript ES6 -- JS 2015

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar() {
//         console.log(`Hola ${this.nombre} tenes ${this.edad} años!`)
//     }
// }

// const erick = new Persona("Erick", 25)
// const lorena = new Persona("Lorena", 30)
// erick.saludar()
// lorena.saludar()

//Ejercicio 4
// Consigna: Crea una clase Coche con propiedades marca, modelo, y año. Añade un método detalles que imprima un mensaje con la marca, el modelo y el año. Instancia un objeto de la clase y llama al método detalles.

// class Auto {
//     constructor(marca, modelo, anio) {
//         this.marca = marca
//         this.modelo = modelo
//         this.anio = anio

//     }
//     detalles() {
//         console.log(`Auto: ${this.marca} ${this.modelo}, Año:${this.anio}`)
//     }
// }

// const autoActual = new Auto ("Renault", "Clio", 2007)
// const autoFuturo = new Auto ("Toyota", "Corolla", 2018)
// autoActual.detalles()
// autoFuturo.detalles()

// Ejercicio 5: Añadir métodos a una clase
// Consigna: Crea una clase CuentaBancaria con las propiedades titular y saldo. Añade métodos depositar y retirar que permitan modificar el saldo de la cuenta. Añade un método consultarSaldo que imprima el saldo actual. Crea una instancia de CuentaBancaria y realiza algunas operaciones.

class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;       
    }
    depositar(cantidad){
        this.saldo += cantidad 
        console.log(`saldo actual es: ${this.saldo}`)
    }
    retirar(cantidad){
        if(cantidad <= this.saldo){
            this.saldo -= cantidad 
            console.log(`saldo actual es: ${this.saldo}`)
        } else {
            console.log(`tu saldo de ${this.saldo} es insuficiente para retirar ${cantidad}`)
        }

    }
    consultarSaldo(){
        console.log(`El saldo actual de ${this.titular} es ${this.saldo}`)
    }
}


const miCuenta = new CuentaBancaria('Pedro', 1000);
miCuenta.depositar(500); // Has depositado 500. Saldo actual: 1500
miCuenta.retirar(200); // Has retirado 200. Saldo actual: 1300
miCuenta.consultarSaldo(); // Saldo de Pedro: 1300


// --------------Tarea para la hora asincronica 

// Tomar el ejercicio 3 hecho con anterioridad, y hacerlo con clases para poder pasas distintos valores de comienzo: 
// alguno comenzaran en 0; otros en 5 y otros en 10.