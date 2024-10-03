"use client"
import Image from "next/image"
import { useState } from "react"

export default function Nav(){

    const [open, setOpen] = useState(false);

    return(
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="/">
              <Image className="w-24 h-24" src={'/corvodoro_logo.png'} alt="logo" width={200} height={200} />
            </a>
            <button className="relative cursor-pointer lg:hidden" onClick={() => setOpen(!open)}>
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${open ? 'translate-x-10' : ''}`}></div>
                    <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${open ? 'translate-x-10' : ''} delay-75`}></div>
                    <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${open ? 'translate-x-10' : ''} delay-150`}></div>

                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${open ? 'translate-x-0 w-12' : ''} flex w-0`}>
                    <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${open ? 'rotate-45' : ''}`}></div>
                    <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${open ? '-rotate-45' : ''}`}></div>
                    </div>
                </div>
                </div>
            </button>
          </div>
          <div className={`lg:flex flex-grow items-center ${open ? "flex" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-slate-50 hover:opacity-75" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-slate-50 hover:opacity-75" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-slate-50 hover:opacity-75" href="#team">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
