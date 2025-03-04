const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize to use SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite'), // Database file
    logging: false, // Disable logging; set to console.log to see SQL queries
});

module.exports = sequelize;
