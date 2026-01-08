// export default function ColorPage(){
//     return <div className="max-w-screen text-black flex justify-between pl-10 pr-10 bg-[#c9c6c6]  h-18 items-center">
//     <div className="text-black"><h1>Coding <span className="text-sky-400"> Addict</span></h1></div>
//     <div className="flex gap-2">
//         <ul className="hidden  lg:flex lg:gap-4">
//             <li>Home</li>
//             <li>About</li>
//             <li>Projects</li>
//             <li>Contact</li>
//             <li>Profile</li>
//         </ul>
//     </div>
//     <div>
//     <ul className=" hidden lg:flex   gap-2">
//     <a href="https://www.facebook.com/tenger.erdene.battulga.2025"><img src="/facebook.svg" alt="" className="w-4"/></a>
//     <a href="https://www.instagram.com/skyvibez___/"><img src="/instagram.svg" alt="" className="w-4"/></a>
//     <a href="https://github.com/Tengereeb8"><img src="/github.svg" alt="" className="w-4"/></a>
//     <a href="https://monkeytype.com/"><img src="/behance.svg" alt="" className="w-4" /></a>
//     </ul>
//     <img src="/nav.svg" alt="" className="lg:hidden w-6 h-6 hover:rot"/>
//     </div>
//     </div>
// }
"use client";
import { useState } from "react";

export default function ColorPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-screen text-black flex justify-between px-10 bg-[#c9c6c6] h-18 items-center">
      <div>
        <h1>
          Coding <span className="text-sky-400">Addict</span>
        </h1>
      </div>

      <ul className="hidden lg:flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Profile</li>
      </ul>

      <ul className="hidden lg:flex gap-2">
        <a href="https://www.facebook.com/tenger.erdene.battulga.2025">
          <img src="/facebook.svg" className="w-4" />
        </a>
        <a href="https://www.instagram.com/skyvibez___/">
          <img src="/instagram.svg" className="w-4" />
        </a>
        <a href="https://github.com/Tengereeb8">
          <img src="/github.svg" className="w-4" />
        </a>
        <a href="https://monkeytype.com/">
          <img src="/behance.svg" className="w-4" />
        </a>
      </ul>

      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-6 flex flex-col justify-between lg:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
            open ? "-rotate-90 translate-y-2.5 translate-x-0.5" : ""
          }`}
        />
        <span
          className={`h-1 w-full bg-black rounded transition-opacity duration-300 ${
            open ? "-rotate-90 translate-y-1.5 translate-x-2.5" : ""
          }`}
        />
        <span
          className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
            open ? "-rotate-90 -translate-y-2.5 translate-x-4.5" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-18 left-0 w-full bg-[#c9c6c6] flex flex-col items-center gap-4 py-6 lg:hidden transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Projects</a>
        <a className="cursor-pointer">Contact</a>
        <a className="cursor-pointer">Profile</a>
      </div>
    </div>
  );
}
