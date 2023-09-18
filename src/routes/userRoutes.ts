import express from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

// 사용자 정보 가져오기 (인증 필요)
// router.get("/profile", authMiddleware, UserController.getProfile);

router.get("/profile", UserController.getProfile);

export default router;
