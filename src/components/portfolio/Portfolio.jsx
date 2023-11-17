import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {portfolioItems.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export { Portfolio };
