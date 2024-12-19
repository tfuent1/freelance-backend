const Contact = require("../models/Contact");

const handleContactFormSubmission = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save contact data
    const contact = await Contact.create({ name, email, message });

    res.status(200).json({
      message: "Form submitted successfully",
      contact,
    });
  } catch (error) {
    console.error("Error saving contact form data:", error.message);
    res.status(500).json({ error: "Error saving contact form data" });
  }
};

module.exports = { handleContactFormSubmission };
