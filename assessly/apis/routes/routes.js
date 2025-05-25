const express = require('express');
const app = express();
const router = express.Router();
const assesslyController = require('../controllers/assessly-bot');
router.post('/ai', assesslyController.ai);
module.exports = router;
