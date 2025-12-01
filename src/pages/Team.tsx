import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, ShoppingBag, Truck, Megaphone, Shield } from "lucide-react";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      icon: Briefcase,
      role: "Founder & GCC market consultant",
      description: [
        "16+ years building FMCG brands across GCC",
        "Leads GTM design and distributor strategy",
        "Translates growth targets into store-level plans",
      ],
    },
    {
      icon: ShoppingBag,
      role: "Commercial head",
      description: [
        "Senior sales and key accounts leadership",
        "Owns customer strategy and joint business planning",
        "Sets pricing and promo calendar by channel",
      ],
    },
    {
      icon: Truck,
      role: "Supply chain head",
      description: [
        "FMCG supply-chain specialist for GCC",
        "Designs import and last-mile logistics",
        "Implements demand and inventory planning",
      ],
    },
    {
      icon: Megaphone,
      role: "Marketing & category head",
      description: [
        "Brand and shopper marketing lead",
        "Plans activation calendar by market",
        "Owns category reviews and EPOS insights",
      ],
    },
    {
      icon: Shield,
      role: "Quality control manager",
      description: [
        "Food safety and regulatory compliance",
        "Coordinates shelf-life and stability checks",
        "Supports distributors on quality issues",
      ],
    },
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Operator-led GCC team
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A senior bench across commercial, supply chain, marketing and quality — so you're not relying on a single consultant.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
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
                
                <h2 className="text-xl font-bold mb-6">{member.role}</h2>
                
                <ul className="space-y-3">
                  {member.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">→</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Team;
