import React, { useEffect, useState } from 'react';
import { getUser, getRepositories } from './githubApi';

const UserProfile = ({ username }) => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser(username);
        setUser(userData);

        const repoData = await getRepositories(username);
        setRepositories(repoData);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>

      <h3>Repositories</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
