import React from 'react'

const Modal = () => {
  return (
    <div className='text-black flex justify-center items-center'>
        <div className='bg-grays-300 h-1/2 w-4/5 rounded-2xl flex justify-center items-center py-20 px-5'>
            <div className='flex flex-col gap-5'>
                <div className='font-medium text-4xl md:text-5xl text-white text-center'>Do business with the world</div>
                <div className='flex gap-2 justify-center'>
                    <div>
                        <img src="/assets/apple.svg" alt="apple" />
                    </div>
                    <div>
                        <img src="/assets/google.svg" alt="google" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal