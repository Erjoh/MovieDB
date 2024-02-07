import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        navigate(`/search/${search}`)
    }
    return (
        <header>
            <h3>LOGO</h3>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/popular'}>Popular</Link>
                <Link to={'/genres'}>Genres</Link>
                <Link to={'/tvs'}>TV</Link>
            </nav>
            <div>
                <input className={'header-search'} onChange={(e) => setSearch(e.target.value)} type="text"/>
                <button className={'header-btn'} onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;