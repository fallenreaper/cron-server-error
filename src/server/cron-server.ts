// console.log("What is contents of process", process.env);
// import "../env.js";
import "dotenv/config";
import cron from "node-cron";
import { sampleDataFetch } from "./api/sample";

cron.schedule("*/5 * * * * *", () => {
  console.log("Event Triggered ", Date.now());
  sampleDataFetch();
});
