import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              color your brand?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Let's start a conversation about your business goals and how we can
            help you achieve them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block mb-2 text-sm">
                  Service of Interest
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="ads">Targeted Ad Campaigns</option>
                  <option value="branding">Branding & Design</option>
                  <option value="website">Website Design</option>
                  <option value="video">Video Editing</option>
                  <option value="all">Complete Package</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  placeholder="Share your vision, goals, and any specific requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-pink-500 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 h-12"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl mb-6">Get in touch directly</h3>

              <a
                href="mailto:hello@colorbox.agency"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email us at</div>
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    hello@colorbox.agency
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">WhatsApp</div>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    +1 (234) 567-890
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl mb-6">Why work with us?</h3>
              <ul className="space-y-4">
                {[
                  "Free initial consultation & strategy session",
                  "Dedicated account manager for your business",
                  "Transparent reporting & regular updates",
                  "No long-term contracts required",
                  "Results-driven approach with proven ROI",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {"< 24 hours"}
              </div>
              <div className="text-gray-600">Average response time</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
