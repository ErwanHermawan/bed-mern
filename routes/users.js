import express from "express";
import {
	getUser,
	getUserFriends,
	addRemoveFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ USER DATA */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE USER DATA */
router.patch("/:id/:friendid", verifyToken, addRemoveFriends);

export default router;
