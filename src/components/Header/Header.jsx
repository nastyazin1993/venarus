import React from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
import lupa from "../../images/lupa.svg";
import mesto from "../../images/mesto.svg";
import menu from "../../images/menu-icon.svg";
import volna from "../../images/volna.svg";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    const [isSidebarShow, setIsSidebarShow] = React.useState(false);
const showMenu = () => {
    setIsSidebarShow((prev) => !prev)}
    return (
        <div className={styles.header}>
            {isSidebarShow ? <>
            <div>
                <div className="logo">
                <img
                    src={logo}
                    width="203px"
                    height="39px"
                    alt="венорус" />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <button className="menu" onClick={showMenu}> 
                            <img
                            src={volna}
                            width="66px"
                            height="40px"
                            alt="menu" /> 
                        </button>
                    </li>
                </ul>
            </div>
            
            </div><Sidebar/>
            </> : <><div>
            <div className="logo">
                <img
                    src={logo}
                    width="203px"
                    height="39px"
                    alt="венорус" />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <button className="lupa"> 
                            <img
                            src={lupa}
                            width="48px"
                            height="47px"
                            alt="lupa" /> 
                        </button>
                    </li>
                    <li>
                        <button className="mesto"> 
                            <img
                            src={mesto}
                            width="41px"
                            height="49px"
                            alt="mesto" /> 
                        </button>
                    </li>
                    <li>
                        <button className="menu" onClick={showMenu}> 
                            <img
                            src={menu}
                            width="66px"
                            height="40px"
                            alt="menu" /> 
                        </button>

                    </li>
                </ul>
            </div></div>
            </>}
            
{/*             
            
            <div className="logo">
                <img
                    src={logo}
                    width="203px"
                    height="39px"
                    alt="венорус" />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <button className="lupa"> 
                            <img
                            src={lupa}
                            width="48px"
                            height="47px"
                            alt="lupa" /> 
                        </button>
                    </li>
                    <li>
                        <button className="mesto"> 
                            <img
                            src={mesto}
                            width="41px"
                            height="49px"
                            alt="mesto" /> 
                        </button>
                    </li>
                    <li>
                        <button className="menu"> 
                            <img
                            src={menu}
                            width="66px"
                            height="40px"
                            alt="menu" /> 
                        </button>

                    </li>
                </ul>
            </div> */}
           
        </div>
    );
};

export default Header;