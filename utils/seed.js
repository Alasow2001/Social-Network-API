const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userList, thoughtList } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const userData = await User.insertMany(userList);

  const thoughtData = await Thought.insertMany(thoughtList);

  for(var i=0; i<userData.length; i++){
    var userUpdate = await User.findOneAndUpdate(
      {_id: userData[i]._id},
      {$push: {thoughts:thoughtData[i]._id}},
      {runValidators: true, new: true},
    )
    console.log(userUpdate)
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
