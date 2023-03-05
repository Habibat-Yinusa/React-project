import React from 'react'
import Button from './Button'
import { picture } from "./../assets/picture.png";
// import { undraw_content_team_re_6rlg } from "./../assets/undraw_content_team_re_6rlg.svg";

function Analytics() {
  return (
    <div className='w-full bg-white p-16'>
        <div className='grid md:grid-cols-2'>
            <div>
              <img src={require('./../assets/picture.png')} className='w-[60%] pl-4' alt="/" />
            </div>
            {/* <img src={undraw_content_team_re_6rlg} alt="/" /> */}
            <div className='mx-auto'>
                <p className='text-[#eb8715] sm:text-[18px] text-xl my-2 font-medium '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='capitalize sm:text-xl text-2xl my-2 md:text-4xl font-bold text-[#010831]'>manage data analytics centrally</h1>
                <p className='text-[#010831]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quasi nemo rerum quaerat voluptates molestias
                    ipsum iure quo cupiditate qui expedita, ab ea! Nostrum 
                    blanditiis ullam dolor est mollitia pariatur?
                </p>
                <div >
                <Button name='Get Started' bgColor= 'bg-[#010831]' textColor='text-white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics