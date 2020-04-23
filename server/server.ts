import { Application } from "oak/mod.ts";
import loggingMiddleware from "./middleware/loggingMiddleware.ts";
import { APP_HOST, APP_PORT } from "./config/config.ts";
import router from "./routes/routes.ts";
import notFound from "./controllers/notFound.controller.ts";

const app = new Application();
app.use(loggingMiddleware);
app.use(router.routes());
app.use(router.allowedMethods())
app.use(notFound);

console.log(`DENO SERVER STARTED AT ${APP_HOST}:${APP_PORT}`);
await app.listen(`${APP_HOST}:${APP_PORT}`);
