import { Context } from "oak/mod.ts";
import fetchAllBooks from "../services/fetchAllBooks.service.ts";

export default async (context: Context) => {
  const data = await fetchAllBooks();
  context.response.body = data;
};
