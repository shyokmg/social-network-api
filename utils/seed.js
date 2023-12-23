const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomThoughts,
  getRandomArrItem,
  getRandomUsernames,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  for (let i = 0; i < 10; i++) {
    const username = getRandomUsernames();
    const email = `${username}@email.com`;
    users.push({
      username,
      email,
    });
  }


  // Makes thought array
  const thoughts = getRandomThoughts(10);

// Insert data to database
  const userData = await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log out a pretty table for reactions and thoughts
  console.table(users);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
