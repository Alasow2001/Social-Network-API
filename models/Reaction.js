const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = reactionSchema;
