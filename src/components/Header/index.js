import React from "react";
import imgUrl from "../../assets/Vector.svg"
import logoUrl from "../../assets/White_logo.svg"
import searchUrl from "../../assets/search.svg"
import Image from "next/image";
const Header = () => {

    return (
        <header className="text-white flex items-center justify-between p-3 px-6">
            <div className="flex items-center">
                <Image src={imgUrl} alt="Vector Icon" width={35} height={35} />
                <Image src={logoUrl} alt="Logo" className="pl-[6px]" height={30} />
                <div className="ml-[57px] mr-8">
                    <Image src={searchUrl} alt="Vector Icon" width={30} height={30} />
                </div>
                <nav className="hidden md:flex gap-6 uppercase text-sm">
                    <a href="#" className="hover:text-gray-300 jost-medium">Home</a>
                    <a href="#" className="hover:text-gray-300">Game</a>
                    <a href="#" className="hover:text-gray-300">Infor</a>
                    <a href="#" className="hover:text-gray-300">News</a>
                    <a href="#" className="hover:text-gray-300">Promotions</a>
                    <a href="#" className="hover:text-gray-300">VIP</a>
                </nav>
            </div>
            <div className="font-jost text-sm flex items-center gap-4 ">
                <button className="font-jost bg-gray-500 px-4 py-1 rounded uppercase">Login</button>
                <button className="font-jost bg-green-500 px-4 py-1 rounded uppercase">Registration</button>
            </div>
        </header>
    );
}
export default Header;