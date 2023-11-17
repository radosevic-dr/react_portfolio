import { motion } from 'framer-motion';
import "./navbar.scss";
import { MainNavigation } from "./sidebar/MainNavigation";

function NavBar() {
    return (
        <motion.div className="navContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "linear", duration: 2 }}>
            <MainNavigation />
            <div className="linkWrapper">
                <span>Logo</span>
                <div className="socialLinks">
                    <a href="#"><img src="/icons/twitter.png" alt="Network X" /></a>
                    <a href="#"><img src="/icons/github.png" alt="Github" /></a>
                    <a href="#"><img src="/icons/linkedin.png" alt="Linkedin" /></a>
                    <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="/icons/facebook.png" alt="facebook" /></a>
                </div>
            </div>
        </motion.div>
    );
}

export { NavBar };
