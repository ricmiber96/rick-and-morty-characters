import './App.css';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import ListCharacters from './components/Character/ListCharacters';
import CharacterDetail from './components/Character/CharacterDetail';
import NoCharacter from './components/Character/NoCharacter';

function App() {

  return (
      <main className="container mx-auto align-center content-center justify-center items-center text-center">
      <Router>
          <Routes>
            <Route exact path="/" element={<ListCharacters/>}></Route>
            <Route path="/characters/:id" element={<CharacterDetail/>}></Route>
            <Route element={<NoCharacter/>}></Route>
          </Routes>
        </Router>
      </main>
  );
}

export default App;
