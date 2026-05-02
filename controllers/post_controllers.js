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

export const postUpdate = (req, res) => {
  res.send("I'm post update");
};

export const postDelete = (req, res) => {
  res.send("I'm post delete");
};
