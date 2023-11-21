import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToggleNavBtn } from './toggleBtn';
import { Links } from "./Links";

import './mainNavigation.scss';

function MainNavigation() {
    const [open, setOpen] = useState(false);

    //
    const variants = {
        open: {
            clipPath: "circle(1300px at 50px 50px)",
            tranistion: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            tranistion: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };
    return (
        <motion.div className="sideLinks" animate={open ? "open" : "closed"}>
            <motion.div className="linksBg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleNavBtn handleToggle={setOpen}></ToggleNavBtn>
        </motion.div>
    );
}

export { MainNavigation };
