import { db } from "../db";

export const sampleDataFetch = async () => {
  console.log("Fetched");

  const posts = await db.query.posts.findFirst();
};
