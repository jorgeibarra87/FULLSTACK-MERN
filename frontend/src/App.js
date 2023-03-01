import logo from './logo.svg';
import './App.css';

import CompShowTasks from './components/CompShowTasks.jsx';
import CompCreateTask from './components/CompCreateTask.jsx';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
