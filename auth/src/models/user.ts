import mongoose from "mongoose";

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
userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);
const User = mongoose.model<UserDocumnet, UserModel>("user", userSchema);


export { User };
