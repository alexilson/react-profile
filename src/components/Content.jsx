// import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';


export default function Content() {

    // const [currentPage, setCurrentPage] = useState('About');

    // const renderPage = () => {

    //     if (currentPage === 'About') {
    //       return <About />;
    //     }
    //     if (currentPage === 'Contact') {
    //       return <Contact />;
    //     }
    //     if (currentPage === 'Portfolio') {
    //         return <Portfolio />;
    //     }
    //     if (currentPage === 'Resume') {
    //         return <Resume />;
    //     }
    //     return <About />;
    // };

    // const changePage = (page) => setCurrentPage(page);

    return (
        <div>
            {<Header />}
            <p>Hello</p>
            {/* <Header currentPage={currentPage} changePage={changePage} /> */}
            {/* <main>{renderPage()}</main> */}
            <Footer />
        </div>
    );
}