import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import HeroImg from "../../assets/HeroImg.jpg";
import { FaLinkedinIn, FaDribbble, FaInstagram, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  // Track asset load completion
  const [imageLoaded, setImageLoaded] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900">

      {/* Loading indicator overlay - disappears when image completes */}
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 text-white text-xl font-medium tracking-widest backdrop-blur-sm"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image with blur effect transition */}
      <img
        src={HeroImg}
        alt="Hero Backdrop"
        onLoad={() => setImageLoaded(true)}
        className={`grayscale absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
          imageLoaded ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
      />

      {/* Navbar */}
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Hero Content - Animations evaluate once the asset triggers complete */}
      <div className="relative z-10 flex flex-col w-full h-full gap-40">

        {/* Animated Big Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-center mt-25 text-9xl font-extrabold tracking-widest text-black
               [text-shadow:0_6px_20px_rgba(0,0,0,0.6)]">
            <span className="text-white">MOIN</span> CHHIPA
          </h1>
        </motion.div>

        <div className="relative z-10 w-full flex justify-between items-center text-xl px-30">

          {/* Left Area (Text Content) */}
          <motion.div
            className="flex flex-col gap-6 h-50 w-120"
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl font-semibold">FullStack Developer</h3>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-gray-700">
              <p className="pb-1">Bridging the Gap Between Intuitive User Interfaces and Robust Server-Side Architecture.</p>
              <p>Skills : JavaScript, React, Node.js, Express.js, MongoDB, PostgreSQL.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div>
                <button className="group flex items-center justify-center gap-2 bg-black text-gray-200 text-xl w-50 h-11 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                  <span>Let's Collaborate</span>
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Area (Social Links Stack) */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* LINKEDIN LINK (Animated Icon) */}
            <motion.div variants={fadeInUp}>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="group flex items-center pl-8 gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.30)] bg-white/10 backdrop-blur-sm hover:bg-white/20 text-black border border-gray-500 py-2 px-4 rounded-3xl w-46 transition-all" >
                <FaLinkedinIn className="text-xl transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700" />
                <span className="hover:text-blue-700">LinkedIn</span>
              </a>
            </motion.div>

            {/* DRIBBBLE LINK (Animated Icon) */}
            <motion.div variants={fadeInUp}>
              <a href="https://dribbble.com/your-username" target="_blank" rel="noreferrer" className="group flex items-center pl-8 gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.30)] bg-white/10 backdrop-blur-sm hover:bg-white/20 text-black border border-gray-500 py-2 px-4 rounded-3xl w-46 transition-all">
                <FaDribbble className="text-xl transition-all duration-300 group-hover:scale-110 group-hover:text-green-500" />
                <span className="hover:text-green-500">Dribbble</span>
              </a>
            </motion.div>

            {/* INSTAGRAM LINK (Animated Icon) */}
            <motion.div variants={fadeInUp}>
              <a href="https://instagram.com/your-username" target="_blank" rel="noreferrer" className="group flex items-center pl-8 gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.30)] bg-white/10 backdrop-blur-sm hover:bg-white/20 text-black border border-gray-500 py-2 px-4 rounded-3xl w-46 transition-all" >
                <FaInstagram className="text-xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-pink-600" />
                <span className="hover:text-pink-600">Instagram</span>
              </a>
            </motion.div>

            {/* GITHUB LINK (Animated Icon) */}
            <motion.div variants={fadeInUp}>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="group flex items-center pl-8 gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.30)] bg-white/10 backdrop-blur-sm hover:bg-white/20 text-black border border-gray-500 py-2 px-4 rounded-3xl w-46 transition-all" >
                <FaGithub className="text-xl transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:text-neutral-700" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;