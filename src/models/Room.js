const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('room', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    }, 
    {
      timestamps: false
    });
  };