import { geolocation } from "@vercel/edge";

const BLOCKED_COUNTRY = "US";

export const config = {
  // Only run the middleware on the home route
  matcher: "/testmiddleware",
};

export default function middleware(request: any) {
  const url = new URL(request.url);

  const { country } = geolocation(request);

  console.log(`Visitor from ${country}`);
  // console.log(country);
  // You can also get the country using dot notation on the function
  // const country = geolocation(request).country;

  if (country === BLOCKED_COUNTRY) {
    url.pathname = "/blcoked";
  } else {
    url.pathname = "/nonblocked";
  }

  // Return a new redirect response
  return Response.redirect(url);
}
