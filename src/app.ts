import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Typescript Node Starter</h1>
    <h2>Environment variables are visible on secret page</h2>
    <p>Try to find this <a href="/secret">secret</a></p>
  `)
});

app.get('/secret', (req, res) => {  
  res.send(`
    <h1>Secret</h1>
    ${
      process.env.APP_SECRET ?
      `<p>The app secret is ${process.env.APP_SECRET}</p>` :
      `<p>The app secret is not set</p>`
    }
  `)
});
app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});