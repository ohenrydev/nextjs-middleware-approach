import { NextRequest, NextResponse } from "next/server";

export async function withHelloWorld(request: NextRequest, response: NextResponse) {
  const headers = new Headers(request.headers)
  headers.set("Hello", "World")
  response = NextResponse.next({ request: { headers } })
  return response
}