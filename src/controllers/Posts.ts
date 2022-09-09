import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
// import { getRepository } from "typeorm";
import { Post } from "../entity/Post";
class PostController {
  static postPost = async (req: Request, res: Response) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
    };
    const post = AppDataSource.getRepository(Post).create(newPost);
    const result = await AppDataSource.getRepository(Post).save(post);
    return res.json(result);
  };

  static getPost = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(Post).find({
      relations: {
        user: true,
      },
    });
    return res.json(result);
  };

  static getOnePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await AppDataSource.getRepository(Post).findOneBy({ id: id });
    return res.json(post);
  };

  static updatePost = async (req: Request, res: Response) => {
    const post = await AppDataSource.getRepository(Post).findOneBy({
      id: req.params.id,
    });
    console.log(post);
    if (post) {
      AppDataSource.getRepository(Post).merge(post, req.body);
      const result = await AppDataSource.getRepository(Post).save(post);
      return res.json(result);
    }
    return res.json({ msg: "Post Not Found" });
  };

  static deletePost = async (req: Request, res: Response) => {
    const post = await AppDataSource.getRepository(Post).delete(req.params.id);
    return res.json({
      sucess: true,
      message: "deleted sucessfuly",
    });
  };
}

export default PostController;
