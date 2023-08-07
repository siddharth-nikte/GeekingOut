import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='text-slate-50 text-4xl italic p-4 my-4 mx-36'>GeekingOut!</div>
            <hr className="h-px mx-4 bg-gray-700 border-0 rounded" />
            <div className='grid grid-cols-2 gap-5 text-zinc-500 p-4'>
                <div className='text-xl italic my-2 mx-36'>Front-End Website Showcase</div>
                <nav className='flex flex-row gap-3 my-2 text-xl'>
                    <a href='https://in.linkedin.com/in/siddharth-nikte-49541b267' target='_blank' rel="noopener noreferrer" className='underline pl-64'>LinkedIn</a>
                    <a href='https://github.com/siddharth-nikte' target='_blank' rel="noopener noreferrer" className='underline pl-8'>Github</a>
                </nav>
            </div>
        </>
    )
}
