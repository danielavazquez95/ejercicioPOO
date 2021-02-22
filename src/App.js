import React, {useRef, useState } from 'react';
import { Empresa } from './clases/Empresa';
import {isFormValid} from './formValid';



const danielaVazquezSA = new Empresa('Daniela Vazquez SA.', 1); // Se crea una nueva instancia de la clase Empresa.

export const App = () => {

  const initialState = {
    nombre: '',
    apellido:'',
    edad:'',
    id:'',
    profesion:'Click para seleccionar',
    lenguaje:'Click para seleccionar',
    tipo:'Click para seleccionar',
  };
  const [empleado, setEmpleado] = useState(initialState);
  const [id, setId] = useState('');
  const [listaPorId, setListaPorId] = useState([]);
  const [busqueda, setBusqueda] = useState(false);

  const handlerId = (e) => {
    setId(e.target.value);
    setBusqueda(false);
  };
  const handleSearch = () => {
    setListaPorId(danielaVazquezSA.obtenerEmpleadosPorId(id))
    setBusqueda(true);
  };

  const formRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(empleado)){
        danielaVazquezSA.agregarEmpleados(empleado); 
        setEmpleado(initialState);
        formRef.current.reset();
      }
  };
  
  return (
   
    <div className="container">
      <div className="row justify-content-center">
          <div className="col">
              <form ref={formRef} className="form-container" onSubmit={handlerSubmit}>
                <h1 className="nombreEmpresa text-center">Daniela Vazquez S.A.</h1>
                <hr/>
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        className="form-control my-3" 
                        autoComplete="off"
                        onChange={(e) => setEmpleado({...empleado, nombre: e.target.value})}
                        />
                    <label>Apellido</label>
                    <input 
                        type="text" 
                        name="apellido"
                        className="form-control my-3" 
                        autoComplete="off"
                        onChange={(e) => setEmpleado({...empleado, apellido: e.target.value})}
                      />
                    <label>Edad</label>
                    <input 
                        type="text" 
                        name="edad"
                        className="form-control my-3" 
                        autoComplete="off"
                        onChange={(e) => setEmpleado({...empleado, edad: e.target.value})}  
                      />
                    <label>Id</label>
                    <input 
                        type="text" 
                        name="id"
                        className="form-control my-3" 
                        autoComplete="off"
                        onChange={(e) => setEmpleado({...empleado, id: e.target.value})}      
                      />
                    <label>Profesión</label>
                    <select className="form-control my-3" onChange={(e) => setEmpleado({...empleado, profesion: e.target.value})}>
                      <option >Click para seleccionar</option>
                      <option >Programador</option>
                      <option >Diseñador</option>
                    </select>

                  {empleado.profesion==='Programador' &&

                    <div>
                      <label>Lenguaje de programación</label>
                      <select className="form-control my-3" onChange={(e) => setEmpleado({...empleado, lenguaje: e.target.value})}>
                      <option>Click para seleccionar</option>
                        <option>PHP</option>
                        <option>NET</option>
                        <option>Python</option>
                      </select>
                    </div> 
                  }
                    {empleado.profesion==='Diseñador' &&

                      <div>
                      <label>Tipo de diseñador</label>
                      <select className="form-control my-3" onChange={(e) => setEmpleado({...empleado, tipo: e.target.value})}>
                        <option>Click para seleccionar</option>
                        <option>Gráfico</option>
                        <option>Web</option>
                      </select>
                      </div> 
                    }
                  <button 
                      type="submit"
                      className="btn btn-primary btn-block my-3"
                      autoComplete="off"
                      >
                          Agregar empleado
                  </button>
              </form>
          </div>
              <div className="col"> 
                <div className="form-container" >
                <h3 className="text-center">Lista de empleados</h3>
                      {
                        danielaVazquezSA.empleados.map((empleado, i) =>         
                            <ul key={i}>
                              <hr/>
                              <h5><b>{`${empleado.nombre} ${empleado.apellido}`}</b></h5>
                              <li>{empleado.edad} años</li>
                              <li>id: {empleado.id} </li>
                              <li>{`${empleado.profesion} `} {empleado.lenguaje}{empleado.tipo}</li>
                            </ul>
                        )
                      }
                  <hr/>
                  <label>Filtrar empleado por id:</label>
                  <input 
                      onChange ={handlerId}
                      type="text" 
                      className="form-control my-3" 
                      autoComplete="off"
                    />
                  <button 
                  onClick = {handleSearch}
                  className="btn btn-primary btn-block mb-3"
                  autoComplete="off"
                  >
                    Buscar
                  </button>
                  <hr/>
                  {
                    listaPorId[0] !==undefined ?
                    <ul>
                        <h5><b>{`${listaPorId[0].nombre} ${listaPorId[0].apellido}`}</b></h5>
                        <li>{listaPorId[0].edad} años</li>
                        <li>id: {listaPorId[0].id} </li>
                        <li>{`${listaPorId[0].profesion} `} {listaPorId[0].lenguaje}{listaPorId[0].tipo}</li>
                    </ul>
                    :
                    (id!== '' && busqueda)&&
                    <div className="alert alert-danger">
                        No se encontró un empleado que coincida con el id
                    </div>
                  }
                   <hr/>
                  <label className="d-block">Promedio de edad: {(danielaVazquezSA.empleados.length > 0) && danielaVazquezSA.obtenerPromedioEdadEmpleados()}
                    </label>
              </div>
              </div>                             
    </div>
</div>
  );
}
