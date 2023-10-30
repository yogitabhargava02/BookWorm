const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const connectToDatabase = require('./config/db');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

connectToDatabase();

const baseRoute = '/'; 

const booksRoutes = require('./routes/books');

app.use(`${baseRoute}/api/books`, booksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
