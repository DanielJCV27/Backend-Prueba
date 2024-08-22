const{DataTypes}= require('sequelize');
const sequelize = require('../config/database');

const Venta =sequelize.define('Venta',{
    nombreComprador:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    totalCompra:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
});
module.exports = Venta;
