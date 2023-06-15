import { Router } from "express";
import {
    userCreat,
    userDelete,
    userIndex,
    userShow,
} from "./userController.js";

export const router = Router();

router.get("/", userIndex);
router.get("/:user_id", userShow);
router.post("/", userCreat);
router.delete("/:user_id", userDelete);
