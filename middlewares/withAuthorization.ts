import { NextRequest, NextResponse } from "next/server";

export async function withAuthorization(request: NextRequest, response: NextResponse) {
  const url = new URL(request.url)
  if(url.pathname.startsWith("/api")) {
    const token: string = await nyAuthOrSessionFunctionToRetrieveToken()
    if(token) {
      const headers = new Headers(request.headers)
      headers.set("Authorization", "Bearer ".concat(token))
      response = NextResponse.next({ request: { headers } }) 
    } else {
      response = NextResponse.json({ error: "unauthorized" }, { status: 403 })
    }
  }
  return response
}