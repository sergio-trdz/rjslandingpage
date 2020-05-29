import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
       <FooterContainer className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* Colum 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Me</h4>
                        <ul className="list-unstyled">
                            <li>Sergio Trejo Rodríguez</li>
                            <li>sergiotrejordz@gmail.com</li>
                            <li>812-352-9822</li>
                            <li>Monterrey, N.L. 64700</li>
                        </ul>
                    </div>
                        {/* Colum 2 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>lorem impsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">If you would like to contact me, feel free to</a></li>
                            <li><a href="/">If you would like to contact me, feel free to</a></li>
                            <li><a href="/">If you would like to contact me, feel free to</a></li>
                            <li><a href="/">If you would like to contact me, feel free to</a></li>
                        </ul>
                    </div>
                        {/* Colum 3 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>lorem impsum</h4>
                        <ul className="list-unstyled">
                            <li>If you would like to contact me, feel free to</li>
                            <li>If you would like to contact me, feel free to</li>
                            <li>If you would like to contact me, feel free to</li>
                            <li>If you would like to contact me, feel free to</li>
                        </ul>
                    </div>
                        {/* Colum 4 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>lorem impsum</h4>
                        <ul className="list-unstyled">
                            <li>If you would like to contact me, feel free to</li>
                            <li>If you would like to contact me, feel free to</li>
                            <li>If you would like to contact me, feel free to</li>
                            <li>If you would like to contact me, feel free to</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bootom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} My Landing React App - All rights reserved.
                    </p>
                </div>
            </div>
        </div>
       </FooterContainer>
    );
}


export default Footer;  

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li a {
        color: var(--mainGrey);
    }

    ul li a:hover {
        color: var(mainLightGrey);
    }
`;