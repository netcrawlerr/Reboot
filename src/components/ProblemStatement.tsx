import {
  X,
  Check,
  PhoneCall,
  Mail,
  MessageSquare,
  Zap,
  Eye,
  Sliders,
} from "lucide-react";
import { motion } from "framer-motion";

const ProblemStatement = () => {
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
    <section className="relative py-16 overflow-hidden bg-white" id="problem">
      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-tag">
            Why Traditional Digital Detox Fails
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            Deleting apps is not <br />
            <span className="text-convrt-purple font-extrabold">
              solving the root problem.
            </span>{" "}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            The days of forced focus and screen guilt are over. Today’s minds
            crave mindful tech — tools that respect attention, not steal it.
            Reboot helps you take back control, one intentional digital moment
            at a time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-[#EA384C]" />
            </div>

            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              The Old Way
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">
                    Willpower-based
                  </p>
                  <p className="text-convrt-dark-blue/70 mt-1">
                    Trying to stay off your phone through sheer self-control
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">
                    Distractions everywhere
                  </p>
                  <p className="text-convrt-dark-blue/70 mt-1">
                    One notification pulls you back into endless scrolling
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">
                    No tracking
                  </p>
                  <p className="text-convrt-dark-blue/70 mt-1">
                    No idea where your time or attention actually goes
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <PhoneCall className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">
                  Calls
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Mail className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">
                  Mass Emails
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <MessageSquare className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">
                  Social Notifications
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#EA384C]"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-convrt-purple/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-convrt-purple" />
            </div>

            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              The Reboot Way
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-convrt-purple/10 text-convrt-purple rounded-full">
                Reboot
              </span>
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">
                    Routines, not rules
                  </p>
                  <p className="text-convrt-dark-blue/70 mt-1">
                    Sustainable, calming habits that fit your lifestyle — not
                    rigid systems
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">
                    Intention over restriction
                  </p>
                  <p className="text-convrt-dark-blue/70 mt-1">
                    Helps you disconnect with purpose, not guilt
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">
                    Human-centered design
                  </p>
                  <p className="text-convrt-dark-blue/70 mt-1">
                    Built to support your mental wellness, not fight your
                    willpower
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-purple/5 rounded-xl p-3">
                <Eye className="w-8 h-8 text-convrt-purple mb-2" />
                <div className="text-sm text-center text-convrt-purple font-medium">
                  Clarity
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-purple/5 rounded-xl p-3">
                <Zap className="w-8 h-8 text-convrt-purple mb-2" />
                <div className="text-sm text-center text-convrt-purple font-medium">
                  Presence
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-purple/5 rounded-xl p-3">
                <Sliders className="w-8 h-8 text-convrt-purple mb-2" />
                <div className="text-sm text-center text-convrt-purple font-medium">
                  Control
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-convrt-purple"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
