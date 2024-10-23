import '../css/App.css';
import { Link } from 'react-router-dom';
import {isAuthenticated, getCurrentUser} from '../utils/userInfo';
import {useEffect, useState} from "react";
import Logout from '../utils/userActions';


function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);

    // let currentUser = getCurrentUser();

    useEffect(() => {
        setLoggedIn(isAuthenticated());
    }, []);

  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        {loggedIn ? (
            <>
                <Link to='/create-post'> + </Link>
                <Link onClick={Logout} to='/'>Log Out</Link>
                {/* <Link to='/'>Logged in as {currentUser}</Link> */}
            </>
        ) : (
            <>
                <Link to='/login'>Log in</Link>
                <Link to='/signup'>Sign Up</Link>
            </>
        )}
    </div>
  );
}

export default Navbar;