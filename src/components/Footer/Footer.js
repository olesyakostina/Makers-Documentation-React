import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo-net">
                <ul className="social">
                    <li className="social__item ">
                        <a
                            className="aName instagram"
                            target="blank"
                            href="https://www.instagram.com/makerskg/"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="aName whatsapp" target="blank" href="#">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="aName vk" target="blank" href="#">
                            <i className="fab fa-vk"></i>
                        </a>
                    </li>
                    <li className="social__item">
                        <a
                            className="aName telegram"
                            target="blank"
                            href="https://t.me/makerskg"
                        >
                            <i className="fab fa-telegram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
