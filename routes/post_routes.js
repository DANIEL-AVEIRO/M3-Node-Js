import express from "express";
import {
  postCreate,
  postDelete,
  postList,
  postUpdate,
} from "../controllers/post_controllers.js";

const router = express.Router();

router.get("/list", postList);
router.post("/create", postCreate);
router.put("/update", postUpdate);
router.delete("/delete", postDelete);

export default router;
