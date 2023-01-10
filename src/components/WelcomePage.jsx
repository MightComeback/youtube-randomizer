import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider.js'

const WelcomePage = () => {
  const { isWelcomeOpen, setIsWelcomeOpen } = useStateContext();

  useEffect(() => {
    setTimeout(() => setIsWelcomeOpen(false), 5000);
  }, [])

  return (
    <div className={`bg-black/80 ${isWelcomeOpen ? 'block' : 'hidden'} min-h-screen w-full absolute top-0 left-0 overflow-hidden`}>
      <div className='absolute left-[10%] right-[10%] sm:top-[25%] top-[10%] m-4'>
        <div className='flex flex-col bg-slate-600 p-8 rounded-xl shadow-xl'>
          <div className='flex justify-center align-center mb-8'>
            <p className='text-white font-bold text-lg lg:text-3xl text-center'> This website has nothing in common with Google, Youtube
            or other Google Services. This website is made for fun and
            it does not pursue any profit.
            </p>
          </div>
          <div className='flex justify-center align-center'>
            <button type='button' className='p-3 lg:p-5 text-white cursor-pointer bg-transparent border-2 border-white w-64 text-lg lg:text-2xl rounded-xl'
              onClick={() => setIsWelcomeOpen(false)}>
              I understand.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage