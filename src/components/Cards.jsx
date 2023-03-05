import React from 'react'
import SingleCard from './SingleCard'

function Cards ()  {
  return (
    <div className='grid-cols-1 gap-12 w-full auto-cols-auto grid md:grid-cols-3 bg-white p-16 mx-auto md:auto-rows-auto'>
     <SingleCard title='single user' amount='$149' storage='500 GB Storage' users='1 User Allowed' transfer='Send up to 50 GB'/>
     <SingleCard title='partnership' amount='$199' storage='1 TB Storage' users='3 Users Allowed' transfer='Send up to 100 GB'/>
     <SingleCard title='group account' amount='$299' storage='5 TB Storage' users='10 Users Allowed' transfer='Send up to 500 GB'/>
    </div>
  )
}

export default Cards