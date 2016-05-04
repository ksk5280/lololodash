var _ = require("lodash");

var chained = function(words) {
  return _.chain(words)
    .map(function(word) {
      return word.toUpperCase() + 'CHAINED';
    })
    .sortBy()
    .value();
};

module.exports = chained;
