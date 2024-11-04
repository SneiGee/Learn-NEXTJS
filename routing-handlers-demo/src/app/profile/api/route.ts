import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    console.log(requestHeaders.get("Authorization"));
    console.log((await headerList).get("Authorization"));

    return new Response("<h1>API profile data</h1>", {
        headers: {
            "content-Type": "text/html"
        },
    });
}