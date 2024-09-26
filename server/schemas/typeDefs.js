const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    createdAt: String
    image: String
    link: String
    title: String!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    books: [Book]!
    book(bookId: ID!): Book
  }

  type Mutation {
    addUser(userId: ID!, username: String!, email: String!, password: String!, savedBooks: [bookSchema]): User
    addBook(bookId: ID!, authors: String!, description: String!, createdAt: String, image: String, link: String, title: String!): Book
    removeUser(userId: ID!): User
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
