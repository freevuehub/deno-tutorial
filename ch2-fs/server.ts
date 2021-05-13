import { serve } from './deps.ts'

const server = serve({
  hostname: '0.0.0.0',
  port: 8080,
})

console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/ 🦕`);

for await (const request of server) {
  const body = Deno.readFileSync('./index.html')

  request.respond({ status: 200, body })
}
