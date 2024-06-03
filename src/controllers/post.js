const express = require("express");
const app = express();
const Post = require("../models/Post");

app.use(express.json());

const findAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (e) {
    res.send(e);
  }
};

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();
    res.send("New post succesfully added");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const findPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch (e) {
    res.status(404);
    console.log(e);
    res.send(e);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body);
    post.save();
    res.send("Post succesfully updated");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id }, req.body);
    res.send("Post succesfully removed");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

module.exports = { createPost, updatePost, findAllPosts, findPost, deletePost };
