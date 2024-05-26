# URL Shortener

## Description

This project consists of a frontend and a backend for a URL shortening service. The backend is built using Express.js and provides endpoints for shortening long URLs and redirecting to the original URLs. The frontend is built using React.js and allows users to input a long URL, shorten it, and copy the shortened URL to the clipboard.

### Backend

The backend is responsible for handling URL shortening requests and redirects. It uses Express.js to create a server, listens on port 3000, and provides two main endpoints:

- /shorten: Accepts POST requests with a long URL, generates a short URL, and stores the mapping between the short and long URLs.
- /:shortUrl: Accepts GET requests with a short URL and redirects to the original long URL.
The backend utilizes the nanoid library to generate unique short URLs and validates URLs to ensure they start with either "http://" or "https://".

### Frontend

The frontend allows users to input a long URL and shorten it using the backend API. It displays the shortened URL and provides a button to copy it to the clipboard. The frontend is built using React.js and utilizes Axios for making HTTP requests and Font Awesome icons for visual elements.

## Installation

- Clone the repository.
- Navigate to the backend directory and run npm install to install dependencies.
- Run npm run server to start the backend server.
- Navigate to the frontend directory and run npm install to install dependencies.
- Run npm run dev to start the frontend development server.

## Usage

- Input a long URL into the text field.
- Click the "Shorten" button to generate a shortened URL.
- Once the shortened URL appears, click the "Copy" button to copy it to the clipboard.
- You can now use the shortened URL to redirect to the original long URL.

## Technologies Used

- Backend: Express.js, nanoid
- Frontend: React.js, Axios, Font Awesome
