import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user: { id: string; username: string }; // 사용자 정보에 맞게 수정
}

function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.header("Authorization"); // 헤더에서 토큰 추출
  if (!token) {
    return res.status(401).json({ message: "인증 실패: 토큰이 없습니다." });
  }

  try {
    const decoded: any = jwt.verify(token, "your-secret-key"); // 토큰 검증
    req.user = decoded.user; // 사용자 정보를 요청 객체에 추가
    next(); // 다음 미들웨어로 이동
  } catch (error) {
    res.status(401).json({ message: "인증 실패: 토큰이 유효하지 않습니다." });
  }
}

export default authMiddleware;
