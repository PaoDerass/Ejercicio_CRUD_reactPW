import React, { useState, useEffect } from 'react';
import { crearUsuario, actualizarUsuario } from '../services/api';
import { Form, Button } from 'react-bootstrap';

const FormularioUsuario = ({ usuarioSeleccionado, alGuardar }) => {
  const [datos, setDatos] = useState({ email: '', password: '', role: '' });

  useEffect(() => {
    if (usuarioSeleccionado) {
      setDatos(usuarioSeleccionado);
    }
  }, [usuarioSeleccionado]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      if (datos.id) {
        await actualizarUsuario(datos.id, datos);
      } else {
        await crearUsuario(datos);
      }
      alGuardar();
    } catch (error) {
      alert('Error al guardar el usuario');
    }
  };

  return (
    <Form onSubmit={manejarSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={datos.email}
          onChange={manejarCambio}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={datos.password}
          onChange={manejarCambio}
          required
        />
      </Form.Group>
      <Form.Group controlId="role">
        <Form.Label>Rol</Form.Label>
        <Form.Control
          type="text"
          name="role"
          value={datos.role}
          onChange={manejarCambio}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {datos.id ? 'Actualizar' : 'Crear'}
      </Button>
    </Form>
  );
};

export default FormularioUsuario;
