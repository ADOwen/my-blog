const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const Post = new Schema(
  {
    title: {
      type: String,
      required: 'Please enter a title.',
      minlength: 1,
    },
    postContent: {
      type: String,
      required: "Please enter text inside your post",
      minlength: 1,
      maxlength: 500
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: time => dateFormat(time)
    },
    username: {
      type: String,
      requird: true
    }
  }
)

module.exports = Post;