const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('Administrador', 'Analista'),
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

module.exports = Usuario;