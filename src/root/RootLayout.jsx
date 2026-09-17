import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const RootLayout = () => {
    return (
        <div className="">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
       
    );
}

export default RootLayout;