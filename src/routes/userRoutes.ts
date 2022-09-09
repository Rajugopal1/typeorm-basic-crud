import { Router } from "express";
import UserController from "../controllers/Users";

const router = Router();

router.post("/user", UserController.createUser);
router.get("/user", UserController.getUser);
router.get("/user/:id", UserController.getOneUser);
router.patch("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);
export default router;
