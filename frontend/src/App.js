import logo from './logo.svg';
import './App.css';

import CompShowTasks from './components/CompShowTasks.jsx';
import CompCreateTask from './components/CompCreateTask.jsx';
import CompEditTask from './components/CompEditTask.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowTasks />} />
          <Route path='/create' element={<CompCreateTask />} />
          <Route path='/edit/:id' element={<CompEditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
