import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import ListCharacters from './components/Character/ListCharacters';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider} from 'react-query'
import CharacterDetail from './components/Character/CharacterDetail';
import NoCharacter from './components/Character/NoCharacter';
import SearchBar from './components/Filters/SearchBar';
import Test from './components/Character/Test';

function App() {

  
const queryClient = new QueryClient()


  useEffect(()=>{
      // getAllCharacters().then(result => (setCharacters(result)))
      // console.log(characters)
  },[])

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto align-center content-center justify-center items-center text-center">
      <Router>
          <Routes>
            <Route exact path="/" element={<ListCharacters/>}></Route>
            <Route path="/characters/:id" element={<CharacterDetail/>}></Route>
            {/* <Route path="/characters/:id" element={<Test/>}></Route> */}
            <Route element={<NoCharacter/>}></Route>
          </Routes>
        </Router>
      </main>
      </QueryClientProvider>
  );
}

export default App;
