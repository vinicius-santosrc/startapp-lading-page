import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import NavigationBar from './components/nav/Navbar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
