import { join, toFileUrl } from "https://deno.land/std@0.132.0/path/mod.ts"

const rootDir = Deno.realPathSync('./todomvc')

// Start listening on port 8080 of localhost.
const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

// Connections to the server will be yielded up as an async iterable.
for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  // This "upgrades" a network connection into an HTTP connection.
  const httpConn = Deno.serveHttp(conn);
  // Each request sent over the HTTP connection will be yielded as an async
  // iterator from the HTTP connection.
  for await (const requestEvent of httpConn) {
    // Read the request URL to get the requested path; use index.html as a default canonical root.
    const url = new URL(requestEvent.request.url)
    if (url.pathname.endsWith('/')) url.pathname = url.pathname + 'index.html'

    // Convert to a file url for fetch API.
    const fileUrl = toFileUrl(join(rootDir, url.pathname))

    // The requestEvent's `.respondWith()` method is how we send the response
    // back to the client.
    requestEvent.respondWith(fetch(fileUrl.toString()).catch(() => {
      return new Response('', { status: 200 })
    }));
  }
}
