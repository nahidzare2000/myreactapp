import React from "react";
import { Link } from "react-router-dom";
// styles
import '../../assets/styles/layout.css';

// images
import logo from '../../assets/images/logo.png';
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Header = () => {

    return (
        <div className="main-header">

           {/* nav */}
           <div className="flex flex-col md:flex-row items-center justify-between container w-8/12 mx-auto mt-9">
                <img alt="logo" src={logo} className="w-full sm:w-4/12" />
                <p className="font-bold">
                     Call us today! (264)975-4744
                </p>
           </div>

           {/* header */}
           <div className="menu-section w-3/4 mx-auto bg-black text-white mt-6 p-3 rounded-3xl ">

            {/* navbar */}
            <Navbar
                fluid={true}
                rounded={true}
                className="bg-black"
                >
                 <div className="flex md:order-2 w-full flex justify-center">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>

                    {/* home page */}
                    <Navbar.Link
                    href="/"
                    active={true}
                    >
                    Home
                    </Navbar.Link>

                    {/* printing servise */}
                    <Navbar.Link href="/printing-servise">
                        <Dropdown
                            label="Printing Services"
                            inline={true}>
                                <Dropdown.Item>
                                    Services
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Call Reguest
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Gallery
                                </Dropdown.Item>
                        </Dropdown>
                    </Navbar.Link>

                    {/* designing-servise */}
                    <Navbar.Link href="/designing-servise">
                        <Dropdown
                            label="Designing Services"
                            inline={true}>
                                <Dropdown.Item>
                                    Top notch Desighing
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Call Reguest
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Gallery
                                </Dropdown.Item>
                        </Dropdown>
                    </Navbar.Link>

                    {/* mailing-servise */}
                    <Navbar.Link href="/mailing-servise">
                        <Dropdown
                            label="Mailing Services"
                            inline={true}>
                                <Dropdown.Item>
                                    Mailing Lists
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    EDDM
                                </Dropdown.Item>
                        </Dropdown>
                    </Navbar.Link>

                    {/* contact us */}
                    <Navbar.Link href="/contact-us">
                        contact-us
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>

            </div>

        </div>
    )
}

export default Header;


