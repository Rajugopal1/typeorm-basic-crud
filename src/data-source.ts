import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Post],
  migrations: [],
  subscribers: [],
});
