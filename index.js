const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000
const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
  }
`;

const data = {
  greeting: "Hello, this is primary greeting vol. 2!",
  interestingUrls: ["https://www.google.com"],
};
const server = new ApolloServer({ typeDefs, rootValue: data });
// const server = new ApolloServer({ typeDefs, rootValue: data, persistedQueries: false });
server.listen({ port: PORT }).then((result) => console.log(result.url));
