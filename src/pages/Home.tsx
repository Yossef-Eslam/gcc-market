import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "@/assets/hero-supermarket.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 65, 48, 0.85), rgba(38, 65, 48, 0.9)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
          >
            From zero to shelf<br />in GCC markets
          </h1>
          
          <p
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get a de-risked market entry plan and vetted distributor partners in 30 days.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://calendly.com/k-elmoslimany/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Book a diagnostic call
            </a>
            <a
              href="/capabilities-deck.pdf"
              download
              className="btn-outline text-center"
            >
              Download capabilities deck
            </a>
          </div>

          <div
            className="trust-badge inline-block"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            UAE • KSA • Kuwait • Bahrain • Oman • Qatar | Modern Trade • GT • HORECA • e-com
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
