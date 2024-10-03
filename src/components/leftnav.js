"use client"
import Image from "next/image"
import { useState } from "react";

export default function LeftNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleMouseEnter = () => {
    setIsExpanded(false);
  }
  const expand = () => {
    setIsExpanded(true);
  };
  const shrink = () => {
    setIsExpanded(false);
  };
  return (
    <nav className = {`fixed top-0 left-0 h-full transition-all duration-300 ${isExpanded ? 'w-32' : 'w-16'} bg-gray-800`}
    onMouseEnter={expand}
    onMouseLeave={shrink}>
      <ul className="flex flex-col items-start p-4 space-y-4">
        <li className="text-white flex items-center">
          <span>[]</span> 
          {isExpanded && <span className = "ml-2">Home</span>}
        </li>
        <li className="text-white flex items-center">
          <span>[]</span> 
          {isExpanded && <span className = "ml-2">About</span>}
        </li>
         <li className="text-white flex items-center">
          <span>[]</span> 
          {isExpanded && <span className = "ml-2">Services</span>}
        </li>       
        <li className="text-white flex items-center">
          <span>[]</span> 
          {isExpanded && <span className = "ml-2">About</span>}
        </li>      
      </ul>
    </nav>
  );
}
