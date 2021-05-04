const express = require("express");
const port = 8080;
const app = express()
const api = require('./routes/api')
app.use(express.json());
app.use('/api', api)

app.get('/', (req, res) => {
    res.send("Hello from the server")
})

app.listen(port, () => {
    console.log("server is lisning at  :", port);
})