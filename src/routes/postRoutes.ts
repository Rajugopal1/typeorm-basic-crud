import { Router } from "express";
import PostController from "../controllers/Posts";

const router = Router();

router.post("/post", PostController.postPost);
router.get("/post", PostController.getPost);
router.get("/post/paginate", PostController.pagination);
router.get("/post/:id", PostController.getOnePost);
router.patch("/post/:id", PostController.updatePost);
router.delete("/post/:id", PostController.deletePost);
export default router;
