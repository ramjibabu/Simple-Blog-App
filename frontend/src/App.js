

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { PostPage } from './pages/PostPage';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post/:id' element={<Detail/>}/>
          <Route path='/posts' element={<PostPage/>}/>


        </Routes>
        <Footer/>
      </Router>
     
      
      
    </div>
  );
}

export default App;
