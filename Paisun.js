const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.port || 1123;

app.use(cors());

app.get('/strawberry', (req, res) => {
    res.send('🍎');
})

app.get('/apple', (req, res) => {
    res.send('🍌');
})

app.listen(port, ()=>{
    console.log("connect on server port" + port);
});

module.exports = app;
 