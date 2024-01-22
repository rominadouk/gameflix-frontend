import React from 'react'
import Image from 'next/image'
import successIcon from '../../public/assets/icons/success-icon.svg'
import { useState } from 'react'

const SuccessModal = () => {
    const [isModalClosed, setIsModalClosed] = useState(false)

    const handleCloseModal = () => {
        setIsModalClosed(true)
    };

  return (
    <div className={isModalClosed ? 'hidden' : 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'} onClick={handleCloseModal}>
      <div className='flex flex-col justify-center bg-cyan-500 w-32 p-4 text-center rounded-lg gap-2'>
          <p className='text-right cursor-pointer' onClick={handleCloseModal}>X</p>
          <Image className='mx-auto' src={successIcon} alt='green-checkmark'/>
          <p>Success!</p>
          <p className='mt-1 text-sm'>Your game has been saved!</p>
      </div>
    </div>
    // <div className='flex flex-col justify-center bg-cyan-500 w-32 p-2 self-center text-center pb-10 rounded-lg gap-2 absolute'>
    //     <p className='text-right'>X</p>
    //     <Image className='self-center' src={successIcon} alt='green-checkmark'/>
    //     <p className=''>Success!</p>
    //     <p className='mt-1 text-sm'>Your game has been saved!</p>
    // </div>
  )
}

export default SuccessModal