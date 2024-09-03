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
    saludar: function(){console.log(`Hola ${this.hijos[1].nombre}`)}
}
 
alumno.saludar()

