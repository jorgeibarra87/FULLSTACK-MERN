import { Task } from "../models/task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id
            }
        })
        if (!task) return res.status(404).json({ message: 'Date does not exist' })
        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createTask = async (req, res) => {
    const { title, content } = req.body
    try {
        const newTask = await Task.create({
            title,
            content
        })
        res.json(newTask)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body

        const task = await Task.findByPk(id)
        task.title = title
        task.content = content
        await task.save()

        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}
