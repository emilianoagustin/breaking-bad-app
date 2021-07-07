import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../src/components/Header/Header.js';
import './App.css';
const URL = "https://www.breakingbadapi.com/api/";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL + "characters")
      setItem(response.data)
      setIsLoading(false)
    }

    fetchData()
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
