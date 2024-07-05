import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src="logo192.png" alt="Logo" />
            </div>
            <div className="header-menu">
                <ul>
                    <li>Home</li>
                    <li>Watchlist</li>
                    <li>Transaction</li>
                    <li>History</li>
                </ul>
            </div>
            <div className="header-profile">
                <img src="" alt="Profile" />
            </div>
        </div>
    );
}

export default Header;
