import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:4000/tasks/'

const CompShowTasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        getTasks()
    }, [])


    const getTasks = async () => {
        const res = await axios.get(URI);
        setTasks(res.data);
    }

    const deleteTask = async (id) => {
        await axios.delete(`${URI}${id}`);
        getTasks();
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.title}</td>
                                        <td>{task.content}</td>
                                        <td>
                                            <Link to={`/edit/${task.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={() => deleteTask(task.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CompShowTasks