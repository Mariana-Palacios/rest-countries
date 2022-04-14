import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = () =>{
    return(
        <nav>
            <h1>Where in the world?</h1>
            <p><FontAwesomeIcon icon={faMoon}/> Dark Mode</p>
        </nav>
    )
}

export default Header;