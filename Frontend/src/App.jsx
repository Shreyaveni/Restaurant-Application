import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import ConfirmationPage from './pages/ConfirmationPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Success from './pages/Success';

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/Success" element = {<Success/>}></Route>
      
      <Route path="/ConfirmationPage" element = {<ConfirmationPage/>}></Route>
      <Route path="/*" element = {<NotFound/>}></Route>
    </Routes>
  </Router>;
};

export default App;