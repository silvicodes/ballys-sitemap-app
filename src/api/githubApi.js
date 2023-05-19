import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Bearer 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',
  },
});

export const getUser = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getRepositories = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
