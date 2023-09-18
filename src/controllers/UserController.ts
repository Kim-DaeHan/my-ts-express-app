import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  static async getProfile(req: Request, res: Response) {
    // 사용자 프로필 정보를 가져오는 로직을 구현합니다.
    // 이 라우트는 인증된 사용자만 접근 가능합니다.
  }
}

export default UserController;
