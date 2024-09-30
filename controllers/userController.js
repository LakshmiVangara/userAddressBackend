const User = require('../models/User');
const Address = require('../models/Address');

// Handle form submission to register a user and their address
exports.registerUser = async (req, res) => {
    const { name, address } = req.body;

    if (!name || !address) {
        return res.status(400).send('Name and Address are required.');
    }

    try {
        // Create a new user
        const user = await User.create({ name });

        // Create a new address linked to the user
        await Address.create({ address, userId: user.id });

        res.status(201).send('User and Address registered successfully!');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
};
