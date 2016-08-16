var bros = require('../../bros.json')
module.exports = {
 index: function(req, res) {
   res.json(bros);
 }
};
