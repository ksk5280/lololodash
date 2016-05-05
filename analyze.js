var _ = require("lodash");

var freelancerSorter = function(freelancers) {
  var totalIncome = _.reduce(freelancers, function(result, value, key) {
      return result + value.income;
    }, 0);

  var averageIncome = totalIncome/freelancers.length;

  overperformers = _.chain(freelancers)
    .filter(function(freelancer) {
      return freelancer.income > averageIncome;
    })
    .sortBy('income')
    .value();

  underperformers = _.chain(freelancers)
    .filter(function(freelancer) {
      return freelancer.income <= averageIncome;
    })
    .sortBy('income')
    .value();

  return result = {
    'average':      averageIncome,
    'underperform': underperformers,
    'overperform':  overperformers
  }
};

module.exports = freelancerSorter;
