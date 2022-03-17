import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import ArticlePage from './pages/articlePage/ArticlePage';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Error from './pages/Error/Error';
import './App.css';

function App() {
  return (
   <Router>
     <Navbar />
     <Routes>
       <Route path="/" element={<MainPage/>}/> 
        <Route path="/ArticlePage" element={<ArticlePage/>}/> 
        {/*This needs to be the last route*/ }
        <Route path="*" element={<Error/>} />
       </Routes>
       
      
      

   </Router>
  );
}

export default App;
