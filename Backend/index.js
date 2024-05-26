/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors')
const { nanoid } = require('nanoid'); 


const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
const urlStore = {};

// Endpoint to shorten a URL
app.post('/shorten', (req, res) => {
  const { url } = req.body;
  if (!isValidUrl(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }
  
  const shortUrl = generateShortUrl();
  urlStore[shortUrl] = url;
  console.log(urlStore)
  res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortUrl}` });
});

// Endpoint to redirect to original URL
app.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params;
  console.log(urlStore)
  const originalUrl = urlStore[shortUrl];
  if (!originalUrl) {
    return res.status(404).send('URL not found');
  }
  res.redirect(originalUrl);
});


function generateShortUrl() {
  return nanoid(); 
}


function isValidUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
