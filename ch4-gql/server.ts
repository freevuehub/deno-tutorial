import { serve, GraphQLHTTP, makeExecutableSchema } from './deps.ts'
import typeDefs from './type.ts'
import resolvers from './resolver.ts'

const schema = makeExecutableSchema({ resolvers, typeDefs })

const gqlServer = serve({ port: 8080 })

console.log(`HTTP webserver running.  Access it at:  http://localhost:${8080}/ 🦕`);

for await (const request of gqlServer) {
  const gqlHttp = GraphQLHTTP({ schema, graphiql: true })

  request.url.startsWith('/') ? await gqlHttp(request) : request.respond({ status: 404 })
}
