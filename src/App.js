import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/review' element={<Review></Review>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/blog' element={<Blog></Blog>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
