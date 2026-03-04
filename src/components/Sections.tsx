import { motion } from "motion/react";
import { MapPin, Clock, Wifi, Users, CloudRain, Instagram, MessageCircle, HelpCircle } from "lucide-react";
import { MENU_DATA, TESTIMONIALS_DATA, CONTACT_DATA, GALLERY_DATA } from "../constants";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white" role="navigation" aria-label="Main Navigation">
    <div className="text-2xl font-serif font-bold tracking-tight">Kedai Senggani</div>
    <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-sans font-semibold">
      <a href="#philosophy" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Filosofi</a>
      <a href="#story" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Kisah</a>
      <a href="#gallery" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Galeri</a>
      <a href="#menu" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Menu</a>
      <a href="#space" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Ruang</a>
      <a href="#testimonials" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Testimoni</a>
      <a href="#faq" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">FAQ</a>
      <a href="#location" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Lokasi</a>
    </div>
  </nav>
);

export const Hero = () => (
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-[#001B3D] text-white" aria-labelledby="hero-heading">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <h1 id="hero-heading" className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-tight text-white mb-8">
        Kedai Senggani: <span className="italic text-[#FACC15]">Kopi Manual Brew</span> & Suasana Tenang di Lawang.
      </h1>
      <p className="text-lg md:text-xl font-sans font-light text-white/70 max-w-xl mx-auto leading-relaxed">
        Sebuah jeda kecil di tengah hiruk pikuk. Nikmati seduhan yang jujur dengan fasilitas Wi-Fi yang nyaman.
      </p>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <div className="w-[1px] h-12 bg-white/20" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
    </motion.div>
  </section>
);

export const Philosophy = () => (
  <section id="philosophy" className="py-32 px-6 bg-white" aria-labelledby="philosophy-heading">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
        <img 
          src="https://res.cloudinary.com/dktlodsrs/image/upload/v1772436189/IMG_20260302_122128_814_pjmtvx.jpg" 
          alt="Biji kopi pilihan dan proses manual brew di Kedai Senggani Lawang" 
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-8">
        <h2 id="philosophy-heading" className="text-5xl font-serif leading-tight text-[#001B3D]">
          Fokus pada <span className="italic">Esensi Kopi</span> Manual Brew.
        </h2>
        <p className="text-lg text-[#001B3D]/70 leading-relaxed">
          Di Kedai Senggani, kami percaya bahwa kopi terbaik lahir dari ketenangan. Kami tidak menyediakan makanan pendamping agar lidah Anda bisa sepenuhnya mengecap karakter unik dari setiap biji kopi yang kami pilih.
        </p>
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#001B3D]/10">
          <div>
            <h3 className="font-serif text-xl mb-2 italic text-[#001B3D]">Single Origin</h3>
            <p className="text-sm text-[#001B3D]/50">Pilihan biji kopi terbaik dari petani lokal pilihan.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2 italic text-[#001B3D]">Manual Brew</h3>
            <p className="text-sm text-[#001B3D]/50">Setiap cangkir diseduh dengan presisi dan hati.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Story = () => (
  <section id="story" className="py-32 px-6 bg-[#F8FAFC]" aria-labelledby="story-heading">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 block font-sans font-bold">Asal Usul</span>
          <h2 id="story-heading" className="text-5xl font-serif leading-tight text-[#001B3D]">
            Kisah Kedai Kopi <span className="italic">Senggani</span> di Lawang.
          </h2>
          <div className="space-y-6 text-lg text-[#001B3D]/70 leading-relaxed font-sans">
            <p>
              Berawal dari sebuah sudut kecil di Lawang, Malang, Kedai Senggani lahir dari kecintaan kami terhadap kesederhanaan. Nama "Senggani" diambil dari tanaman liar yang tangguh, melambangkan semangat kami untuk terus tumbuh meski dalam keterbatasan.
            </p>
            <p>
              Kami tidak memulai ini sebagai bisnis besar, melainkan sebagai tempat pelarian bagi mereka yang merindukan percakapan jujur di atas secangkir kopi yang diseduh dengan hati.
            </p>
            <p className="italic font-serif text-[#001B3D]">
              "Bagi kami, menyeduh bukan sekadar mengekstraksi rasa, tapi menghargai setiap tetes keringat petani yang menanamnya."
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10"
          >
            <img 
              src="https://res.cloudinary.com/dktlodsrs/image/upload/v1772438042/VideoCapture_20260302-145033_ryrjpd.jpg" 
              alt="Sejarah dan suasana hangat Kedai Senggani di Lawang Malang" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FACC15]/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export const Gallery = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedGallery = [...GALLERY_DATA, ...GALLERY_DATA];

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 mb-4 block font-sans font-bold">Suasana</span>
        <h2 id="gallery-heading" className="text-5xl font-serif italic text-[#001B3D]">Sudut <span className="text-[#FACC15]">Senggani</span>.</h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {duplicatedGallery.map((img, i) => (
            <div 
              key={i} 
              className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg group"
            >
              <img 
                src={img.url} 
                alt={`${img.alt} - Galeri suasana Kedai Senggani Lawang`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const SpaceExperience = () => (
  <section id="space" className="py-32 px-6 bg-[#001B3D] text-white overflow-hidden" aria-labelledby="space-heading">
    <div className="max-w-6xl mx-auto">
      <div className="mb-20 text-center">
        <h2 id="space-heading" className="text-5xl font-serif mb-6 italic">Kenyamanan yang Personal.</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Kami menghadirkan ruang yang dirancang khusus untuk Anda yang menghargai kualitas waktu, ketenangan, dan koneksi nyata.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors group">
          <Wifi className="w-8 h-8 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
          <h3 className="text-2xl font-serif italic">Koneksi & Fokus</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Tetap terhubung dengan fasilitas Wi-Fi kami yang stabil. Ruang kami dirancang agar Anda tetap produktif namun tetap bisa menikmati ketenangan seduhan kopi.
          </p>
        </div>
        
        <div className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors group">
          <Users className="w-8 h-8 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
          <h3 className="text-2xl font-serif italic">Privasi Eksklusif</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Dengan kapasitas yang terjaga, kami menjamin suasana yang tenang dan tidak bising. Tempat yang sempurna bagi Anda yang mencari privasi di tengah kota Lawang.
          </p>
        </div>
        
        <div className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors group">
          <CloudRain className="w-8 h-8 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
          <h3 className="text-2xl font-serif italic">Sudut Intim & Hangat</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Ruang indoor kami menawarkan kehangatan ekstra untuk kelompok kecil yang ingin berbagi cerita dengan lebih dekat, terutama saat suasana syahdu menyelimuti Lawang.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const Menu = () => (
  <section id="menu" className="py-32 px-6 bg-[#F8FAFC]" aria-labelledby="menu-heading">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 mb-4 block font-sans font-bold">Menu Unggulan</span>
        <h2 id="menu-heading" className="text-6xl font-serif italic text-[#001B3D]">Menu Kopi Unggulan.</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        {MENU_DATA.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group flex flex-col items-center text-center" 
            role="listitem"
          >
            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-xl mb-8">
              <img 
                src={item.image} 
                alt={`${item.name} - ${item.desc}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#001B3D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-2xl font-serif italic text-[#001B3D] mb-2">{item.name}</h3>
            <p className="text-sm font-sans text-[#001B3D]/50 max-w-[250px]">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.a
          href={CONTACT_DATA.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-sans font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
          aria-label="Pesan via WhatsApp: Sapa barista kami"
        >
          <MessageCircle size={24} />
          <span>Sapa barista kami</span>
        </motion.a>
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section id="testimonials" className="py-32 px-6 bg-[#001B3D] text-white overflow-hidden" aria-labelledby="testimonials-heading">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#FACC15]/60 mb-4 block">Suara Pelanggan</span>
        <h2 id="testimonials-heading" className="text-5xl font-serif italic">Apa Kata <span className="text-[#FACC15]">Mereka</span>.</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 border border-white/10 rounded-[40px] flex flex-col justify-between"
          >
            <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{t.text}"</p>
            <div>
              <h4 className="font-serif text-xl text-[#FACC15]">{t.name}</h4>
              <p className="text-xs uppercase tracking-widest text-white/40">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQ = () => (
  <section id="faq" className="py-32 px-6 bg-[#F8FAFC]" aria-labelledby="faq-heading">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 mb-4 block font-sans font-bold">Tanya Jawab</span>
        <h2 id="faq-heading" className="text-5xl font-serif italic text-[#001B3D]">Seputar Kedai Senggani.</h2>
      </div>
      
      <div className="space-y-8">
        {[
          {
            q: "Di mana lokasi Kedai Senggani?",
            a: "Kami berlokasi di area Pujasera, Jl. Tawang Argo, Lawang, Kabupaten Malang. Tempat kami berada di sudut yang tenang untuk menjamin kenyamanan Anda."
          },
          {
            q: "Apa menu unggulan di sini?",
            a: "Signature kami adalah Kopi Susu Senggani, Es Kopi Susu Panas, dan Kopi Butter. Kami fokus pada teknik manual brew untuk menjaga kualitas rasa."
          },
          {
            q: "Apakah tersedia fasilitas Wi-Fi?",
            a: "Ya, kami menyediakan fasilitas Wi-Fi gratis bagi pengunjung untuk mendukung kenyamanan Anda saat berkunjung atau bekerja santai."
          },
          {
            q: "Kapan jam operasional Kedai Senggani?",
            a: "Kami buka setiap hari mulai pukul 09:00 pagi hingga 00:00 tengah malam."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white rounded-3xl shadow-sm border border-[#001B3D]/5"
          >
            <div className="flex gap-4">
              <HelpCircle className="w-6 h-6 text-[#FACC15] shrink-0" />
              <div>
                <h3 className="text-xl font-serif italic text-[#001B3D] mb-3">{item.q}</h3>
                <p className="text-[#001B3D]/60 leading-relaxed font-sans">{item.a}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const MapSection = () => (
  <section id="location" className="py-32 px-6 bg-white" aria-labelledby="location-heading">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 block">Temukan Kami</span>
          <h2 id="location-heading" className="text-5xl font-serif leading-tight text-[#001B3D]">
            Lokasi Kedai Senggani <span className="italic">Lawang</span>.
          </h2>
          <p className="text-lg text-[#001B3D]/70 leading-relaxed">
            Kami berlokasi di area yang cukup tersembunyi untuk menjamin ketenangan Anda. Gunakan peta di samping untuk menemukan jalan menuju cangkir kopi Anda di Kedai Senggani.
          </p>
          <div className="space-y-4 pt-8 border-t border-[#001B3D]/10">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#FACC15] mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-xl italic text-[#001B3D]">Alamat</h3>
                <p className="text-sm text-[#001B3D]/50">{CONTACT_DATA.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#FACC15] mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-xl italic text-[#001B3D]">Jam Buka</h3>
                <p className="text-sm text-[#001B3D]/50">{CONTACT_DATA.hours}</p>
              </div>
            </div>
          </div>
          <a 
            href={CONTACT_DATA.mapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#001B3D] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#FACC15] hover:text-[#001B3D] transition-all focus:outline-none focus:ring-4 focus:ring-[#FACC15]/50"
          >
            Buka di Google Maps
          </a>
        </div>
        
        <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl order-1 md:order-2">
          <iframe 
            title="Lokasi Kedai Senggani di Google Maps"
            src={CONTACT_DATA.embedUrl}
            className="w-full h-full border-0 grayscale contrast-[1.2] opacity-90"
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-[#001B3D]/5 rounded-[40px]"></div>
        </div>
      </div>
    </div>
  </section>
);

export const FloatingWhatsApp = () => (
  <motion.a
    href={CONTACT_DATA.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
    aria-label="Sapa barista kami di WhatsApp"
    title="Sapa barista kami"
  >
    <MessageCircle size={32} />
    <motion.span 
      initial={{ opacity: 0, x: 10 }}
      whileHover={{ opacity: 1, x: 0 }}
      className="absolute right-20 bg-white text-[#001B3D] px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap shadow-lg pointer-events-none"
    >
      Sapa barista kami
    </motion.span>
  </motion.a>
);
export const Footer = () => (
  <footer className="bg-white py-20 px-6 border-t border-[#001B3D]/5" role="contentinfo">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2 space-y-6">
        <h2 className="text-4xl font-serif font-bold italic text-[#001B3D]">Kedai Senggani</h2>
        <p className="text-[#001B3D]/50 max-w-sm font-sans">
          Tempat kecil untuk jiwa yang besar. Datanglah untuk kopi, pulanglah dengan ketenangan.
        </p>
        <div className="flex gap-4">
          <a 
            href={CONTACT_DATA.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Ikuti kami di Instagram" 
            className="w-10 h-10 rounded-full border border-[#001B3D]/10 flex items-center justify-center hover:bg-[#001B3D] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#001B3D]"
          >
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a 
            href={CONTACT_DATA.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Hubungi kami via WhatsApp" 
            className="w-10 h-10 rounded-full border border-[#001B3D]/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <a href={CONTACT_DATA.mapsUrl} aria-label="Lihat lokasi kami di peta" className="w-10 h-10 rounded-full border border-[#001B3D]/10 flex items-center justify-center hover:bg-[#001B3D] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#001B3D]">
            <MapPin size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-xs uppercase tracking-widest font-bold text-[#001B3D]/30 font-sans">Jam Operasional</h4>
        <ul className="space-y-2 text-sm text-[#001B3D]/70 font-sans">
          <li className="flex justify-between"><span>Setiap Hari</span> <span>09:00 - 00:00</span></li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-xs uppercase tracking-widest font-bold text-[#001B3D]/30 font-sans">Lokasi</h4>
        <p className="text-sm leading-relaxed text-[#001B3D]/70 font-sans">
          pujasera, Jl. Tawang Argo, Lawang<br />
          Kec. Lawang, Kabupaten Malang<br />
          Jawa Timur
        </p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#001B3D]/5 text-[10px] uppercase tracking-widest text-[#001B3D]/30 text-center">
      &copy; 2024 Kedai Senggani. Diseduh dengan hati.
    </div>
  </footer>
);
