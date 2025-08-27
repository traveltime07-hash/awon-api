const express = require('express');
const cors = require('cors');

const app = express();

// CORS = zasady kto może łączyć się z API z przeglądarki
app.use(cors({
  origin: [
    'https://awonsystem-frontend.vercel.app',
    'https://www.awonsystem.pl',
    'https://awonsystem.pl'
  ],
  credentials: true
}));

app.use(express.json());

// Proste endpointy testowe
app.get('/health', (req, res) => res.send('ok'));
app.get('/api/ping', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

const PORT = process.env.PORT || 3000; // PORT = zmienna środowiskowa z Koyeb
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API listening on port ${PORT}`);
});
