const express = require("express");
require('dotenv').config();
const app = express();
const peopleRoute = require('./routes/people')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/people', peopleRoute);








const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})