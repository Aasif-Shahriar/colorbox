import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is designed to deliver measurable ROI",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Stand out with innovative designs that capture attention",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Proven strategies that scale your business online",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description:
        "Specialized in helping restaurants and local businesses thrive",
      gradient: "from-orange-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              About Colorbox
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 max-w-4xl mx-auto">
            We help restaurants and local brands{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              stand out online
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            With creative marketing that delivers real results. Your vision, our
            colors – together, we paint a brighter digital future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient border on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission statement highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl opacity-5" />
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-5xl mb-6">🎨</div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                "At Colorbox, we believe every local business deserves to shine
                online. Our passion is transforming your unique story into{" "}
                <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                  vibrant digital experiences
                </span>{" "}
                that attract customers and drive real growth."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
