import './css/App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/create-post'> + </Link>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign Up</Link>
    </div>
  );
}

export default Navbar;