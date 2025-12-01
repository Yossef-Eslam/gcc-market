import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Map, Handshake, Rocket, Store } from "lucide-react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: Map,
      title: "Market Entry Blueprint",
      description: "Get a GCC-ready GTM plan in 15-30 days. We map regulations, pricing, distribution, and competitive dynamics per market. Then build a phased roadmap with clear listing targets and realistic timelines.",
      outcome: "De-risked market entry with specific listing targets by chain.",
    },
    {
      icon: Handshake,
      title: "Distributor Match & Management",
      description: "We shortlist 3-5 vetted partners who match your category, service level, and commercial model. Then negotiate performance-based SLAs and track execution weekly via EPOS data.",
      outcome: "Faster listings and improved execution through weekly performance dashboards.",
    },
    {
      icon: Rocket,
      title: "Execution & growth sprints",
      description: "Launch 90-day retail activations: trade marketing, field force deployment, promo planning. Track sell-out, measure ROI, iterate fast. Scale what works, cut what doesn't.",
      outcome: "Measurable sell-out growth and reduced returns through EPOS review rhythm.",
    },
    {
      icon: Store,
      title: "Merchandising service",
      description: "Weekly/biweekly store visits by dedicated merchandisers. They fix planogram compliance, OOS, shelf placement, POS setup. Report results in a KPI dashboard: facings, availability, share of shelf.",
      outcome: "Higher compliance, faster restock, and increased velocity via weekly KPI dashboard.",
    },
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services Overview
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end FMCG solutions for Gulf markets
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-border card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6">
                  <Icon size={40} className="text-primary" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-sm font-semibold text-primary mb-2">Outcome:</p>
                  <p className="text-foreground">{service.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
