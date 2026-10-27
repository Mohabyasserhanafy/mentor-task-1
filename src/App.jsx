import ReactLenis from "lenis/react";
import FAQ from "./components/FAQ/Faq";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import HealthcareServices from "./components/Healthcare Services/HealthcareServices";
import ExceptionalCare from "./components/Exceptional Care/ExceptionalCare";
import Footer from "./components/footer/Footer";
import PatientsSay from "./components/Patients Say/PatientsSay";

export default function App() {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
      <div>
        <div className="bg-linear-to-b from-[#0369A1] via-[#0284C7] to-[7DD3FC]/40 min-h-screen">
          <Navbar />
          <Hero />
        </div>
        <HealthcareServices />

        <PatientsSay />

        <FAQ />

        <ExceptionalCare />

        <Footer />
      </div>
    </ReactLenis>
  );
}
