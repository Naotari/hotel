const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('booking', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      date_start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      date_end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    }, 
    {
      timestamps: false
    });
  };