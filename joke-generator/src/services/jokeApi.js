import axios from 'axios';

const JOKE_API_BASE = 'https://jokeapi.dev/joke';

const jokeApi = {
  // Get random joke from any category
  getRandomJoke: async (category = 'Any') => {
    try {
      const response = await axios.get(`${JOKE_API_BASE}/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching joke:', error);
      throw error;
    }
  },

  // Get multiple jokes
  getJokes: async (category = 'Any', amount = 1) => {
    try {
      const response = await axios.get(`${JOKE_API_BASE}/${category}?amount=${amount}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching jokes:', error);
      throw error;
    }
  },

  // Get joke with specific range
  getJokeByIdRange: async (category = 'Any', minId = 0, maxId = 100) => {
    try {
      const response = await axios.get(
        `${JOKE_API_BASE}/${category}?idRange=${minId}-${maxId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching joke:', error);
      throw error;
    }
  },

  // Search joke by text
  searchJoke: async (query) => {
    try {
      const response = await axios.get(`${JOKE_API_BASE}/Any?search=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error searching joke:', error);
      throw error;
    }
  },
};

export default jokeApi;
