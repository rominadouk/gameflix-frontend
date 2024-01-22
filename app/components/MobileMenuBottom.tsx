import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import homeIcon  from '/public/assets/icons/home-icon.svg';
import listIcon  from '/public/assets/icons/list-icon.svg';
import heartIcon  from '/public/assets/icons/heart-icon.svg';

const MobileMenuBottom = () => {
    // When scrolling the mobile menu button should disappear, if it reaches the bottom of the page it should disappear
  return (
    <div className='flex justify-center gap-20 bottom-0 sticky scroll:hidden border-black bg-menu-blue w-full py-4 mt-3 lg:hidden'>
        <Link href='/'>
            <Image
                src={homeIcon}
                alt="home-icon"
                className='h-9 w-9'
                />
        </Link>
        <Link href='#'>
            <Image
                src={listIcon}
                alt="list-icon"
                className='h-9 w-9'
                />
        </Link>
        <Link href='#'>
            <Image
                src={heartIcon}
                alt="heart-icon"
                className='h-9 w-9'
                />
        </Link>
        
    </div>
  )
}

export default MobileMenuBottom