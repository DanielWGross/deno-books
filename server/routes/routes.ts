import { Router } from "oak/mod.ts";
import getAllBooks from "../controllers/getAllBooks.controller.ts";
import getOneBook from "../controllers/getOneBook.controller.ts";

const router = new Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getOneBook)

export default router;

