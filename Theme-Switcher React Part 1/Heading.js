import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./themes/switcher.scss";


function Heading() {

    const [colorTheme,setColorTheme] = useState('switch-1');

    useEffect(()=>{ 
        const currentThemeColor = localStorage.getItem('theme-color');
        if(currentThemeColor ){
            setColorTheme(currentThemeColor)
        }
    },[]);

    const handleClick = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme-color',theme)
    }

    return (
        <div className={`main  ${colorTheme}`}>
              

            <header>

           
                <nav>
                    <div class="left-nav">
                        <h1>StudyHome</h1>
                    </div>
                    <div class="theme-switches">
                        <div data-theme="light" class="switch" id="switch-1"
                        onClick={()=> handleClick("switch-1")} 
                        ></div>

                        <div data-theme="sky" class="switch" id="switch-2"
                        onClick={()=> handleClick("switch-2")}
                        ></div>

                        <div data-theme="purple" class="switch" id="switch-3"
                        onClick={()=> handleClick("switch-3")}
                        ></div>

                        <div data-theme="dark" class="switch" id="switch-4"
                        onClick={()=> handleClick("switch-4")}
                        ></div>

                    </div>


                    <div class="right-nav" id='menu'>
                        <ul>
                            <li><a><Link Link to="/">Home</Link></a></li>
                            <li><a class='dropdown-arrow'>Sign In</a>
                                <ul class='sub-menus'>
                                    <li><a><Link to="/signstu">Students</Link></a></li>
                                    <li><a><Link to="/signtea">Teachers</Link></a></li>
                                </ul>

                            </li>
                            <li><a><Link Link to="/about">About</Link></a></li>
                            <li><a><Link Link to="/contact">Contact</Link></a></li>
                            <li><a><Link Link to="/StuDashboard">Student Dashboard</Link></a></li>
                            <li><a><Link Link to="/TeaDashboard">Teacher Dashboard</Link></a></li>



                        </ul>
                    </div>

                </nav>

            </header>

        </div>
    )

}

export default Heading;