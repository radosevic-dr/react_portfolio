import "./movingHero.scss";
import { motion } from "framer-motion";



const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

function MovingHero() {
    return (
        <div className="heroContainer">
            <div className="heroWrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Full Name</motion.h2>
                    <motion.p variants={textVariants}>UI desinger and</motion.p>
                    <motion.p variants={textVariants}>WEB developer</motion.p>
                    <motion.div className="btns" variants={textVariants}>
                        <motion.button variants={textVariants}>See my works</motion.button><button>Contact me</button>
                    </motion.div>
                    <motion.img src="/icons/scrollD.png" alt="Scroll Icon" variants={textVariants}
                        animate="scrollButton" />
                </motion.div>

                <motion.div className="slidingTxt" variants={sliderVariants} initial="initial"
                    animate="animate">
                    Developer Desinger Creator Writer
                </motion.div>

                <div className="imgContainer">
                    <img src="/profile.png" alt="Profile" />
                </div>
            </div>
        </div>
    );
}

import "./movingHero.scss"; export { MovingHero };
