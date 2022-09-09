import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
// import { getRepository } from "typeorm";
import { User } from "../entity/Users";
class UserController {
  static createUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    const user = AppDataSource.getRepository(User).create(newUser);
    const result = await AppDataSource.getRepository(User).save(user);
    return res.json(result);
  };

  static getUser = async (req: Request, res: Response) => {
    // const result = await AppDataSource.getRepository(User).find();
    const result = await AppDataSource.getRepository(User).find({
      relations: {
        posts: true,
      },
    });
    return res.json(result);
  };

  static getOneUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await AppDataSource.getRepository(User).findOne({
      where: [{ id: id }],
    });
    return res.json(user);
  };

  static updateUser = async (req: Request, res: Response) => {
    const user = await AppDataSource.getRepository(User).findOneBy({
      id: req.params.id,
    });
    if (user) {
      AppDataSource.getRepository(User).merge(user, req.body);
      const result = await AppDataSource.getRepository(User).save(user);
      return res.json(user);
    }
    return res.json({ msg: "User Not Found" });
  };

  static deleteUser = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(User).delete(
      req.params.id
    );
    return res.json({
      sucess: true,
      message: "deleted sucessfuly",
      result: result,
    });
  };
}

export default UserController;
