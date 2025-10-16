import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = ["About", "Services", "Portfolio", "Pricing", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Colorbox
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                {item}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="py-2 px-6 text-white text-sm font-medium rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Get Started
              </button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40 top-16"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed left-4 right-4 top-24 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 md:hidden z-50 overflow-hidden"
              >
                <div className="flex flex-col p-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-left px-6 py-4 text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 active:bg-gray-50 rounded-xl"
                    >
                      {item}
                    </motion.button>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: menuItems.length * 0.1 + 0.1 }}
                    className="p-3 mt-2"
                  >
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full py-4 text-white text-base font-semibold rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:shadow-lg active:scale-95 transition-all duration-300 shadow-md"
                    >
                      Get Started
                    </button>
                  </motion.div>
                </div>

                {/* Close hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-6 py-3 border-t border-gray-100 text-center"
                >
                  <span className="text-xs text-gray-500">
                    Tap anywhere outside to close
                  </span>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
