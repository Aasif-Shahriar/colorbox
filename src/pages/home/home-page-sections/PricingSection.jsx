import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for businesses just starting their digital journey",
      features: [
        "Social Media Management (2 platforms)",
        "12 Posts per month",
        "Basic Graphic Design",
        "Monthly Analytics Report",
        "Email Support",
      ],
      gradient: "from-orange-500 to-pink-500",
      popular: false,
    },
    {
      name: "Growth",
      price: "$999",
      period: "/month",
      description:
        "Ideal for businesses ready to scale and dominate their market",
      features: [
        "Social Media Management (4 platforms)",
        "24 Posts per month",
        "Advanced Graphic Design",
        "Targeted Ad Campaigns ($500 ad spend)",
        "Video Editing (4 videos/month)",
        "Weekly Analytics Reports",
        "Priority Support",
      ],
      gradient: "from-pink-500 to-purple-600",
      popular: true,
    },
    {
      name: "Premium",
      price: "$1,999",
      period: "/month",
      description: "Complete digital marketing solution for maximum growth",
      features: [
        "Full Social Media Suite (All platforms)",
        "40 Posts per month",
        "Premium Branding & Design",
        "Advanced Ad Campaigns ($1,500 ad spend)",
        "Video Editing (12 videos/month)",
        "Website Management",
        "Daily Analytics & Optimization",
        "24/7 Dedicated Support",
        "Monthly Strategy Sessions",
      ],
      gradient: "from-blue-500 to-purple-600",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full mb-4">
            <span className="text-sm bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Choose your{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              growth plan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our
            creative expertise and dedicated support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-purple-600 md:scale-105" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span
                    className={`text-5xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-1 px-3 font-semibold rounded-md ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} hover:shadow-xl text-white rounded-md`
                    : "bg-white border-2 border-gray-200 hover:border-purple-600 text-gray-900"
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular ? "Get Started" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl mb-4">
              Need a{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                custom solution?
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. Let's create a tailored package that
              perfectly fits your goals and budget.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="border-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 py-2 px-4 rounded-lg font-semibold"
            >
              Get a Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
