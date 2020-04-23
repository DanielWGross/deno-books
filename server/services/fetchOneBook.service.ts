import { Book } from '../models/book.ts'
import { DB_PATH } from "../config/config.ts";


export default async(id: string): Promise<Book>  => {
    const data = await Deno.readFile(DB_PATH);
    const decoder = new TextDecoder();
    const decodedData = decoder.decode(data);
    return JSON.parse(decodedData)[id]
}
