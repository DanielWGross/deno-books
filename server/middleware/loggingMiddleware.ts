import { bgBlue, red, bold } from "https://deno.land/std/fmt/colors.ts";

export default async ({ request }: any, next: () => void) => {
  await next();
  console.log(bgBlue(red(bold(`${request.method} ${request.url}`))));
};
