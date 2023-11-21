import { motion } from 'framer-motion';

function Links() {
    const links = ["home", "services", "portfolio", "contact", "about"];

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const linkVariants = {
        open: {
            y: 0,
            opacity: 1,

        },
        closed: {
            y: 50,
            opacity: 0
        }
    };
    return (
        <motion.nav className="links" variants={variants}>
            {
                links.map((link, index) => <motion.a key={index} href={`#${link}`} variants={linkVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    {`${link[0].toUpperCase()}${link.slice(1)}`}
                </motion.a>)
            }
        </motion.nav>
    );
}

export { Links };
