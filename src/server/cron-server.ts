// import "~/env";
import dotenv from "dotenv";
dotenv.config();
import cron from "node-cron";
import { sampleDataFetch } from "./api/sample";

cron.schedule("*/5 * * * * *", () => {
  console.log("Event Triggered ", Date.now());
  sampleDataFetch();
});
