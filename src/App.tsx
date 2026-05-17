/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background3D from "./components/Background3D";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Innovations from "./components/Innovations";
import Career from "./components/Career";
import Updates from "./components/Updates";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-200">
      <Background3D />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Innovations />
        <Career />
        <Updates />
        <Contact />
      </main>
    </div>
  );
}
