import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/profilePage/ProfilePage';
import RepositoryPage from './components/repositoryPage/RepositoryPage';

function App() {
  return (
  <div>
    <Router>
   
      <Routes>
        <Route path="/" element={ <LandingPage/>}/>
        <Route path="/profile/:username" element={<ProfilePage/>}/>
        <Route path="/repository/:username/:repoName" element={<RepositoryPage/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
