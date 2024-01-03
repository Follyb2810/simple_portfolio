import React, { useState } from 'react';
import { NavBarItem } from '../../constant';


const Navbar = () => {
    const [active, setactive] = useState(0);
    const changeActive = (index:number)=>{
        setactive(index)
    }
  return (
    <nav className='mt-10 w-full'>
      <ol role='menu' className='list-none'>
        {NavBarItem.map((data, index) => (
          <li role='none' key={index} className='mb-4 group' onClick={() => changeActive(index)}>
            <a href={data.path} role='menuitem' aria-label={data.name} className={`no-underline p-2 ${active === index ?'text-blue-600' :'text-black'}  flex items-center text-start group-hover:text-white group-hover:bg-slate-400 transition-all duration-200`}>
              <span className='mr-3'>{data.icon}</span>
              <h3 className='m-0'>{data.name}</h3>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;