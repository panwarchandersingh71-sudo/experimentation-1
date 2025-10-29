"use client";
import MyNav from "@/components/MyNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState, useEffect } from "react";

export default function Home() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-heritage-cream">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sandalwood origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <MyNav />
      
      {/* Hero Section - Heritage Design */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-ivory">
        {/* Subtle Heritage Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='40' y='45' text-anchor='middle' font-size='28' fill='%238B4513'%3Eॐ%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Language Switcher - Fixed Position */}
        <div className="absolute top-6 right-6 z-20">
          <LanguageSwitcher />
        </div>

        <div className="relative grid md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-heritage-cream/90 relative z-10"
          >
            <div className="max-w-xl space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sandalwood text-xs font-light tracking-[0.3em] uppercase block"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Cormorant Garamond, serif' }}
              >
                {t('home.subtitle')}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-deep-brown leading-tight tracking-wide" 
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Cormorant Garamond, serif' }}
              >
                {t('home.title')}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-incense text-base md:text-lg leading-relaxed font-light"
              >
                {t('home.description')}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4"
              >
                <Link href="/aarti-pooja" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 69, 19, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-sandalwood text-ivory px-6 sm:px-8 py-3 rounded-sm font-light transition-all duration-300 hover:bg-deep-brown border border-sandalwood shadow-sm" 
                    style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Cormorant Garamond, serif' }}
                  >
                    {t('home.bookAarti')}
                  </motion.button>
                </Link>
                <Link href="/howtoreachus" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 69, 19, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto border border-sandalwood/30 text-deep-brown hover:bg-sandalwood/5 px-6 sm:px-8 py-3 rounded-sm font-light transition-all duration-300" 
                    style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'inherit' }}
                  >
                    {t('home.planVisit')}
                  </motion.button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 69, 19, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto border border-sandalwood/30 text-deep-brown hover:bg-sandalwood/5 px-6 sm:px-8 py-3 rounded-sm font-light transition-all duration-300" 
                    style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'inherit' }}
                  >
                    {t('home.learnMore')}
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative min-h-[400px] md:min-h-full overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/kuberji/kuberji1.jpeg"
                alt="KuberJi Mandir"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-heritage-cream/10" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Heritage Minimal */}
      <section className="py-20 bg-sandalwood/5 border-y border-sandalwood/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: language === 'hi' ? "वर्षों की विरासत" : "Years of Heritage" },
              { number: "365", label: language === 'hi' ? "दिनों की प्रार्थना" : "Days of Prayer" },
              { number: "50+", label: language === 'hi' ? "वार्षिक कार्यक्रम" : "Annual Events" },
              { number: "ॐ", label: language === 'hi' ? "आशीर्वाद" : "Blessings" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="space-y-2 cursor-default"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-light text-sandalwood" 
                  style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Cormorant Garamond, serif' }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-incense font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'inherit' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Minimal */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[400px] md:h-[500px] rounded overflow-hidden shadow-xl order-2 md:order-1 group"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/milkbath2.jpeg"
                alt="Temple Ceremony"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2 space-y-4"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[#C97A3C] text-sm font-semibold tracking-wider uppercase block"
            >
              Sacred Heritage
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#5A3825] leading-tight"
            >
              The Divine Treasury of Lord Kuber
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Lord Shri Badrinath&apos;s treasurer, Shri Kuber Bhandari, the treasurer of the gods, 
              resides in this divine Kuber temple in Pandukeshwar during winters.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Located near Yog Badri, one of the Panch Badri, this sacred temple sits at 
              the base of the Balkunwar peak at an altitude of 4,600 meters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(201, 122, 60, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#C97A3C] hover:bg-[#B5682B] text-white px-6 py-3 rounded font-semibold transition-all duration-300"
                >
                  Discover More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-spiritual-green mb-4 font-quicksand">
              Temple Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the divine beauty of KuberJi Mandir
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "/images/temple/temple-top-2.jpeg",
              "/images/kuberji/kuber-chowk-3.jpeg",
              "/images/milkbath2.jpeg",
              "/images/carryin2.jpeg",
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/media">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-spiritual-gold text-spiritual-gold hover:bg-spiritual-gold hover:text-white px-8 py-3 rounded font-semibold transition-all duration-300"
              >
                View Full Gallery
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Full Width Images */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#C97A3C] text-sm font-semibold tracking-wider uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="text-4xl font-bold text-[#5A3825] mb-4">
              Temple Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Participate in sacred rituals and receive divine blessings
            </p>
          </motion.div>
        
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Rituals",
                desc: "Morning and evening aarti with sacred chants",
                img: "/images/sitting.jpeg",
              },
              {
                title: "Abhishekam",
                desc: "Sacred bath ceremony for Lord Kuber",
                img: "/images/milkbath2.jpeg",
              },
              {
                title: "Prasad Seva",
                desc: "Distribution of blessed offerings",
                img: "/images/carryin2.jpeg",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-sandalwood/20 transition-opacity duration-300"
                  />
                </div>
                <motion.div 
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  className="p-6"
                >
                  <h3 className="text-2xl font-bold text-spiritual-green mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/carrying.jpeg"
          alt="Temple Devotees"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join Our Sacred Community
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Experience divine blessings and spiritual growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#C97A3C] text-sm font-semibold tracking-wider uppercase block"
            >
              Make a Difference
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#5A3825]"
            >
              Support Our Temple
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Your generous donations help us maintain the temple, conduct sacred ceremonies, 
              and serve our devotees with love and devotion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(201, 122, 60, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#C97A3C] hover:bg-[#B5682B] text-white px-8 md:px-10 py-3 md:py-4 rounded text-base md:text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Make a Donation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, backgroundColor: "#8B4513" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 bg-sandalwood text-white p-4 rounded-full shadow-2xl cursor-pointer transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
