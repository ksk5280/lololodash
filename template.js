var _ = require("lodash");

var templater = function(logins) {
  return _.template("Hello <%= name %> (logins: <%= login.length %>)")(logins)
};

module.exports = templater;
