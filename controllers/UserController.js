// controllers/UserController.js
const User = require('../models/User');
const UserRepository = require('../repositories/UserRepository');
const userRepository = new UserRepository();

exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;
    if (userRepository.findByUsername(username)) {
        return res.status(400).json({ error: 'User already exists' });
    }
    const user = new User(username, email, password);
    userRepository.save(user);
    res.status(201).json({ message: 'User registered successfully' });
};

exports.fetchUser = (req, res) => {
    const { username } = req.query;
    const user = userRepository.findByUsername(username);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
};
