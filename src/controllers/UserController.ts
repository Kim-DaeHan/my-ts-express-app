import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  static async getProfile(req: Request, res: Response) {
    try {
      // User 모델을 사용하여 모든 사용자를 조회합니다.
      const users = await User.find({});

      // 조회 결과를 JSON 응답으로 클라이언트에게 보냅니다.
      res.status(200).json(users);
    } catch (error) {
      console.error("사용자 조회 실패:", error);
      res.status(500).json({ message: "서버 오류" });
    }
  }
}

export default UserController;
