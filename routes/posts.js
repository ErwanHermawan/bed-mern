import express from "express";
import { getFeedPost, getPostUser, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* get data */
router.get("/", verifyToken, getFeedPost);
router.get("/:userId/posts", verifyToken, getPostUser);

/* upadate data */
router.patch("/:id/like", verifyToken, likePost);

export default router;
