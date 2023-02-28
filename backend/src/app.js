import express from "express"
import cors from "cors"
import taskRoutes from './routes/task.routes.js'

const app = express();

//midelwares
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(taskRoutes);

export default app