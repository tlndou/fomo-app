import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/stylesheet.scss';
import NewPost from './pages/NewPost';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
