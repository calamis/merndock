/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import mongoose from 'mongoose';
// import connectDB from '../config/db';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api damboy!' });
});

const port = process.env.port || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error); ``