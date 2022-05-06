import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return (
            <nav className=' navbar header'>
                <div className='brand'>
                    xpresschop
               </div>
                <ul className="nav-links navbar-nav ">
                    <div className='menu'>


              <li className="nav-item">
                <Link to="/" className='ink'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className='ink'>About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className='ink'>Menu</Link>
                    </li>
                     <li className="nav-item">
                <Link to="/user" className='ink'>Contact us</Link>
                        </li>
                        </div>
                </ul>
                <div className='order'>
                    ORDER NOW
                </div>
            </nav>
        )
    }
}
export default Navbar;