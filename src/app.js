const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('database connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));

// Routes(/api is the endpoint)
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
