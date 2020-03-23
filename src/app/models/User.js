import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    city: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
