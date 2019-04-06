import { MigratorInterface, BrugesMigrator } from "./migration/index";
import express from "express";

export class Bruges {
  constructor(config: BrugesConfig) {
    const app = express();

    app.get("/", (req, res) => {
      res.send("express working");
    });

    app.listen(3000);
  }
}

export interface BrugesConfig {
  migrator: MigratorInterface;
}
//test
export * from "./migration/index";
