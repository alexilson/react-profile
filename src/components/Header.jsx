function Header({ currentPage, pageChange }) {
    return (
        <ul>
            <li>
                <a href="#about"
                onClick={() => pageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li>
                <a href="#contact"
                onClick={() => pageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li>
                <a href="#portfolio"
                onClick={() => pageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#resume"
                onClick={() => pageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Header;