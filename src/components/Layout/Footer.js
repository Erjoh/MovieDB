import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            display: "flex" ,
            flexDirection: "column" ,
            background: "#b0b07d",
            padding: '30px',
        }}>
            <span style={{
                background: "#b0b07d"
            }}>© 2023 MovieDBbyErzhan:localhost:3000.</span>
            <span style={{
                background: "#b0b07d"
            }}>Proudly built in the KG🇰🇬</span>
        </footer>
    );
};

export default Footer;