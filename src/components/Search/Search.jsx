import React from 'react';

import './Search.sass';

const Search = ({ handlerSearch }) => {
    const [search, setSearch] = React.useState('');

    const onSearch = (e) => {
        setSearch(e.target.value);
        handlerSearch(e.target.value);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Поиск"
                className="search__input"
                value={search}
                onChange={onSearch}
            />
        </div>
    );
};

export default Search;
