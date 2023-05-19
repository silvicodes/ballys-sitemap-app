import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { searchRepositories } from '../api/api';

const SearchHome = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // initialize useNavigate
  
    const handleSearch = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
        await searchRepositories(searchQuery);
        navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);  // navigate to the search results page with query as URL parameter
      } catch (error) {
        console.error('Error searching repositories:', error);
        setError('Error searching repositories');
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" value={searchQuery} onChange={handleChange} placeholder="Enter repository name" />
          <button type="submit">Search</button>
        </form>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    );
  };
  

export default SearchHome;

