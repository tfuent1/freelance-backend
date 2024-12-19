require("dotenv").config();

module.exports = {
  development: {
    username: process.env.PG_USER || "your_db_user",
    password: process.env.PG_PASSWORD || "your_db_password",
    database: process.env.PG_DATABASE || "your_db_name",
    host: process.env.PG_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.PG_USER || "your_db_user",
    password: process.env.PG_PASSWORD || "your_db_password",
    database: process.env.PG_DATABASE || "your_test_db",
    host: process.env.PG_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: "postgres",
  },
};
