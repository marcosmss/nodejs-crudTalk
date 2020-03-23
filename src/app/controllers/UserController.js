import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const data = await User.find();
      return res.json(data);
    } catch {
      return res.status(404).json({ error: 'Users not found.' });
    }
  }

  async getById(req, res) {
    try {
      const data = await User.findById(req.params.id);
      return res.status(200).json(data);
    } catch {
      return res.status(404).json({ error: 'User id not found.' });
    }
  }

  async store(req, res) {
    try {
      const data = await User.create(req.body);
      return res.status(200).json(data);
    } catch {
      return res.status(400).json({ error: 'Creation user failed' });
    }
  }

  async update(req, res) {
    return await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
      (err, result) => {
        if (err) {
          return res.status(404).json(err);
        } else {
          return res.status(200).json(result);
        }
      }
    );
  }

  async delete(req, res) {
    return await User.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json({ message: 'Deleted user!' });
      }
    });
  }
}

export default new UserController();
