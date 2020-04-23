import { RouterContext } from "oak/mod.ts";
import fetchOneBook from "../services/fetchOneBook.service.ts";

export default async ({ params, response }: RouterContext) => {    
    const data = await fetchOneBook(params.id);
    response.body = data;
}