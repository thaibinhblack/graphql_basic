const { ApolloServer, gql } = require('apollo-server');
const customer = require('./resource/api/apiCustomer')
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Customer {
      UUID_KH: String!,
      TEN_KH: String
  }
  type Query {
    fetchCustomers: [Customer]
  }

`;
 
  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      fetchCustomers(){
        return  customer.fetchCustomers()
      }
    },
  };
const axios = require('./resource/axios')
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: async({req}) => {
    let authToken = null
    try{
      authToken = req.headers.authorization;
      axios.defaults.headers.common['Authorizon'] = authToken
    }
    catch (e) {
      console.warn(`Unable to authenticate using auth token: ${authToken}`);
   }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});