import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../src/components/Header/Header.js';
import CharacterGrid from './components/CharacterGrid/CharacterGrid.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
const URL = "https://www.breakingbadapi.com/api/characters?name=";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL + query)
      setItems(response.data)
      setIsLoading(false)
    };

    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <SearchBar getQuery={(inputValue) => setQuery(inputValue)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
