const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Disable automatic timestamp fields
});

module.exports = User;
