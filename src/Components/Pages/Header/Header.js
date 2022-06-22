import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import image from '../../../../src/Images/2.svg';
import image1 from '../../../../src/Images/6.svg';
import image2 from '../../../../src/Images/4.svg';
import image3 from '../../../../src/Images/5.svg';
import image4 from '../../../../src/Images/3.svg';
import image5 from '../../../../src/Images/1.svg';



const Header = () => {
    return (
        <div className='banner py-4'>
            <div className="heading flex justify-around">
                <h1 className="text-white">C0SMOS</h1>
                <div className="header">
                    <nav>
                        <NavLink to="/home">Home</NavLink>

                        <NavLink to="/department">Department</NavLink>
                        <NavLink to="/specialist">Specialist</NavLink>
                        {/* <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip bottom</button>
                            <div id="tooltip-bottom" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Tooltip on bottom
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div> */}
                    </nav>
                </div>
                <h1 className="text-white">GET ATOM</h1>
            </div>



            <div className='pt-12'>
                <h4 className='text-gray-400 text-center'>WELCOME TO COSMOS</h4>
            </div>
            <div className='pt-12'>
                <h4 className='text-gray-100 text-6xl text-center'>The Internet of</h4>
                <h4 className='text-gray-100 text-6xl text-center'>Blockchains.</h4>
            </div>
            <section>
                <div className='flex justify-end p-4'>
                    <img src={image} alt="" />
                </div>
                <div className='flex justify-start p-4'>
                    <img src={image1} alt="" />
                </div>
                <div className='flex justify-around p-4'>
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>

                <div className='flex justify-start p-4'>
                    <img src={image4} alt="" />
                </div>
                <div className='flex justify-end p-4'>
                    <img src={image5} alt="" />
                </div>

            </section>

        </div>
    );
};

export default Header;