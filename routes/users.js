import express from "express";
const router = express.Router();
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// Get all users
router.get("/", getUsers);

// Get user by param (id)
router.get("/:id", getUser);

// Create user
router.post("/", createUser);

// Delete user by ID
router.delete("/:id", deleteUser);

// Update user by ID
router.patch("/:id", updateUser);

export default router;
