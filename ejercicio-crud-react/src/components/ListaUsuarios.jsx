import React, { useEffect, useState } from 'react';
import { obtenerUsuarios, eliminarUsuario } from '../services/api';
import { Button, Table } from 'react-bootstrap';
import MensajeAlerta from './MensajeAlerta';

const ListaUsuarios = ({ alEditar }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [alerta, setAlerta] = useState({ mostrar: false, mensaje: '', tipo: '' });

  const cargarUsuarios = async () => {
    try {
      const respuesta = await obtenerUsuarios();
      setUsuarios(respuesta.data);
    } catch (error) {
      setAlerta({ mostrar: true, mensaje: 'Error al cargar usuarios', tipo: 'danger' });
    }
  };


  const manejarEliminar = async (id) => {
    try {
      await eliminarUsuario(id);
      setAlerta({ mostrar: true, mensaje: 'Usuario eliminado con éxito', tipo: 'success' });
      cargarUsuarios();
    } catch (error) {
      setAlerta({ mostrar: true, mensaje: 'Error al eliminar usuario', tipo: 'danger' });
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <>
      {alerta.mostrar && <MensajeAlerta {...alerta} />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.email}</td>
              <td>{usuario.role}</td>
              <td>
                <Button variant="warning" onClick={() => alEditar(usuario)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => manejarEliminar(usuario.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListaUsuarios;
