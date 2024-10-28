import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
function Header() {
  return (
    <>
        <header className='p-[10px] shadow-xl'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <div className='w-[45px]'><img src="images/logo.png" className='w-full' alt="" /></div>
                <div className='pl-[40px] text-[#C0C1C7]'>
                    <span className='border-b-[2px] font-bold border-[black] text-[black]'>Old Delhi</span> 6, Old Delhi, Delhi, 110006, India
                    <RiArrowDropDownLine fontSize={30} className='inline text-[#F0851D] cursor-pointer'/>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header