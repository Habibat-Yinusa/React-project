import React from 'react'
import Button from './Button'

function Update() {
  return (
    <div className='p-16'>
        <h1 className='text-white text-xl md:text-3xl font-bold text-center'>Want tips & tricks to optimize your flow?</h1>
        <p className='text-gray-500 mt-2 mb-12 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className='md:flex flex-row md:items-center md:justify-center '>
            <input type="email" className='w-full md:w-1/2 min-w-[200px] h-12 mr-10 rounded pl-3 ' placeholder='Enter your email'/>
            <div>
            <Button name='Notify me' bgColor='bg-[#eb8715]' textColor='text-[#010831]'/>
            </div>
        </div>
        

    </div>
  )
}

export default Update