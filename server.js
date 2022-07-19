
const express = require('express');
const routes = require('./routes/api')
// Import Sequelize Connection
require('dotenv').config()
console.log(process.env)
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true, alter: true }).then (() => {
  app.listen(PORT, () => 
    console.log(`App listening on port ${PORT}!`));
});