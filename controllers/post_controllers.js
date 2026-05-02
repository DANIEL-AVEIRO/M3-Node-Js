import { request } from "express";
import Posts from "../models/post_models.js";

export const postList = async (req, res) => {
  const posts = await Posts.find();
  return res.status(200).json({
    success: true,
    message: "Post show successfully",
    posts: posts
  });
};

export const postCreate = async (req, res) => {
  const { title, author, viewer, description } = req.body;
  if (!title || !author || !viewer || !description) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }
  const post = await Posts.create({
    title,
    author,
    viewer,
    description,
  });
  await post.save()
  return res.status(201).json({
    success: true,
    message: "Post create successfully!",
    post: {
      id: post.id,
      title: post.title,
      viewer: post.viewer,
      description: post.description,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    },
  });
};

export const postUpdate = async (req, res) => {
  const { id } = req.params;
  const post = await Posts.findById(id)

  post.title = req.body.title ?? post.title
  post.author = req.body.author ?? post.author
  post.viewer = req.body.viewer ?? post.viewer
  post.description = req.body.description ?? post.description
  await post.save()
  return res.status(200).json({
    success: true,
    message: "Post update successfully!",
    post: {
      id: post.id,
      title: post.title,
      viewer: post.viewer,
      author: post.author,
      description: post.description,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    },
  });
};

export const postDelete = async (req, res) => {
  const { id } = req.params;
  const post = await Posts.findById(id)
  await post.deleteOne()
  return res.status(200).json({
    success: true,
    message: "Post delete successfully!"
  })
};
