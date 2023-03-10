const express = require('express');
const router = express.Router();

router.get('/infuencers', (req, res) => {
    res.send(`<h1>This is my list of Influencers</h1>`)
})


module.exports = router;