const express = require('express');
const Sequelize = require('sequelize');
const routes = require('./routes');

// import sequelize connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Database location
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
});
