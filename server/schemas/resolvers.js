const { saveBook } = require('../controllers/user-controller');
const { User, Book } = require('../models');
 
const resolvers = {
  Query: {
    users: async () => {
      return User.find().sort({ createdAt: -1 });
    },

    books: async () => {
      return Book.find().sort({ createdAt: -1 });
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    book: async () => (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, savedBooks }) => {
      return User.create({ username, email, password, savedBooks });
    },
    addBook: async (parent, { authors, description, bookId, image, link, title }) => {
      return Book.create({ authors, description, bookId, image, link, title });
    },
    removeUser: async (parent, { userId }) => {
      return Thought.findOneAndDelete({ _id: userId });
    },
    removeBook: async (parent, { bookId }) => {
      return Thought.findOneAndUpdate(
        { _id: bookId },
        { $pull: { savedBooks: { _id: bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
