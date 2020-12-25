import Swal from 'sweetalert2';

export const isFormValid = (empleado) => {

    if(empleado.nombre.trim().length === 0) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El nombre es requerido'
      })
        return false;
    } else if (empleado.apellido.trim().length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El apellido es requerido'
      })
        return false;
    } else if (empleado.edad.length === 0 ) {
      console.log(typeof empleado.edad)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La edad es requerida'
      })
        return false;
    } else if (empleado.id.length === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El id es requerido'
      })
        return false;
    } else if (empleado.profesion === 'Click para seleccionar'){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La profesión es requerida'
      })
      return false;
    } else if(empleado.profesion === 'Programador' &&  empleado.lenguaje === 'Click para seleccionar'){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El lenguaje es requerido'
      })
      return false;
    } else if(empleado.profesion === 'Diseñador' &&  empleado.tipo === 'Click para seleccionar'){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El tipo de diseñador es requerido'
      })
      return false;
    
    }
    return true;
  };
