const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    default: "",
  },
  imageURL: {
    type: String,
    default: "",
  },
  videoURL: {
    type: String,
    default: "",
  },
  seen: {
    type: Boolean,
    default: false,
  },
});

const convoSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    messages: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model("Message", messageSchema);
const ConversationModel = mongoose.model("Conversation", convoSchema);

module.exports = { MessageModel, ConversationModel };
