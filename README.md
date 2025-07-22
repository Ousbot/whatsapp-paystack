# 🤖 WhatsApp Bot with Paystack Integration

A fully automated WhatsApp bot that activates after successful payment through Paystack. Designed for instant activation and command features like auto-reply, fake typing, view-once bypass, antidelete, and more.

---

## 🚀 Features

- ✅ Activates bot automatically after Paystack payment
- 💬 Sends "Thank you" message and usage instructions
- 🎭 Fake typing / recording status
- 💥 Anti-delete for messages
- 👀 View-once media unlock
- ❤️ Auto-reactions
- 🔧 Easy command configuration

---

## 🛠 Technologies Used

- Node.js
- Express.js
- WhatsApp Web.js
- Paystack API (Webhook)

---

## 💳 How It Works

1. User clicks your Paystack payment link
2. Upon successful payment, Paystack sends a webhook to your Heroku app
3. Your bot captures the phone number and activates the session
4. Sends a welcome message:  
   _"Thank you for your payment! Your bot is now activated. Type 'start' to begin."_

---

## 💻 Installation & Deployment

### 📦 Requirements

- GitHub account
- Heroku account
- Paystack account
- A valid Paystack webhook URL

### 🔧 Environment Variables (Heroku)

| Key                  | Description                      |
|----------------------|----------------------------------|
| `PAYSTACK_SECRET`    | Your Paystack secret key         |
| `PUBLIC_KEY`         | Your Paystack public key         |
| `SESSION_NAME`       | WhatsApp session folder name     |
| `OWNER_NUMBER`       | Your WhatsApp number with country code |

---

## 📋 Commands (User Types in WhatsApp)

| Command           | What It Does                          |
|------------------|----------------------------------------|
| `start`          | Shows bot command guide                |
| `autoreact ❤️`   | Sends automatic heart emoji reaction   |
| `fake typing`    | Shows “typing…” animation              |
| `fake record`    | Shows “recording audio…” status        |
| `view status`    | Fakes viewing all WhatsApp statuses    |
| `antidelete`     | Recovers deleted messages              |

---

## 🌐 Deployment Steps (Heroku + GitHub)

1. Push this project to GitHub
2. Connect your repo to Heroku
3. Set up environment variables
4. Enable Paystack webhook with your Heroku URL
5. Done!

---

## 📞 Author & Support

Built by **Ous**.

📧 Email: [vincentouma398@gmail.com](mailto:vincentouma398@gmail.com)  
📱 WhatsApp: [+254711105154](https://wa.me/254711105154)
