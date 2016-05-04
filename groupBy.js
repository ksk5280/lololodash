var _ = require("lodash");

var commentCount = function(comments){
  return _.chain(comments)
    .groupBy('username')
    .map(function(userComments, username){
      return { 'username': username, 'comment_count': _.size(userComments) };
    })
    .sortBy('comment_count')
    .reverse()
    .value();
}

module.exports = commentCount;
