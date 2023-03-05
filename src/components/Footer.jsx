import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
  return (
    <div className='text-gray-300 mx-auto py-16 px-4 text-center'>
        <div className=' gap-8  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#eb8715] my-4' >REACT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                <div className='md:flex w-3/4 justify-between my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className='my-4 py-4 flex justify-between'>
                <div>
                    <h5 className='font-medium'>Solutions</h5>
                    <ul>
                        <li  className='py-2'>Analytics</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Commerce</li>
                        <li className='py-2'>Insights</li>
                    </ul>
                </div>
            </div>
            <div className='my-4 py-4 flex justify-between'>
                <div>
                    <h5 className='font-medium'>Partnership</h5>
                    <ul>
                        <li  className='py-2'>Websites</li>
                        <li className='py-2'>Social Media</li>
                        <li className='py-2'>Branding</li>
                    </ul>
                </div>
            </div>
            <div className='my-4 py-4 flex justify-between'>
                <div>
                    <h5 className='font-medium'>About</h5>
                    <ul>
                        <li  className='py-2'>Our Projects</li>
                        <li className='py-2'>Careers</li>
                        <li className='py-2'>Branding</li>
                    </ul>   
                </div>
            </div>
            
        </div>
        <p className=' border-t-2 border-gray-600 py-4'>ALL RIGHTS RESERVED - 2023</p>
    </div>
  )
}

export default Footer