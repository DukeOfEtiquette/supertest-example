'use strict';

const express = require('express');
const router = express.Router();
const stooges = ['Larry', 'Moe', 'Shemp'];

router.get('/stooges', (req, res) => {
  res.json(stooges);
});

module.exports = router;