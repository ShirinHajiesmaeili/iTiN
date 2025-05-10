// Load environment variables
import dotenv from "dotenv";
dotenv.config(); // Load .env file

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to send email
app.post("/send-email", (req, res) => {
  // Log the received request body for debugging
  console.log("Received request body:", req.body);

  const { firstName, lastName, company, email, message } = req.body;

  // Set up Nodemailer transporter with Gmail SMTP (make sure to use environment variables)
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail as the email service
    auth: {
      user: process.env.EMAIL_USER, // The email address (from .env)
      pass: process.env.EMAIL_PASS, // The email password (from .env)
    },
  });

  console.log("Setting up mail options...");

  const mailOptions = {
    from: process.env.EMAIL_USER, // The email address you're sending from
    to: process.env.EMAIL_USER, // The recipient email address (can be the same for testing)
    subject: `New message from ${firstName} ${lastName}`, // Email subject
    text: `Company: ${company}\nEmail: ${email}\n\nMessage: ${message}`, // The email body text
  };

  console.log("Sending email...");

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      return res.status(500).send("Error sending email"); // Return error status if the email couldn't be sent
    }
    console.log("Email sent successfully:", info.response); // Log successful sending of email
    res.status(200).send("Email sent successfully"); // Return success message
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
