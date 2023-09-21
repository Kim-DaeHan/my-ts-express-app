import mongoose from "mongoose";

class DatabaseConfig {
  private readonly dbUrl: string;

  constructor() {
    // 데이터베이스 연결 URL. 환경 변수 또는 설정 파일에서 가져오세요.
    this.dbUrl = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/Test";
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.dbUrl);
      console.log("MongoDB 연결 성공");
    } catch (error) {
      console.error("MongoDB 연결 실패:", error);
    }
  }
}

const databaseConfig = new DatabaseConfig();
export default databaseConfig;
