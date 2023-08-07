import React from 'react';
import cGif from '../components/Images/cGif.gif';
import d1Gif from './Images/D1.jpg';
import d2Gif from './Images/D2.jpg';
import d3Gif from './Images/D3.jpg';

export default function Main() {
  function handleOneClick() {
    document.getElementById('image').src = d1Gif;
  }
  function handleTwoClick() {
    document.getElementById('image').src = d2Gif;
  }
  function handleThreeClick() {
    document.getElementById('image').src = d3Gif;
  }
  const OrangeDot = () => <div className='inline-block bg-orange-600 rounded-full w-3 h-3 my-2 mx-1'></div>;
  const GreenDot = () => <div className='inline-block bg-green-600 rounded-full w-3 h-3 my-2 mx-1'></div>;
  const SkyDot = () => <div className='inline-block bg-sky-600 rounded-full w-3 h-3 my-2 mx-1'></div>;
  return (
    <>
      {/* Transition Image */}
      <a href='https://en.wikipedia.org/wiki/Mandelbrot_set' target='_blank' rel="noopener noreferrer">
        <div className='bg-cover bg-fixed bg-center h-screen w-full' id='m'></div></a>
      {/* Info Blocks */}
      <div className='bg-slate-50 py-6'>
        <div className='bg-black mx-10 py-4 text-slate-50 rounded-md shadow-lg shadow-slate-950'>
          <div className='flex flex-row'>
            <div className='mx-4 py-16 text-sm text-slate-400 italic'>TURING COMPLETENESS</div>
            <div className='font-serif px-4 text-3xl hover:italic'>Turing Complete refers to a machine that, given enough time and memory along with the necessary instructions, can solve any computational problem, no matter how complex. The term is normally used to describe modern programming languages as most of them are Turing Complete, such as C++, Python, JavaScript....</div>
            <div className='mx-4 py-16 text-sm text-slate-400 italic'><a href='https://en.wikipedia.org/wiki/Turing_completeness' target='_blank' rel="noopener noreferrer">Read More</a></div>
          </div>
          <hr className="h-px mx-4 mt-8 bg-gray-700 border-0 rounded" />
          <img src={cGif} alt="cgif" className='p-2 mx-auto' />
          <hr className="h-px mx-4 my-2 bg-gray-700 border-0 rounded" />
          <div className='flex flex-row my-4'>
            <div className='mx-4 py-16 text-sm text-slate-400 italic'>CONWAY'S GAME of LIFE</div>
            <div className='font-serif px-4 text-3xl hover:italic'>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</div>
            <div className='mx-4 py-16 text-sm text-slate-400 italic'><a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' target='_blank' rel="noopener noreferrer">Read More</a></div>
          </div>
        </div>
      </div>
      {/* Deep Dream */}
      <div className='flex flex-col text-center text-slate-50 pb-8'>
        <a href='https://en.wikipedia.org/wiki/DeepDream' target='_blank' rel="noopener noreferrer" className='italic text-4xl py-4 hover:text-blue-400'>--Maxmimum Dog Amplification--</a>
        <img src={d1Gif} alt="dgif" id="image" className='mx-auto my-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
        <div className="flex justify-center items-center my-2">
          <button className="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full border-2 border-white bg-red-500" onClick={handleOneClick}>01</button>
          <button className="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full border-2 border-white bg-red-500" onClick={handleTwoClick}>02</button>
          <button className="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full border-2 border-white bg-red-500" onClick={handleThreeClick}>03</button>
        </div>
      </div>
      {/* Languages */}
      <div className='bg-white py-2'>
        <div className='text-4xl text-center py-6 px-24 uppercase text-bold text-red-600'>Esoteric Languages</div>
        <div className='flex flex-row text-2xl text-[#815854] py-8 px-24 italic'>
          <div className='w-2 bg-sky-600 h-40 mx-6'></div>
          <div>“Any application that can be written in JavaScript, will eventually be written in JavaScript.” <br /><br /> <p className='text-2xl'>-Jeff Atwood</p> </div>
        </div>
        <div className='grid grid-cols-2 text-slate-50 py-4 px-10'>
          <div className='m-4 bg-slate-600 shadow-lg shadow-slate-950 text-lg'><div className='bg-black text-lg'><OrangeDot /><GreenDot /><SkyDot /><p className='inline-block px-36 text-xl'>Brainf*ck</p></div><p className='m-4'>{'++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'}</p></div>
          <div className='m-4 bg-slate-600 shadow-lg shadow-slate-950 text-lg'><div className='bg-black text-lg'><OrangeDot /><GreenDot /><SkyDot /><p className='inline-block px-36 text-xl'>Rockstar</p></div><p className='m-4'>Rockstar is a dynamically typed Turing-complete programming language designed for creating computer programs that are also song lyrics. Rockstar is heavily influenced by the lyrical conventions of 1980s hard rock and power ballads.</p></div>
          <div className='m-4 bg-slate-600 shadow-lg shadow-slate-950 text-lg'><div className='bg-black text-lg'><OrangeDot /><GreenDot /><SkyDot /><p className='inline-block px-36 text-xl'>Chef</p></div><p className='m-4'>Chef is a stack-based language where programs look like cooking recipes.</p></div>
          <div className='m-4 bg-slate-600 shadow-lg shadow-slate-950 text-lg'><div className='bg-black text-lg'><OrangeDot /><GreenDot /><SkyDot /><p className='inline-block px-20 text-xl'>Shakespeare Programming Language</p></div><p className='m-4'>A programming language like the Chef programming language, it is designed to make programs appear to be something other than programs — in this case, Shakespearean plays.</p></div>
          <div className='m-4 bg-slate-600 shadow-lg shadow-slate-950 text-lg'><div className='bg-black text-lg'><OrangeDot /><GreenDot /><SkyDot /><p className='inline-block px-36 text-xl'>Piet</p></div><p className='m-4'>Piet is a stack-based esoteric programming language in which programs look like abstract paintings. It uses 20 colors, of which 18 are related cyclically through a lightness cycle and a hue cycle. A single stack is used for data storage, together with some unusual operations.</p></div>
          <div className='m-4 bg-slate-600 shadow-lg shadow-slate-950 text-lg'><div className='bg-black text-lg'><OrangeDot /><GreenDot /><SkyDot /><p className='inline-block px-36 text-xl'>Whitespace</p></div><p className='m-4'>Its name is a reference to whitespace characters. Unlike most programming languages, which ignore or assign little meaning to most whitespace characters, the Whitespace interpreter ignores any non-whitespace characters. Only spaces, tabs and linefeeds have meaning</p></div>
        </div>
        <center className='my-4'>
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded border border-solid border-sky-500 hover:bg-white group mx-6">
          <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <a href='https://esolangs.org/wiki/Main_Page' target='_blank' rel="noopener noreferrer" className="w-full text-sky-600 text-xl transition-colors duration-300 ease-in-out group-hover:text-black z-10 p-2">LEARN MORE</a>
        </button>
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded border border-solid border-sky-500 hover:bg-white group">
          <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 right-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <a href='https://www.youtube.com/watch?v=6avJHaC3C2U' target='_blank' rel="noopener noreferrer" className="w-full text-sky-600 text-xl transition-colors duration-300 ease-in-out group-hover:text-black z-10 p-2">LEARN MORE</a>
        </button>
        </center>     
      </div>
    </>
  )
}
