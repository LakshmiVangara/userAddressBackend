const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const User = require('./User');

const Address = sequelize.define('Address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Establish One-to-Many relationship
User.hasMany(Address, { foreignKey: 'userId', onDelete: 'CASCADE' });
Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;
