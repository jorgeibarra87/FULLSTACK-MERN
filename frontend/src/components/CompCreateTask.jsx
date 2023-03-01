import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:4000/tasks/'

const CompCreateTask = () => {
    const [title, setTitle] = useState(' ')
    const [content, setContent] = useState(' ')
    const navigate = useNavigate()

    const createTask = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }

    return (
        <div>
            <h3>Create Task</h3>
            <form onSubmit={createTask}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="textarea"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CompCreateTask