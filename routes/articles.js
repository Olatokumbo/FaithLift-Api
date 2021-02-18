const express = require("express");
const articleModel = require("../models/article");
const router = express.Router();

router.get("/", (req, res) => {
  articleModel.find((err, data) => {
    if (data) {
      res.json(data);
    } else console.log(err);
  });
});

router.post("/add", (req, res) => {
  const { title, body, publishedDate } = req.body;
  const newArticle = articleModel({
    title,
    body,
    publishedDate,
  });
  newArticle.save((err, data) => {
    if (data)
      res.status(200).json({
        success: true,
        message: "Your article was SAVED",
      });
    else {
      res.status(502).json({
        success: false,
        message: "There an error in saving your article. Please try again.",
      });
    }
  });
});

router.patch("/edit", (req, res) => {
  const { id, title, body } = req.body;
  articleModel.findByIdAndUpdate(
    id,
    {
      title,
      body,
    },
    (err, data) => {
      if (data) {
        res.status(200).json({
          success: true,
          message: "Your article has been UPDATED",
        });
      } else {
        res.status(502).json({
          success: false,
          message: "There an error in saving your article. Please try again.",
        });
      }
    }
  );
});

router.delete("/delete", (req, res) => {
  const { id } = req.body;
  articleModel.findByIdAndDelete(id, (err, data) => {
    if (data) {
      res.status(200).json({
        success: true,
        message: "Your article has been DELETED",
      });
    } else {
      res.status(502).json({
        success: false,
        message: "There an error in deleting your article. Please try again.",
      });
    }
  });
});

module.exports = router;
