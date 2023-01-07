const express = require('express');  // import express from 'express'
const routes = require("./routes");
const bodyParser = require("./bodyParser");

const app = express();
const PORT = process.env.PORT || 5000;

routes(app);
bodyParser(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})