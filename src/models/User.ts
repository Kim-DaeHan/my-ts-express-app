import { Schema, model, Document } from "mongoose";

interface UserDocument extends Document {
  name: string;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
});

// 1. 모델이름, 스키마, 컬렉션 이름(옵션)
const User = model<UserDocument>("User", userSchema, "user");

export default User;
