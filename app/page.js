"use client";
import MyNav from "@/components/MyNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useRef } from "react";

export default function Home() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  // Smooth scroll animations
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-heritage-cream">
      <MyNav />
      
      {/* Hero Section - Temple Theme Design with Parallax */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
        {/* Language Switcher - Fixed Position */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-6 right-6 z-20"
        >
          <LanguageSwitcher />
        </motion.div>

        <div className="relative grid md:grid-cols-2 min-h-[700px] md:min-h-[800px]">
          {/* Left: Image with Overlay and Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative min-h-[400px] md:min-h-full order-2 md:order-1 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <Image
                src="/images/kuberji/kuberji1.jpeg"
                alt="KuberJi Mandir"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />
            
            {/* Text Overlay on Image with Stagger Animation */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 text-white"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-light tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                {t('home.subtitle')}
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-lg" 
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
              >
                {t('home.title')}
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-base md:text-lg leading-relaxed font-light mb-8 max-w-md text-gray-100"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                {t('home.description')}
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Link href="/aarti-pooja">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(200, 117, 72, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-sandalwood hover:bg-sandalwood/90 text-white px-8 py-3 font-light transition-all duration-300 shadow-lg" 
                    style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
                  >
                    {t('home.bookAarti')}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Image with Smooth Entry */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative min-h-[400px] md:min-h-full order-1 md:order-2 bg-sandalwood overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <Image
                src="/images/milkbath2.jpeg"
                alt="Temple Ceremony"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Image Background */}
      <section className="relative py-24 px-4 bg-warm-beige temple-pattern-bg overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              variants={fadeInLeft}
              className="order-1 md:order-1 space-y-6"
            >
              <motion.span 
                variants={fadeInUp}
                className="text-sandalwood text-sm font-light tracking-[0.3em] uppercase block"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                Sacred Heritage
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-light text-deep-brown leading-tight" 
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
              >
                The Divine Treasury of Lord Kuber
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-incense leading-relaxed font-light" 
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                Lord Shri Badrinath&apos;s treasurer, Shri Kuber Bhandari, the treasurer of the gods, 
                resides in this divine Kuber temple in Pandukeshwar during winters.
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-incense leading-relaxed font-light" 
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                Located near Yog Badri, one of the Panch Badri, this sacred temple sits at 
                the base of the Balkunwar peak at an altitude of 4,600 meters.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/about">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(200, 117, 72, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-sandalwood hover:bg-sandalwood/90 text-white px-8 py-3 font-light transition-all duration-300 shadow-md" 
                    style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
                  >
                    Discover More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              className="relative h-[400px] md:h-[500px] overflow-hidden order-2 md:order-2 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/sitting.jpeg"
                  alt="Temple Ceremony"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="relative py-24 px-4 bg-heritage-cream overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div 
              variants={scaleIn}
              className="flex justify-center gap-6 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src="/images/milkbath2.jpeg" alt="Devotee" width={120} height={120} className="rounded-full object-cover shadow-lg" loading="lazy" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src="/images/carryin2.jpeg" alt="Devotee" width={120} height={120} className="rounded-full object-cover shadow-lg" loading="lazy" />
              </motion.div>
            </motion.div>
            <motion.blockquote 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-light text-incense leading-relaxed italic" 
              style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
            >
              &quot;Through meditation, study, and community, discover the beauty of living in harmony with yourself and the world around you.&quot;
            </motion.blockquote>
            <motion.div variants={fadeInUp} className="pt-4">
              <Link href="/aarti-pooja">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(200, 117, 72, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-sandalwood hover:bg-sandalwood/90 text-white px-10 py-3 font-light transition-all duration-300 shadow-md" 
                  style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
                >
                  Begin Your Journey
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Large Feature Image Section with Parallax */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src="/images/temple/temple-top-2.jpeg"
            alt="Temple Architecture"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light mb-6 leading-tight" 
              style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
            >
              Discover the Path to Inner Harmony and Enlightenment and Embrace Tranquility
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Categories/Services Bar */}
      <section className="bg-sandalwood py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            {[
              { name: "Daily Rituals", icon: "✦" },
              { name: "Abhishekam", icon: "✦" },
              { name: "Meditation", icon: "✦" },
              { name: "Sacred Offerings", icon: "✦" },
              { name: "Ceremonies", icon: "✦" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-base font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative py-24 px-4 bg-heritage-cream temple-pattern-bg overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-deep-brown mb-4" 
              style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
            >
              Mindfulness
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-3 gap-1 md:gap-2 mb-12"
          >
            {[
              { img: "/images/kuberji/kuber-chowk-3.jpeg", label: "Dukkha" },
              { img: "/images/sitting.jpeg", label: "Anicca" },
              { img: "/images/carryin2.jpeg", label: "Anatta" },
              { img: "/images/milkbath2.jpeg", label: "Karma" },
              { img: "/images/carrying.jpeg", label: "Nirvana" },
              { img: "/images/temple/temple-top-2.jpeg", label: "Samsara" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="relative h-64 md:h-80 overflow-hidden group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 bg-white/90 px-4 py-2"
                >
                  <span className="text-sm text-deep-brown font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-3 gap-1 md:gap-2"
          >
            {[
              { img: "/images/kuberji/kuberji1.jpeg", label: "Eightfold Path" },
              { img: "/images/milkbath2.jpeg", label: "Compassion" },
              { img: "/images/carrying.jpeg", label: "Four Noble Truths" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="relative h-64 md:h-80 overflow-hidden group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 bg-white/90 px-4 py-2"
                >
                  <span className="text-sm text-deep-brown font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Section with Orange Background */}
      <section className="relative py-24 px-4 bg-sandalwood overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white space-y-6"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-sm font-light tracking-[0.3em] uppercase block opacity-90" 
              style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
            >
              Discover Peace, Purpose, and Community
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-light leading-tight" 
              style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
            >
              Journey of Mindfulness
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg leading-relaxed font-light opacity-90" 
              style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
            >
              We offer a range of programs and activities designed to support you on your path. From guided meditation sessions and Dharma teachings to mindfulness workshops and community service projects.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/services">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-sandalwood hover:bg-heritage-cream px-10 py-3 font-light transition-all duration-300 shadow-md" 
                  style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
                >
                  Start Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[400px] md:h-[500px] overflow-hidden group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/sitting.jpeg"
                alt="Meditation"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Info Section */}
      <section className="relative py-24 px-4 bg-heritage-cream temple-pattern-bg">
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <span className="text-sandalwood text-sm font-light tracking-[0.3em] uppercase block" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
              Illuminate Minds, Together in Prayer
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-deep-brown leading-tight" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}>
              Awaken Your Spirit, Enlighten Your Mind, Transform Your World and Begin Your Journey
            </h2>
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/milkbath2.jpeg" alt="Temple" fill className="object-cover" loading="lazy" />
              </div>
              <div className="text-left space-y-4">
                <p className="text-lg text-incense leading-relaxed font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                  The Three Stones of Buddhism encapsulate the foundational principles of this ancient spiritual tradition. These jewels serve as a source of wisdom.
                </p>
                <p className="text-lg text-incense leading-relaxed font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                  Ethical conduct (Sila) forms the foundation of the path, guiding practitioners to live in harmony with themselves and others.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid Section with Reveal Animation */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-0"
      >
        {[
          "/images/kuberji/kuberji1.jpeg",
          "/images/carrying.jpeg",
          "/images/carryin2.jpeg",
        ].map((img, idx) => (
          <motion.div
            key={idx}
            variants={scaleIn}
            className="relative h-64 md:h-96 overflow-hidden group cursor-pointer"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <Image
                src={img}
                alt={`Temple ${idx + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/30 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </motion.section>

      <Footer />
    </div>
  );
}
