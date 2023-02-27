const userList = [
  {
    username: "leantino",
    email: "leantino@email.com"
  },

  {
    username: "mark79",
    email: "mark123@gmail.com"
  },

  {
    username: "phill#89",
    email: "phill@hotmail.com"
  },

  {
    username: "felix",
    email: "fx42@live.com"
  }
]

const thoughtList = [
  {
    thoughtText: "What's your opinion on AI?",
    username: "mark79",

    reactions: {
      reactionBody: "I would give it 20 years until it becomes the norm",
      username: "leantino"
    }
  },

  {
    thoughtText: "What's your opinion on electric cars?",
    username: "phill#89",

    reaction: {
      reactionBody: "Can't wait to have one!",
      username: "felix"
    }
  }
]

// Export the functions for use in seed.js
module.exports = { userList, thoughtList };
