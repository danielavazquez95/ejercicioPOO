
export class Empleado {

    constructor(nombre, apellido, edad, id, profesion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.id = id;
        this.profesion = profesion;
    }
};

export class Programador extends Empleado { // La clase Programador hereda los métodos y propiedades de Empleado (herencia de prototipos).

    constructor(nombre, apellido, edad, id, profesion, lenguaje){
        super(nombre, apellido, edad, id, profesion); // El método super() va llamar al constructor de la clase Empleado.
        this.lenguaje = lenguaje; // Se crea una nueva propiedad para la clase Programador.
    }
};

export class Diseñador extends Empleado {// La clase Diseñador hereda los métodos y propiedades de Empleado (herencia de prototipos).

    constructor(nombre, apellido, edad, id, profesion, tipo){
        super(nombre, apellido, edad, id, profesion);
        this.tipo = tipo;// Se crea una nueva propiedad para la clase Diseñador.
    }
};


