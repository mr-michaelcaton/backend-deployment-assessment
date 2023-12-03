const knex = require("../db/connection");

function list() {
  // your solution here
  return knex('comments').select('*');
}

function listCommenterCount() {
  // your solution here
return knex('comments')
.join('users', 'comments.commenter_id', 'users.user_id')
.select('users.user_email as commenter_email')
.count('comments.commenter_id as count')
.groupBy('users.user_email')
.orderBy('users.user_email')
}

function read(commentId) {
  // your solution here
  return knex('comments')
  .select('comment_id', 'comment','user_email as commenter_email', 'post_body as commented_post')
  .join('users', 'comments.commenter_id', 'users.user_id')
  .join('posts', 'comments.post_id', 'posts.post_id')
  .where({comment_id: commentId})
  .first();
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
