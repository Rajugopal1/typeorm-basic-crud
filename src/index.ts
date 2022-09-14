import "reflect-metadata";
import { AppDataSource } from "./data-source";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";

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

app.use("/", (req, res) => res.send("server is working"));

app.use("/post", postRoutes);
app.use("/auth", userRoutes);

app.listen(PORT, () => console.log("App is running at port 8080."));
