const express = require('express');
const sequelize = require('./config/database');
const Usuario = require('./models/Usuario');
const Venta = require('./models/Venta');
const cors = require('cors'); 

const app = express();
const port = 3001; 

app.use(express.json());
app.use(cors()); 

app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, rol } = req.body;
    const usuario = await Usuario.create({ nombre, rol });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el usuario.' });
  }
});


app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({ where: { estado: true } });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener la lista de usuarios.' });
  }
});


app.patch('/usuarios/:id/desactivar', async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.update({ estado: false }, { where: { id } });
    res.status(200).json({ message: 'Usuario desactivado.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al desactivar el usuario.' });
  }
});


app.patch('/usuarios/:id/rol', async (req, res) => {
  try {
    const { id } = req.params;
    const { rol } = req.body;
    await Usuario.update({ rol }, { where: { id } });
    res.status(200).json({ message: 'Rol de usuario actualizado.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el rol del usuario.' });
  }
});


app.post('/ventas', async (req, res) => {
  try {
    const { nombreComprador, totalCompra } = req.body;
    const venta = await Venta.create({ nombreComprador, totalCompra });
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ error: 'Error al registrar la venta.' });
  }
});


app.get('/ventas', async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener las ventas.' });
  }
});


app.get('/test', (req, res) => {
  res.send('El servidor está funcionando');
});


sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });