const Navbar = () => {
    return(
        <nav className="fixed left-0 h-screen flex items-center overflow-hidden">
            <ul className="group flex flex-col gap-3 p-5 pl-10 rounded-e-xl text-3xl bg-slate-800 bg-opacity-20 backdrop-blur-lg list-disc w-5 hover:w-max">
                <li><div className="-translate-x-60 group-hover:translate-x-0 transition-all duration-300 w-max cursor-pointer">ABOUT US</div></li>
                <li><div className="-translate-x-60 group-hover:translate-x-0 transition-all duration-300 w-max cursor-pointer">OUR GOALS</div></li>
                <li><div className="-translate-x-60 group-hover:translate-x-0 transition-all duration-300 w-max cursor-pointer">PROJECTS</div></li>
            </ul>
        </nav>
    )
}

export default Navbar;