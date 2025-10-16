import { motion, useInView } from "framer-motion"; // Changed import for framer-motion
import { useRef, useState } from "react";
// import { ImageWithFallback } from './figma/ImageWithFallback'; // Assuming this path, adjust if needed
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      business: "The Daily Grind Café",
      role: "Owner",
      image:
        "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MDUxOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Colorbox transformed our social media presence completely. Within 3 months, we saw a 425% increase in engagement and our café is now fully booked on weekends!",
      rating: 5,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      name: "Michael Chen",
      business: "Verde Kitchen",
      role: "Head Chef & Owner",
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjA1NjM5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "The team's creativity and understanding of the restaurant industry is unmatched. Their TikTok strategy went viral and brought in hundreds of new customers!",
      rating: 5,
      gradient: "from-pink-500 to-purple-600",
    },
    {
      name: "Jessica Williams",
      business: "Bloom Boutique",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MDUxOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Professional, creative, and results-driven. Colorbox helped us rebrand and our sales have more than doubled. Best investment we ever made!",
      rating: 5,
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-purple-50"
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
              Client Love
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            What our clients{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from the businesses we've
            helped grow.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                  display: index === currentIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-current bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                      style={{
                        filter: "drop-shadow(0 0 2px rgba(255, 165, 0, 0.5))",
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.business}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-purple-100 transition-all border p-3"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-purple-100 transition-all border p-3"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-purple-600 w-8"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center"
        >
          {[
            { value: "5.0", label: "Average Rating" },
            { value: "150+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
