import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes"; // 라우트 파일 임포트

// Express 애플리케이션 생성
const app = express();

// 미들웨어 설정
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// 라우트 설정
app.use("/api/users", userRoutes); // '/api/users' 경로에 대한 라우트 사용

export default app;
