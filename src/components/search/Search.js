import React from 'react';
import css from './search.css';

const SearchBar = ({handleChange, userName}) => {
  return <input type="text" onChange={handleChange} value={userName} placeholder="Search User"/>
}

export default SearchBar;

