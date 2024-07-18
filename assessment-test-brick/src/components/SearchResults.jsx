import { useSelector } from 'react-redux';

const SearchResults = () => {
    const { loading, error, results } = useSelector((state) => state.search);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="results-grid">
            {results.map((result) => (
                <div key={result.id} className="result-item">
                    {result.login ? (
                        <div>
                            <img src={result.avatar_url} alt={result.login} />
                            <div>{result.login}</div>
                            <a href={result.html_url} target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </div>
                    ) : (
                        <div>
                            <div>{result.name}</div>
                            <div>{result.owner.login}</div>
                            <div>{result.stargazers_count} Stars</div>
                            <a href={result.html_url} target="_blank" rel="noopener noreferrer">
                                View Repository
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
