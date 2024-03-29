const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    singleUser: async (parent, args, context) => {
      const userData = await User.findOne({ _id: args._id }).select(
        "-password"
      );
      return userData;
    },
    singlePost: async (parent, args, context) => {
      const postData = await Post.findOne({ _id: args._id });
      return postData;
    },
    posts: async () => {
      return Post.find();
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Username or Password incorrect");
      }

      const validPW = await user.isCorrectPassword(password);

      if (!validPW) {
        throw new AuthenticationError("Username or Password incorrect");
      }
      
      const token = signToken(user);
      return { token, user };
    },
    createPost: async (parent, args) => {
      const newPost = await Post.create(args);
      return newPost;
    },
    deletePost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete(args);
        return post;
      }
      throw new AuthenticationError("The truth is out there");
    },
    createComment: async (parent, args, context) => {
      if (context.user) {
        const newComment = await Comment.create(args.commentData);
        return newComment;
      }
      throw new AuthenticationError("Only those in the know can do that");
    },
    deleteComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.findOneAndDelete({ _id: args._id });
        return comment;
      }
      throw new AuthenticationError("The truth is out there");
    },
  }
}

module.exports = resolvers;