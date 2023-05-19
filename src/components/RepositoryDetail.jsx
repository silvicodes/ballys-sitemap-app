import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRepositoryDetails } from '../api/api';

function RepositoryDetail() {
  const { repoId } = useParams();
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const repositoryDetails = await fetchRepositoryDetails(repoId);
        setRepository(repositoryDetails);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };

    if (repoId) {
      fetchRepository();
    }
  }, [repoId]);

  return (
    <div>
      {repository ? (
        <div>
          <h1>{repository.name}</h1>
          <p>Description: {repository.description}</p>
          <p>Number of Open Issues: {repository.openIssuesCount}</p>
          <p>Number of Forks: {repository.forksCount}</p>
          {/* Display the repository's readme if available */}
          {repository.readme && (
            <div>
              <h2>Readme</h2>
              <pre>{repository.readme}</pre>
            </div>
          )}
          {/* Display additional information about the repository */}
        </div>
      ) : (
        <p>Loading repository details...</p>
      )}
    </div>
  );
}

export default RepositoryDetail;
