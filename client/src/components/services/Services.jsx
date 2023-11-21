import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import "./services.scss";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

function Services() {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div className="services"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="serviceIntro" variants={variants}>
                <p>Lorem ipsum dolor sit amet consectetur <br /> manu isak doramen </p>
                <hr />
            </motion.div>

            <motion.div className="serviceTitle">

                <motion.div className="title" variants={variants}>
                    <img src="/people.jpg" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Lorem</motion.b> Ipsum</h1>
                </motion.div>

                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Lorem</h1>
                </div>
            </motion.div>

            <motion.div className="serviceList" variants={variants}>
                <motion.div className="box"
                    whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Lorem Ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"
                    whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Lorem Ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"
                    whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Lorem Ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"
                    whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Lorem Ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export { Services };
