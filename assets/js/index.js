var alumno = {
    nombre: "Jose", 
    apellido:"Perez",
    edad: 30,
    tieneMascotas: true,
    hijos: [
        {
            nombre: "Jose ",
            apellido: "Perez"
        }, 
        {
            nombre: "Carla ",
            apellido: "Perez"
        }
    ],
    saludar: function(){console.log(`Hola ${this.nombre}`)}
}
 
alumno.saludar()


//Ejercicio individual: Hasta las 20.10
//Orden: 
//Quien ve esto por primera vez, hacer 1, 3 , 2
//Quien ya vio esto, hacer 2, 3, 1 

// Ejercicio 1: Crear un objeto y utilizar this en un método
// Consigna: Crea un objeto auto con las propiedades marca, modelo, y año. Añade un método detalles que imprima un mensaje con la marca, el modelo y el año usando this.

// Ejercicio 2: Uso de this en un método con función flecha
// Consigna: Crea un objeto usuario con las propiedades nombre y edad, y un método imprimirEdad que utilice una función flecha dentro de un setTimeout para imprimir la edad después de 5 segundos.

// Ejercicio 3: Uso de this para modificar propiedades
// Consigna: Crea un objeto contador con una propiedad valor inicializada en 0. Añade un método incrementar que incremente valor en 1 cada vez que se llame. Usa this para referenciar la propiedad valor 