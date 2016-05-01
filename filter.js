var _ = require("lodash");

var filterWhere = function(users) {
  return _.filter(users, { active: true });
};

module.exports = filterWhere;
