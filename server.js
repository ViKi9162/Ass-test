// server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const errorHandler = require('./middleware/errorHandler');
const swaggerSetup = require('./swagger');

const app = express();

app.use(bodyParser.json());

app.use('/api/user', userRoutes);

swaggerSetup(app);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
