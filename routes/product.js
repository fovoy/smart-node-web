var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:productId', function(req, res) {
  res.end('productId'+req.serviceId+'\n');
});
router.param('productId',function(req,res,next,productId){
    req.productId=productId;
    next();
});
module.exports = router;
