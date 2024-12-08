import axios from 'axios';

const URL_API = 'https://api.escuelajs.co/api/v1/users';

export const obtenerUsuarios = () => axios.get(URL_API);

export const crearUsuario = (usuario) => axios.post(URL_API, usuario);

export const actualizarUsuario = (id, usuario) => axios.put(`${URL_API}/${id}`, usuario);

export const eliminarUsuario = (id) => axios.delete(`${URL_API}/${id}`);
