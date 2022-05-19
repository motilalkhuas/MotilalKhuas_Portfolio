import React, { useState } from "react";
import '../App.css'

const Navbar = () => {
    let Links = [
        { name: "About", link: "/" },
        { name: "Education", link: "/" },
        { name: "Skilla", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Contact", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='md:shadow-none w-full'>
            <div className='md:flex items-center justify-between py-4 px-7 sm:px-14 md:px-20 lg:px-24'>
                <div className='font-julee font-bold text-3xl cursor-pointer flex items-center text-[rgb(47,46,65)]'>
                    {'<MK/>'}
                </div>
                <div onClick={()=>setOpen(!open)} className='text-4xl text-[rgb(47,46,65)]  absolute right-0 top-4 cursor-pointer md:hidden px-7 sm:px-14 md:px-20 lg:px-24 z-20'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center absolute md:static  md:z-auto z-10 left-0 w-full h-screen md:w-auto md:h-auto text-center md:bg-transparent md:bg-none bg-white transition-all duration-500 ease-in ${open ? 'top-[0px] ':'top-[-2000px]'}`}>
                    {   
                        Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-[rgb(47,46,65)] md:my-0 my-20 hover:underline'>
                            <a href={link.link} className='duration-500'>{link.name}</a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
  );
};

export default Navbar;
