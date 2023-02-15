import { ApolloServer, gql } from 'apollo-server'

// GraphQL Schema
const typeDefs = gql`
  type Query {
    greeting: String
  }
`
// Resolver Function
const resolvers = {
  Query: {
    greeting: () => 'Hello World!'
  }
}

// Create Server
const server = new ApolloServer({ typeDefs, resolvers })
const { url } = await server.listen({ port: 9000 })
console.log(`Server running at ${url}`)
