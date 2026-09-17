import { FaFilm } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-linear-to-r from-purple-300 to-cyan-100 text-primary-content py-8">
                <aside>
                    <FaFilm className="text-5xl mb-2 text-purple-700"/>
                    <p className="font-bold text-3xl bg-linear-to-r from-purple-700 to-cyan-500 bg-clip-text text-transparent">
                        CineScope
                    </p>
                    <p className="text-black font-semibold">Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;