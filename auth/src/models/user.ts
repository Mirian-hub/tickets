import mongoose from "mongoose";
import { Password } from "../services/password";

interface UserAttrs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDocumnet> {
  build(attrs: UserAttrs): UserDocumnet;
}

interface UserDocumnet extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.hash(this.get("password"));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);
const User = mongoose.model<UserDocumnet, UserModel>("user", userSchema);

export { User };
