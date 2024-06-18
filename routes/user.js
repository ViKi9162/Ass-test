// routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
router.post('/register', userController.registerUser);

/**
 * @swagger
 * /api/user/fetch:
 *   get:
 *     summary: Fetch user details
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username of the user to fetch
 *     responses:
 *       200:
 *         description: User details fetched successfully
 *       404:
 *         description: User not found
 */
router.get('/fetch', userController.fetchUser);

module.exports = router;
