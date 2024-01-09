const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_session_secret',
    resave: true,
    saveUninitialized: true,
  })
);

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const adminRoutes = require('./routes/admin');
const collectionRoutes = require('./routes/collections');
const contactRoutes = require('./routes/contact');

app.use('/api/admin', adminRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/contact', contactRoutes);


app.get('/', (req, res) => {
    res.send('Hello, welcome to your API!');
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
