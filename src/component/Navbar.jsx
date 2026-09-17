import { FaFilm } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">
            <div className="navbar-start">
                <Link to={'/'} className="flex items-center gap-2 hover:opacity-90 transition-opacity text-2xl">
                    <FaFilm className="text-3xl text-purple-700" />
                    <span className="font-bold bg-linear-to-r from-purple-700 to-cyan-500 bg-clip-text text-transparent">CineScope</span>
                </Link>
            </div>

            <div className="navbar-end">
                <Link
                        to={'/movies'}
                        className="btn bg-linear-to-r from-purple-700 to-cyan-500 hover:from-purple-800 hover:to-cyan-700 text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg font-bold px-6"
                    >
                        Movies
                    </Link>
            </div>
             
        </div>
    );
};

export default Navbar;