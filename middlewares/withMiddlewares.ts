import { NextRequest, NextResponse } from "next/server"

type Promissible<T> = T | Promise<T>

interface MiddlewareResponse extends NextResponse {
  forward?: boolean
}

export type Middleware = (request: NextRequest, response: MiddlewareResponse) => Promissible<MiddlewareResponse>

export async function withMiddlewares(middlewares: Middleware[], request: NextRequest, response: MiddlewareResponse) {
  response.forward = true
  for (const middleware of middlewares) {
    response = await middleware(request, response)
    if(!response.forward) break
  }
  return response
}