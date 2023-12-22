const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomThoughts,
  getRandomReactions,
  getRandomArrItem,
  getRandomUsernames,
  getRandomFriends,
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

  // Empty arrays for randomly generated thoughts and reactions
  const reactions = [...getRandomReactions(10)];
  const thoughts = [];

  // Makes thought array
  const makeThought = (text) => {
    thoughts.push({
      thoughtText: getRandomThoughts(),
      username: getRandomUsernames(),
      reactions: [reactions[getRandomArrItem(reactions)]._id],
    });
  };

  const users = [];
  for (let i = 0; i < 19; i++) {
    const username = getRandomUsernames();
    const email = `${username}@email.com`
    const friends = [...getRandomFriends(Math.floor(Math.random() * 19))]
    users.push({
      username,
      email,
      friends: [friends]
    });
  }



  // Wait for the reactions to be inserted into the database
  await Thought.collection.insertMany(reactions);

  // For each of the reactions that exist, make a random thought of 10 words
  reactions.forEach(() => makePost(getRandomPost(10)));

  // Wait for the thoughts array to be inserted into the database
  await Post.collection.insertMany(thoughts);

  // Log out a pretty table for reactions and thoughts
  console.table(reactions);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
