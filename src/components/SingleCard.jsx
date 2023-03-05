import React from 'react'
import Button from './Button'

const SingleCard = ({title, storage, users, transfer, amount}) => {
  return (
    <div className=' rounded-lg w-full text-[#010831] hover:scale-105 shadow-lg md:w-[85%] p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-10 h-10 stroke-[#eb8715]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>

        </div>
        <h1 className='capitalize text-[#010831] text-2xl font-bold my-3'>{title}</h1>
        <h1 className='text-4xl text-[#010831] font-bold my-5'>{amount}</h1>
        <p className='font-medium text-[#010831] my-2'>{storage}</p>
        <p className='font-medium text-[#010831] my-2'>{users}</p>
        <p className='font-medium text-[#010831] my-2'>{transfer}</p>
        <Button name='Start Trial' bgColor='bg-[#eb8715]' textColor='text-[#010831]' minWidth='min-w-min' />
    </div>
  )
}

export default SingleCard




