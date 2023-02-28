import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
const router = Router()

router.get('/tasks', getTasks)
router.post('/task', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)

export default router