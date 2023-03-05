import React from 'react';
import Typed from 'react-typed';
import Button from './Button';

function Main() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
            <p className='uppercase text-[#eb8715] text-2xl font-bold p-2'>grow your business with us</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold sm:py-5 md:py-5 '>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='text-lg sm:text-3xl md:text-3xl font-bold py-3'>Fast flexible financing for </p>
                <Typed className='text-2xl sm:text-4xl md:text-3xl font-bold md:pl-4 pl-2' strings={[ 'HTML', 'CSS', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='pt-2 md:text-xl text-xl text-gray-500'>Monitor your data analytics to increase revenue for HTML, CSS $ SASS platforms</p>
            {/* <button className='bg-[#eb8715] rounded-md mx-auto text-[#010831] p-4 w-[200px] my-6 font-bold hover:opacity-80'>Get Started</button> */}
          <Button name='Get Started' bgColor='bg-[#eb8715]' textColor='text-[#010831]'/>
        </div>
    </div>
  )
}

export default Main