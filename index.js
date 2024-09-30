const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./db/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies (from form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML form)
app.use(express.static(path.join(__dirname, 'views')));

// Use user routes
app.use('/', userRoutes);

// Sync database and start the server
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
