import React, { useState } from 'react';
import FormularioUsuario from './components/FormularioUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);


  const manejarEdicion = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };


  const manejarGuardado = () => {
    setUsuarioSeleccionado(null); 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD de Usuarios</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>{usuarioSeleccionado ? 'Editar Usuario' : 'Crear Usuario'}</h3>
          <FormularioUsuario
            usuarioSeleccionado={usuarioSeleccionado}
            alGuardar={manejarGuardado}
          />
        </div>
        <div className="col-md-8">
          <h3>Lista de Usuarios</h3>
          <ListaUsuarios alEditar={manejarEdicion} />
        </div>
      </div>
    </div>
  );
};

export default App;
