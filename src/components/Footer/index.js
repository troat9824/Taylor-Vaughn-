import React from 'react';

function Footer() {
    return (
    <footer className="">
        <div className="container text-center footer title-font">
            &copy;{new Date().getFullYear()} by Taylor Renee Vaughn
        </div>
    </footer>
    )
}

export default Footer;