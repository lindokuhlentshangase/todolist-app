import express from "express";
import { checkConnection, addTask, updateTask, updateToggleCompletion, deleteTask } from "./controllers.js";

const router = express.Router();

router.get("/check-connection", checkConnection);
router.post("/add-description", addTask);
router.put("/update-description", updateTask);
router.put("/update-completed", updateToggleCompletion)
router.delete("/delete-description/:id", deleteTask);

export default router;
