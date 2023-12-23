const usernames = [
  "rider",
  "gazer",
  "lights",
  "hiker",
  "wiz",
  "catcher",
  "splash",
  "jumper",
  "rider",
  "master",
  "traveler",
  "walker",
  "arrow",
  "spark",
  "lover",
  "junkie",
  "child",
  "smiles",
  "seeker",
  "marvel"
]

const thoughts = [
  "Life is full of possibilities if you're willing to explore.",
  "A smile can brighten someone's day.",
  "Challenges are opportunities for growth.",
  "Kindness costs nothing but means everything.",
  "Every day is a chance to learn something new.",
  "Take a deep breath and enjoy the present moment.",
  "Believe in yourself, and others will too.",
  "Gratitude turns what we have into enough.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Happiness is found in the simplest of things.",
  "Dream big and work hard to make it a reality.",
  "Mistakes are stepping stones to success.",
  "Embrace change and let go of what no longer serves you.",
  "You are capable of more than you know.",
  "Be the reason someone believes in the goodness of people.",
  "The best way to predict the future is to create it.",
  "Self-care is not selfish; it's necessary.",
  "In every difficulty, there is an opportunity for growth.",
  "The journey is just as important as the destination.",
  "Spread positivity wherever you go."
];

const reactions = [
  'I received a 👍 reaction for my latest project.',
  'The performance was outstanding, and the audience gave a round of 👏.',
  'Seeing her smile always brings 😄 to my face.',
  'We had a great time at the party, everyone was so 😊.',
  'Congratulations on your promotion! 🎉',
  'The new product launch is generating a lot of 🔥.',
  'Your presentation was perfect, a 💯 performance!',
  'We all cheered and raised our hands in 🙌.',
  'The sunset over the ocean was absolutely 😍.',
  'Her singing was truly 🤩.'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsernames = () =>
  `${getRandomArrItem(usernames)}_${getRandomArrItem(usernames)}`;

// Gets a random thought
const getRandomThoughts = () => getRandomArrItem(thoughts);

// Gets a random reaction
const getThoughtReactions = () => getRandomArrItem(reactions);


// Export the functions for use in seed.js
module.exports = { getRandomArrItem, getRandomUsernames, getRandomThoughts, getThoughtReactions };
