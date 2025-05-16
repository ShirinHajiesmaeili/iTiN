// Load environment variables
import dotenv from "dotenv";
dotenv.config(); // Load .env file

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// Use environment's PORT or default to 5001 for local development
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ GET route to handle root path
app.get("/", (req, res) => {
  res.send("API is running.");
});

// POST route to send email
app.post("/send-email", (req, res) => {
  // Log the received request body for debugging
  console.log("Received request body:", req.body);

  const { firstName, lastName, company, email, message } = req.body;

  // Set up Nodemailer transporter with Gmail SMTP (make sure to use environment variables)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // from .env
      pass: process.env.EMAIL_PASS, // from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${firstName} ${lastName}`,
    text: `Company: ${company}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
