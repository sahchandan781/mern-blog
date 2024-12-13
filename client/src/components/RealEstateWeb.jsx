import { Button } from 'flowbite-react'
import React from 'react'

export default function RealEstateWeb() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 
    justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col '>
            <h2 className='text-2xl'>MERN Based property Exchange Network</h2>
            <p className='text-gray-500 my-2'>Check out the new project based on MERN stack</p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://staybnb-estate.onrender.com" target='_blank' rel='noopener noreferrer'>
                Staybnb Estate
                </a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src="https://firebasestorage.googleapis.com/v0/b/mern-estate-cba26.appspot.com/o/1710773701093pexels-frans-van-heerden-1438834.jpg?alt=media&token=fc5df969-8645-4e16-8ec4-2e61d9358157" />
        </div>
    </div>
  )
}
