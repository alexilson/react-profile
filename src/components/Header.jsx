import { Link } from 'react-router-dom'; 
import Navigation from './Navigation';

function Header() {
    return (
        <Navigation
            links={[
                <Link key={1} to="/about">
                    About
                </Link>,
                <Link key={2} to="/contact">
                    Contact
                </Link>,
                <Link key={3} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={4} to="/resume">
                    Resume
                </Link>
            ]}
        />
    )
}

export default Header;