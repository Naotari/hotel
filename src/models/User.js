const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, 
    {
      timestamps: false
    });
  };