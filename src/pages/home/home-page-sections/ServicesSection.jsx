import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Share2,
  Target,
  Palette,
  Globe,
  Video,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Engaging content creation, strategic scheduling, and active community management to build your online presence.",
      features: [
        "Content Creation",
        "Daily Posting",
        "Engagement Management",
        "Analytics & Reporting",
      ],
      gradient: "from-orange-500 to-pink-500",
      iconBg: "from-orange-100 to-pink-100",
    },
    {
      icon: Target,
      title: "Targeted Ad Campaigns",
      description:
        "Data-driven advertising across Facebook, Instagram, Google, and TikTok designed to maximize your ROI.",
      features: [
        "Platform Management",
        "A/B Testing",
        "Audience Targeting",
        "ROI Optimization",
      ],
      gradient: "from-pink-500 to-purple-600",
      iconBg: "from-pink-100 to-purple-100",
    },
    {
      icon: Palette,
      title: "Branding & Graphic Design",
      description:
        "Stunning visual identities that capture your brand essence and make you stand out from competitors.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Marketing Collateral",
        "Print & Digital Assets",
      ],
      gradient: "from-blue-500 to-purple-600",
      iconBg: "from-blue-100 to-purple-100",
    },
    {
      icon: Globe,
      title: "Website Design & Management",
      description:
        "Beautiful, responsive websites optimized for conversions and search engine visibility.",
      features: [
        "Custom Design",
        "Mobile Responsive",
        "SEO Optimization",
        "Ongoing Maintenance",
      ],
      gradient: "from-purple-600 to-pink-500",
      iconBg: "from-purple-100 to-pink-100",
    },
    {
      icon: Video,
      title: "Video Editing & Short-Form Content",
      description:
        "Trend-relevant Reels, TikToks, and YouTube Shorts that capture attention and drive engagement.",
      features: [
        "Reels & TikToks",
        "YouTube Shorts",
        "Trend Analysis",
        "Caption & Hashtags",
      ],
      gradient: "from-orange-500 to-blue-500",
      iconBg: "from-orange-100 to-blue-100",
    },
  ];

  return (
    <section
      id="services"
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
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              dominate online
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive digital
            marketing solutions tailored for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0 } }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6`}
                >
                  <service.icon
                    className={`w-7 h-7 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                    style={{
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  />
                  {/* The following div with maskImage is problematic for direct React JSX without a custom component or SVG manipulation.
                      I'm commenting it out as it might cause issues or require a more complex setup to render correctly.
                      The Lucide icon itself will render, but the masked gradient effect might be lost.
                      If this exact masking effect is critical, you'd need to convert the Lucide icon to an SVG,
                      inline it, and apply SVG filters/masks directly.
                  */}
                  {/*
                  <div className={`w-7 h-7 absolute bg-gradient-to-br ${service.gradient}`} style={{ WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3C/svg%3E")', maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3C/svg%3E")' }}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  */}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <button className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                  <span
                    className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    Learn more
                  </span>
                  {/* Similar to the icon masking, applying gradient to stroke of an SVG in this way
                      might not render directly as expected without custom SVG handling or a dedicated component.
                      I'm adjusting to simply render the icon with text-transparent and clip-text for gradient fill.
                  */}
                  <ArrowRight
                    className={`w-4 h-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    style={{
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 py-3 px-6 rounded-lg text-white font-medium"
          >
            Get a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
