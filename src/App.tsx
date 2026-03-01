/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, MapPin, Instagram, Clock, ZapOff, Users, CloudRain } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white" role="navigation" aria-label="Main Navigation">
    <div className="text-2xl font-serif font-bold tracking-tight">Kedai Senggani</div>
    <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-sans font-semibold">
      <a href="#philosophy" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Filosofi</a>
      <a href="#menu" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Menu</a>
      <a href="#space" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Ruang</a>
      <a href="#testimonials" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Testimoni</a>
      <a href="#location" className="hover:text-[#FACC15] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-sm">Lokasi</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-[#001B3D] text-white" aria-labelledby="hero-heading">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <h1 id="hero-heading" className="text-7xl md:text-9xl font-serif font-bold leading-none tracking-tight text-white mb-8">
        Mampir di <span className="italic text-[#FACC15]">Senggani</span>.
      </h1>
      <p className="text-lg md:text-xl font-sans font-light text-white/70 max-w-xl mx-auto leading-relaxed">
        Sebuah jeda kecil di tengah hiruk pikuk. Kami tidak punya Wi-Fi, tapi kami punya seduhan yang jujur.
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

const Philosophy = () => (
  <section id="philosophy" className="py-32 px-6 bg-white" aria-labelledby="philosophy-heading">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
          alt="Proses penuangan kopi manual brew yang presisi" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-8">
        <h2 id="philosophy-heading" className="text-5xl font-serif leading-tight text-[#001B3D]">
          Fokus pada <span className="italic">Esensi</span>.
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

const Constraints = () => (
  <section id="space" className="py-32 px-6 bg-[#001B3D] text-white overflow-hidden" aria-labelledby="space-heading">
    <div className="max-w-6xl mx-auto">
      <div className="mb-20 text-center">
        <h2 id="space-heading" className="text-5xl font-serif mb-6 italic">Ruang yang Intim.</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Kami bukan tempat untuk bekerja seharian. Kami adalah tempat untuk bercakap, membaca buku, atau sekadar melamun.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors group">
          <ZapOff className="w-8 h-8 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
          <h3 className="text-2xl font-serif italic">Limit Colokan</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Lupakan laptop Anda sejenak. Gunakan waktu ini untuk mengisi ulang energi diri sendiri, bukan baterai gadget.
          </p>
        </div>
        
        <div className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors group">
          <Users className="w-8 h-8 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
          <h3 className="text-2xl font-serif italic">7 Kursi Saja</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Kapasitas terbatas memastikan setiap tamu mendapatkan ketenangan yang mereka cari. Eksklusif dan personal.
          </p>
        </div>
        
        <div className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors group">
          <CloudRain className="w-8 h-8 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
          <h3 className="text-2xl font-serif italic">Teduh Saat Hujan</h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Saat hujan turun, ruang indoor kami menjadi tempat paling hangat untuk 6-7 orang yang beruntung.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Menu = () => (
  <section id="menu" className="py-32 px-6 bg-[#F8FAFC]" aria-labelledby="menu-heading">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 mb-4 block font-sans font-bold">Menu Unggulan</span>
        <h2 id="menu-heading" className="text-6xl font-serif italic text-[#001B3D]">Signature Senggani.</h2>
      </div>
      
      <div className="space-y-12">
        {[
          { name: "Kopi Susu Senggani", price: "9K", desc: "Signature blend dengan rasa yang otentik." },
          { name: "Es Kopi Susu Panas Senggani", price: "11K", desc: "Sensasi unik kopi susu yang menyegarkan." },
          { name: "Kopi Butter", price: "11K", desc: "Kombinasi gurih butter dan kopi pilihan." },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex justify-between items-end border-b border-[#001B3D]/10 pb-4 group cursor-default" 
            role="listitem"
          >
            <div>
              <h3 className="text-2xl font-sans font-bold group-hover:italic transition-all text-[#001B3D]">{item.name}</h3>
              <p className="text-sm font-sans text-[#001B3D]/40">{item.desc}</p>
            </div>
            <span className="text-xl font-sans font-bold text-[#001B3D]">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-32 px-6 bg-[#001B3D] text-white overflow-hidden" aria-labelledby="testimonials-heading">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#FACC15]/60 mb-4 block">Suara Pelanggan</span>
        <h2 id="testimonials-heading" className="text-5xl font-serif italic">Apa Kata <span className="text-[#FACC15]">Mereka</span>.</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Andi Pratama",
            role: "Penulis",
            text: "Satu-satunya tempat di mana saya bisa benar-benar fokus membaca buku tanpa terganggu suara ketikan laptop orang lain."
          },
          {
            name: "Sari Wijaya",
            role: "Coffee Enthusiast",
            text: "Manual brew-nya luar biasa. Karakter biji kopinya benar-benar keluar karena tidak ada aroma makanan yang mengganggu."
          },
          {
            name: "Budi Santoso",
            role: "Pelanggan Tetap",
            text: "Tempat favorit saat hujan. Suasananya sangat hangat dan intim, serasa di ruang tamu sendiri."
          }
        ].map((t, i) => (
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

const MapSection = () => (
  <section id="location" className="py-32 px-6 bg-white" aria-labelledby="location-heading">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#001B3D]/40 block">Temukan Kami</span>
          <h2 id="location-heading" className="text-5xl font-serif leading-tight text-[#001B3D]">
            Di Sudut <span className="italic">Tenang</span> Kota.
          </h2>
          <p className="text-lg text-[#001B3D]/70 leading-relaxed">
            Kami berlokasi di area yang cukup tersembunyi untuk menjamin ketenangan Anda. Gunakan peta di samping untuk menemukan jalan menuju cangkir kopi Anda di Kedai Senggani.
          </p>
          <div className="space-y-4 pt-8 border-t border-[#001B3D]/10">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#FACC15] mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-xl italic text-[#001B3D]">Alamat</h3>
                <p className="text-sm text-[#001B3D]/50">pujasera, Jl. Tawang Argo, Lawang, Kec. Lawang, Kabupaten Malang, Jawa Timur</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#FACC15] mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-xl italic text-[#001B3D]">Jam Buka</h3>
                <p className="text-sm text-[#001B3D]/50">Setiap Hari, 09:00 - 00:00</p>
              </div>
            </div>
          </div>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=pujasera+Jl.+Tawang+Argo+Lawang+Malang" 
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
            src="https://maps.google.com/maps?q=pujasera%20Jl.%20Tawang%20Argo%20Lawang%20Malang&t=&z=17&ie=UTF8&iwloc=&output=embed" 
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

const Footer = () => (
  <footer className="bg-white py-20 px-6 border-t border-[#001B3D]/5" role="contentinfo">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2 space-y-6">
        <h2 className="text-4xl font-serif font-bold italic text-[#001B3D]">Kedai Senggani</h2>
        <p className="text-[#001B3D]/50 max-w-sm font-sans">
          Tempat kecil untuk jiwa yang besar. Datanglah untuk kopi, pulanglah dengan ketenangan.
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Ikuti kami di Instagram" className="w-10 h-10 rounded-full border border-[#001B3D]/10 flex items-center justify-center hover:bg-[#001B3D] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#001B3D]">
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a href="#" aria-label="Lihat lokasi kami di peta" className="w-10 h-10 rounded-full border border-[#001B3D]/10 flex items-center justify-center hover:bg-[#001B3D] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#001B3D]">
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

export default function App() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen selection:bg-[#FACC15] selection:text-[#001B3D]">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Constraints />
        <Menu />
        <Testimonials />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
