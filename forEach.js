var _ = require("lodash");

var townSize = function(towns){
  return _.forEach(towns, function(town){
    if (town.population > 1) {
      town.size = 'big';
    } else if (town.population > 0.5) {
      town.size = 'med';
    } else {
      town.size = 'small';
    }
  });
};

module.exports = townSize;
