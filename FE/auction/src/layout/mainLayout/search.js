import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Porsche from '../../asset/Porsche.png';
import './search.css'; 

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search for products" 
                    value={searchTerm} 
                    onChange={handleChange} 
                    className="search-input"
                />
            </div>
            <div className="mt-2">
                <div className="">
                    <img src={Porsche} alt="car" className="img-fluid" style={{width:'100%', height:'500px'}}/>
                </div> 
            </div>
        </div>
    );
}

export default Search;
