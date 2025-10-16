import React from "react";
import Header from "./home-page-sections/Header";
import AboutSection from "./home-page-sections/AboutSection";
import ContactSection from "./home-page-sections/ContactSection";
import Footer from "./home-page-sections/Footer";
import HeroSection from "./home-page-sections/HeroSection";
import PortfolioSection from "./home-page-sections/PortfolioSection";
import PricingSection from "./home-page-sections/PricingSection";
import ServicesSection from "./home-page-sections/ServicesSection";
import TestimonialsSection from "./home-page-sections/TestimonialsSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
