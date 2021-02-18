const mongoose = require("mongoose"); 
const db = require("../db.js");

const articleModel= db.model("Article", new mongoose.Schema({
    title: String,
    body: String,
    publishedDate: Date
}));

module.exports = articleModel