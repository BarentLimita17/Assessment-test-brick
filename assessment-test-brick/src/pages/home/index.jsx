import { FaGithub } from 'react-icons/fa';
import SearchInput from '../../components/SearchInput';
import SearchResults from '../../components/SearchResults';
import '../../style/Homepage.css';
import '../../App.css';

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="search-container">
                <FaGithub size={40} />
                <div className="bold-text">Github Searcher</div>
            </div>
            <SearchInput />
            <SearchResults />
        </div>
    );
}
