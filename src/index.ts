import "reflect-metadata";
import { AppDataSource } from "./data-source";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
import * as YAML from "yamljs";
import * as fs from "fs";
import * as swaggerUI from "swagger-ui-express";

// YAML.parse("3.14159");
// 3.14159

// YAML.parse("[ true, false, maybe, null ]\n");
// [ true, false, 'maybe', null ]

// const file = fs.readFileSync("src/api.yaml", "utf8");
const file = YAML.load("src/api3.yaml");

AppDataSource.initialize()
  .then(async (connection) => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) =>
    console.error("Error during Data Source initialization:", error)
  );
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(BodyParser.json());

// Extended: https://swagger.io/specification/#infoObjec
// parse YAML string
console.log(file);

app.use("/v1/api-docs", swaggerUI.serve, swaggerUI.setup(file));

app.use("/test", (req, res) => res.send("server is working"));

app.use("/post", postRoutes);
app.use("/auth", userRoutes);

app.listen(PORT, () => console.log("App is running at port 3000."));
