import axios from 'axios';

export const searchGithub = (query, type) => async (dispatch) => {
    dispatch({ type: 'SEARCH_REQUEST' });

    try {
        const response = await axios.get(`https://api.github.com/search/${type}`, {
            params: { q: query },
        });
        dispatch({ type: 'SEARCH_SUCCESS', payload: response.data.items });
    } catch (error) {
        dispatch({ type: 'SEARCH_FAILURE', error: error.message });
    }
};
