import React from 'react'


const Button = ({name, bgColor, textColor, minWidth}) => {
  return (
    <div >
        <button className={`${bgColor} rounded-md mx-auto ${textColor} p-4 w-[200px] my-6 font-bold ${minWidth}  hover:opacity-80`}>{name}</button>
    </div>
  )
}

export default Button
// bg-[#00df9a]
