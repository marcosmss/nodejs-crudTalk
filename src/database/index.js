import mongoose from 'mongoose';

export default mongoose
  .connect(
    'mongodb+srv://user:1234@cluster0-j5pbr.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn('connected'))
  .catch(err => console.warn('Caught err', err));
