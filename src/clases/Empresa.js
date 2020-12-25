import { Diseñador, Programador } from "./Empleado";

//En JS la POO se encuentra basada en herencia de prototipos. Todos los objetos se encuentran vinculados a un prototipo que contienen métodos y propiedades a los que los objetos pueden acceder.
// Las clases en JS fueron agregadas a partir de ES6 y no funcionan como las clases tradicionales en otros lenguajes que implementan la POO, se dice que solo son azúcar sintáctico porque nos permite
// hacer lo mismo que una función constructora pero con una sintaxis más agradable. 

export class Empresa {

  constructor(nombre, id){ // El método constructor permite inicializar las propiedades del objeto que se va a crear cuando se instancie la clase.
      this.nombre = nombre;  // La palabra this aputará al objeto que se instancia a partir de esta clase.
      this.id = id;  
      this.empleados = [];
  }

  agregarEmpleados({nombre, apellido, edad, id, profesion, lenguaje, tipo}){ // Todos los métodos que se encuentran fuera del constructor estarán en el prototipo de los objetos que se instanciarán.
      if (profesion === 'Programador'){ 
       const programador = new Programador(nombre, apellido, edad, id, profesion, lenguaje);// Se crea una nueva instancia de la clase Programador.
        this.empleados.push(programador);
      } else {
        const diseñador = new Diseñador (nombre, apellido, edad, id, profesion, tipo);// Se crea una nueva instancia de la clase Diseñador.
        this.empleados.push(diseñador);
      }
  }   
  obtenerEmpleados(){
    return this.empleados;
  }

  obtenerEmpleadosPorId (id) {
    const empleadosID =  [];
    empleadosID.push(this.empleados.find(e => e.id === id));
    return empleadosID;
  }

  obtenerPromedioEdadEmpleados () {
      let edad = 0;
      for (let i = 0; i < this.empleados.length; i++){
        edad = edad + Number (this.empleados[i].edad);
      };
      const prom = edad/this.empleados.length;
      return prom;
  }

  };

// En el archivo App se instancia a la clase Empresa.

