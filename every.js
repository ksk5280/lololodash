var _ = require("lodash");

var townTemp = function (towns) {
  var result = { 'hot': [], 'warm': [] };

  function tempAbove19 (temp) {
    return temp > 19;
  };

  _.forEach(towns, function(temps, town) {

    if (_.every(temps, tempAbove19)) {
      result.hot.push(town);
    } else if (_.some(temps, tempAbove19)) {
      result.warm.push(town);
    }
  });

  return result;
};


module.exports = townTemp;
