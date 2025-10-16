import { motion, useInView } from "framer-motion"; // Changed import for framer-motion
import { useRef, useState } from "react";
// import { ImageWithFallback } from './figma/ImageWithFallback'; // Assuming this path, adjust if needed
import { ArrowUpRight, Instagram, TrendingUp } from "lucide-react";

// Placeholder for ImageWithFallback if you don't have it yet.
// In a real project, you'd create ImageWithFallback.jsx:
// const ImageWithFallback = ({ src, alt, className }) => {
//   const [imgSrc, setImgSrc] = useState(src);
//   const handleError = () => setImgSrc('/path/to/placeholder-image.jpg'); // Provide a placeholder image path
//   return <img src={imgSrc} alt={alt} onError={handleError} className={className} />;
// };

// For demonstration, directly using img tag. Ensure ImageWithFallback is correctly implemented in your project.
const ImageWithFallback = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null); // Removed : number | null type annotation

  const projects = [
    {
      name: "The Daily Grind Café",
      type: "Restaurant",
      description: "Complete social media overhaul and targeted ad campaigns",
      results: {
        engagement: "+425%",
        followers: "+2.8K",
        sales: "+180%",
      },
      image:
        "https://images.unsplash.com/photo-1685957199051-fa65a527b5e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjA2MTgxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      name: "Bloom Boutique",
      type: "Retail Shop",
      description:
        "Brand redesign, website development, and Instagram strategy",
      results: {
        engagement: "+315%",
        followers: "+1.9K",
        sales: "+220%",
      },
      image:
        "https://images.unsplash.com/photo-1725075436099-9942d133f305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHJldGFpbCUyMHNob3B8ZW58MXx8fHwxNzYwNjE4MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      name: "Verde Kitchen",
      type: "Restaurant",
      description: "TikTok content creation and viral marketing campaign",
      results: {
        engagement: "+580%",
        followers: "+5.2K",
        sales: "+195%",
      },
      image:
        "https://images.unsplash.com/photo-1531058240690-006c446962d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzYwNTg0ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Real results for{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              real businesses
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped local businesses transform their online
            presence and achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2 flex items-center gap-2">
                  {project.name}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div
                      className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.results.engagement}
                    </div>
                    <div className="text-xs text-gray-500">Engagement</div>
                  </div>
                  <div>
                    <div
                      className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.results.followers}
                    </div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                  <div>
                    <div
                      className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.results.sales}
                    </div>
                    <div className="text-xs text-gray-500">Sales</div>
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Instagram, label: "Social Campaigns", value: "500+" },
            { icon: TrendingUp, label: "Avg. Growth Rate", value: "340%" },
            { icon: ArrowUpRight, label: "Client Retention", value: "95%" },
            { icon: Instagram, label: "Content Created", value: "10K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
