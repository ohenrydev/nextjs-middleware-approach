# Next.js Middleware Approach

This repository provides a structured approach to implementing multiple middleware functions in a Next.js application.<br/>
By using a dedicated middleware directory and organizing middleware logic, developers can enhance the modularity and maintainability of their Next.js projects.

## withMiddlewares
Initializes the forward property to true.
Iterates over an array of middleware functions, invoking each with the request and response.
If a middleware sets response.forward to false, the loop breaks, stopping further middleware execution.
Returns the final response.

```typescript
// middleware.ts

const middlewares = [withMiddleware1, withMiddleware2]

export default async function middleware(request: NextRequest) {
  let response = NextResponse.next()
  return await withMiddlewares(middlewares, request, response)
}
```

## Middleware
A middleware function alway need to return a response
```typescript
// withHelloWorld.ts
export async function withHelloWorld(request: NextRequest, response: NextResponse) {
  const headers = new Headers(request.headers)
  headers.set("Hello", "World")
  response = NextResponse.next({ request: { headers } })
  return response
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
