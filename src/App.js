
import './App.css';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Home from './Component/Hero/Home';
import AboutUs from './Component/AboutUs';

function App() {
  return (
   
      <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={AboutUs} />

        
      </Routes>
   
  );
}

export default App;
