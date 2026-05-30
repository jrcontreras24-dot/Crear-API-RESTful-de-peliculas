const express = require('express');
const app = express();

const sequelize = require('./database');
const logger = require('./logger');
const apiKey = require('./apiKey');
const peliculasRoutes = require('./peliculas.routes');

app.use(express.json());
app.use(logger);
app.use(apiKey);

app.use('/peliculas', peliculasRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Base de datos conectada');

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
