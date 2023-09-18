const { ApolloServer, gql } = require("apollo-server");
const {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
  } = require("apollo-server-core");

const PORT = process.env.PORT || 4000;
const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
  }
`;

const data = {
  greeting: "Hello, this is primary greeting vol. 2!",
  interestingUrls: ["https://www.google.com", "https://www.github.com"],
};
const server = new ApolloServer({
  typeDefs,
  rootValue: data,
  playground: true,
  introspection: true,
  cache: "bounded",
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageLocalDefault({ embed: true, graphRef: "my-graph-id@my-graph-variant" })
      : ApolloServerPluginLandingPageProductionDefault({ embed: false }),
  ],
});

server.listen({ port: PORT }).then((result) => console.log(result.url));
