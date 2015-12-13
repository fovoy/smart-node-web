var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:serviceId', function(req, res) {
  res.end('serviceId'+req.serviceId+'\n');
});
router.param('serviceId',function(req,res,next,serviceId){
    req.serviceId=serviceId;
    next();
});

module.exports = router;
