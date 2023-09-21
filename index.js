const { ApolloServer, } = require("apollo-server");
const typeDefs = require("./typeDefs");
const rootValue = require("./rootValue");
const PORT = process.env.PORT || 4000;

// const {
//   ApolloServerPluginLandingPageLocalDefault,
//   ApolloServerPluginLandingPageProductionDefault,
// } = require("apollo-server-core");

const server = new ApolloServer({
  typeDefs,
  rootValue,
  playground: true,
  introspection: true,
  cache: "bounded",
  // plugins: [ApolloServerPluginLandingPageLocalDefault()],
  // plugins: [
  //   process.env.NODE_ENV === 'production'
  //     ? ApolloServerPluginLandingPageProductionDefault({ embed: true, graphRef: "my-graph-id@my-graph-variant" })
  //     : ApolloServerPluginLandingPageLocalDefault({ embed: false }),
  // ],
});

server.listen({ port: PORT }).then((result) => console.log(result.url));
