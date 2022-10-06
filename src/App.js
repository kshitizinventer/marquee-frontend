import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Page1 from './pages/page1'
import Page2 from './pages/page2'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Page1/>} />
        <Route exact path='/page2' element={<Page2/>} />
      </Routes>
    </div>
  );
}

export default App;
