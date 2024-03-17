import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "IMDB Clone",
    img: "/imdb.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "My IMDB clone app offers a sleek and user-friendly interface for exploring popular, latest, and top-rated movies. With a focus on stunning UI design and captivating animations, users can effortlessly discover trending films and stay up-to-date with the latest releases in the world of cinema.",
    demolink: "https://imdb-clone-mocha-five-aditya-yadav.vercel.app/"
  },
  {
    id: 2,
    title: "EyesOptics Ecommerce",
    img: "/eyes_optics.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "My EyesOptics Ecommerce demo web application, developed using the MERN stack, showcases the potential of an online glasses store. With a focus on providing a realistic shopping experience, users can explore a curated selection of glasses and experiment with various features typically found in e-commerce websites.",
    demolink: "https://github.com/Aditya1458/ecommerce_eyes_optics"
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "My Vanilla JS app is a demonstration of the power and versatility of pure JavaScript for building interactive web applications. Without relying on any frameworks or libraries, this app showcases the capabilities of JavaScript in creating dynamic and engaging user experiences.",
    demolink: ""
  },
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
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demolink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
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
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
