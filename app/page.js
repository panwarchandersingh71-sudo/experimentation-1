"use client";
import MyNav from "@/components/MyNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className="bg-heritage-cream">
      <MyNav />
      
      {/* Hero Section - Temple Theme Design */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
        {/* Language Switcher - Fixed Position */}
        <div className="absolute top-6 right-6 z-20">
          <LanguageSwitcher />
        </div>

        <div className="relative grid md:grid-cols-2 min-h-[700px] md:min-h-[800px]">
          {/* Left: Image with Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative min-h-[400px] md:min-h-full order-2 md:order-1"
          >
            <Image
              src="/images/kuberji/kuberji1.jpeg"
              alt="KuberJi Mandir"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent" />
            
            {/* Text Overlay on Image */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 text-white">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-sm font-light tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                {t('home.subtitle')}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-lg" 
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}
              >
                {t('home.title')}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base md:text-lg leading-relaxed font-light mb-8 max-w-md text-gray-100"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                {t('home.description')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Link href="/aarti-pooja">
                  <button className="bg-sandalwood hover:bg-sandalwood/90 text-white px-8 py-3 font-light transition-all duration-300 shadow-lg" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                    {t('home.bookAarti')}
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative min-h-[400px] md:min-h-full order-1 md:order-2 bg-sandalwood"
          >
            <Image
              src="/images/milkbath2.jpeg"
              alt="Temple Ceremony"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section with Image Background */}
      <section className="relative py-24 px-4 bg-warm-beige temple-pattern-bg">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-1 md:order-1 space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sandalwood text-sm font-light tracking-[0.3em] uppercase block"
                style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}
              >
                Sacred Heritage
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-light text-deep-brown leading-tight" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}>
                The Divine Treasury of Lord Kuber
              </h2>
              <p className="text-lg text-incense leading-relaxed font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                Lord Shri Badrinath&apos;s treasurer, Shri Kuber Bhandari, the treasurer of the gods, 
                resides in this divine Kuber temple in Pandukeshwar during winters.
              </p>
              <p className="text-lg text-incense leading-relaxed font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                Located near Yog Badri, one of the Panch Badri, this sacred temple sits at 
                the base of the Balkunwar peak at an altitude of 4,600 meters.
              </p>
              <Link href="/about">
                <button className="bg-sandalwood hover:bg-sandalwood/90 text-white px-8 py-3 font-light transition-all duration-300 shadow-md" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                  Discover More
                </button>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden order-2 md:order-2">
              <Image
                src="/images/sitting.jpeg"
                alt="Temple Ceremony"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="relative py-24 px-4 bg-heritage-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center gap-6 mb-8">
              <Image src="/images/milkbath2.jpeg" alt="Devotee" width={120} height={120} className="rounded-full object-cover shadow-lg" loading="lazy" />
              <Image src="/images/carryin2.jpeg" alt="Devotee" width={120} height={120} className="rounded-full object-cover shadow-lg" loading="lazy" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-incense leading-relaxed italic" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}>
              &quot;Through meditation, study, and community, discover the beauty of living in harmony with yourself and the world around you.&quot;
            </blockquote>
            <div className="pt-4">
              <Link href="/aarti-pooja">
                <button className="bg-sandalwood hover:bg-sandalwood/90 text-white px-10 py-3 font-light transition-all duration-300 shadow-md" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                  Begin Your Journey
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Large Feature Image Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/temple/temple-top-2.jpeg"
          alt="Temple Architecture"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}>
              Discover the Path to Inner Harmony and Enlightenment and Embrace Tranquility
            </h2>
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
      <section className="relative py-24 px-4 bg-heritage-cream temple-pattern-bg">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-deep-brown mb-4" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}>
              Mindfulness
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-1 md:gap-2 mb-12">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-80 overflow-hidden group"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2">
                  <span className="text-sm text-deep-brown font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1 md:gap-2">
            {[
              { img: "/images/kuberji/kuberji1.jpeg", label: "Eightfold Path" },
              { img: "/images/milkbath2.jpeg", label: "Compassion" },
              { img: "/images/carrying.jpeg", label: "Four Noble Truths" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-80 overflow-hidden group"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2">
                  <span className="text-sm text-deep-brown font-light" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section with Orange Background */}
      <section className="relative py-24 px-4 bg-sandalwood">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <span className="text-sm font-light tracking-[0.3em] uppercase block opacity-90" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
              Discover Peace, Purpose, and Community
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Playfair Display, serif' }}>
              Journey of Mindfulness
            </h2>
            <p className="text-lg leading-relaxed font-light opacity-90" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
              We offer a range of programs and activities designed to support you on your path. From guided meditation sessions and Dharma teachings to mindfulness workshops and community service projects.
            </p>
            <Link href="/services">
              <button className="bg-white text-sandalwood hover:bg-heritage-cream px-10 py-3 font-light transition-all duration-300 shadow-md" style={{ fontFamily: language === 'hi' ? 'Noto Serif Devanagari, serif' : 'Lora, serif' }}>
                Start Now
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/images/sitting.jpeg"
              alt="Meditation"
              fill
              className="object-cover"
              loading="lazy"
            />
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

      {/* Photo Grid Section */}
      <section className="grid md:grid-cols-3 gap-0">
        {[
          "/images/kuberji/kuberji1.jpeg",
          "/images/carrying.jpeg",
          "/images/carryin2.jpeg",
        ].map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 overflow-hidden"
          >
            <Image
              src={img}
              alt={`Temple ${idx + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
