import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const data = await User.find();
      return res.status(200).json(data);
    } catch {
      return res.status(404).json({ error: 'Users not found.' });
    }
  }

  async getById(req, res) {
    try {
      const data = await User.findById(req.params.id);
      return res.status(200).json(data);
    } catch {
      return res.status(404).json({ err: 'User id not found!' });
    }
  }

  async store(req, res) {
    try {
      const data = await User.create(req.body);
      return res.status(201).json(data);
    } catch {
      return res.status(400).json({ error: 'User creation failed.' });
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
        if (!err) {
          return res.status(200).json(result);
        } else {
          return res.status(404).json(err);
        }
      }
    );
  }

  async delete(req, res) {
    return await User.findByIdAndDelete(req.params.id, (err, result) => {
      if (!err) {
        return res.status(200).json({ message: 'Deleted user!' });
      } else {
        return res.status(404).json(err);
      }
    });
  }
}

export default new UserController();
