## What is a Cloudflare Worker?
A Cloudflare Worker is a serverless function that runs at Cloudflare’s edge network, allowing developers to execute lightweight code close to the user's location without managing servers.

## How does a Worker handle HTTP requests and return responses?
A Worker listens for `fetch` events and handles them by using JavaScript's `Request` and `Response` APIs to inspect, modify, or return HTTP requests/responses at the edge.

## What is Cloudflare D1? What are some pros and cons of using it?
Cloudflare D1 is a serverless, SQLite-based edge database that integrates with Workers for lightweight persistence.  
**Pros**: Simple SQL syntax, low latency, edge-based storage.  
**Cons**: Not suitable for large-scale relational operations or complex queries.

## How does client-side JavaScript call an external API?
Client-side JavaScript uses the `fetch()` method to make asynchronous HTTP requests to an API endpoint, then processes the response using `.then()` or `async/await`.

## What is the benefit of deploying APIs to the edge instead of traditional servers?
Deploying APIs to the edge reduces latency, improves response time, and scales globally without dedicated infrastructure, providing a faster and more reliable experience for users worldwide.