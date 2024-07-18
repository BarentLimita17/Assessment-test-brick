import { useDispatch } from 'react-redux';
import { searchGithub } from '../store/actions';
import { useState } from 'react';

const SearchInput = () => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('users');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchGithub(query, type));
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GitHub..."
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchInput;
