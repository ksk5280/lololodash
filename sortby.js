var _ = require("lodash");

var sortByQuantity = function(items) {
  return _.sortBy(items, 'quantity').reverse();
};

module.exports = sortByQuantity;
