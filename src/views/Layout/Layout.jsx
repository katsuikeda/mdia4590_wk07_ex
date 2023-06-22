// this component will layout the standard page with the header, footer and outlet for current route
import { Outlet } from "react-router-dom";

import './Layout.css';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

export default function Layout() {

    // <> </> is a shorthand for a React.Fragment 
    // it basically acts as the root node without needing a wrapper like a div
    return (
        <>
            <Header />

            <div className="content-container">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}