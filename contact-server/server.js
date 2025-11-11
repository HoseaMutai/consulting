require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Health check
app.get('/', (req, res) => {
  res.status(200).send('Contact form API server is running successfully!');
});

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({ message: 'Missing required fields.' });
  }

  const mailOptions = {
    from: `Contact Form <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVING_EMAIL,
    subject: `New Contact from Website: ${name}`,
    html: `
      <h3>Contact Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Nodemailer Error:', error);
      return res.status(500).send({ message: 'Email failed to send.', error: error.message });
    }

    console.log('Message sent:', info.messageId);
    res.status(200).send({ message: 'Email sent successfully!' });
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
