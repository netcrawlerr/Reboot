import { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { ArrowRight, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import StatsSection from "./hero/StatsSection";
import ProductShowcase from "./ProductShowcase";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-[#F9F6F3]">
      <AnimatedBackground />

      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter tracking-wide">
              The Best Digital Detox App for Your Life
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-inter font-bold text-4xl md:text-5xl lg:text-5xl tracking-tight max-w-4xl mx-auto mb-6 text-convrt-dark-blue leading-[1.1]"
          >
            From{" "}
            <span className="text-[#ef9133] font-extrabold">Burned out</span> to{" "}
            <span className="text-[#2563EB] font-extrabold">Balance</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-inter text-xl text-convrt-dark-blue/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            A mindful app that helps you disconnect with purpose — and reclaim
            your time, clarity, and focus.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          >
            <a
              href="#"
              className="button-primary flex items-center group font-inter font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline font-inter">
              See How It Works
            </a>
          </motion.div>

          <motion.div ref={demoRef} variants={itemVariants}>
            <ProductShowcase />
          </motion.div>

          <StatsSection statsRef={statsRef} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
