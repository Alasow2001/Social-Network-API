const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate( {path: 'friends', populate: { path: 'friends' }} )
    .populate( {path: 'thoughts'} )
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res){
    User.findOneAndUpdate(
      {_id: req.params.userId},
      { $set: req.body },
      { runValidators: true, new: true }
      )
    .then((user) => 
      !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then((user) => 
        !user
          ?res
            .status(404).json( {message: 'User created but no user was found with this ID'} )
            : res.json({message: 'This user was deleted'})
      )
      .catch((err) => res.status(500).json(err))
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      { $addToSet: {friends: req.body} },
      { runValidators: true, new: true }
      )

      .then((user) => 
        !user
          ? res.statu(404).json({message: 'No user with that ID'})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err))
  },

  removeFriend(req, res){
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$pull: {friends: req.params.friendId}},
      { runValidators: true, new: true }
    )

    .then((user) => 
    !user
      ? res.statu(404).json({message: 'No user with that ID'})
      : res.json(user)
  )
  .catch((err) => res.status(500).json(err))
  }
};
