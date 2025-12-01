import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Package, Lightbulb } from "lucide-react";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const segments = [
    {
      icon: Building2,
      title: "Brand owners",
      items: [
        "Founders scaling into GCC markets",
        "Marketing directors launching new categories",
        "Regional heads expanding footprint",
      ],
    },
    {
      icon: Package,
      title: "Distributors",
      items: [
        "Commercial directors seeking brand partnerships",
        "Trade marketing teams optimizing assortment",
        "Sales leaders driving velocity improvement",
      ],
    },
    {
      icon: Lightbulb,
      title: "Startups",
      items: [
        "Early-stage teams validating product–market fit in GCC",
        "Lean founders needing fast, de-risked market entry",
        "Startups building investor-ready distribution & growth systems",
      ],
    },
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ICP Targeting Section
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We serve FMCG leaders driving Gulf expansion
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-border card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6">
                  <Icon size={36} className="text-primary" />
                </div>
                
                <h2 className="text-2xl font-bold mb-6">{segment.title}</h2>
                
                <ul className="space-y-4">
                  {segment.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1 text-lg">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Block */}
        <div
          className="bg-card p-8 md:p-12 rounded-xl border-2 border-primary max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Founders validating GCC product–market fit
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span>Seed–Series A teams piloting distributor partnerships (performance-based SLAs)</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span>D2C brands moving from online to MT/GT/HORECA</span>
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <div className="trust-badge inline-block text-base">
            UAE • Saudi Arabia • Kuwait • Bahrain • Oman • Qatar | Modern trade • GT • HORECA • e-com
          </div>
        </div>
      </div>
    </main>
  );
};

export default Clients;
