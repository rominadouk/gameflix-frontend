'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import profileIcon  from '/public/assets/icons/profile-icon.svg';
import newsIcon  from '/public/assets/icons/message-icon.svg';
import forumIcon  from '/public/assets/icons/people-icon.svg';
import settingsIcon  from '/public/assets/icons/settings-icon.svg';
import helpIcon  from '/public/assets/icons/help-icon.svg';
import hamburgerMenu from '/public/assets/icons/hamburger-menu.svg'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };


  return (
    <div>
        {/* <!-- HAMBURGER MENU --> */}
        <nav className={ isMenuOpen ? "bg-menu-blue shadow-md flex flex-wrap pt-6 lg:hidden" : "bg-menu-blue shadow-md flex flex-wrap  py-6 lg:hidden"}>
            <div className="flex w-full  text-white justify-between mx-8">
              <Link href="/" className="">
                  <h1 className=''>Gameflix</h1>
              </Link>
              <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden" onClick={toggleMenu}>
                <Image src={hamburgerMenu} alt='hamburger menu'/>
              </label>
            </div>
            {/* <input className="hidden" type="checkbox" id='menu-toggle' /> */}
              { isMenuOpen && (
              <div className="w-full bg-lighter-blue text-white mt-7" id="menu">
              <nav className=' bg-lighter-blue'>
                <ul className="text-xl">
                    <li className="py-2 border-b-2">
                        <Link className="flex ml-10 gap-2" href="#" target="_blank">
                          <Image
                            src={profileIcon}
                            alt="profile-icon"
                            className='h-8 w-8'
                          />
                          <p className='place-self-center'>Profile</p>
                        </Link>
                    </li>
                    <li className="py-2 border-b-2">                      
                      <Link className="flex ml-10 gap-2" href="#" target="_blank">
                      <Image
                            src={newsIcon}
                            alt="profile-icon"
                            className='h-8 w-8'
                          />
                        <p className='place-self-center'>News</p>
                      </Link>
                    </li>
                    <li className="py-2 border-b-2">
                      <Link className="flex ml-10 gap-2" href="#" target="_blank">
                      <Image
                            src={forumIcon}
                            alt="profile-icon"
                            className='h-8 w-8'
                          />
                        <p className='place-self-center'>Forum</p>
                      </Link>
                    </li>
                    <li className="py-2 border-b-2">
                      <Link className="flex ml-10 gap-2" href="#" target="_blank">
                      <Image
                            src={settingsIcon}
                            alt="profile-icon"
                            className='h-8 w-8'
                          />
                        <p className='place-self-center'>Settings</p>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link className="flex ml-10 gap-2" href="#" target="_blank">
                      <Image
                            src={helpIcon}
                            alt="profile-icon"
                            className='h-8 w-8'
                          />
                        <p className='place-self-center'>Help</p>
                      </Link>
                    </li>
                </ul>
              </nav>
              </div>
              )}
        </nav>

    </div>
  )
}

export default Navbar