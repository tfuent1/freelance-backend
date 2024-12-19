const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db"); // Adjust path to your db configuration

const Contact = sequelize.define("Contact", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt`
});

module.exports = Contact;
