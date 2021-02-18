const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const articles = require("./routes/articles");
const app = express();

const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/articles", articles);


app.listen(port,(req, res)=>{
    console.log("Running at port", port);
});