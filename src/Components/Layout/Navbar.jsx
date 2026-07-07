import React from 'react';
// 1. Import motion from framer-motion
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  // 2. Define variants for the staggered link animations
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays the next link by 0.1s
        delayChildren: 0.3,   // Waits for the header to start dropping down first
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // 3. Line variants for the underline growth animation
  const lineVariants = {
    initial: { scaleX: 0 },
    hover: { 
      scaleX: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <>
      {/* Convert header into motion.header and add slide-down configurations */}
      <motion.header
        className='flex justify-between px-10 py-6 items-center'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Logo & Name (Availability Badge) */}
        <div>
          <ul className="text-xl border border-gray-400 px-3 py-2 rounded-3xl shadow-lg bg-white/10 backdrop-blur-sm">
            <li className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-600"></span>
              </span>
              Available for New Projects
            </li>
          </ul>
        </div>

        {/* Navigation Links (Animated with Stagger & Underline) */}
        <div>
          <motion.ul 
            className='flex gap-30 text-[18px] font-semibold text-black'
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* HOME */}
            <motion.li 
              variants={navItemVariants} 
              whileHover="hover"
              initial="initial"
              className="relative pb-1 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <span>Home</span>
              <motion.span 
                variants={lineVariants}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-center"
              />
            </motion.li>

            {/* WORK */}
            <motion.li 
              variants={navItemVariants} 
              whileHover="hover"
              initial="initial"
              className="relative pb-1 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <span>Work <span className='text-gray-500'>[20+]</span></span>
              <motion.span 
                variants={lineVariants}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-center"
              />
            </motion.li>

            {/* EXPERIENCE */}
            <motion.li 
              variants={navItemVariants} 
              whileHover="hover"
              initial="initial"
              className="relative pb-1 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <span>Experience <span className='text-gray-500'>[10+]</span></span>
              <motion.span 
                variants={lineVariants}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-center"
              />
            </motion.li>

            {/* CONTACT */}
            <motion.li 
              variants={navItemVariants} 
              whileHover="hover"
              initial="initial"
              className="relative pb-1 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <span>Contact</span>
              <motion.span 
                variants={lineVariants}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-center"
              />
            </motion.li>
          </motion.ul>
        </div>

        {/* Lets Talk Button */}
        <div>
          <button className="group flex items-center justify-center gap-2 bg-black text-gray-200 text-xl w-36 h-11 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <span>Let's Talk</span>
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </motion.header>
    </>
  );
};

export default Navbar;