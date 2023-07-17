import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center text-2xl p-4 w-full">
            <a
                href=""
                className="transition bg-amber-500 hover:bg-amber-200 text-zinc-50 hover:text-black py-1 px-1 md:py-2 lg:px-2 rounded-full outline-none"
            >
                <FaLinkedinIn />
            </a>

            <div className="text-center mt-8">
                <div className="text-xl lg:text-2xl text-slate-500">
                    Made by{" "}
                    <a
                        href="https://www.linkedin.com/in/tusharupadhya/"
                        className="no-underline font-bold hover:text-slate-700"
                    >
                        Tushar Upadhyay
                    </a>
                </div>
            </div>

            <a
                href=""
                className="transition bg-amber-500 hover:bg-amber-200 text-zinc-50 hover:text-black py-1 px-1 md:py-2 lg:px-2 rounded-full outline-none"
            >
                <PiGithubLogoFill />
            </a>
        </nav>
    );
};

export default Navbar;
