import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import "./portfolio.scss";

const portfolioItems = [
    {
        id: 1,
        title: "Lorem Ipsum",
        img: "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149379660.jpg?size=626&ext=jpg&uid=R33011540&ga=GA1.1.1999040410.1700037475&semt=ais",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum esse pariatur voluptatum. Maiores iure quam mollitia ipsum amet iusto veritatis, delectus, soluta laboriosam sunt, animi nesciunt eos sit cum quaerat."
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        img: "https://img.freepik.com/free-vector/app-development-landing-page-template_23-2148677324.jpg?size=626&ext=jpg&uid=R33011540&ga=GA1.1.1999040410.1700037475&semt=ais",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum esse pariatur voluptatum. Maiores iure quam mollitia ipsum amet iusto veritatis, delectus, soluta laboriosam sunt, animi nesciunt eos sit cum quaerat."
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        img: "https://img.freepik.com/free-vector/app-development-landing-page-template_52683-48083.jpg?size=626&ext=jpg&uid=R33011540&ga=GA1.1.1999040410.1700037475&semt=ais",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum esse pariatur voluptatum. Maiores iure quam mollitia ipsum amet iusto veritatis, delectus, soluta laboriosam sunt, animi nesciunt eos sit cum quaerat."
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        img: "https://img.freepik.com/free-vector/colorful-abstract-delusion-landing-page-template_52683-27945.jpg?size=626&ext=jpg&uid=R33011540&ga=GA1.1.1999040410.1700037475&semt=ais",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum esse pariatur voluptatum. Maiores iure quam mollitia ipsum amet iusto veritatis, delectus, soluta laboriosam sunt, animi nesciunt eos sit cum quaerat."
    }
];

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <div ref={ref} className="portfolioContainer">
            <div className="progress">
                <h1>Featured projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            <section>
                {
                    portfolioItems.map(item => {
                        const { id, title, img, desc } = item;
                        return (
                            <div key={id} className="content">
                                <div className="wrapper">
                                    <div className="imgContainer" ref={ref}>
                                        <img src={img} alt={title.toLowerCase()} />
                                    </div>
                                    <motion.div style={{ y }} className="textContent">
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

export { Portfolio };
