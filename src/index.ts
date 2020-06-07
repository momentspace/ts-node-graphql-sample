import { GraphQLServer } from 'graphql-yoga';

// GraphQL SDLに沿ってschemaを定義
const typeDefs = `
  type Query {
    description: String
    test: Test
  },
  type Test {
    name: String
  }
`;

// GraphQL APIのリクエストに応えるための実装
const resolvers = {
  Query: {
    test: {
      name: () => `test`,
    },
    description: () => `This is the API for a simple blogging application`,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`),
);
