import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Passionate about blending frontend and backend technologies 
          <br /> to create dynamic applications
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Engineering</motion.b> Arsenal
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Innovating </motion.b> Forward.
          </h1>
          <button>WHAT I KNOW?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack & DevOps</h2>
          <p>
          Proficient in Django, React,
          Angular, Node.js, CI/CD pipelines, 
          and infrastructure automation for seamless 
          full-stack development and DevOps practices
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cloud & Containers</h2>
          <p>
          Skilled in cloud technologies, 
          Kubernetes orchestration, Docker containerization, 
          ensuring scalable and resilient deployments across 
          diverse environments.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MERN Stack </h2>
          <p>
          Experienced in MongoDB, Express.js, React, 
          and Node.js (MERN stack) for building dynamic 
          and interactive web applications.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database & Security</h2>
          <p>
          Expertise in SQL and NoSQL databases, 
          including MongoDB and Milvus, focusing on 
          designing, managing, and optimizing data storage 
          for performance and scalability. Skilled in 
          implementing security measures to ensure robust 
          and secure applications.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
