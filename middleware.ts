import { NextResponse, NextMiddleware, MiddlewareConfig } from 'next/server'

const middleware: NextMiddleware = async (request) => {
  const { nextUrl } = request;

  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/notes", nextUrl));
  }

  return NextResponse.next();
}

export default middleware;