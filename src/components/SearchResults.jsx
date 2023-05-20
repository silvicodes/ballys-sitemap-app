import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchRepositories } from '../api/api';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const results = await searchRepositories(searchQuery);
        setSearchResults(results.items);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h3>
            <Link to={`/repository-detail/silvicodes/ballys-sitemap-app`}>
              {result.name}
            </Link>
          </h3>
          <p>Full Name: {result.full_name}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;