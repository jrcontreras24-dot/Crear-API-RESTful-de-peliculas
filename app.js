const express = require('express');
const app = express();
const sequelize = require('./config/database');

const logger = require('./middlewares/logger');
const apiKey = require('./middlewares/apiKey');

const peliculasRoutes = require('./routes/peliculas.routes');

app.use(express.json());
app.use(logger);
app.use(apiKey);

app.use('/peliculas', peliculasRoutes);

sequelize.sync().then(() => {
  console.log('Base de datos conectada');
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});