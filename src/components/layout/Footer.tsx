import React from "react";
import '../../assets/styles/layout.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className="footer">

          <div className="h-9 bg-red-700"></div>

          <div className="bg-black flex-col tex-center">

            <div className="flex flex-row w-3/5 justify-between text-white mx-auto pb-8 pt-9">
                <div className="">
                    <h3 className="text-2xl pb-3">about us</h3>
                    <ul className="list-none leading-5 text-xs">
                        <li>contact</li>
                        <li>location</li>
                        <li>our company</li>
                        <li>our portfolio</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl pb-3">Why Print here ?</h3>
                    <ul className="list-none leading-5 text-xs">
                        <li>We're Local. We Care.</li>
                        <li>President's Letter</li>
                        <li>The Environment</li>
                        <li>Security & Privacy</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl pb-3">Place an order</h3>
                    <ul className="list-none leading-5 text-xs">
                        <li>get an estimate</li>
                        <li>place an order</li>
                        <li>send a file</li>
                    </ul>
                </div>
                <div className="">
                    <img alt="footer-logo" src={logo} className="w-52 pb-4"/>
                    <ul className="list-none text-xs leading-5">
                        <li>(267)9754744</li>
                        <li>Professional Printing &</li>
                        <li>Designing Services</li>
                    </ul>
                </div>
            </div>
            <div className="bg-red-700 h-1 w-3/5 mx-auto"></div>
            <p className="pt-5 pb-9 text-white text-center text-xs">© Copyright 2022 Axcent Graphics – All rights reserved.</p>
          </div>

        </div>
    )
}

export default Footer;
