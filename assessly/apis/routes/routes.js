const express = require('express');
const app = express();
const router = express.Router();
const test = require('../controllers/test');
router.get('/hello/:variable',test.test);

module.exports = router;
