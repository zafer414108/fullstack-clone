import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <BrowserRouter>
          <Header/>
          <Routes>

      {/* Route for Main Page */}

      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;