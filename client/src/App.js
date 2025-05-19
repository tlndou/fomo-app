import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/stylesheet.scss';
import NewPost from './pages/NewPost';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-post' element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
