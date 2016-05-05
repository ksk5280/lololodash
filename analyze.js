var _ = require("lodash");

var freelancerSorter = function(freelancers) {
  var freelancers = _.sortBy(freelancers, 'income');

  var totalIncome = _.reduce(freelancers, function(sum, value) {
      return sum + value.income;
    }, 0);

  var averageIncome = totalIncome/freelancers.length;

  overperformers = _.filter(freelancers, function(freelancer) {
      return freelancer.income > averageIncome;
    });

  underperformers = _.filter(freelancers, function(freelancer) {
      return freelancer.income <= averageIncome;
    });

  return {
    'average':      averageIncome,
    'underperform': underperformers,
    'overperform':  overperformers
  };
};

module.exports = freelancerSorter;
