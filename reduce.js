var _ = require("lodash");

var articleTotal = function(orders) {
  return _.chain(orders)
    .groupBy('article')
    .reduce(function (result, value, key) {
      var articleObject = {};
      articleObject['article'] = parseInt(key);
      articleObject['total_orders'] = _.reduce(value, function (sum, order) {
        return sum + order.quantity;
      }, 0);
      result.push(articleObject);
      return result;
    }, [])
    .sortBy('total_orders')
    .reverse()
    .value();
};

module.exports = articleTotal;
