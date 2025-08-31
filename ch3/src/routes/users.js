import User from '../db/models/user.js'

export function usersRoutes(app) {
  app.post('/api/v1/users', async (req, res) => {
    const { name, email } = req.body;
    try {
      const user = new User({ name, email });
      await user.save();
      res.status(201).json({ message: 'User added!', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}
