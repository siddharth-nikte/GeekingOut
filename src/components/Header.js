import React from 'react';
import atom from './Images/atom.gif';

export default function Header() {
    function topFun() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {/* Navbar */}
            <div className='flex flex-row fixed bg-slate-900 text-slate-50 p-4'>
                <div className='text-2xl text-center p-2 mx-52'>GeekingOut!</div>
                <nav className='grid grid-cols-3 gap-20 mx-96 text-lg'>
                    <div onClick={topFun} className='hover:cursor-pointer py-2'>Home</div>
                    <div><button className="btn p-2 shadow-red-500 hover:shadow-red-500 text-black bg-white ease-out hover:translate-y-1 hover:translate-x-1 transition-all"><a href='https://github.com/siddharth-nikte/GeekingOut' target='_blank' rel="noopener noreferrer">Code</a></button></div>
                    <div><button className="btn p-2 shadow-red-500 hover:shadow-red-500 text-black bg-white ease-out hover:translate-y-1 hover:translate-x-1 transition-all"><a href='https://in.linkedin.com/in/siddharth-nikte-49541b267' target='_blank' rel="noopener noreferrer">Contact</a></button></div>
                </nav>
            </div>
            {/* About */}
            <div className='text-slate-50 py-20 flex flex-row'>
                <div className='text-lg w-1/2'>
                    <h1 className='font-sans text-gray-50 font-semibold text-5xl mx-8 mb-10 underline decoration-sky-500 hover:decoration-pink-500'>About<br />The Website</h1>
                    <p className='font-serif text-stone-300 text-center indent-8'>
                        Side tracking from the programs that are usually useful or provide a value. This is an attempt on creating this website to show about the creative side of coding or simply "Creative Coding". <br /> <br /> An attempt to expose viewers to the "silly" side of programming.
                        <br /> <br />
                        A compilation of some fascinating and/or humorous aspects of computer science.
                    </p>
                </div>
                <div className='w-1/2 ml-16'><img src={atom} alt="atom" /></div>
            </div>
        </>
    )
}