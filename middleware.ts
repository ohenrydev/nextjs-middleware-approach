import { NextRequest, NextResponse } from "next/server"
import { withMiddlewares } from "@/middlewares/withMiddlewares"
import { withAuthorization } from "@/middlewares/withAuthorization"
import { withHelloWorld } from "@/middlewares/withHelloWorld"

export const config = { matcher: ["/admin"] }

export const middlewares = [withAuthorization, withHelloWorld]

export default async function middleware(request: NextRequest) {
  let response = NextResponse.next()
  return await withMiddlewares(middlewares, request, response)
}