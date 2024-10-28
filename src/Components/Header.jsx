import React, { useState } from 'react';
import '../index.css';
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () =>{
        setToggle(true);
    }
    const hideSideMenu = ()=>{
        setToggle(false);
    }
    return (
    <>
        <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} 
            style={{
                opacity: toggle ? 1 : 0,   
                visibility: toggle ? "visible" : "hidden"
            }}>
            <div onClick={
                (e)=>{
                    e.stopPropagation();
                }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{
                left: toggle ? '0%' : '-100%' 
            }}>
            </div>
        </div>
        <header className='p-[10px] shadow-xl'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <div className='w-[45px]'><img src="images/logo.png" className='w-full' alt="" /></div>
                <div className='pl-[40px] text-[#C0C1C7]'>
                    <span className='border-b-[2px] font-bold border-[black] text-[black]'>Old Delhi</span> 6, Old Delhi, Delhi, 110006, India
                    <RiArrowDropDownLine onClick={showSideMenu} fontSize={30} className='inline text-[#F0851D] cursor-pointer'/>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;