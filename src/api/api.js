import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ghp_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',
    Accept: 'application/vnd.github.v3+json',
  },
});

export const searchRepositories = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/repositories`, {
        params: {
          q: query,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error searching repositories');
    }
};

export const fetchRepositoryDetails = async (repoId) => {
    try {
      const response = await axios.get(`${BASE_URL}/repositories/${repoId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export default api;
