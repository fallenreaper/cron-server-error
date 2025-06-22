import { db } from "../db";

export const sampleDataFetch = async () => {
  console.log("Fetched");

  const posts = await db.query.posts.findMany();
  console.log("Number of Posts", posts.length);
};
