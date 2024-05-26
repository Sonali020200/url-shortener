// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faClipboard } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const shortenUrl = async () => {
    try {
      const response = await axios.post('http://localhost:3000/shorten', { url: urlInput });
      setShortenedUrl(`${response.data.shortUrl}`);
      setErrorMessage('');
    } catch (error) {
      console.error('Error shortening URL:', error);
      setErrorMessage('Failed to shorten URL. Enter valid URL.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopiedToClipboard(true);
  };

  return (
    <div className="App">
      <h1>
        <FontAwesomeIcon icon={faLink} className="link-icon" />
        URL Shortener
      </h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          className="url-input"
        />
        <button onClick={shortenUrl} className="shorten-button">Shorten</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {shortenedUrl && (
        <div className="shortened-url-container">
          <div className="shortened-url-box">
            <a href={shortenedUrl} target='_blank' className="shortened-url" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
            <FontAwesomeIcon
              icon={faClipboard}
              onClick={copyToClipboard}
              className="copy-icon"
            />
            {copiedToClipboard && <span className="copied-message">Copied to clipboard!</span>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
