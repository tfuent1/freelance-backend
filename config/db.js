const { Sequelize } = require('sequelize');
const config = require('./config');  // Import your config.js

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];  // Get the environment-specific config

const sequelize = new Sequelize(dbConfig);

// Define the connectDB function to establish a connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();  // Authenticate the connection
    console.log('PostgreSQL database connected successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);  // Exit if there's an error
  }
};

module.exports = {
  sequelize,
  connectDB,  // Export the connectDB function
};
