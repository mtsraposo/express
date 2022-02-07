var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Respond to a DELETE request to the /user route:
router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
