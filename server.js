const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Node.js Web App</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .container {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }
        h1 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        p {
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .info {
          background: #f7f7f7;
          padding: 1.5rem;
          border-radius: 10px;
          margin-top: 2rem;
        }
        .info p {
          margin-bottom: 0.5rem;
          color: #333;
          font-size: 0.9rem;
        }
        .emoji {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        a {
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="emoji">🚀</div>
        <h1>Hello World!</h1>
        <p>Welcome to your Node.js web application running on Express.</p>
        <div class="info">
          <p><strong>Server Status:</strong> Running</p>
          <p><strong>Port:</strong> ${PORT}</p>
          <p><strong>Node Version:</strong> ${process.version}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/api/info', (req, res) => {
  res.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
