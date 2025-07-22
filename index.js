// index.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { handleCommand } = require('./commands');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET;
const paidUsers = new Set(); // This will store paid user phone numbers temporarily

app.use(bodyParser.json());

// ✅ Simulated WhatsApp message handler (in production, link to actual WhatsApp API)
const sendWhatsAppMessage = (phone, message) => {
  console.log(`To ${phone}: ${message}`);
  // Replace this with your WhatsApp API logic (e.g. Baileys or chat-api)
};

// ✅ Webhook from Paystack when payment is complete
app.post('/paystack/webhook', (req, res) => {
  const event = req.body;

  if (event.event === 'charge.success') {
    const phone = event.data.metadata?.phone;

    if (phone) {
      paidUsers.add(phone);
      sendWhatsAppMessage(phone, `✅ Thank you for your payment! Your bot is now activated. Type *!start* to begin.`);
    }
  }

  res.sendStatus(200);
});

// ✅ WhatsApp message webhook simulation
app.post('/whatsapp/webhook', (req, res) => {
  const { message, sender } = req.body;

  if (!paidUsers.has(sender)) {
    sendWhatsAppMessage(sender, `❌ You need to complete payment before using the bot.`);
    return res.sendStatus(403);
  }

  const reply = handleCommand(message, sender);
  sendWhatsAppMessage(sender, reply);
  res.sendStatus(200);
});

// ✅ Home route
app.get('/', (req, res) => {
  res.send('🤖 WhatsApp Paystack Bot is Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
