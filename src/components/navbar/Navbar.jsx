import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Lama Dev */}
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/aditya-yadav-499259201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/___aditya__yadav___/?igsh=c3dodGluOG0xY2hr">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/share/fRaPXEBg6jQF3yFd/?mibextid=qi2Omg">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
