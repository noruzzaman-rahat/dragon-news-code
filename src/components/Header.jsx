import React from 'react';
import headerLogo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           <img className='w-[400px]' src={headerLogo} alt="" />
           <p className='text-accent mt-5'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-accent mt-3'>{format(new Date(), 'EEEE , MMMM dd, yyyy', )}</p>
        </div>
    );
};

export default Header;