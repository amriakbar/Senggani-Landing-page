/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Philosophy, Story, Constraints, Menu, Testimonials, MapSection, Footer } from "./components/Sections";

export default function App() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen selection:bg-[#FACC15] selection:text-[#001B3D]">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Story />
        <Constraints />
        <Menu />
        <Testimonials />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
