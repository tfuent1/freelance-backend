// src/routes/contactRoutes.js
const express = require("express");
const { handleContactFormSubmission } = require("../controllers/contactController");
const validateContact = require("../middlewares/validateContact");

const router = express.Router();

// POST route for handling contact form submissions
router.post("/", validateContact, handleContactFormSubmission);

module.exports = router;
