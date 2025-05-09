import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import HowItWorks from "@/components/HowItWorks";
import { motion } from "framer-motion";
import Pricing from "@/components/Pricing";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      <main className="pt-16">
        <Hero />
        <ProblemStatement />
        <HowItWorks />

        <Pricing />
      </main>

      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-convrt-dark-blue">
                Reboot
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                © {new Date().getFullYear()} Reboot. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              <a
                href="#"
                className="text-gray-600 hover:text-convrt-purple transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-convrt-purple transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-convrt-purple transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
