const express = require('express');
const app = express();
app.use(express.json());
const assesslyBot = require('../services/assessly-bot.js');


const ai = async (req, res, next) => {
  const question = req.body.question;
  const response = await assesslyBot.main(question);
  res.send({question: response});
};

module.exports = { ai };
